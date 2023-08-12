
const SideMenu = () => {
    return (
        <div className="col-md-2">
            <div className="p-3">
                <ul className="nav nav-pills flex-column mb-auto">
                    <li>
                        <a href="/admin/report" className="nav-link link-success shadow-sm mb-3 bg-body rounded">
                            Report
                        </a>
                    </li>
                    <li>
                        <a href="/admin/orders" className="nav-link link-success shadow-sm mb-3 bg-body rounded">
                            Orders
                        </a>
                    </li>
                    <li>
                        <a href="/admin/product" className="nav-link link-success shadow-sm mb-3 bg-body rounded">
                            Products
                        </a>
                    </li>
                    <li>
                        <a href="/admin/users" className="nav-link link-success shadow-sm mb-3 bg-body rounded">
                            Customers
                        </a>
                    </li>
                    <li>
                        <a href="/admin/brands" className="nav-link link-success shadow-sm mb-3 bg-body rounded">
                            Brands
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default SideMenu;
