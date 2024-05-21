

const MenuName = ({img,title}) => {
    return (
        <div
      className="hero h-[600px]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="bg-opacity-40 bg-black text-white w-[1320px] h-[300px] text-center">
        <h1 className="text-7xl font-bold mt-28 uppercase">{title}</h1>
      </div>
    </div>
    );
};

export default MenuName;