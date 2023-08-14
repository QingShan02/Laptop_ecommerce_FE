import React, { useState, useEffect } from "react";
// import "antd/dist/antd.css";
// import "./App.css";
import { Button, Table, Modal, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AdminLayout from "src/components/Layout/AdminLayout";
import { useFetch } from "src/util/CustomHook";

function ProductAdmin() {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editingStudent, setEditingStudent] = useState<any>(null);
  const [dataSource, setDataSource] = useState<any>();
  const [page, setPage] = useState(0);

  useEffect(() => {
    const init = async () => {
      const { data: result } = await useFetch.get(`/api/products?p=${page}`);
      setDataSource(result);
      console.log(result.content);
    }
    init();
  }, [page]);

  const columns = [
    {
      key: "1",
      title: "ID",
      dataIndex: "id",
    },
    {
      key: "2",
      title: "Tên sản phẩm",
      dataIndex: "name",
    },
    {
      key: "3",
      title: "Ram",
      dataIndex: "ram",
    },
    {
      key: "4",
      title: "Màn hình",
      dataIndex: "display",
    },
    {
      key: "5",
      title: "Rom",
      dataIndex: "rom",
    },
    {
      key: "6",
      title: "Hiển thị",
      dataIndex: "display",
    },
    {
      key: "7",
      title: "HDH",
      dataIndex: "os",
    },
    {
      key: "8",
      title: "Giá",
      dataIndex: "price",
    },
    {
      key: "9",
      title: "Số lượng",
      dataIndex: "quantity",
    },
    {
      key: "10",
      title: "Hình",
      render: (record: any) => (
        <img src={record.logo} style={{ maxWidth: 50 }} />
      ),
    },
    {
      key: "11",
      title: "Màu",
      render: (record: any) => record.color.name,
    },
    {
      key: "12",
      title: "Hành động",
      render: (record: any) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditStudent(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {
                onDeleteStudent(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];

  const onAddStudent = () => {
    const randomNumber = Math.random() * 1000;
    const newStudent = {
      id: randomNumber,
      name: "Name " + randomNumber,
      email: randomNumber + "@gmail.com",
      address: "Address " + randomNumber,
    };
    setDataSource((prev: any) => {
      return [...prev, newStudent];
    });
  };

  const onDeleteStudent = (record: any) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this student record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((prev: any) => {
          return prev.filter((student: any) => student.id !== record.id);
        });
      },
    });
  };

  const onEditStudent = (record: any) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

  return (
    <AdminLayout>
      <Button onClick={onAddStudent}>Add a new Student</Button>
      <Table columns={columns} dataSource={dataSource?.content}
        pagination={{
          pageSize: dataSource?.length, // Số lượng dòng trên mỗi trang
          total: dataSource?.totalElements, // Tổng số dòng dữ liệu
          current: page + 1, // Trang hiện tại (page đang lấy từ useState)
          onChange: (page) => setPage(page - 1), // Hàm xử lý khi chuyển trang
        }} />
      <Modal
        title="Edit Student"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((prev: any) => {
            return prev.map((student: any) => {
              if (student.id === editingStudent.id) {
                return editingStudent;
              } else {
                return student;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input
          value={editingStudent?.name}
          onChange={(e) => {
            setEditingStudent((prev: any) => {
              return { ...prev, name: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.email}
          onChange={(e) => {
            setEditingStudent((prev: any) => {
              return { ...prev, email: e.target.value };
            });
          }}
        />
        <Input
          value={editingStudent?.address}
          onChange={(e) => {
            setEditingStudent((prev: any) => {
              return { ...prev, address: e.target.value };
            });
          }}
        />
      </Modal>
    </AdminLayout>
  );
}

export default ProductAdmin;
