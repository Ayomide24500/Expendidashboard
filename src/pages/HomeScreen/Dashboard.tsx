import React, { useState } from "react";
import MonthlyExpenditure from "../expenditure/MonthlyExpenditure";
import CategoryExpenditure from "../expenditure/CategoryExpenditure";
import RecentTransactions from "../expenditure/RecentTransaction";
import CreateExpenditureModal from "../expenditure/CreateExpenditure";
import { FaBox, FaFileExport, FaPlus, FaTruck } from "react-icons/fa";
import { IoIosAddCircleOutline } from "react-icons/io";
import pic from "../../assets/pro.jpeg";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const menuItems = [
    { icon: <IoIosAddCircleOutline />, text: "Create Order" },
    { icon: <FaBox />, text: "Add Product" },
    { icon: <FaTruck />, text: "Add Supplier" },
    { icon: <FaFileExport />, text: "Export" },
  ];

  return (
    <div className="container mx-auto p-4">
      <div className="flex gap-4 lg:flex-row flex-col">
        <div className="w-[100%]">
          <header className="flex justify-between items-center mb-6">
            <h1 className="lg:text-3xl font-bold">
              School Expenditure Dashboard
            </h1>
            <div>
              <button
                onClick={openModal}
                className="hidden md:inline-block bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-600 transition duration-300"
              >
                Create Expenditure
              </button>
              <button
                onClick={openModal}
                className="md:hidden bg-blue-500 text-white p-2 rounded-full shadow hover:bg-blue-600 transition duration-300"
              >
                <FaPlus />
              </button>
            </div>
          </header>

          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">Total Income</h2>
              <p className="text-2xl">$150,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">Total Expenditure</h2>
              <p className="text-2xl">$100,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold">Remaining Budget</h2>
              <p className="text-2xl">$50,000</p>
            </div>
          </section>
        </div>
      </div>
      <section className="bg-white p-4 rounded-lg shadow mb-6 ">
        <h2 className="text-xl font-semibold mb-4">
          Category-wise Expenditure
        </h2>
        <CategoryExpenditure />
      </section>

      <section className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <RecentTransactions />
      </section>

      {isModalOpen && <CreateExpenditureModal onClose={closeModal} />}
    </div>
  );
}

export default App;
