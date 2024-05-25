import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitl2 from "../../components/SectionTitl2";
import Swal from "sweetalert2";
import useMenu from "../../hooks/useMenu";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/menu/${item._id}`);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${item.name} has been deleted`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };
  return (
    <div>
      <SectionTitl2
        subHeading="Hurry Up!"
        heading="MANAGE ALL ITEMS"
      ></SectionTitl2>
      <div className="w-[1320px] mx-auto px-32 py-10">
        <div className="bg-white p-8">
          <div className="flex justify-between ml-4 mb-8 items-center">
            <h2 className="text-xl font-bold uppercase">
              Total items: {menu.length}
            </h2>
          </div>
          <div>
            <table className="table ">
              {/* head */}
              <thead className="bg-[#D1A054] text-white">
                <tr className="uppercase">
                  <th></th>
                  <th>ITEM IMAGE</th>
                  <th>ITEM NAME</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {menu.map((item, index) => (
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
                    <td>
                      <Link to={`/dashboard/updateItem/${item._id}`}>
                        <button className="bg-[#D1A054] p-4 rounded-lg">
                          <FaEdit className="text-white text-lg"></FaEdit>
                        </button>
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteItem(item)}
                        className="bg-[#B91C1C] p-4 rounded-lg"
                      >
                        <FaTrashAlt className="text-white"></FaTrashAlt>
                      </button>
                    </td>
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

export default ManageItems;
