import './globals.css'
import { Inter } from 'next/font/google'
import Nav from "./components/menu"
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Curriculun Farlen',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}><Nav/>{children}</body>
    </html>
  )
}