import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar/Navbar'
import { Toaster } from 'react-hot-toast';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hacker',
  description: 'Hacker',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={`${inter.className} bg-gray-800`}>
        <Toaster />
        <Navbar />

        <div className='max-w-7xl mx-auto '>
          {children}
        </div>
      </body>
    </html>

  )
}
