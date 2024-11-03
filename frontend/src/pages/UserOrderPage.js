import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const UserOrderPage = () => {
  const url = process.env.REACT_APP_BACKEND_URL;
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem("authToken");
  const { id } = useParams();

  useEffect(() => {
    const fetchOrders = async (user_id) => {
      try {
        const response = await axios.post(
          `${url}api/showOrder`,
          { id: user_id },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrders(response.data);
        console.log("orders:", response.data);
      } catch (error) {
        console.error("order not found:", error);
      }
    };
    fetchOrders(id);
  }, [id, token, url]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center">
      {orders.length === 0 ? (
        <div className="text-gray-600 text-lg font-medium mt-4">
          No orders found for this user.
        </div>
      ) : (
        <div className="w-full max-w-6xl px-6">
          <table className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="px-6 py-3 text-left font-semibold uppercase text-sm">Address ID</th>
                <th className="px-6 py-3 text-left font-semibold uppercase text-sm">Total</th>
                <th className="px-6 py-3 text-left font-semibold uppercase text-sm">Status</th>
                <th className="px-6 py-3 text-left font-semibold uppercase text-sm">Created At</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t border-gray-200">
                  <td className="px-6 py-4 text-gray-700">{order.address_id}</td>
                  <td className="px-6 py-4 text-gray-700">${order.total}</td>
                  <td className="px-6 py-4 text-gray-700">
                    <span
                      className={`px-3 py-1 inline-flex text-sm font-medium rounded-full ${
                        order.status === "completed"
                          ? "bg-green-100 text-green-600"
                          : order.status === "pending"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">
                    {new Date(order.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserOrderPage;
