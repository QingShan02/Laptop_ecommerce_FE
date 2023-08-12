import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Badge, Dropdown, Space, Table } from 'antd';
import { useFetch } from 'src/util/CustomHook';
import { Product } from 'src/common/model/Product';

interface User{
    fullname: string;
}

interface DataType {
    key: React.Key;
    id: string;
    place: string;
    buyDate: string;
    customerName:String;
    
}

interface ExpandedDataType {
    key: React.Key;
    date: string;
    name: string;
    upgradeNum: string;
    product?:Product;
}

const items = [
    { key: '1', label: 'Action 1' },
    { key: '2', label: 'Action 2' },
];

const TableOrder: React.FC = () => {
    const [data, setData] = useState<DataType[]>([]);
    useEffect(() => {
        const init = async () => {
            if (data.length == 0) {
                const { data: result } = await useFetch.get("/api/order");
                setData(result);
            }
        }
        init();
    })



    const expandedRowRender = () => {
        const columns: TableColumnsType<ExpandedDataType> = [
            { title: 'Date', dataIndex: 'date', key: 'date' },
            { title: 'Name', dataIndex: 'name', key: 'name' },
            {
                title: 'Status',
                key: 'state',
                render: () => <Badge status="success" text="Finished" />,
            },
            { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
            {
                title: 'Action',
                dataIndex: 'operation',
                key: 'operation',
                render: () => (
                    <Space size="middle">
                        <a>Pause</a>
                        <a>Stop</a>
                        <Dropdown menu={{ items }}>
                            <a>
                                More <DownOutlined />
                            </a>
                        </Dropdown>
                    </Space>
                ),
            },
        ];

        const data = [];
        for (let i = 0; i < 3; ++i) {
            data.push({
                key: i.toString(),
                date: '2014-12-24 23:12:00',
                name: 'This is production name',
                upgradeNum: 'Upgraded: 56',
            });
        }
        return <Table columns={columns} dataSource={data} pagination={false} />;
    };

    const columns: TableColumnsType<DataType> = [
        { title: 'Id', dataIndex: 'id', key: 'id' },
        { title: 'Nơi nhận', dataIndex: 'place', key: 'place' },
        { title: 'Khách hàng', dataIndex: 'customerName', key: 'customerName' },
        { title: 'Ngày tạo', dataIndex: 'buyDate', key: 'buyDate' },
        { title: 'Trạng thái', key: 'operation', render: () => <a>Đang lên đơn</a> },
    ];

    //   const data: DataType[] = [];
    // for (let i = 0; i < 3; ++i) {
    //     data.push({
    //         key: i.toString(),
    //         id: 'Screen',
    //         platform: 'iOS',
    //         version: '10.3.4.5654',
    //         upgradeNum: 500,
    //         creator: 'Jack',
    //         buyDate: '2014-12-24 23:12:00',
    //     });
    // }

    return (
        <>
            <Table
                columns={columns}
                expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
                dataSource={data}
            />
        </>
    );
};

export default TableOrder;