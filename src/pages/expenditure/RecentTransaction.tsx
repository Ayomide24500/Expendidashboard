import React from "react";

const transactions = [
  {
    date: "2023-06-01",
    description: "Purchase of supplies",
    amount: "$500",
    category: "Supplies",
  },
  {
    date: "2023-06-02",
    description: "Electricity bill",
    amount: "$200",
    category: "Utilities",
  },
  {
    date: "2023-06-03",
    description: "Maintenance",
    amount: "$300",
    category: "Maintenance",
  },
  // Add more transactions as needed...
];

const RecentTransactions = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Date</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Amount</th>
            <th className="py-2 px-4 border-b">Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b text-center">
                {transaction.date}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {transaction.description}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {transaction.amount}
              </td>
              <td className="py-2 px-4 border-b text-center">
                {transaction.category}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentTransactions;
