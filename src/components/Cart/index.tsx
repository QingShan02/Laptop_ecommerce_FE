import CartDetail from "./CartDetail";
import CartTotal from "./CartTotal";

const Cart = () => {
    return (
        <>
            <div className="cart-grid row">
                <CartDetail image="https://demo80leotheme.b-cdn.net/prestashop/vt_decor/24-cart_default/hummingbird-printed-t-shirt.jpg" name="TeaPot" price={19.04} quantity={1}></CartDetail>
                <CartTotal totalItems={2} shippingPrice={2} priceIncludeTax={2} priceExcludeTax={3} totalPrice={5}></CartTotal>
            </div>

        </>
    );
}

export default Cart;