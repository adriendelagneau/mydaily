import { MenuProvider } from '../context/MenuContext'
import './globals.css'
import { Inter, Roboto, Berkshire_Swash, Crimson_Text } from 'next/font/google'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import AuthProvider from '@/components/AuthProvider/AuthProvider'
import Footer from '@/components/Footer'


const crimsonText = Crimson_Text({ subsets: ['latin'], weight: '400', variable: '--font-crimson' })

const berkshireSwash = Berkshire_Swash({ subsets: ['latin'], weight: '400', variable: '--font-BerkshireSwash' })

export const metadata = {
  title: 'La Voie de l info',
  description: 'journal de presse, d actualité',
  icons: {
    icon: "/newspepper.ico"
  }
}



export default function RootLayout({ children }) {


  return (
    <html lang="en" className={`${crimsonText.variable} ${berkshireSwash.variable} `}>
      <body >
        <AuthProvider>
          <MenuProvider>
            <Navbar />
            <Sidebar />
            {children}
            <Footer />
          </MenuProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
