import { Link } from "react-router-dom";

const SideMenu = () => {
    return (
        <div className="col-md-2 border">
            <div className="p-3">
                <ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        <Link to="/admin/report" className="nav-link link-success shadow-sm mb-3 bg-body rounded">
                            Report
                        </Link>
                    </li>
                    <li>
                        <a href="#2" className="nav-link link-success shadow-sm mb-3 bg-body rounded">
                            Orders
                        </a>
                    </li>
                    <li>
                        <a href="#3" className="nav-link link-success shadow-sm mb-3 bg-body rounded">
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="#4" className="nav-link link-success shadow-sm mb-3 bg-body rounded">
                            Customers
                        </a>
                    </li>
                    <li>
                        <a href="#4" className="nav-link link-success shadow-sm mb-3 bg-body rounded">
                            Brands
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default SideMenu;
