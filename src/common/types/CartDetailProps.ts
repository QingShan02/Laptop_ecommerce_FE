export interface CartDetailProps {
    image: string,
    name: string,
    price: number,
    quantity: number,
    totalPrice?: number,
    totalItems?: number,
    shippingPrice?: number,
    priceExcludeTax?: number,
    priceIncludeTax?: number,
    totalPrice2?: number
}