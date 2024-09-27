// import React, { useState } from 'react';

// const CreateEmployee = () => {
//   const [employee, setEmployee] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     designation: '',
//     gender: '',
//     course: [],
//     image: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEmployee({ ...employee, [name]: value });
//   };

//   const handleCheckboxChange = (e) => {
//     const { value, checked } = e.target;
//     const updatedCourses = checked
//       ? [...employee.course, value]
//       : employee.course.filter((course) => course !== value);

//     setEmployee({ ...employee, course: updatedCourses });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setEmployee({ ...employee, image: reader.result });
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('New Employee:', employee);
//     // Reset form after submission
//     setEmployee({
//       name: '',
//       email: '',
//       mobile: '',
//       designation: '',
//       gender: '',
//       course: [],
//       image: '',
//     });
//   };

//   return (
//     <div className="font-sans p-6">
//       {/* Header Section */}
//       <header className="flex justify-between bg-gray-100 p-4 border-b border-gray-300">
//         <div className="font-bold text-xl">Logo</div>
//         <nav className="flex gap-4">
//           <a href="/" className="text-blue-600 hover:underline">Home</a>
//           <a href="/employees" className="text-blue-600 hover:underline">Employee List</a>
//           <span className="text-gray-800">Hukum Gupta</span>
//           <a href="/logout" className="text-red-600 hover:underline">Logout</a>
//         </nav>
//       </header>

//       {/* Create Employee Form */}
//       <main className="mt-6">
//         <h2 className="text-2xl font-semibold mb-4">Create New Employee</h2>
//         <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg shadow-md">
//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Name:</label>
//             <input
//               type="text"
//               name="name"
//               value={employee.name}
//               onChange={handleChange}
//               required
//               className="border border-gray-300 rounded p-2 w-full"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={employee.email}
//               onChange={handleChange}
//               required
//               className="border border-gray-300 rounded p-2 w-full"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Mobile No:</label>
//             <input
//               type="text"
//               name="mobile"
//               value={employee.mobile}
//               onChange={handleChange}
//               required
//               className="border border-gray-300 rounded p-2 w-full"
//             />
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Designation:</label>
//             <select
//               name="designation"
//               value={employee.designation}
//               onChange={handleChange}
//               className="border border-gray-300 rounded p-2 w-full"
//             >
//               <option value="">Select</option>
//               <option value="HR">HR</option>
//               <option value="Manager">Manager</option>
//               <option value="Sales">Sales</option>
//             </select>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Gender:</label>
//             <label className="mr-4">
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Male"
//                 checked={employee.gender === 'Male'}
//                 onChange={handleChange}
//               />
//               Male
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="gender"
//                 value="Female"
//                 checked={employee.gender === 'Female'}
//                 onChange={handleChange}
//               />
//               Female
//             </label>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1 font-medium">Course:</label>
//             <div className="flex gap-4">
//               <label>
//                 <input
//                   type="checkbox"
//                   value="MCA"
//                   checked={employee.course.includes('MCA')}
//                   onChange={handleCheckboxChange}
//                 />
//                 MCA
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   value="BCA"
//                   checked={employee.course.includes('BCA')}
//                   onChange={handleCheckboxChange}
//                 />
//                 BCA
//               </label>
//               <label>
//                 <input
//                   type="checkbox"
//                   value="BSC"
//                   checked={employee.course.includes('BSC')}
//                   onChange={handleCheckboxChange}
//                 />
//                 BSC
//               </label>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block mb-1">Image:</label>
//             <input
//               type="file"
//               accept="image/*"
//               onChange={handleImageChange}
//               className="border p-2 w-full"
//             />
//           </div>

//           <button
//             type="submit"
//             className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600 transition duration-200"
//           >
//             Submit
//           </button>
//         </form>
//       </main>
//     </div>
//   );
// };

// export default CreateEmployee;



































import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import { EmployeeContext } from '../EmployeeContext'; // Adjust the path as needed

const CreateEmployee = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    mobile: '',
    designation: '',
    gender: '',
    course: [],
    image: '',
  });
  const [imagePreview, setImagePreview] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEmployee({ ...employee, image: reader.result });
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEmployee(employee);
    // Reset form after submission
    setEmployee({
      name: '',
      email: '',
      mobile: '',
      designation: '',
      gender: '',
      course: [],
      image: '',
    });
    setImagePreview('');
    navigate('/employees'); // Redirect to EmployeeList page
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

      <main className="mt-6">
        <h2 className="text-2xl font-semibold mb-4">Create New Employee</h2>
        <form onSubmit={handleSubmit} className="bg-white p-5 rounded-lg shadow-md">
          {/* Form Fields */}
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
              <option value="">Select</option>
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
            <label className="block mb-1">Image:</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="border p-2 w-full"
            />
            {imagePreview && (
              <img src={imagePreview} alt="Image preview" className="mt-2 w-32 h-32 object-cover" />
            )}
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white rounded px-4 py-2 hover:bg-green-600 transition duration-200"
          >
            Submit
          </button>
        </form>
      </main>
    </div>
  );
};

export default CreateEmployee;