import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import Category from "../../components/Category";
import Featured from "../../components/Featured/Featured";
import Testimonials from "../../components/Testimonials";
import Info from "../../components/info/Info";
import MenuSixData from "../../components/MenuSixData";


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>bistro boss restaurant | home</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <Info></Info>
      <MenuSixData></MenuSixData>
      <Featured></Featured>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
