import React, { useState, useEffect } from "react";
// import "antd/dist/antd.css";
// import "./App.css";
import { Button, Table, Modal, Input, Row, Col, Select, Form, Radio } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AdminLayout from "src/components/Layout/AdminLayout";
import { useFetch } from "src/util/CustomHook";
import axios from "axios";
const CollectionCreateForm = ({ open, onCreate, onCancel, brands, colors }: any) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Thêm sản phẩm"
      okText="Thêm"
      cancelText="Hủy"
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
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >

        <Form.Item
          name="name"
          label="Tên"
          rules={[
            {
              required: true,
              message: 'Vui lòng không để trống!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="ram"
              label="Ram"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng không để trống!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="rom"
              label="ROM"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng không để trống!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={8}>
            <Form.Item
              name="quantity"
              label="Số lượng"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng không để trống!',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="display"
              label="Màn hình"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng không để trống!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              name="os"
              label="HDH"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng không để trống!',
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={6}>
            <Form.Item
              name="brandId"
              label="Thương hiệu"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng không để trống!',
                },
              ]}
            >
              <Select
                labelInValue
                defaultValue={{
                  value: brands?.[0]?.id || '',
                }}
                style={{
                  width: 120,
                }}
                options={brands?.map((c: any) => {
                  return { value: c.id, label: c.name };
                })}
              />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item
              name="colorId"
              label="Màu sắc"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng không để trống!',
                },
              ]}
            >
              <Select
                labelInValue
                defaultValue={{
                  value: colors?.[0]?.id || '',
                }}
                style={{
                  width: 120,
                }}
                options={colors?.map((c: any) => {
                  return { value: c.id, label: c.id };
                })}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="price"
              label="Giá"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng không để trống!',
                },
              ]}
            >
              <Input type="number" step={500000} />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          name="logo"
          label="Hình"
          rules={[
            {
              required: true,
              message: 'Vui lòng không để trống!',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

function ProductAdmin() {
  const [open, setOpen] = useState(false);
  const onCreate = async (values: any) => {
    const data = {
      name: values.name,
      ram: values.ram,
      display: values.display,
      rom: values.rom,
      os: values.os,
      price: values.price,
      quantity: values.quantity,
      logo: values.logo,
      brandId: values.brandId.value,
      colorId: values.colorId.value,
    };

    console.log(values.brandId.value)

    console.log('Received values of form: ', data);
    const url = `http://localhost:8080/api/product/save`;
    await axios.post(url, data)
    console.log(data)
    setOpen(false);
  };
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [isAdding, setIsAdding] = useState<boolean>(false);

  // Modal false khi thêm sản phẩm, và ngược lại
  const [checkModal, setCheckModal] = useState<boolean>(false);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [editingProduct, setEditingProduct] = useState<any>(null);
  const [dataSource, setDataSource] = useState<any>();
  const [page, setPage] = useState(0);

  const [brands, setBrands] = useState<any>();
  const [colors, setColors] = useState<any>();

  useEffect(() => {
    setIsDeleting(false);

    const init = async () => {
      const response = await useFetch.get(`/api/products?p=${page}`);
      setDataSource(response.data);
      // console.log(resonse.data.last);

      const response2 = await useFetch.get("/api/brand");
      setBrands(response2.data);
      console.log(brands)

      const response3 = await useFetch.get("/api/color/getAll");
      setColors(response3.data);
    }
    init();
  }, [page, isEditing, isDeleting, checkModal]);

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
      title: "Thương hiệu",
      render: (record: any) => record.brand.name,
    },
    {
      key: "12",
      title: "Màu",
      render: (record: any) => record.color.name.charAt(0).toUpperCase() + record.color.name.slice(1),
    },
    {
      key: "13",
      title: "Hành động",
      render: (record: any) => {
        return (
          <>
            <EditOutlined
              onClick={() => {
                onEditProduct(record);
              }}
            />
            <DeleteOutlined
              onClick={() => {

                console.log(record.last)
                onDeleteProduct(record);
              }}
              style={{ color: "red", marginLeft: 12 }}
            />
          </>
        );
      },
    },
  ];



  const onDeleteProduct = (record: any) => {
    Modal.confirm({
      title: "Bạn có chắc xóa bản ghi của sản phẩm này chứ?",
      okText: "Có",
      okType: "danger",
      onOk: () => {
        setIsDeleting(true);
        onDeletingProduct(parseInt(record.id));
      },
    });
  };

  const onEditProduct = (record: any) => {
    setCheckModal(true)
    setIsEditing(true);
    setEditingProduct({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingProduct(null);
  };

  const onEditingProduct = async (product: any) => {
    const url = "http://localhost:8080/api/product/edit";
    await axios.put(url, product);
  }

  const onDeletingProduct = async (id: number) => {
    const url = `http://localhost:8080/api/product/delete/${id}`;
    await axios.delete(url)
  };

  return (
    <AdminLayout>
      <h1 className="text-center mt-2">Quản lý sản phẩm</h1>
      <div>
        <Button
          type="default"
          onClick={() => {
            setOpen(true);
          }}
          className="float-end mt-3 me-2"
        >
          Thêm sản phẩm
        </Button>
        <CollectionCreateForm
          open={open}
          onCreate={onCreate}
          onCancel={() => {
            setOpen(false);
          }}
          brands={brands}
          colors={colors}
        />
      </div>
      <Table columns={columns} dataSource={dataSource?.content}
        pagination={{
          pageSize: dataSource?.size, // Số lượng dòng trên mỗi trang
          total: dataSource?.totalElements, // Tổng số dòng dữ liệu
          current: page + 1, // Trang hiện tại (page đang lấy từ useState)
          onChange: page => setPage(page - 1), // Hàm xử lý khi chuyển trang
        }}
      />
      <Modal
        title={isAdding === true ? "Thêm sản phẩm" : "Chỉnh sửa sản phẩm"}
        visible={checkModal}
        cancelText="Hủy"
        okText={isAdding === true ? "Lưu" : "Lưu thay đổi"}
        onCancel={() => {
          resetEditing();
          setCheckModal(false);
        }}
        onOk={() => {
          // console.log(isAdding)
          // if (isAdding === true) {
          //   onAddProduct(editingProduct);
          // } else {
          setIsEditing(true);
          onEditingProduct(editingProduct);
          // }
          resetEditing();
          setCheckModal(false);
        }}
      >
        <section>
          <div className="mb-3">
            <label htmlFor="name" className="fw-bold">Tên:</label>
            <Input
              id="name"
              value={editingProduct?.name}
              onChange={(e) => {
                setEditingProduct((prev: any) => {
                  return { ...prev, name: e.target.value };
                });
              }}
            />
          </div>

          <Row gutter={16}>
            <Col span={12}>
              <div className="mb-3">
                <label htmlFor="ram" className="fw-bold">RAM:</label>
                <Input
                  value={editingProduct?.ram}
                  onChange={(e) => {
                    setEditingProduct((prev: any) => {
                      return { ...prev, ram: e.target.value };
                    });
                  }}
                />
              </div>
            </Col>
            <Col span={12}>
              <div className="mb-3">
                <label htmlFor="rom" className="fw-bold">ROM:</label>
                <Input
                  value={editingProduct?.rom}
                  onChange={(e) => {
                    setEditingProduct((prev: any) => {
                      return { ...prev, rom: e.target.value };
                    });
                  }}
                />
              </div>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={12}>
              <div className="mb-3">
                <label htmlFor="os" className="fw-bold">Hệ điều hành:</label>
                <Input
                  value={editingProduct?.os}
                  onChange={(e) => {
                    setEditingProduct((prev: any) => {
                      return { ...prev, os: e.target.value };
                    });
                  }}
                />
              </div>
            </Col>
            <Col span={12}>
              <div className="mb-3">
                <label htmlFor="display" className="fw-bold">Màn hình:</label>
                <Input
                  value={editingProduct?.display}
                  onChange={(e) => {
                    setEditingProduct((prev: any) => {
                      return { ...prev, display: e.target.value };
                    });
                  }}
                />
              </div>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={6}>
              <div className="mb-3">
                <label htmlFor="brand" className="fw-bold">Thương hiệu:</label>
                <Select
                  labelInValue
                  defaultValue={{
                    value: brands?.[0]?.id || '',
                    label: brands?.[0]?.name || '',
                  }}
                  onChange={(value) => {
                    const selectedBrandName = brands.find((color: any) => color.id === value); // Tìm thương hiệu dựa trên ID
                    setEditingProduct((prev: any) => {
                      return { ...prev, brand: selectedBrandName }; // Cập nhật thông tin thương hiệu
                    });
                  }}
                  style={{
                    width: 120,
                  }}
                  options={colors?.map((c: any, index: number = 1) => {
                    return { value: c.id, label: c.name };
                  })}
                />
              </div>
            </Col>
            <Col span={6}>
              <div className="mb-3">
                <label htmlFor="color" className="fw-bold">Màu sắc:</label>
                <Select
                  labelInValue
                  defaultValue={{
                    value: colors?.[0]?.id || '',
                    label: colors?.[0]?.name || '',
                  }}
                  onChange={(value) => {
                    const selectedBrandName = colors.find((color: any) => color.id === value); // Tìm thương hiệu dựa trên ID
                    setEditingProduct((prev: any) => {
                      return { ...prev, brand: selectedBrandName }; // Cập nhật thông tin thương hiệu
                    });
                  }}
                  style={{
                    width: 120,
                  }}
                  options={colors?.map((c: any, index: number = 1) => {
                    return { value: c.id, label: c.name };
                  })}
                />
              </div>
            </Col>
            <Col span={12}>
              <div className="mb-3">
                <label htmlFor="price" className="fw-bold">Giá:</label>
                <Input
                  value={editingProduct?.price}
                  onChange={(e) => {
                    setEditingProduct((prev: any) => {
                      return { ...prev, price: e.target.value };
                    });
                  }}
                />
              </div>
            </Col>
          </Row>

          <div className="mb-3">
            <label htmlFor="logo" className="fw-bold">Hình:</label>
            <Input
              value={editingProduct?.logo}
              onChange={(e) => {
                setEditingProduct((prev: any) => {
                  return { ...prev, logo: e.target.value };
                });
              }}
            />
          </div>
        </section>
      </Modal>
    </AdminLayout>
  );
}

export default ProductAdmin;
