import React, { useState, useEffect } from "react";
import { Button, Table, Modal, Input, Form, Radio, Alert } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useFetch } from "src/util/CustomHook";
import Customer from "src/common/model/Customer";
import type { ColumnsType } from 'antd/es/table';

type TablePaginationPosition =
    | 'bottomCenter';

const CollectionCreateForm = ({ open, onCreate, onCancel }: any) => {
    const [form] = Form.useForm();
    return (
        <Modal
            open={open}
            title="Thêm Tài Khoản"
            okText="Thêm Mới"
            cancelText="Hủy"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);

                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}>
            <Form
                form={form}
                layout="vertical"
                name="form_in_modal"
                initialValues={{
                    modifier: 'public',
                }}
            >
                <Form.Item
                    name="fullname"
                    label="Họ và Tên"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng không để trống!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng không để trống!',
                        },
                    ]}>
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Mật Khẩu"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng không để trống!',
                        },
                    ]}>
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Số Điện Thoại"
                    rules={[
                        {
                            required: true,
                            message: 'Vui lòng không để trống!',
                        },
                    ]}>
                    <Input />
                </Form.Item>

                <Form.Item name="admin" className="collection-create-form_last-form-item" >
                    <Radio value="false" defaultChecked disabled>Khách Hàng</Radio>
                </Form.Item>
            </Form>
        </Modal>
    );
};

function ProductAdmin() {
    const [open, setOpen] = useState(false);
    const onCreate = (values: any) => {
        console.log('Received values of form: ', values);
        useFetch.post("/api/users/save", values).then(s => { alert("Thêm thành công") }).catch(e => { alert("Lỗi " + e) });
        setOpen(false);
        window.location.href = "/admin/customer"
    };
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editingCustomer, setEditingCustomer] = useState<any>(null);
    const [dataSource, setDataSource] = useState<any>();
    const [bot, setbot] = useState<TablePaginationPosition>('bottomCenter');
    useEffect(() => {
        const init = async () => {
            const { data: result } = await useFetch.get(`/api/users/customer`);
            setDataSource(result);
        }
        init();
    }, []);

    const columns: ColumnsType<Customer> = [
        {
            key: "1",
            title: "ID",
            dataIndex: "id",
        },
        {
            key: "2",
            title: "Họ và Tên",
            dataIndex: "fullname",
        },
        {
            key: "3",
            title: "Email",
            dataIndex: "email",
        },
        {
            key: "4",
            title: "Mật Khẩu",
            dataIndex: "password",
        },
        {
            key: "5",
            title: "Số Điện Thoại",
            dataIndex: "phone",
        },
        {
            key: "6",
            title: "Hành động",
            render: (record: any) => {
                return (
                    <>
                        <EditOutlined
                            onClick={() => {
                                onEditCustomer(record);
                            }}
                        />
                        <DeleteOutlined
                            onClick={() => {
                                onDeleteCustomer(record);
                            }}
                            style={{ color: "red", marginLeft: 12 }}
                        />
                    </>
                );
            },
        },
    ];


    const onDeleteCustomer = (record: any) => {
        Modal.confirm({
            title: "Bạn có chắc, bạn muốn xóa tài khoản này chứ?",
            okText: "Vâng",
            okType: "danger",
            onOk: () => {
                setDataSource((prev: any) => {
                    useFetch.delete(`/api/users/${record.id}`).then(s => { alert("Cập nhật thành công") }).catch(e => {
                        alert("Lỗi" + e)
                    })
                    return prev.filter((customer: any) => customer.id !== record.id);
                });
            },
        });
    };

    const onEditCustomer = (record: any) => {
        setIsEditing(true);
        setEditingCustomer({ ...record });

    };

    const resetEditing = () => {
        setIsEditing(false);
        setEditingCustomer(null);
    };

    return (
        <>
            <br />
            <div>
                <Button type="default" onClick={() => { setOpen(true); }}>
                    Thêm tài khoản người dùng
                </Button>
                <CollectionCreateForm
                    open={open}
                    onCreate={onCreate}
                    onCancel={() => {
                        setOpen(false);
                    }}
                />
            </div>
            <br /><br />
            <Table columns={columns} dataSource={dataSource}
                pagination={{ position: [bot] }} />
            <Modal
                title="Chỉnh sửa tài khoản khách hàng"
                visible={isEditing}
                okText="Save"
                onCancel={() => {
                    resetEditing();
                }}
                onOk={() => {
                    setDataSource((prev: any) => {
                        return prev.map((customer: any) => {
                            if (customer.id === editingCustomer.id) {
                                useFetch.put("/api/users/update", editingCustomer);
                                return editingCustomer;
                            }
                            else {
                                console.log(customer);
                                return customer;
                            }
                        });;
                    });
                    resetEditing();
                }}
            >

                <Input
                    addonBefore="Họ và Tên"
                    value={editingCustomer?.fullname}
                    onChange={(e) => {
                        setEditingCustomer((prev: any) => {
                            return { ...prev, fullname: e.target.value };
                        });
                    }}
                />
                <br /><br />
                <Input
                    addonBefore="Email"
                    value={editingCustomer?.email}
                    onChange={(e) => {
                        setEditingCustomer((prev: any) => {
                            return { ...prev, email: e.target.value };
                        });
                    }}
                />
                <br /><br />
                <Input.Password
                    addonBefore="Mật khẩu"
                    value={editingCustomer?.password}
                    onChange={(e) => {
                        setEditingCustomer((prev: any) => {
                            return { ...prev, password: e.target.value };
                        });
                    }}
                />
                <br /><br />
                <Input
                    addonBefore="Số điện thoại"
                    value={editingCustomer?.phone}
                    onChange={(e) => {
                        setEditingCustomer((prev: any) => {
                            return { ...prev, phone: e.target.value };
                        });
                    }}
                />
                <br /><br />
                <Input addonBefore="Vai trò"
                    value={editingCustomer?.admin ? "" : "Khách hàng"}
                    onChange={(e) => {
                        setEditingCustomer((prev: any) => {
                            return { ...prev, admin: e.target.value };
                        });
                    }}
                    disabled />
            </Modal>
        </>
    );
}

export default ProductAdmin;
