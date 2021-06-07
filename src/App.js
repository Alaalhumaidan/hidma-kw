import "./App.css";
import products from "./products";


function App() {
  const productsList = products.map((product)=>{
  return (
    <div className="product">
    <img className="product-image" src={product.image}/>

  <p className="text">{product.name}</p>
  <p className="text">{product.price}KWD</p>
</div>
  );
  });
  return(
    <div>
     <center>
      <button type="button" class="btn btn-outline-dark">User Login</button>
      <button type="btn btn-danger" class="button">SALE!</button>
</center>
    <h1 className="text">Gifts and Apparels</h1>
    <h4 className="text">Hidma celebrates your occasions in  unique way</h4>
    <center>
      <img src="https://i.pinimg.com/236x/ac/03/0e/ac030e55eb9ba6f6a0a3acce25de04be--logotype-design-logos.jpg"></img>
      </center>
  /
      <div className="list">{productsList}</div>
      
    </div>

  
  );
  }

export default App;
