import './app.css';
import './index.css';



import AdminLayout from './Layouts/AdminLayout.jsx';
import UserLayout from './Layouts/UserLayout.jsx';
import CoatchLayout from './Layouts/CoatchLayout.jsx';


var role = "admin";

function App() {
  if (role === "admin") {
    
    return (
      <AdminLayout />
    );
  }
  else if (role === "user") {
    return (
      <UserLayout />
    );
  } else if(role==="coatch"){
    return (
      <CoatchLayout />
    );
  }
}

export default App;
