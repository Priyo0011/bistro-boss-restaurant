import featured from '../../assets/home/featured.jpg'
import SectionTitle from '../SectionTitle';
import './Featured.css';
const Featured = () => {
  return (
    <div className='featured-item'>
      <div className="w-[1320px] mx-auto pt-20 text-white">
      <SectionTitle
        subHeading={"Check it out"}
        heading={"OUR Featured"}
      ></SectionTitle>
      <div className="flex justify-center items-center gap-10">
        <div>
            <img src={featured} alt="" />
        </div>
        <div className="">
            <h3 className="uppercase text-2xl">March 20, 2023</h3>
            <h1 className="uppercase text-3xl">WHERE CAN I GET SOME?</h1>
            <p className='text-xl mb-4 font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
            <button className="btn btn-outline border-0 border-b-4 border-white text-white text-xl font-normal hover:text-[#D99904] uppercase">Read More</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Featured;
