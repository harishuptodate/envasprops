// Server component: reads process.env (restart needed) and runtime file (no restart).
export const dynamic = 'force-dynamic'; // ensure it's never statically optimized

import { readRuntimeJSON } from '@/lib/readConfig';
import ClientEnv from './ClientEnv';

export default async function ServerEnv() {
	const now = new Date().toISOString();

	// 1) process.env — only changes if you restart the process/container (no rebuild needed)
	const serverSecret = process.env.SERVER_SECRET ?? 'UNDEFINED';

	// 2) Client-side env from server (restart needed, no rebuild!)
	const clientLabel = process.env.CLIENT_LABEL ?? 'UNDEFINED';

	// 3) runtime file — changes are reflected immediately (no rebuild, no restart)
	const cfg = await readRuntimeJSON();
	const runtimeMessage = String(cfg.MESSAGE ?? 'NO_MESSAGE');
	const runtimeNumber = String(cfg.COUNTER ?? 'NO_COUNTER');

	return (
		<>
			{/* Pass server-side env to client component as props */}
			<ClientEnv clientLabel={clientLabel} />

			<div className="rounded-md border p-3 mt-4">
				<h3>Server Component</h3>
				<p>
					<b>Timestamp</b>: {now}
				</p>
				<p>
					<b>process.env.SERVER_SECRET</b>:{' '}
					<span className="text-blue-500">{serverSecret}</span>{' '}
				</p>
				<p>
					<b>runtime.json.MESSAGE</b>:{' '}
					<span className="text-blue-500">{runtimeMessage}</span>{' '}
				</p>
				<p>
					<b>runtime.json.COUNTER</b>:{' '}
					<span className="text-blue-500">{runtimeNumber}</span>{' '}
				</p>
				<p>
					(Edit <code>/app/config/runtime.json</code> inside the container and
					refresh.)
				</p>
			</div>
		</>
	);
}
