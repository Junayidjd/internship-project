
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { EmployeeContext } from "../EmployeeContext"; // Adjust the path as needed

const EmployeeList = () => {
  const { employees, deleteEmployee } = useContext(EmployeeContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);
  const [sortConfig, setSortConfig] = useState({
    key: "id",
    direction: "ascending",
  });

  const handleDelete = (id) => {
    deleteEmployee(id);
    alert("Employee deleted successfully!");
  };

  const filteredEmployees = employees.filter(
    (emp) =>
      emp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedEmployees = filteredEmployees.sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === "ascending" ? 1 : -1;
    }
    return 0;
  });

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = sortedEmployees.slice(
    indexOfFirstEmployee,
    indexOfLastEmployee
  );

  const handleSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="container mx-auto p-6 overflow-x-hidden">
      <header className="flex justify-between items-center bg-gray-200 p-4 rounded-lg shadow-lg">
        <div className="font-bold text-2xl text-blue-700">Employee Management</div>
        <nav className="space-x-4">
          <Link to="/" className="text-blue-600 hover:underline">Home</Link>
          <Link to="/employees" className="text-blue-600 hover:underline">Employee List</Link>
          <span className="text-gray-800">Hukum Gupta</span>
          <Link to="/logout" className="text-red-600 hover:underline">Logout</Link>
        </nav>
      </header>

      <main className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Employee List</h2>

        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Search by Name or Email"
            className="border border-gray-300 rounded px-4 py-2 flex-grow transition-transform transform focus:outline-none focus:ring focus:ring-blue-500 focus:scale-105"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-blue-500 text-white rounded px-4 py-2 ml-2 hover:bg-blue-600 transition-all duration-200 transform hover:scale-105"
            onClick={() => setCurrentPage(1)} // Reset to first page on search
          >
            Search
          </button>
        </div>

        <div className="flex items-center mb-4">
          <Link to="/create-employee">
            <button className="bg-green-500 text-white rounded px-4 py-2 mr-4 hover:bg-green-600 transition-all duration-200 transform hover:scale-105">
              Create Employee
            </button>
          </Link>
          <p className="text-gray-700">
            Total Employees: <span className="font-bold">{filteredEmployees.length}</span>
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-300 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("id")}>Unique ID</th>
                <th className="py-3 px-6">Image</th>
                <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("name")}>Name</th>
                <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("email")}>Email</th>
                <th className="py-3 px-6">Mobile No</th>
                <th className="py-3 px-6">Designation</th>
                <th className="py-3 px-6">Gender</th>
                <th className="py-3 px-6">Course</th>
                <th className="py-3 px-6 cursor-pointer" onClick={() => handleSort("createDate")}>Create Date</th>
                <th className="py-3 px-6">Action</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {currentEmployees.map((emp) => (
                <tr key={emp.id} className="border-b hover:bg-gray-300 transition duration-150 transform hover:scale-95 shadow-md hover:shadow-md">
                  <td className="py-3 px-6">{emp.id}</td>
                  <td className="py-3 px-6">
                    <img src={emp.image} alt={`${emp.name}'s avatar`} className="w-10 h-10 rounded-full" />
                  </td>
                  <td className="py-3 px-6">{emp.name}</td>
                  <td className="py-3 px-6">{emp.email}</td>
                  <td className="py-3 px-6">{emp.mobile}</td>
                  <td className="py-3 px-6">{emp.designation}</td>
                  <td className="py-3 px-6">{emp.gender}</td>
                  <td className="py-3 px-6">{emp.course.join(", ")}</td>
                  <td className="py-3 px-6">{emp.createDate}</td>
                  <td className="py-3 px-6 flex space-x-2">
                    <Link to={`/edit-employee/${emp.id}`}>
                      <button className="bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-600 transition duration-200 transform hover:scale-105">
                        Edit
                      </button>
                    </Link>
                    <button
                      className="bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600 transition duration-200 transform hover:scale-105"
                      onClick={() => handleDelete(emp.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
            className={`bg-blue-500 text-white rounded px-4 py-2 transition-all duration-200 ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Previous
          </button>
          <span className="font-semibold">
            Page {currentPage} of {Math.ceil(filteredEmployees.length / employeesPerPage)}
          </span>
          <button
            disabled={currentPage === Math.ceil(filteredEmployees.length / employeesPerPage)}
            onClick={() => setCurrentPage(currentPage + 1)}
            className={`bg-blue-500 text-white rounded px-4 py-2 transition-all duration-200 ${currentPage === Math.ceil(filteredEmployees.length / employeesPerPage) ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Next
          </button>
        </div>
      </main>
    </div>
  );
};

export default EmployeeList;