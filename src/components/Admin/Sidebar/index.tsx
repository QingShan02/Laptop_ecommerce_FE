import { AppstoreOutlined, CustomerServiceOutlined, OrderedListOutlined, SketchOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React from 'react';
import { Link, useNavigation } from 'react-router-dom';

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
    getItem("Trang chủ", "/admin"),
    { type: 'divider' },
    getItem('Khách Hàng', 'sub1', <CustomerServiceOutlined />, [
        getItem('Xem tất cả', '/admin/users'),
        getItem('Quản lí', 'g2'),
    ]),

    getItem('Sản phẩm', 'sub2', <AppstoreOutlined />, [
        getItem('Xem tất cả', '/admin/product'),
        getItem('Quản lí', '6'),
    ]),
    getItem('Thương hiệu', 'sub3', <SketchOutlined />, [
        {
            label: (<Link to={"/admin/brands"}>Xem tất cả</Link>),
            key: "/admin/brands"
        }
    ]),
    getItem('Đơn hàng', 'sub4', <OrderedListOutlined />, [
        // getItem('Xem tất cả', '/admin/order'),
        {
            label: (<Link to={"/admin/order"}>Xem tất cả</Link>),
            key: "/admin/order"
        },
        getItem('Quản lí', '10')
    ]),
    getItem('Tài khoản', 'grp', null, [getItem('Thông tin tài khoản', '13'), getItem('Đổi mật khẩu', '14')], 'group'),
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