import React, { useEffect, useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import type { TableColumnsType } from 'antd';
import { Badge, Dropdown, Space, Table } from 'antd';
import { useFetch } from 'src/util/CustomHook';
import { Product } from 'src/common/model/Product';
import { Link } from 'react-router-dom';

interface User {
    fullname: string;
}
interface ExpandedDataType {
    key: React.Key;
    id: string;
    product: {
        name: string;
    };
}
interface DataType {
    key: React.Key;
    id: string;
    name: string;
    place: string;
    buyDate: string;
    customerName: String;
    status: number;
    order_details: Array<ExpandedDataType>
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
                result.forEach((s: any) => {
                    s = {
                        ...s,
                        key: s.id
                    }
                })
                console.log(result);
                setData(result);
            }
        }
        init();
    })
    console.log(data);




    // const expandedRowRender = ({record,index}:any) => {
    //     console.log(record);
    //     const columns: TableColumnsType<ExpandedDataType> = [
    //         { title: 'Id', dataIndex: 'id', key: 'id' },
    //         // { title: 'Name', dataIndex: 'name', key: 'name' },
    //         // { title: 'Price', dataIndex: 'price', key: 'price' },
    //         // {
    //         //     title: 'Status',
    //         //     key: 'state',
    //         //     render: () => <Badge status="success" text="Finished" />,
    //         // },
    //         // { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    //         // {
    //         //     title: 'Action',
    //         //     dataIndex: 'operation',
    //         //     key: 'operation',
    //         //     render: () => (
    //         //         <Space size="middle">
    //         //             <a>Pause</a>
    //         //             <a>Stop</a>
    //         //             <Dropdown menu={{ items }}>
    //         //                 <a>
    //         //                     More <DownOutlined />
    //         //                 </a>
    //         //             </Dropdown>
    //         //         </Space>
    //         //     ),
    //         // },
    //     ];
    //     console.log(record);

    //     // const result = record.order_details || [];
    //     //         const value = [];
    //     // for (let i = 0; i < result?.length; ++i) {
    //     //     value.push({
    //     //         key: i.toString(),
    //     //         id: result[i].id,
    //     //         name: result[i].product?.name,
    //     //         price: result[i].product?.price
    //     //     });
    //     // }
    //     // console.log(record);
    //     return <Table columns={columns} dataSource={data} pagination={false} />;
    // };

    const columns: TableColumnsType<DataType> = [
        { title: 'Id', dataIndex: 'id', key: 'id' },
        { title: 'Nơi nhận', dataIndex: 'place', key: 'place' },
        { title: 'Khách hàng', dataIndex: 'customerName', key: 'customerName' },
        { title: 'Ngày tạo', dataIndex: 'buyDate', key: 'buyDate' },
        { title: "", dataIndex: "view", render: (value, record, index) => <Link to={"/admin/order/detail?ordId=" + record.id}>Xem chi tiết</Link> },
        { title: 'Trạng thái', dataIndex: 'status', key: 'status', render: () => <a>Đang lên đơn</a> },
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
                // expandable={{ expandedRowRender:(record)=><>{record.order_details[0].id || null}</>, defaultExpandedRowKeys: ['0'] }}
                dataSource={data}
            />
        </>
    );
};

export default TableOrder;