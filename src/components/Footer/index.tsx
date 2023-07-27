import Button from "../Button";
import Input from "../Input";
import "./index.css";
const Footer = () => {
    return (
        <footer className="bg-dark">
            <section className="main">
                <section className="search w-100 flex-column d-flex justify-content-center mt-5">
                    <h3>Want style Ideas and Treats?</h3>
                    <div className="section-search mt-3">
                        <Input className="input white-opacity" type="text" />
                        <Button className="button ms-5 px-4">Search</Button>
                    </div>
                </section>
                <section className="info w-75 flex-row d-flex justify-content-around my-5">
                    <div className="mt-5">
                        <h3>Shopper.</h3>
                        <div className="d-flex flex-row justify-content-between">
                            <i className="bi bi-facebook"></i>
                            <i className="bi bi-youtube"></i>
                            <i className="bi bi-twitter"></i>
                            <i className="bi bi-instagram"></i>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h5>SUPPORT</h5>
                        <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                            <li>Contact Us</li>
                            <li>FAQs</li>
                            <li>Size Guide</li>
                            <li>Shipping & Returns</li>
                        </ul>
                    </div>
                    <div className="mt-5">
                        <h5>SHOP</h5>
                        <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                            <li>Men's Shopping</li>
                            <li>Women's Shopping</li>
                            <li>Kids' Shopping</li>
                            <li>Discounts</li>
                        </ul>
                    </div>
                    <div className="mt-5">
                        <h5>COMPANY</h5>
                        <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                            <li>Our Story</li>
                            <li>Careers</li>
                            <li>Terms & Conditions</li>
                            <li>Privacy & Cookie policy</li>
                        </ul>
                    </div>
                    <div className="mt-5">
                        <h5>CONTACT</h5>
                        <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                            <li>1-202-555-0105</li>
                            <li>1-202-555-0106</li>
                            <li>help@shopper.com</li>
                        </ul>
                    </div>
                </section>
                <section className="end w-100 flex-row d-flex justify-content-around">
                    <h6 className="my-5">© 2019 All rights reserved. Designed by Unvab.</h6>
                    <div className="my-5 flex-row d-flex justify-content-around" style={{ width: "400px" }}>
                        <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/mastercard.svg" alt="..." />
                        <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/visa.svg" alt="..." />
                        <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/amex.svg" alt="..." />
                        <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/paypal.svg" alt="..." />
                        <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/maestro.svg" alt="..." />
                        <img src="https://yevgenysim-turkey.github.io/shopper/assets/img/payment/klarna.svg" alt="..." />
                    </div>
                </section>
            </section>
        </footer>
    );
}
export default Footer;