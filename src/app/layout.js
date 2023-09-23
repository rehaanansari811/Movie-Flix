import './globals.css'
import { Mulish } from 'next/font/google'
import Header from "@/app/components/Header";
import Footer from './components/Footer';


const mulish = Mulish({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Movie Flix',
  description: 'Created by Rehaan Ansari',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
