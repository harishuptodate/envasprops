// "use client";
// export default  function Home() {
//   try {
//     const username = process.env.NEXT_PUBLIC_API_USERNAME
//     const url = process.env.NEXT_PUBLIC_API_URL
//     if (!url) {
//       throw new Error('API_URL is not set')
//     }
//     if (!username) {
//       throw new Error('API_USERNAME is not set')
//     }
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <h1 className="text-4xl font-bold">Client Side</h1>
//         <p>Username: {username}</p>
//         <p>URL: {url}</p>
//       </main>
//     </div>
//   )
//   } catch (error) {
//     return <div>Error: {(error as Error).message}</div>
//   }
// }
///////
import ServerEnv from './components/ServerEnv';

export const dynamic = 'force-dynamic';

export default function Page() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
				<h2>Next.js Runtime vs Build-time Env PoC</h2>
				<p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
					✨ All environment variables now update on container restart - no
					rebuild needed!
				</p>

				{/* ServerEnv renders ClientEnv internally and passes env as props */}
				<ServerEnv />
			</main>
		</div>
	);
}
