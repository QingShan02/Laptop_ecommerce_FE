import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { delete_Brands, findById_Brands, save_Brands, update_Brands } from "src/api/Brands/route";
import { Brand } from "src/common/model/Brand";
import Input from "src/components/Input";
import { useQuery } from "src/util/CustomHook";

type Props = {
    id: string | null,
    showEdit: string;
}

const BrandDetail = ({ ...props }: Props) => {
    const [brand, setBrand] = useState<Brand>();
    const query = useQuery();
    const [flag, setFlag] = useState("");

    useEffect(() => {
        if (props.id) {
            findById_Brands(props.id).then(resp => {
                setBrand(resp)
            }).catch(error => console.log(error.message));
        }
    }, [props.id]);

    // SUBMIT FORM
    const { register, handleSubmit, setFocus } = useForm<Brand>();
    const onSubmit: SubmitHandler<Brand> = (data) => {
        data.id = query.get("id");
        if (flag === "create") {
            save_Brands(data).then(status => {
                status === 200 ? window.location.href = "/admin/brands"
                    : alert("Lỗi tạo không thành công !")
            })
        }
        if (flag === "update") {
            update_Brands(query.get("id"), data).then(status => {
                status === 200 ? window.location.href = "/admin/brands"
                    : alert("Lỗi cập nhật không thành công !")
            })
        }
        if (flag === "delete") {
            delete_Brands(query.get("id")).then(status => {
                status === 200 ? window.location.href = "/admin/brands"
                    : alert("Lỗi xoá không thành công !")
            })
        }
        console.log(data);

    }
    setFocus("logo", { shouldSelect: true })
    setFocus("name", { shouldSelect: true })

    return (
        <div className="row mt-3">
            <h3 className="text-center">Thông tin thương hiệu</h3>
            <div className="p-0">
                <div className="row py-3">
                    <div className="col-4">
                        <p className="w-100 text-end">Tên thương hiệu:</p>
                        <p className="w-100 text-end pt-2">Logo:</p>
                    </div>
                    <div className="col-8">
                        <form action="" onSubmit={handleSubmit(onSubmit)} className="w-50 ps-3">
                            <Input type="text" register={register("name")} defaultValue={brand?.name} name="name" className="form-control mb-2" />
                            <Input type="text" register={register("logo")} defaultValue={brand?.logo} name="logo" className="form-control" />

                            {props.showEdit === "create" && <>
                                <button type="submit" onClick={() => setFlag("create")} className="btn btn-outline-primary mt-2 me-2">Tạo</button>
                            </>}

                            {props.showEdit === "edit" && <>
                                <button type="submit" onClick={() => setFlag("update")} className="btn btn-primary mt-2 me-2">Cập nhật</button>
                                <button type="submit" onClick={() => setFlag("delete")} className="btn btn-danger mt-2 me-2" >Xoá</button>
                            </>}
                            <button type="button" className="btn btn-outline-danger mt-2 me-2" onClick={() => window.location.href = "/admin/brands"}>Thoát</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandDetail;