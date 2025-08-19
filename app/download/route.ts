import { NextRequest, NextResponse } from 'next/server'
import { generateReportPdf } from '@/lib/pdf'

/**
 * Download route for the annual report PDF
 */
export async function GET(request: NextRequest) {
  try {
    // Generate PDF (placeholder for now)
    const result = await generateReportPdf()
    
    if (!result.success) {
      return NextResponse.json(
        { error: 'PDF generation failed' },
        { status: 500 }
      )
    }

    // For now, return a placeholder response
    // In production, this would return the actual PDF file
    const response = new NextResponse(
      'PDF download initiated. Content prepared for designer.',
      {
        status: 200,
        headers: {
          'Content-Type': 'text/plain',
          'Content-Disposition': 'attachment; filename="UWV-Cliëntenraad-Jaarverslag-2024.txt"',
        },
      }
    )

    return response
  } catch (error) {
    console.error('Download error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}