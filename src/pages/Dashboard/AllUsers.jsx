import { FaTrashAlt } from "react-icons/fa";
import SectionTitl2 from "../../components/SectionTitl2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaUsers } from "react-icons/fa6";
import Swal from "sweetalert2";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleMakeAdmin = user =>{
    axiosSecure.patch(`/users/admin/${user._id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.modifiedCount > 0){
            refetch();
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is an Admin Now!`,
                showConfirmButton: false,
                timer: 1500
              });
        }
    })
}

  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
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
        subHeading="How many"
        heading={"MANAGE ALL USERS"}
      ></SectionTitl2>
      <div className="w-[1320px] mx-auto px-32 py-10">
        <div className="bg-white p-8">
          <div className="flex justify-between ml-4 mb-8 items-center">
            <h2 className="text-xl font-bold uppercase">
              Total users: {users.length}
            </h2>
          </div>
          <div>
            <table className="table ">
              {/* head */}
              <thead className="bg-[#D1A054] text-white">
                <tr className="uppercase">
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      { user.role === 'admin' ? 'Admin' : <button
                      onClick={() => handleMakeAdmin(user)}
                      className="bg-[#D1A054] p-4 rounded-lg">
                        <FaUsers className="text-white text-lg"></FaUsers>
                      </button>}
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteUser(user)}
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

export default AllUsers;
