'use client';

interface ClientEnvProps {
	clientLabel: string;
}

export default function ClientEnv({ clientLabel }: ClientEnvProps) {
	// Now receives env as props from server component
	// No build-time NEXT_PUBLIC_* needed!
	return (
		<div className="rounded-md border p-3">
			<h3>Client Component</h3>
			<p>
				<b>CLIENT_LABEL (from server props)</b>:{' '}
				<span className="text-blue-500">{clientLabel}</span>{' '}
			</p>
			<p>
				(This value comes from the server at runtime—restart container to
				update, no rebuild needed!)
			</p>
		</div>
	);
}
