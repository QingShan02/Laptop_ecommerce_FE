import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Brand } from "src/common/model/Brand";
import { ProductFilter } from "src/common/types/ProductFilterProps";
import { useFetch } from "src/util/CustomHook";
import Card from "../Card";
import SelectInput from "../Select";
import { findBy_Brands_Products } from "src/api/SearchPage/route";
import { Product } from "src/common/model/Product";

interface Data {
    brands: Array<Brand>,
    products: Product[],
    brandid: Array<string>
}

const Search = () => {
    // INIT
    const ram = ["4GB", "8GB", "16GB", "32GB", "64GB"]
    const rom = ['256GB', '512GB', '1TB', '2TB']
    const display = ['13.3 inch', '14 inch', '15.6 inch']
    const os = ['window 11', 'macOS Big Sur']
    // useState
    const [products, setProducts] = useState<Product[]>();
    const [data, setData] = useState<Data>({
        brands: [], products: [], brandid: []
    });
    // useForm
    const { register, setValue, handleSubmit } = useForm<ProductFilter>();
    register("brandid", { value: data.brandid })
    register("ram", { value: ram })
    register("rom", { value: rom })
    register("display", { value: display })
    register("os", { value: os })
    // LOADING
    useEffect(() => {
        findBy_Brands_Products().then((result) => { setData(result); setProducts(result.products) }).catch(error => console.log(error));
    }, []);
    // SUBMIT FORM
    const onSubmit: SubmitHandler<ProductFilter> = (form) => {
        async function init() {
            const { data: result } = await useFetch.post("/api/products/filter", form);
            if(result.length > 0){
                setProducts(result);
            }else setProducts(undefined);
        }
        init();

    }
    const handleOnchange = (ev: any) => {
        const name = ev.target.name;
        const value = ev.target.value;
        if (name == 'brandid' && value != 0) {
            setValue("brandid", [value])
        }
        if (name == 'ram' && value != 0) {
            setValue("ram", [value])
        }
        if (name == 'rom' && value != 0) {
            setValue("rom", [value])
        }
        if (name == 'os' && value != 0) {
            setValue("os", [value])
        }
        if (name == 'display' && value != 0) {
            setValue("display", [value])
        }
    }
    return (
        <div className="p-3 m-auto bg-white text-dark font-monospace" >
            <div className="container">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row w-75 m-auto">
                        <div className="col">
                            <SelectInput defaultValue={0} id='brand' name="brandid" onChange={handleOnchange} className="form-select" options={
                                data?.brands.map((value) => (
                                    {
                                        value: value.id + "",
                                        label: value.name
                                    }
                                ))
                            } />
                        </div>
                        <div className="col">
                            <SelectInput defaultValue={0} id='ram' name="ram" className="form-select" onChange={handleOnchange} options={
                                ram.map((value) => (
                                    {
                                        value: value,
                                        label: value
                                    }
                                ))
                            } />
                        </div>
                        <div className="col">
                            <SelectInput defaultValue={0} id='rom' name="rom" className="form-select" onChange={handleOnchange} options={
                                rom.map((value) => (
                                    {
                                        value: value,
                                        label: value
                                    }
                                ))
                            } />
                        </div>
                        <div className="col">
                            <SelectInput defaultValue={0} id='display' name="display" className="form-select" onChange={handleOnchange} options={
                                display.map((value) => (
                                    {
                                        value: value,
                                        label: value
                                    }
                                ))
                            } />
                        </div>
                        <div className="col">
                            <SelectInput defaultValue={0} id='os' name="os" className="form-select" onChange={handleOnchange} options={
                                os.map((value) => (
                                    {
                                        value: value,
                                        label: value
                                    }
                                ))
                            } />
                        </div>
                        <div className="col-1">
                            <button type="submit" className="btn btn-default"><i className="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
                <div className="row w-100">
                    {products ? products.map((value, key) => (
                        <div className="col-4">
                            <Card id={value.id} key={key} className="mt-3" data={value} />
                        </div>
                    )) : <h3 className="text-danger text-center mt-5 fw-bold">Không tìm thấy sản phẩm</h3>}
                </div>
            </div>
        </div >
    );
}

export default Search;