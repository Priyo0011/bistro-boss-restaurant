import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";
import SectionTitl2 from "../../components/SectionTitl2";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <SectionTitl2
        subHeading="My Cart"
        heading={"WANNA ADD MORE?"}
      ></SectionTitl2>
      <div className="w-[1320px] mx-auto px-32 py-10">
        <div className="bg-white p-8">
          <div className="flex justify-between ml-4 mb-8 items-center">
            <h2 className="text-xl font-bold uppercase">
              Items: {cart.length}
            </h2>
            <h2 className="text-xl font-bold uppercase">
              Total Price: {totalPrice}
            </h2>
            {cart.length>0 ? <Link to="/dashboard/payment">
              <button className="bg-[#D1A054] text-white px-6 py-1 rounded-lg">Pay</button>
            </Link>:
              <button disabled className=" bg-[#D1A054] text-white px-6 py-1 rounded-lg">Pay</button>
            }
          </div>
          <div>
            <table className="table ">
              {/* head */}
              <thead className="bg-[#D1A054] text-white">
                <tr className="uppercase">
                  <th></th>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3 ">
                        <div className="avatar">
                          <div className="mask mask-squircle w-16 h-16">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <th>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="bg-[#B91C1C] p-4 rounded-lg"
                      >
                        <FaTrashAlt className="text-white"></FaTrashAlt>
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
