"use client"
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Brand } from "src/common/model/Brand";
import { ProductFilter } from "src/common/types/ProductFilterProps";
import { useFetch } from "src/util/CustomHook";
import Card from "../../components/Card";
import SelectInput from "../../components/Select";
import { findBy_Brands_Products } from "src/api/SearchPage/route";
import { Product } from "src/common/model/Product";
import { Link } from "react-router-dom";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { AiFillFastBackward, AiFillFastForward, AiFillForward, AiOutlineBackward } from "react-icons/ai";

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
    const [products, setProducts] = useState<any>();
    const [flag, setFlag] = useState("list");
    const [filter, setFilter] = useState<Product[]>();
    const [data, setData] = useState<Data>({ brands: [], products: [] });
    const [page, setPage] = useState(0);
    // useForm
    const { register, handleSubmit } = useForm<ProductFilter>();
    // LOADING
    useEffect(() => {
        findBy_Brands_Products(page).then((result) => {
            setData(result);
            setProducts(result.products)
        }).catch(error => console.log(error));
    }, [page]);
    // SUBMIT FORM
    const onSubmit: SubmitHandler<ProductFilter> = (data) => {
        if (data.brandid === "") data.brandid = null;
        if (data.display === "") data.display = null;
        if (data.os === "") data.os = null;
        if (data.ram === "") data.ram = null;
        if (data.rom === "") data.rom = null;

        async function init() {
            const { data: result } = await useFetch.post("/api/products/filter", data);
            setFilter(result);
            setFlag("filter")
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
                {flag === "list" &&
                    <>
                        <div className="row w-100">{products?.content?.map((value: any, key: any) => (
                            <div key={key} className="col-4">
                                <Card id={value.id} className="mt-3" data={value} />
                            </div>
                        ))}</div>
                        <div className="row mt-1">
                            <span className="text-center">
                                <button style={{ fontSize: "30px" }} onClick={() => { setPage(0) }} className="btn text-primary border-0 me-3"><AiFillFastBackward /></button>
                                <button style={{ fontSize: "30px" }} onClick={() => { if (page > 0) setPage(page - 1) }} className="btn text-primary border-0 me-3"><AiOutlineBackward /></button>
                                <button style={{ fontSize: "30px" }} onClick={() => { if (page < products.totalPages - 1) setPage(page + 1) }} className="btn text-primary border-0 me-3"><AiFillForward /></button>
                                <button style={{ fontSize: "30px" }} onClick={() => { setPage(products.totalPages - 1) }} className="btn text-primary border-0"><AiFillFastForward /></button>
                            </span>
                        </div>
                    </>
                }
                {flag === "filter" &&
                    <>
                        <div className="row w-100">{filter?.map((value, key) => (
                            <div key={key} className="col-4">
                                <Card id={value.id} className="mt-3" data={value} />
                            </div>
                        ))}</div>
                    </>
                }
            </div>
        </div >
    );
}

export default Search;