import AboveBar from '../../components/AboveBar';
import { Josefin_Sans } from "next/font/google";
import './globals.css';
import BottomNavBar from '../../components/BottomNavBar';
import Promotional  from '../../components/Promotional';
import FetauredProduct from '../../components/FetauredProduct';
import LeatestProduct from '../../components/LeatestProduct';
import Offers from '../../components/Offers';
import UniqueFeature from '../../components/UniqueFeature';

const josefin = Josefin_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div >
    <AboveBar/>
    <BottomNavBar/>
    <Promotional/>
    <FetauredProduct/>
    <LeatestProduct/>
    <Offers/>
    <UniqueFeature/>
    </div>
  )
}
