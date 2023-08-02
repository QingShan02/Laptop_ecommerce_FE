import React, { useEffect } from 'react';
import 'webix';
import * as webix from 'webix';
import 'webix/webix.css'; // Import Webix CSS
// Đảm bảo bạn đã cài đặt thư viện 'webix'

const MyComponent: React.FC = () => {
    useEffect(() => {
        webix.ready(() => {
            const menu_data: any = [{
                id: "dashboard", icon: "mdi mdi-view-dashboard", value: "Dashboards", data: [
                    { id: "dashboard1", value: "Dashboard 1" },
                    { id: "dashboard2", value: "Dashboard 2" }
                ]
            },
            {
                id: "layouts", icon: "mdi mdi-view-column", value: "Layouts", data: [
                    { id: "accordions", value: "Accordions" },
                    { id: "portlets", value: "Portlets" }
                ]
            },
            {
                id: "tables", icon: "mdi mdi-table", value: "Data Tables", data: [
                    { id: "tables1", value: "Datatable" },
                    { id: "tables2", value: "TreeTable" },
                    { id: "tables3", value: "Pivot" }
                ]
            },
            {
                id: "uis", icon: "mdi mdi-puzzle", value: "UI Components", data: [
                    { id: "dataview", value: "DataView" },
                    { id: "list", value: "List" },
                    { id: "menu", value: "Menu" },
                    { id: "tree", value: "Tree" }
                ]
            },
            {
                id: "tools", icon: "mdi mdi-calendar", value: "Tools", data: [
                    { id: "kanban", value: "Kanban Board" },
                    { id: "pivot", value: "Pivot Chart" },
                    { id: "scheduler", value: "Calendar" }
                ]
            },
            {
                id: "forms", icon: "mdi mdi-pencil", value: "Forms", data: [
                    { id: "buttons", value: "Buttons" },
                    { id: "selects", value: "Select boxes" },
                    { id: "inputs", value: "Inputs" }
                ]
            },
            { id: "demo", icon: "mdi mdi-book", value: "Documentation" }];

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
                            { view: 'label', label: 'My App' },
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
                                        webix.message('Selected: ' + (webix.$$('sidebar') as any).getItem(id).value);
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

export default MyComponent;
