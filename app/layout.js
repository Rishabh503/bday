import './globals.css'

export const metadata = {
  title: 'Happy 20th Birthday! 🎉',
  description: 'A special birthday celebration website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100">
        {children}
      </body>
    </html>
  )
}