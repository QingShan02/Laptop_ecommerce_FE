import "./index.css"

interface Product {
    id: number,
    name: string,
    img: string,
    price: number
}

const Card = ({ ...props }: Product) => {
    return (
        <>
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <div className="product-grid">
                        <div className="product-image">
                            <a href={`${props.id}`} className="image">
                                <img
                                    className="img-1"
                                    src={props.img}
                                />
                            </a>
                            <ul className="product-links row">
                                <li>
                                    <a href="#">
                                        <i className="bi bi-cart-fill" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="bi bi-heart-fill" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="bi bi-eye-fill" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="bi bi-share-fill" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="product-content">
                            <h3 className="title">
                                <a
                                    className="link-offset-2 link-underline link-underline-opacity-0"
                                    href={`${props.id}`}
                                >
                                    {props.name}
                                </a>
                            </h3>
                            <div className="price">{props.price} VND</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;