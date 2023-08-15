import { AppstoreOutlined, CustomerServiceOutlined, OrderedListOutlined, SketchOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';
import { FaEdit, FaHome, FaInfoCircle, FaList, FaListAlt, FaPassport, FaUserAlt } from 'react-icons/fa';
import { Link, useNavigation } from 'react-router-dom';
import "./index.css";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuProps['items'] = [
    getItem("Trang chủ", "/admin", <FaHome />, [
        {
            label: (<Link to={"/admin"}>Thống Kê</Link>),
            key: "/admin",
            icon: <FaListAlt />
        },
        {
            label: (<Link to={"/"}>Trang bán hàng</Link>),
            key: "/admin",
            icon: <FaHome />
        }
    ]),
    { type: 'divider' },
    getItem('Khách Hàng', 'sub1', <CustomerServiceOutlined />, [
        {
            label: (<Link to={"/admin/customer"}>Xem tất cả</Link>),
            key: "/admin/customer",
            icon: <FaList />
        },
        {
            label: (<Link to={"/admin/customer"}>Quản lí</Link>),
            key: "/admin/customer",
            icon: <FaEdit />
        }
    ]),

    getItem('Sản phẩm', 'sub2', <AppstoreOutlined />, [
        {
            label: (<Link to={"/admin/product"}>Xem tất cả</Link>),
            key: "/admin/product",
            icon: <FaList />
        },
        {
            label: (<Link to={"/admin/product"}>Quản lí</Link>),
            key: "/admin/product",
            icon: <FaEdit />
        }
    ]),
    getItem('Thương hiệu', 'sub3', <SketchOutlined />, [
        {
            label: (<Link to={"/admin/brands"}>Xem tất cả</Link>),
            key: "/admin/brands",
            icon: <FaList />
        }
    ]),
    getItem('Đơn hàng', 'sub4', <OrderedListOutlined />, [
        {
            label: (<Link to={"/admin/order"}>Xem tất cả</Link>),
            key: "/admin/order",
            icon: <FaList />
        },
        getItem('Quản lí', '10', <FaEdit />)
    ]),
    getItem('Tài khoản', 'grp', null, [getItem('Thông tin tài khoản', '13', <FaUserAlt />), getItem('Đổi mật khẩu', '14', <FaEdit />)], 'group'),
];

const SideBar: React.FC = () => {
    const router = useNavigation();

    const onClick: MenuProps['onClick'] = (e) => {
        // router(e.key);
        // router.location?.pathname
    };


    return (
        <>
            <Menu
                onClick={onClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={[router.location?.pathname || "/admin"]}
                mode="inline"
                items={items}
            />
        </>
    );
};

export default SideBar;