'use client'
import BottomNavBar from "@/components/BottomNavBar";
import AboveBar from "@/components/AboveBar";
import "./globals.css";
import List from "@/components/List";
import Abovefooter from "@/components/footter/AboveFooter";
import Bottomfooter from "@/components/footter/Bottomfooter";
import { ShopContextProvider } from '@/context/shop-context'


export const metadata = {
  title: 'housefurniture',
  description: 'E-commerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <ShopContextProvider>
        {children}
        </ShopContextProvider>

        </body>
    </html>
  )
}
