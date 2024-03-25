import AboveBar from "@/pagesComponents/AboveBar";
import "./globals.css";
import BottomNavBar from "@/pagesComponents/BottomNavBar";
import Heropromo from "@/pagesComponents/HeroPromo";
import FetauredProduct from "@/pagesComponents/FeatureProducts";
import LeatestProduct from "@/pagesComponents/LeatestProduct";
import Offers from "@/pagesComponents/Offers";
import UniqueFeature from "@/pagesComponents/UniqueFeature";
import TrendingProducts from "@/pagesComponents/TrendingProducts";
import DiscountItem from "@/pagesComponents/DiscountItem";
import TopCategory from "@/pagesComponents/TopCategory";
import LeatestUpdate from "@/pagesComponents/LeatestUpdate";
import List from "@/pagesComponents/List";
import LeatestBlog from "@/pagesComponents/LeatestBlog";
import Abovefooter from "@/pagesComponents/AboveFooter";
import Bottomfooter from "@/pagesComponents/BottomFooter";


export default function Home() {
  return (
    <div>
      <AboveBar />
      <BottomNavBar />
      <Heropromo />
      <FetauredProduct/>
      <LeatestProduct/>
      <Offers/>
      <UniqueFeature/>
      <TrendingProducts/>
      <DiscountItem/>
      <TopCategory/>
      <LeatestUpdate/>
      <List/>
      <LeatestBlog/>
      <Abovefooter/>
      <Bottomfooter/>
    </div>
  );
}
