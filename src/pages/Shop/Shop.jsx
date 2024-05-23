import { Helmet } from "react-helmet-async";
import shopImg from "../../assets/shop/banner2.jpg";
import Cover from "../Menu/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../hooks/useMenu";
import ShopTab from "./ShopTab";
import { useParams } from "react-router-dom";

const Shop = () => {
  const categories = [
    "salad",
    "pizza",
    "soup",
    "dessert",
    "drinks",
    "popular",
    "offered",
  ];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  const popular = menu.filter((item) => item.category === "popular");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>bistro boss | shop</title>
      </Helmet>
      <Cover
        img={shopImg}
        title="OUR SHOP"
        pra="Would you like to try a dish?"
      ></Cover>
      <div className="text-center mt-20 w-[1320px] mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
            <Tab>popular</Tab>
            <Tab>offered</Tab>
          </TabList>
          <TabPanel>
            <ShopTab items={salad}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={pizza}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={soup}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={dessert}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={drinks}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={popular}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={offered}></ShopTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
