import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Input, Modal, Table } from "antd";
import { useEffect, useState } from "react";

import type { ColumnsType } from 'antd/es/table';
import { delete_Brands, save_Brands, update_Brands } from "src/api/Brands/route";
import { Brand } from "src/common/model/Brand";
import { useFetch } from "src/util/CustomHook";

function BrandAdmin() {
    const [dataSource, setDataSource] = useState<any>();
    useEffect(() => {
        const init = async () => {
            const { data: result } = await useFetch.get('/api/brand');
            setDataSource(result);
        }
        init();
    }, []);
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [editBrand, setEditBrand] = useState<Brand>({ id: "", name: "", logo: "" });
    //
    const [isCreating, setIsCreating] = useState<boolean>(false);
    const [createBrand, setCreateBrand] = useState<any>({ id: "", name: "", logo: "" });
    //
    const columns: ColumnsType<Brand> = [
        {
            key: "1",
            title: "Id",
            dataIndex: "id",
        },
        {
            key: "2",
            title: "Tên thương hiệu",
            dataIndex: "name",
        },
        {
            key: "3",
            title: "Logo",
            dataIndex: "logo",
        },
        {
            key: "4",
            title: "Hình",
            render: (record: Brand) => (
                <img src={record.logo} style={{ width: 140, height: 40 }} />
            ),
        },
        {
            key: "5",
            title: "Hành động",
            render: (record: any) => {
                return (
                    <>
                        <EditOutlined
                            onClick={() => {
                                onEditBrand(record);
                            }}
                        />
                        <DeleteOutlined
                            onClick={() => {
                                onDeleteBrand(record);
                            }}
                            style={{ color: "red", marginLeft: 12 }}
                        />
                    </>
                );
            },
        },
    ];

    const onDeleteBrand = (record: any) => {
        Modal.confirm({
            title: "Bạn có thật sự muốn xoá không?",
            okText: "Có",
            okType: "danger",
            onOk: () => {
                delete_Brands(record.id).then(resp => {
                    if (resp === 200) {
                        window.location.href = "/admin/brands"
                    }
                    else alert(resp)
                })
            },
        });
    };

    const onEditBrand = (record: any) => {
        setIsEditing(true);
        setEditBrand({ ...record });
    };

    const resetEditing = () => {
        setIsEditing(false);
        setEditBrand({ id: null, name: "", logo: "" });
    };

    const resetCreate = () => {
        setIsCreating(false);
        setCreateBrand({
            name: "",
            logo: ""
        });
    };

    return (
        <>
            <Table columns={columns} dataSource={dataSource}
                pagination={{ position: ['bottomCenter'] }} />
            <Button onClick={() => setIsCreating(true)}>Tạo mới</Button>

            <Modal
                title="Thông tin thương hiệu:"
                visible={isCreating}
                okText="Tạo mới"
                cancelText="Thoát"
                onOk={() => {
                    save_Brands(createBrand).then(status => {
                        if (status === 200) {
                            window.location.href = "/admin/brands"
                        } else {
                            alert(status)
                        }
                    })
                    resetCreate();
                }}
                onCancel={() => resetCreate()}
            >
                <div className="container-fluid">
                    <div className="my-3">
                        <label className="form-label">Tên thương hiệu: </label>
                        <Input className="form-control"
                            value={createBrand?.name}
                            onChange={(e) => {
                                setCreateBrand((prev: any) => {
                                    return { ...prev, name: e.target.value };
                                });
                            }}
                        />
                    </div>
                    <div className="my-3">
                        <label className="form-label">URL:</label>
                        <Input className="form-control"
                            placeholder="Kích thước: Rộng 149 pixel - Dài 40 pixel"
                            value={createBrand?.logo}
                            onChange={(e) => {
                                setCreateBrand((prev: any) => {
                                    return { ...prev, logo: e.target.value };
                                });
                            }}
                        />
                    </div>
                    <div className="my-3">
                        <label className="form-label">Hình ảnh:</label> <br />
                        <img className="form-label" style={{ height: 40, width: 149 }} src={createBrand?.logo} alt="..." />
                    </div>
                </div>
            </Modal >

            <Modal
                title="Thông tin thương hiệu:"
                visible={isEditing}
                okText="Lưu"
                onCancel={() => {
                    resetEditing();
                }
                }
                onOk={() => {
                    update_Brands(editBrand?.id, editBrand).then(resp => {
                        if (resp === 200) {
                            window.location.href = "/admin/brands"
                        } else {
                            alert("Error: " + resp)
                        }
                    }).catch(error => alert(error))
                    resetEditing();
                }}
            >
                <div className="container-fluid">
                    <div className="my-3">
                        <label className="form-label">Tên thương hiệu: </label>
                        <Input className="form-control"
                            value={editBrand?.name}
                            onChange={(e) => {
                                setEditBrand((prev: any) => {
                                    return { ...prev, name: e.target.value };
                                });
                            }}
                        />
                    </div>
                    <div className="my-3">
                        <label className="form-label">URL:</label>
                        <Input className="form-control"
                            placeholder="Kích thước: Rộng 149 pixel - Dài 40 pixel"
                            value={editBrand?.logo}
                            onChange={(e) => {
                                setEditBrand((prev: any) => {
                                    return { ...prev, logo: e.target.value };
                                });
                            }}
                        />
                    </div>
                    <div className="my-3">
                        <label className="form-label">Hình ảnh:</label> <br />
                        <img className="form-label" style={{ height: 40, width: 149 }} src={editBrand?.logo} alt="..." />
                    </div>
                </div>
            </Modal >
        </>
    );
}

export default BrandAdmin;
