import React, { useEffect, useState } from 'react';
import 'webix';
import * as webix from 'webix';
import 'webix/webix.css'; // Import Webix CSS
// Đảm bảo bạn đã cài đặt thư viện 'webix'

const SlideMenu: React.FC = () => {
    useEffect(() => {
        webix.ready(() => {
            const menu_data: any = [{
                id: "qlsp", icon: "mdi mdi-view-dashboard", value: "Quản lý sản phẩm"
            },
            {
                id: "qldh", icon: "mdi mdi-view-column", value: "Quản lý đơn hàng"
            },
            {
                id: "qlnd", icon: "mdi mdi-table", value: "Quản lý người dùng"
            },
            {
                id: "tk", icon: "mdi mdi-puzzle", value: "Thống kê"
            }];

            webix.ui({
                rows: [
                    {
                        view: 'toolbar',
                        padding: 3,
                        elements: [
                            {
                                view: 'icon',
                                icon: 'mdi mdi-menu',
                                click: () => {
                                    (webix.$$('sidebar1') as any).toggle(); // TypeScript cần ép kiểu ở đây
                                },
                            },
                            { view: 'label', label: 'Admin' },
                            {},
                            { view: 'icon', icon: 'mdi mdi-comment', badge: 4 },
                            { view: 'icon', icon: 'mdi mdi-bell', badge: 10 },
                        ],
                    },
                    {
                        cols: [
                            {
                                view: 'sidebar',
                                data: menu_data,
                                on: {
                                    onAfterSelect: (id: any) => {
                                        const selectedText1 = id;
                                        const data = menu_data.find((item: any) => item.id === id)
                                        webix.message('Selected: ' + selectedText1);
                                        console.log(data)
                                    },

                                },
                            },
                            { template: '' },
                        ],
                    },
                ],
            });
        });
    }, []);

    return <div id="webix-container" />; // Đảm bảo bạn có một container để render Webix UI
};

export default SlideMenu;
