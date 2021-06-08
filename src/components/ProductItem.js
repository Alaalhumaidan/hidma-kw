
const ProductItem = (props)=>{
    return(
        <div className="product" key={props.id}>
            <img alt={props.name} className="product-image" src={props.image}/>
            <p className="text">{props.name}</p>
            <p className="text">{props.price}KWD </p>
        </div>
    );
};
export default ProductItem;