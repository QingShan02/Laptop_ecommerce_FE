import { Link } from "react-router-dom";
import { formatter } from "src/util/formatCurrency";

interface CardProps {
    id: string | number,
    className?: string,
    data: Product 
}

const Card = ({ ...props }: CardProps) => {
    return (
        <div className={`card ${props.className}`} id={`card_${props.id}`}>
            <img className="card-img-top" src={props.data.logo} alt="Title" />
            <div className="card-body">
                <Link className="card-title" to={"/product?id="+props.data.id}>{props.data.name}</Link>
                <p className="card-text">Giá: {formatter.format(props.data.price)}</p>
            </div>
        </div>
    );
}
export default Card;