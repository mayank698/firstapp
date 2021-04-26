import { useContext } from "react";
import { ProductContext } from "../providers/productContext";

const ProductDetails = (props) => {

    const data = props.product;
    const productService = useContext(ProductContext);

    const changeRandom = () => {
        productService.setRandom(productService.random + 1);
    }

    return (
        <div className="card">
            <div className="card-body">
                <div className="row">
                    <div className="col-md-2">
                        <img src={data.img} />
                    </div>
                    <div className="col-md-6">
                        <h2>{data.name}</h2>
                        <h5 className="text-muted">{data.rating} Ratings & {data.reviews} Reviews</h5>
                        <ul>
                            <li>Ram : {data.ram}</li>
                            <li>storage : {data.storage}</li>
                        </ul>

                        <button className="btn btn-primary" onClick={changeRandom}>increment</button>

                    </div>
                    <div className="col-md-4">
                        <h2>₹{data.price}/- </h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ProductList = () => {

    const productService = useContext(ProductContext)

    const productData = productService.productData;

    return (
        <div className="mt-5 container">
            {productData.map(pr => {
                return (
                    <ProductDetails product={pr} key={pr.name}></ProductDetails>
                )
            })}
        </div>
    )
}

export default ProductList;