import AboveBar from "./components/AboveBar";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import BottomNavBar from "./components/BottomNavBar";
import Promotional from "./components/Promotional";
import FetauredProduct from "./components/FetauredProduct";
import LeatestProduct from "./components/LeatestProduct";
import Offers from "./components/Offers";
import UniqueFeature from "./components/UniqueFeature";
import Heropromo from "./components/Heroprom";
import TrendingProducts from "./components/TrendingProducts";
import DiscountItem from "./components/DiscountItem";
import TopCategory from "./components/TopCategory";
import LeatestUpdate from "./components/LeatestUpdate";
import Image from "next/image";
import List from "./components/List";
import LeatestBlog from "./components/LeatestBlog";
import CardBlog from "./components/CardBlog";
import Abovefooter from "./components/footter/AboveFooter";
import Bottomfooter from "./components/footter/Bottomfooter";

const josefin = Josefin_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <AboveBar />
      <BottomNavBar />
      <Heropromo />
      <FetauredProduct />
      <LeatestProduct />
      <Offers />
      <UniqueFeature />
      <TrendingProducts />
      <DiscountItem />
      <TopCategory />
      <LeatestUpdate />
      <List />
      <LeatestBlog />
      <Abovefooter/>
      <Bottomfooter/>
    </div>
  );
}
