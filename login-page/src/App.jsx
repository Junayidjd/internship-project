// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { EmployeeProvider } from './EmployeeContext'; // Ensure the path is correct
// import Login from './components/Login';
// import Dashboard from './components/Dashboard';
// import EmployeeList from './components/EmployeeList';
// import EditEmployee from './components/EditEmployee';
// import CreateEmployee from './components/CreateEmployee';

// function App() {
//   return (
//     <EmployeeProvider>
//       <Router>
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/employees" element={<EmployeeList />} />
//           <Route path="/create-employee" element={<CreateEmployee />} />
//           <Route path="/edit-employee/:id" element={<EditEmployee />} />
//         </Routes>
//       </Router>
//     </EmployeeProvider>
//   );
// }

// export default App;



























import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EmployeeProvider } from './EmployeeContext'; // Adjust the path as needed
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import EmployeeList from './components/EmployeeList';
import EditEmployee from './components/EditEmployee';
import CreateEmployee from './components/CreateEmployee';

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/create-employee" element={<CreateEmployee />} />
          <Route path="/edit-employee/:id" element={<EditEmployee />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  );
}

export default App;