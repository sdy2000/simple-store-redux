import { getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productRef } from "../../services";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

function Dashboard() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getDocs(productRef).then((snapshot) => {
      if (snapshot.empty) {
        setError("No Recipe To Load ...!");
        setIsLoading(false);
      } else {
        let result = [];
        snapshot.docs.forEach((doc) => {
          result.push({ id: doc.id, ...doc.data() });
        });
        setData(result);
        setIsLoading(false);
      }
    });
  }, []);

  const renderStars = (rating) => {
    const maxStars = 5;
    const filledStars = Math.round((rating.rate / maxStars) * 5);
    const emptyStars = maxStars - filledStars;

    return (
      <div className="flex justify-center items-center gap-3">
        <span className="flex">
          {Array.from({ length: filledStars }, (_, index) => (
            <AiFillStar key={index} className="text-yellow-400" />
          ))}
          {Array.from({ length: emptyStars }, (_, index) => (
            <AiOutlineStar key={index} className="text-gray-300" />
          ))}
        </span>
        <span>{rating.count}</span>
      </div>
    );
  };

  return (
    <div className="container py-20 flex flex-col gap-4 justify-start">
      <Link
        className="head-account-btn bg-blue-700 text-white text-lg w-48"
        to="/admin/add-product"
      >
        Add New Product
      </Link>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product Image
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Rate
              </th>
              <th
                scope="col"
                className="px-6 py-3 flex justify-center items-center"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.map((pro, idx) => (
              <tr className="bg-white border-b hover:bg-gray-50" key={idx}>
                <td className="px-4">
                  <Link to={`/admin/detail-product/${pro.id}`}>
                    <img
                      className="w-16 h-16 rounded-full object-contain"
                      src={pro.image}
                      alt={pro.title}
                    />
                  </Link>
                </td>
                <td>
                  <Link to={`/admin/detail-product/${pro.id}`}>
                    {pro.title}
                  </Link>
                </td>
                <td>{pro.category}</td>
                <td>{pro.price}</td>
                <td>{renderStars(pro.rating)}</td>
                <td className="px-6 py-8 flex justify-center items-center gap-4">
                  <Link
                    to={`/admin/edit-product/${pro.id}`}
                    className="font-bold rounded-xl shadow-lg px-5 py-1 hover:scale-110 duration-300 text-white bg-blue-600 hover:underline"
                  >
                    Edit
                  </Link>
                  <Link
                    to={`/admin/delete-product/${pro.id}`}
                    className="font-bold rounded-xl shadow-lg px-5 py-1 hover:scale-110 duration-300 text-white bg-red-600 hover:underline"
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Dashboard;
