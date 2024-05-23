const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="card bg-gray-100 shadow-xl">
            <figure className="h-[240px]"><img src={image} alt="Shoes" /></figure>
            <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p className="font-light text-start">{recipe}</p>
                <div className="card-actions justify-end">
                <button className="btn btn-outline border-0 border-b-4 e text-xl font-medium text-[#D99904] hover:text-[#D99904] uppercase bg-white">
                add to cart
          </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;