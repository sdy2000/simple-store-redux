import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <Link
        className="head-account-btn bg-blue-700 text-white text-lg"
        to="/admin/add-product"
      >
        Add New Product
      </Link>
    </div>
  );
}
export default Dashboard;
