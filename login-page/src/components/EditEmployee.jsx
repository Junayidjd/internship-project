
import React, { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EmployeeContext } from '../EmployeeContext'; // Adjust the path as needed

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { employees, editEmployee } = useContext(EmployeeContext);
  
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    course: [],
    image: '',
  });

  useEffect(() => {
    const emp = employees.find(emp => emp.id === parseInt(id));
    if (emp) {
      setEmployee(emp);
    }
  }, [id, employees]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const updatedCourses = checked
      ? [...employee.course, value]
      : employee.course.filter((course) => course !== value);

    setEmployee({ ...employee, course: updatedCourses });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedEmployee = { ...employee, id: parseInt(id) }; // Ensure ID is included
    editEmployee(updatedEmployee); // Call the context's editEmployee
    navigate('/employees'); // Redirect to the employees list
  };

  return (
    <div className="font-sans p-6">
      <header className="flex justify-between bg-gray-100 p-4 border-b border-gray-300">
        <div className="font-bold text-xl">Logo</div>
        <nav className="flex gap-4">
          <a href="/" className="text-blue-600 hover:underline">Home</a>
          <a href="/employees" className="text-blue-600 hover:underline">Employee List</a>
          <span className="text-gray-800">Hukum Gupta</span>
          <a href="/logout" className="text-red-600 hover:underline">Logout</a>
        </nav>
      </header>

      <main className="mt-6 w-3/5 mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Edit Employee</h2>
        <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block mb-1 font-medium">Name:</label>
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Email:</label>
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Mobile No:</label>
            <input
              type="text"
              name="mobile"
              value={employee.mobile}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Designation:</label>
            <select
              name="designation"
              value={employee.designation}
              onChange={handleChange}
              className="border border-gray-300 rounded p-2 w-full"
            >
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sales">Sales</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Gender:</label>
            <label className="mr-4">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={employee.gender === 'Male'}
                onChange={handleChange}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={employee.gender === 'Female'}
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Course:</label>
            <div className="flex gap-4">
              <label>
                <input
                  type="checkbox"
                  value="MCA"
                  checked={employee.course.includes('MCA')}
                  onChange={handleCheckboxChange}
                />
                MCA
              </label>
              <label>
                <input
                  type="checkbox"
                  value="BCA"
                  checked={employee.course.includes('BCA')}
                  onChange={handleCheckboxChange}
                />
                BCA
              </label>
              <label>
                <input
                  type="checkbox"
                  value="BSC"
                  checked={employee.course.includes('BSC')}
                  onChange={handleCheckboxChange}
                />
                BSC
              </label>
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Image Upload:</label>
            <input
              type="file"
              name="image"
              onChange={(e) => setEmployee({ ...employee, image: URL.createObjectURL(e.target.files[0]) })}
              className="border border-gray-300 rounded p-2"
            />
            {employee.image && (
              <img
                src={employee.image}
                alt="Employee"
                className="mt-2 w-24 h-24 rounded"
              />
            )}
          </div>

          <button type="submit" className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600 transition duration-200">
            Update
          </button>
        </form>
      </main>
    </div>
  );
};

export default EditEmployee;