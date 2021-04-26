import Conditions from "./components/conditions";
import Events from "./components/events";
import ProductList from "./components/productlist";
import Signup from "./components/signup";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/header";
import { ProductProvider } from "./providers/productContext";
import Register from "./components/register";
import { UserProvider } from "./providers/userContext";
import Login from "./components/login";
import Admin from "./components/admin";

function App() {
  return (
    <Router>
      <ProductProvider>
        <UserProvider>
          <Header />
          <Route path="/login">
            <Login />
          </Route>

          <Route path="/events">
            <Events />
          </Route>

          <Route path="/conditions">
            <Conditions />
          </Route>

          <Route path="/list">
            <ProductList />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>
        </UserProvider>
      </ProductProvider>
    </Router>
  );
}

export default App;
