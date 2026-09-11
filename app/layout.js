import './globals.css'

export const metadata = {
  title: 'Antony Muriithi - Web Developer & Network Engineer',
  description: 'Portfolio of Antony Muriithi (Griezzy), a web developer and network engineer based in Nairobi, Kenya.',
  keywords: 'web developer, network engineer, CCNA, Kenya, Nairobi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}