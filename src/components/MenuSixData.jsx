import { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

const MenuSixData = () => {
  const [menu, setMenu] = useState([]);
  const [sixData, setSixData] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("menu.json");
        const jsonMenu = await res.json();
        setMenu(jsonMenu);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMenu();
  }, []);

  useEffect(() => {
    setSixData(menu.slice(0, 6));
  }, [menu]);
  return (
    <section className="w-[1320px] mx-auto mb-24">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"OUR MENU"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 gap-16">
        {sixData.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-14">
        <Link to='/menu'>
          <button className="btn btn-outline border-0 border-b-4 e text-xl font-medium hover:text-[#D99904] uppercase ">
            View Full Menu
          </button>
        </Link>
      </div>
    </section>
  );
};

export default MenuSixData;
