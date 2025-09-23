import Link from "next/link";

export default function NotFound() {
	return (
		<div className="min-h-[60vh] bg-[#0a1220] text-[#e6edf6] grid place-items-center p-6">
			<div className="max-w-2xl">
				<h1 className="text-2xl font-semibold">Pagina niet gevonden</h1>
				<p className="mt-2 text-[#9fb0c5]">De opgevraagde pagina bestaat niet. Controleer het adres of ga terug naar de startpagina.</p>
				<div className="mt-4">
					<Link href="/" className="rounded-md bg-teal-400 px-4 py-2 font-semibold text-black">Naar startpagina</Link>
				</div>
			</div>
		</div>
	);
}
