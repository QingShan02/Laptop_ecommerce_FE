import { CartDetailProps } from "src/common/types/CartDetailProps";

const CartDetail = ({ ...props }: CartDetailProps) => {
    return (
        <>
            <div className="cart-grid-body col-xs-12 col-lg-8">
                <div className="card cart-container border-0">
                    <div className="card-header">
                        <h1>Giỏ hàng</h1>
                    </div>
                    <div className="card-body">
                        <div className="product-line-grid row">
                            <div className="product-line-grid-left col-md-3 col-xs-4">
                                <span className="product-image media-middle">
                                    <img src={props.image} alt="Teapot" loading="lazy" />
                                </span>
                            </div>
                            <div className="product-line-grid-body col-md-4 col-xs-8">
                                <div className="product-line-info">
                                    <a className="label" href="https://demo80.leotheme.com/prestashop/vt_decor/en/men/1-1-hummingbird-printed-t-shirt.html#/1-size-s/8-color-white" data-id_customization={0}>{props.name}</a>
                                </div>
                                <div className="product-line-info product-price h5 has-discount">
                                    <div className="product-discount">
                                        <span className="regular-price">$23.90</span>
                                        <span className="discount discount-percentage">
                                            -20%
                                        </span>
                                    </div>
                                    <div className="current-price">
                                        <span className="price">${props.price}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="product-line-grid-right product-line-actions col-md-5 col-xs-12">
                                <div className="row">
                                    <div className="col-xs-4 hidden-md-up" />
                                    <div className="col-md-10 col-xs-6">
                                        <div className="row">
                                            <div className="col-md-5 col-xs-6 col-sp-12 qty">
                                                <div className="input-group bootstrap-touchspin"><span className="input-group-addon bootstrap-touchspin-prefix" style={{ display: 'none' }} /><input className="js-cart-line-product-quantity form-control" data-down-url="https://demo80.leotheme.com/prestashop/vt_decor/en/cart?update=1&id_product=1&id_product_attribute=1&token=176c7ddb249260a81e9a9af67a1ee64f&op=down" data-up-url="https://demo80.leotheme.com/prestashop/vt_decor/en/cart?update=1&id_product=1&id_product_attribute=1&token=176c7ddb249260a81e9a9af67a1ee64f&op=up" data-update-url="https://demo80.leotheme.com/prestashop/vt_decor/en/cart?update=1&id_product=1&id_product_attribute=1&token=176c7ddb249260a81e9a9af67a1ee64f" data-product-id={1} type="number" inputMode="numeric" pattern="[0-9]*" defaultValue={1} name="product-quantity-spin" aria-label="Teapot product quantity field" style={{ display: 'block' }} /><span className="input-group-addon bootstrap-touchspin-postfix" style={{ display: 'none' }} /><span className="input-group-btn-vertical"><button className="btn btn-touchspin js-touchspin js-increase-product-quantity bootstrap-touchspin-up" type="button"><i className="material-icons touchspin-up" /></button><button className="btn btn-touchspin js-touchspin js-decrease-product-quantity bootstrap-touchspin-down" type="button"><i className="material-icons touchspin-down" /></button></span></div>
                                            </div>
                                            <div className="col-md-7 col-xs-2 col-sp-12 price">
                                                <span className="product-price">
                                                    <strong>
                                                        $19.12
                                                    </strong>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2 col-xs-2 text-xs-right">
                                        <div className="cart-line-product-actions">
                                            <a className="remove-from-cart" rel="nofollow" href="https://demo80.leotheme.com/prestashop/vt_decor/en/cart?delete=1&id_product=1&id_product_attribute=1&token=176c7ddb249260a81e9a9af67a1ee64f" data-link-action="delete-from-cart" data-id-product={1} data-id-product-attribute={1} data-id-customization>
                                                <i className="bi bi-trash3-fill">delete</i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
}

export default CartDetail;