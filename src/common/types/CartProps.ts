import { Product } from "../model/Product";

export interface CardProps {
    id: string | number,
    className?: string,
    data: Product
}