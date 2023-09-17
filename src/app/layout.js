
import BottomNavBar from "@/components/BottomNavBar";
import AboveBar from "@/components/AboveBar";
import "./globals.css";
import List from "@/components/List";
import Abovefooter from "@/components/footter/AboveFooter";
import Bottomfooter from "@/components/footter/Bottomfooter";


export const metadata = {
  title: 'housefurniture',
  description: 'E-commerce',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        

        </body>
    </html>
  )
}
