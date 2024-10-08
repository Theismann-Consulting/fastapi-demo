import '../index.css'
import type { Metadata } from 'next'
import { ThemeProvider } from '@mui/material/styles'
import { Roboto } from 'next/font/google'
import theme from '../theme'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: 'React App',
  description: 'Web site created with Next.js.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <div id="root">
          <ThemeProvider theme={theme}>
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  )
}