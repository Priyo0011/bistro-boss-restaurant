const Cover = ({ img,title,pra }) => {
  return (
    <div
      className="hero h-[800px]"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="bg-opacity-40 bg-black text-white w-[1320px] h-[450px] text-center mt-[90px]">
        <h1 className="text-7xl font-bold mt-40 uppercase">{title}</h1>
        <p className=" text-2xl mt-8 uppercase">{pra}</p>
      </div>
    </div>
  );
};

export default Cover;
