//import Home from './conponents/Home';
import Link from "./conponents/Link";
import Route from "./conponents/Route";
import Header from "./conponents/Header";
import Navbar from "./conponents/Navbar";

function App() {

  return (
    <div>
      <Link to="/header">Go to Header</Link>
      <Link to="/navbar">Go to Navbar</Link>
      <div>
        <Route path="/header">
          <Header />
        </Route>
        <Route path="/navbar">
          <Navbar />
        </Route>
      </div>
    </div>
  );
}

export default App;
