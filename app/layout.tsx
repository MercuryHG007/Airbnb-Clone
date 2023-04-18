import { Nunito } from 'next/font/google'

import './globals.css'

import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'

export const metadata = {
  title: 'Mercurybnb | Holiday Homes & Apartment Rentals',
  description: 'A Airbnb clone by Mercury',
}

const font = Nunito({
  subsets: ["latin"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={font.className}
      >
        {/* 
          ClientOnly FUNCTION SOLVES THE 
          PURPOSE OF ELEMINATING PROBLEMS 
          OF HYDRATION CAUSED BY CLIENT 
          COMPONENTS.
        */}
        <ClientOnly>
          <Navbar />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
