import "./App.css";
import ProductList from "./components/ProductList";
import HomePage from "./components/Home";

function App() {
  return(
    <div>

  <div>
     <HomePage/> 
     </div>
     <div className="list"><ProductList/></div>
    
    </div>
  );
  }

export default App;
