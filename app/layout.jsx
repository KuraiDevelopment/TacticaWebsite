import './globals.css'

export const metadata = {
  title: 'Tactica Vanilla+ | DayZ Community Server',
  description: 'Survive. Explore. Dominate. Experience DayZ the way it was meant to be played — balanced, brutal, and deeply rewarding.',
  keywords: 'DayZ, DayZ Server, Vanilla+, Survival, Gaming, Chernarus',
  openGraph: {
    title: 'Tactica Vanilla+ | DayZ Community Server',
    description: 'Survive. Explore. Dominate. Experience DayZ the way it was meant to be played.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
