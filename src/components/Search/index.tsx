import axios from "axios";
import { useEffect, useState } from "react";
import { Brand } from "src/common/model/Brand";
import { Product } from "src/common/model/Product";
import filterPrService from "src/services/filterPr.service";
import SelectInput from "../Select";

interface ProductFilter {
    ram: string,
    rom: string,
    brandid: string,
    os: string,
    display: string
}

const Search = () => {
    const [filter, setFilter] = useState<ProductFilter>({
        ram: "",
        rom: "",
        brandid: "",
        os: "",
        display: ""
    });
    const [brands, setBrands] = useState<Brand[]>([{
        id: "",
        name: "",
        logo: ""
    }]);
    const [data, setData] = useState<Product[]>([]);
    // 
    useEffect(() => {
        axios
            .get("http://localhost:8080/api/brands")
            .then((response) => {
                setBrands(response.data);
            })
            .catch((error) => {
                console.error(error);
            })
    }, []);
    // 
    const handleBrandId = (value: string) => {
        setFilter(filter => ({
            ...filter,
            brandid: value,
        }));
        console.log(value);
    };
    const handleRam = (value: string) => {
        setFilter(filter => ({
            ...filter,
            ram: value,
        }));
    };
    const handleRom = (value: string) => {
        setFilter(filter => ({
            ...filter,
            rom: value,
        }));
    };
    const handleOs = (value: string) => {
        setFilter(filter => ({
            ...filter,
            os: value,
        }));
    };
    const handleDisplay = (value: string) => {
        setFilter(filter => ({
            ...filter,
            display: value,
        }));
    };
    const handleSubmit = () => {
        filterPrService.filter(filter).then(
            (item) => setData(item), error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                alert(resMessage)
            })
    }
    console.log(data);

    return (
        <div className="p-3 m-auto bg-white text-dark font-monospace">
            <div className="container">
                <div className="row w-75 m-auto">
                    <div className="col">
                        <SelectInput className="w-100" id="brandid" placeholder="Brand" onChange={handleBrandId} options={
                            brands.map((value, key) => (
                                {
                                    value: key + 1 + "",
                                    label: value.name
                                }
                            ))
                        } />
                    </div>
                    <div className="col">
                        <SelectInput className="w-100" id="os" placeholder="Operating System" onChange={handleOs} options={[
                            {
                                value: 'macOS Big Sur',
                                label: 'MacOS Big Sur',
                            },
                            {
                                value: 'window 11',
                                label: 'Window 11',
                            }
                        ]}
                        />
                    </div>
                    <div className="col">
                        <SelectInput className="w-100" id="display" placeholder="Display" onChange={handleDisplay} options={[
                            {
                                value: '13.3 inch',
                                label: '13.3 inch',
                            },
                            {
                                value: '14 inch',
                                label: '14 inch',
                            },
                            {
                                value: '15.6 inch',
                                label: '15.6 inch',
                            }
                        ]}
                        />
                    </div>
                    <div className="col">
                        <SelectInput className="w-100" id="rom" placeholder="Rom" onChange={handleRom} options={[
                            {
                                value: '256GB',
                                label: '256GB',
                            },
                            {
                                value: '512GB',
                                label: '512GB',
                            }
                        ]}
                        />
                    </div>
                    <div className="col">
                        <SelectInput className="w-100" id="ram" placeholder="Ram" onChange={handleRam} options={[
                            {
                                value: '8GB',
                                label: '8GB',
                            },
                            {
                                value: '16GB',
                                label: '16GB',
                            }
                        ]}
                        />
                    </div>
                    <div className="col-1">
                        <button type="button" className="w-100 btn" onClick={handleSubmit}><i className="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Search;