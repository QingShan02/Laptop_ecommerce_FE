import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { findById_Brands } from "src/api/Brands/route";
import { Brand } from "src/common/model/Brand";
import Input from "src/components/Input";
type Props = {
    id: string | null
}
const BrandDetail = ({ ...props }: Props) => {
    const [brand, setBrand] = useState<Brand>();
    useEffect(() => {
        findById_Brands(props.id).then(resp => {
            setBrand(resp)
        }).catch(error => console.log(error));
    }, []);
    // SUBMIT FORM
    const { register, handleSubmit } = useForm<Brand>();
    const onSubmit: SubmitHandler<Brand> = (data) => {
        console.log(data);

        // async function init() {
        //     const { data: result } = await useFetch.post("/api/brand/save", data);
        //     setBrand(result);
        // }
        // init();
    }
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
                            {/* <Input type="hidden" className="" register={register("id")} value={brand?.id + ""} /> */}
                            <Input type="text" register={register("name")} name="name" value={brand?.name} className="form-control mb-2" />
                            <Input type="text" register={register("logo")} name="logo" value={brand?.logo} className="form-control" />
                            <button type="submit" className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandDetail;