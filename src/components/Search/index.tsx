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
    const ram = [{ id: "1", value: "4GB" }, { id: "2", value: "8GB" }, { id: "3", value: "16GB" }, { id: "4", value: "32GB" }, { id: "5", value: "64GB" }]
    const rom = [{ id: "1", value: "4GB" }, { id: "2", value: "8GB" }, { id: "3", value: "16GB" }, { id: "4", value: "32GB" }, { id: "5", value: "64GB" }]
    const display = [{ id: "1", value: "13.3 inch" }, { id: "2", value: "14 inch" }, { id: "3", value: "15.6 inch" }]
    const os = [{ id: "1", value: "window 11" }, { id: "2", value: "macOS Big Sur" }]
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
        async function init() {
            const { data: result } = await useFetch.post("/api/products/filter", data);
            setProducts(result);
            console.log(result);

        }
        init();
    }

    return (
        <div className="p-3 m-auto bg-white text-dark font-monospace" >
            <div className="container">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row w-75 m-auto">
                        <div className="col">
                            <SelectInput id='brand' name="brand" className="form-select" register={register("brandid")} options={
                                data?.brands.map((value) => (
                                    {
                                        value: value.id + "",
                                        label: value.name
                                    }
                                ))
                            } />
                        </div>
                        <div className="col">
                            <SelectInput id='ram' name="ram" className="form-select" register={register("ram")} options={
                                ram.map((value) => (
                                    {
                                        value: value.value,
                                        label: value.value
                                    }
                                ))
                            } />
                        </div>
                        <div className="col">
                            <SelectInput id='rom' name="rom" className="form-select" register={register("rom")} options={
                                rom.map((value) => (
                                    {
                                        value: value.value,
                                        label: value.value
                                    }
                                ))
                            } />
                        </div>
                        <div className="col">
                            <SelectInput id='display' name="display" className="form-select" register={register("display")} options={
                                display.map((value) => (
                                    {
                                        value: value.value,
                                        label: value.value
                                    }
                                ))
                            } />
                        </div>
                        <div className="col">
                            <SelectInput id='os' name="os" className="form-select" register={register("os")} options={
                                os.map((value) => (
                                    {
                                        value: value.value,
                                        label: value.value
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
                    <div className="col-4">
                        <Card id={value.id} key={key} className="mt-3" data={value} />
                    </div>
                ))}</div>
            </div>
        </div >
    );
}

export default Search;