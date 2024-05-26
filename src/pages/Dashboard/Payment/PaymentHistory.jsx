import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import SectionTitl2 from "../../../components/SectionTitl2";

const PaymentHistory = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <SectionTitl2
        subHeading="At a Glance!"
        heading="PAYMENT HISTORY"
      ></SectionTitl2>
      <div className="w-[1320px] mx-auto px-32 py-10">
        <div className="bg-white p-8">
          <div className="flex justify-between ml-4 mb-8 items-center">
            <h2 className="text-xl font-bold uppercase">
              Total Payments: {user.length}
            </h2>
          </div>
          <div>
            <table className="table ">
              {/* head */}
              <thead className="bg-[#D1A054] text-white">
                <tr className="uppercase">
                  <th></th>
                  <th>Email</th>
                  <th>price</th>
                  <th>Transaction Id</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment, index) => (
                  <tr key={payment._id}>
                    <th>{index + 1}</th>
                    <td>{payment.email}</td>
                    <td>${payment.price}</td>
                    <td>{payment.transactionId}</td>
                    <td>{payment.status}</td>
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

export default PaymentHistory;
