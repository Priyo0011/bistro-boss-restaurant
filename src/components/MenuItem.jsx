

const MenuItem = ({item}) => {
    const {name,image,price,recipe} =item ;
    return (
        <div className="flex space-x-4 ">
            <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[100px]" src={image} alt="" />
            <div>
                <h3 className="uppercase font-bold">{name}</h3>
                <p>{recipe}</p>
            </div>
            <p className="text-[#D99904] flex-1 text-right">${price}</p>
        </div>
    );
};

export default MenuItem;