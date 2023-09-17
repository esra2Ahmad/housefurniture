

import "./globals.css";
import AboveBar from "../components/AboveBar";
import BottomNavBar from "../components/BottomNavBar";
import FetauredProduct from "../components/FetauredProduct";
import LeatestProduct from "../components/LeatestProduct";
import Offers from "../components/Offers";
import UniqueFeature from "../components/UniqueFeature";
import Heropromo from "../components/Heroprom";
import TrendingProducts from "../components/TrendingProducts";
import DiscountItem from "../components/DiscountItem";
import TopCategory from "../components/TopCategory";
import LeatestUpdate from "../components/LeatestUpdate";
import List from "../components/List";
import LeatestBlog from "../components/LeatestBlog";
import Abovefooter from "../components/footter/AboveFooter";
import Bottomfooter from "../components/footter/Bottomfooter";



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
