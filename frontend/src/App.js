import "./App.css";
import TopBar from "./component/TopBar";
import About from "./component/About";
import Contact from "./component/Contact";
import Policy from "./component/Policy";
import NavBars from "./component/NavBars";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Registration from "./screens/Registration";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
import {Routes,Route,BrowserRouter} from "react-router-dom";
import OrderList from "./screens/OrderList";
import PizzasList from "./screens/PizzasList";
import AddNewPizza from "./screens/AddNewPizza";
import UserList from "./screens/UserList";
import EditPizza from "./screens/EditPizza";

function App() {
  return (
    <BrowserRouter>
      <TopBar/>
      <NavBars/>
      <Routes>
      <Route path="/registration" element={<Registration/>} exact />
      <Route path="/login" element={<Login/>} exact />
        <Route path="/about" element={<About/>} exact />
        <Route path="/contact" element={<Contact/>} exact />
        <Route path="/policy" element={<Policy/>} exact />
        <Route path="/" element={<HomeScreen/>} exact />
        <Route path="/cart" element={<CartScreen/>} exact />
        <Route path="/orders" element={<OrderScreen/>} exact />
        <Route path="/admin" element={<AdminScreen/>}  />
        <Route path="/admin/orderlist" element={<OrderList/>} exact />
        <Route path="/admin/pizzaslist" element={<PizzasList/>} exact />
        <Route path="/admin/addnewpizza" element={<AddNewPizza/>} exact />
        <Route path="/admin/userlist" element={<UserList/>} exact />
        <Route path="/admin/editpizza/:pizzaId" element={<EditPizza/>} exact />



      </Routes>
    </BrowserRouter>
  );
}

export default App;