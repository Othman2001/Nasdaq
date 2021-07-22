import ExplorePage from "./pages/explorePAGE/Explore.page";
import './styles/app.css'
import  NavBar  from  './components/Navbar.Component'
import StockPage from './pages/stockPage/StockPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">

      <Switch>
 
<Route path = "/" component = {ExplorePage} exact></Route>
<Route path = "/:stock" component = {StockPage}></Route>
  

  
      </Switch>

    </div>
    </Router>

  );
}

export default App;
