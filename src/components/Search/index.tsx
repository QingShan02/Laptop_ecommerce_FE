import axios from "axios";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Brand } from "src/common/model/Brand";
import { ProductFilter } from "src/common/types/ProductFilterProps";
import SelectInput from "../Select";
import filterService from "src/services/filter.service";
import Card from "../Card";

const Search = () => {
    // INIT
    const ram = [{ id: "1", value: "4GB" }, { id: "2", value: "8GB" }, { id: "3", value: "16GB" }, { id: "4", value: "32GB" }, { id: "5", value: "64GB" }]
    const rom = [{ id: "1", value: "4GB" }, { id: "2", value: "8GB" }, { id: "3", value: "16GB" }, { id: "4", value: "32GB" }, { id: "5", value: "64GB" }]
    const display = [{ id: "1", value: "13.3 inch" }, { id: "2", value: "14 inch" }, { id: "3", value: "15.6 inch" }]
    const os = [{ id: "1", value: "window 11" }, { id: "2", value: "macOS Big Sur" }]
    // useState
    const [products, setProducts] = useState<Product[]>();
    const [brands, setBrands] = useState<Brand[]>([{
        id: "",
        name: "",
        logo: ""
    }]);
    // useForm
    const { register, handleSubmit } = useForm<ProductFilter>();
    // LOADING BRAND
    useEffect(() => {
        axios
            .get("http://localhost:8080/api/brands")
            .then((response) => {
                setBrands(response.data);
            })
            .catch((error) => {
                console.log('error', error)
            });
        axios
            .get("http://localhost:8080/api/products")
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log('error', error)
            })

    }, []);
    // SUBMIT FORM
    const onSubmit: SubmitHandler<ProductFilter> = (data) => {
        filterService.filter(data)
            .then((product) => (setProducts(product)))
            .catch(errors => console.log(errors));
    }
    // TESTING
    console.log(products);

    return (
        <div className="p-3 m-auto bg-white text-dark font-monospace" >
            <div className="container">
                <form action="" onSubmit={handleSubmit(onSubmit)}>
                    <div className="row w-75 m-auto">
                        <div className="col">
                            <SelectInput id='brand' name="brand" className="form-select" register={register("brandid")} options={
                                brands.map((value) => (
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
                <div className="row w-100 mt-3">{products?.map((value, key) => (
                    <Card id={value.id} key={key} className="col-4" data={value} />
                ))}</div>
            </div>
        </div >
    );
}

export default Search;