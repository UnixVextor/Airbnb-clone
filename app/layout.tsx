import { Nunito } from 'next/font/google'

// css globals
import './globals.css'

import ClientOnly from './components/ClientOnly'
import Navbar from './components/navbar/Navbar'
import RegisterModal from './components/modal/RegisterModal'
import ToasterProvider from './providers/ToasterProvider'
import LoginModal from './components/modal/LoginModal'
import getCurrentUsesr from './actions/getCurrentUser'

const font = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  const currentUser = await getCurrentUsesr();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal/>
          <RegisterModal />
          <Navbar currentUser={currentUser}/>
        </ClientOnly>
        {children}
        </body>
    </html>
  )
}
