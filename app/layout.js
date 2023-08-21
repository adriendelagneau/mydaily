import { MenuProvider } from '../context/MenuContext'
import './globals.css'
import { Inter, Roboto, Berkshire_Swash, Crimson_Text, Limelight } from 'next/font/google'
import Sidebar from '../components/Sidebar'
import AuthProvider from '@/components/provider/AuthProvider'
import LayoutProvider from '@/components/provider/LayoutProvider'

const crimsonText = Crimson_Text({ subsets: ['latin'], weight: '400', variable: '--font-crimson' })
const berkshireSwash = Berkshire_Swash({ subsets: ['latin'], weight: '400', variable: '--font-BerkshireSwash' })
const limelight = Limelight({ subsets: ['latin'], weight: '400', variable: '--font-limelight' })

export const metadata = {
  title: 'La Voie de l info',
  description: 'journal de presse, d actualité',
  icons: {
    icon: "/newspepper.ico"
  }
}

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" className={`${crimsonText.variable} ${limelight.variable} `}>
      <body >
        <AuthProvider>
          <MenuProvider>
            <Sidebar />
            <LayoutProvider>
            {children}
            </LayoutProvider>
          </MenuProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
