import AboveBar from '../../components/AboveBar';
import { Josefin_Sans } from "next/font/google";
import './globals.css';
import BottomNavBar from '../../components/BottomNavBar';
import { Promotional } from '../../components/Promotional';

const josefin = Josefin_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
    <AboveBar/>
    <BottomNavBar/>
    <Promotional/>
    </div>
  )
}
