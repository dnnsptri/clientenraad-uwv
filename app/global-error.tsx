'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-bold text-red-500">
                Fout
              </h1>
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900">
                  Er is een kritieke fout opgetreden
                </h2>
                <p className="text-lg text-neutral-700">
                  Er is een onverwachte fout opgetreden. Probeer de pagina te verversen.
                </p>
              </div>
              <div className="pt-6">
                <button
                  onClick={reset}
                  className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
                >
                  Probeer opnieuw
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
