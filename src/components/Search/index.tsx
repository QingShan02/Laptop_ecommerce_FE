"use client"
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
    const rom = ["4GB", "8GB", "16GB", "32GB", "64GB"]
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
    const onSubmit: SubmitHandler<ProductFilter> = (form) => {
        async function init() {
            const { data: result } = await useFetch.post("/api/products/filter", data);
            setProducts(result);
        }
        init();
    }

    // const handleOnchange = (ev: any) => {
    //     const name = ev.target.name;
    //     const value = ev.target.value;
    //     if (name == 'brandid' && value != 0) {
    //         setData("brandid", [value])
    //     }
    //     if (name == 'ram' && value != 0) {
    //         setData("ram", [value])
    //     }
    //     if (name == 'rom' && value != 0) {
    //         setData("rom", [value])
    //     }
    //     if (name == 'os' && value != 0) {
    //         setData("os", [value])
    //     }
    //     if (name == 'display' && value != 0) {
    //         setData("display", [value])
    //     }
    // }
    return (
        <div className="p-3 m-auto bg-white text-dark font-monospace" >
            <div className="container">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row w-75 m-auto">
                        <div className="col">
                            <SelectInput id='brand' defaultValue={0} name="brand" className="form-select" register={register("brandid")} options={
                                data?.brands.map((value, key) => (
                                    {
                                        value: key + 1 + "",
                                        label: value.name
                                    }
                                ))
                            } />
                        </div>
                        <div className="col">
                            <SelectInput id='ram' defaultValue={"0"} name="ram" className="form-select" register={register("ram")} options={
                                ram.map((value) => (
                                    {
                                        value: value,
                                        label: value
                                    }
                                ))
                            } />
                        </div>
                        <div className="col">
                            <SelectInput id='rom' defaultValue={"0"} name="rom" className="form-select" register={register("rom")} options={
                                rom.map((value) => (
                                    {
                                        value: value,
                                        label: value
                                    }
                                ))
                            } />
                        </div>
                        <div className="col">
                            <SelectInput id='display' defaultValue={"0"} name="display" className="form-select" register={register("display")} options={
                                display.map((value) => (
                                    {
                                        value: value,
                                        label: value
                                    }
                                ))
                            } />
                        </div>
                        <div className="col">
                            <SelectInput id='os' defaultValue={"0"} name="os" className="form-select" register={register("os")} options={
                                os.map((value, key) => (
                                    {
                                        key: key,
                                        value: value,
                                        label: value
                                    }
                                ))
                            } />
                        </div>
                        <div className="col-1">
                            <button type="submit" defaultValue={"0"} className="btn btn-default"><i className="bi bi-search"></i>
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