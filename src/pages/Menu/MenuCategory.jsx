import { Link } from "react-router-dom";
import MenuItem from "../../components/MenuItem";
import MenuName from "./MenuName";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div>
      {title && <MenuName img={img} title={title}></MenuName>}
      <div className="w-[1320px] mx-auto flex flex-col items-center">
        <div className="grid md:grid-cols-2 gap-10 mt-28">
          {items.map((item) => (
            <MenuItem key={item._id} item={item}></MenuItem>
          ))}
        </div>
        <Link to={`/shop/${title}`}>
          <button className="btn btn-outline border-0 border-b-4 e text-xl font-medium hover:text-[#D99904] uppercase my-24">
          ORDER YOUR FOOD
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
