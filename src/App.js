import HomePage from './components/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Odder from './components/Odder/Odder';
import { createContext, useState } from 'react';
import Cart from './components/Cart/Cart';
import AddProduct from './components/AdminPanal/AddProduct/AddProduct';
import Login from './components/Login/Login';
import PrivatedRoute from './components/PrivatedRoute/PrivatedRoute';

export const LoginContext = createContext();
function App() {
  const [logInUser, setLogInUser] = useState({
    name: '',
    loginEmail: ''
})

  return (
    <LoginContext.Provider value = {[logInUser, setLogInUser]} >
   <Router>
     <Switch>
       <Route exact path="/">
       <HomePage></HomePage>
       </Route>
       <Route path="/odder/:productId">
         <Odder></Odder>
       </Route>
       <Route path="/cart">
         <Cart></Cart>
       </Route>
       <Route path="/admin/addproduct">
         <AddProduct></AddProduct>
       </Route>
       <Route path="/login">
         <Login></Login>
       </Route>
       <PrivatedRoute>
       <Login></Login>
       </PrivatedRoute>
     </Switch>
   </Router>
   </LoginContext.Provider>
      
   
  );
}

export default App;
