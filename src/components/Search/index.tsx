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
    brands: Brand[],
    products: Product[]
}

const Search = () => {
    // INIT
    const ram = ["4GB", "8GB", "16GB", "32GB", "64GB"]
    const rom = ["256GB", "512GB", "1TB", "2TB"]
    const display = ["13.3 inch", "14 inch", "15.6 inch"]
    const os = ["window 11", "macOS Big Sur"]
    // useState
    const [products, setProducts] = useState<Product[]>();
    const [data, setData] = useState<Data>({ brands: [], products: [] });
    // useForm
    const { register, handleSubmit } = useForm<ProductFilter>();
    // LOADING
    useEffect(() => {
        findBy_Brands_Products().then((result) => { setData(result); setProducts(result.products) }).catch(error => console.log(error));
    }, []);
    // SUBMIT FORM
    const onSubmit: SubmitHandler<ProductFilter> = (data) => {
        if (data.brandid === "") data.brandid = null;
        if (data.display === "") data.display = null;
        if (data.os === "") data.os = null;
        if (data.ram === "") data.ram = null;
        if (data.rom === "") data.rom = null;

        async function init() {
            const { data: result } = await useFetch.post("/api/products/filter", data);
            setProducts(result);
        }
        init();
    }

    return (
        <div className="p-3 m-auto bg-white text-dark font-monospace" >
            <div className="container">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row w-75 m-auto">
                        <div className="col">
                            <SelectInput id='brand' defaultValue={""} name="brand" className="form-select" register={register("brandid")} options={
                                data?.brands.map((value, key) => (
                                    {
                                        value: key + 1,
                                        label: value.name
                                    }
                                ))
                            } />
                        </div>
                        <div className="col">
                            <SelectInput id='ram' defaultValue={""} name="ram" className="form-select" register={register("ram")} options={
                                ram.map((value) => (
                                    {
                                        value: value,
                                        label: value
                                    }
                                ))
                            } />
                        </div>
                        <div className="col">
                            <SelectInput id='rom' defaultValue={""} name="rom" className="form-select" register={register("rom")} options={
                                rom.map((value) => (
                                    {
                                        value: value,
                                        label: value
                                    }
                                ))
                            } />
                        </div>
                        <div className="col">
                            <SelectInput id='display' defaultValue={""} name="display" className="form-select" register={register("display")} options={
                                display.map((value) => (
                                    {
                                        value: value,
                                        label: value
                                    }
                                ))
                            } />
                        </div>
                        <div className="col">
                            <SelectInput id='os' defaultValue={""} name="os" className="form-select" register={register("os")} options={
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
                <div className="row w-100">{products?.map((value, key) => (
                    <div key={key} className="col-4">
                        <Card id={value.id} className="mt-3" data={value} />
                    </div>
                ))}</div>
            </div>
        </div >
    );
}

export default Search;