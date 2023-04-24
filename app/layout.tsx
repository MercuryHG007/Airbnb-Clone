import { Nunito } from 'next/font/google'

import './globals.css'

import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'

import RegisterModal from './components/modals/RegisterModal'
import LoginModal from './components/modals/LoginModal'
import RentModal from './components/modals/RentModal'

import ToasterProvider from './providers/ToasterProvider'
import getCurrentUser from './actions/getCurrentUser'

export const metadata = {
  title: 'Mercurybnb | Holiday Homes & Apartment Rentals',
  description: 'A Airbnb clone by Mercury',
}

const font = Nunito({
  subsets: ["latin"]
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()
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
          <ToasterProvider />
          <RentModal />
          <LoginModal />
          <RegisterModal />
          <Navbar
            currentUser = {currentUser}
          />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
