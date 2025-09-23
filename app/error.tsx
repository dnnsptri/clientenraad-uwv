"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<html lang="nl">
			<body className="min-h-screen bg-[#0a1220] text-[#e6edf6]">
				<div className="mx-auto max-w-2xl p-6">
					<h1 className="text-2xl font-semibold">Er ging iets mis</h1>
					<p className="mt-2 text-[#9fb0c5]">De pagina kon niet worden geladen. Probeer het opnieuw of ga terug naar de startpagina.</p>
					<div className="mt-4 flex gap-3">
						<button onClick={() => reset()} className="rounded-md bg-teal-400 px-4 py-2 font-semibold text-black">Opnieuw proberen</button>
						<Link href="/" className="rounded-md border border-white/20 px-4 py-2">Naar startpagina</Link>
					</div>
					{error?.digest && (
						<p className="mt-4 text-xs text-[#9fb0c5]">Foutcode: {error.digest}</p>
					)}
				</div>
			</body>
		</html>
	);
}
