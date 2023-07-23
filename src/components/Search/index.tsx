import axios from "axios";
import { useEffect, useState } from "react";

interface Brand {
    id: number,
    name: string,
    logo: string
}

const Search = () => {
    const [values, setValues] = useState<Brand[]>([]);
    useEffect(() => {
        axios
            .get("http://localhost:8080/api/brand/findAll")
            .then((response) => {
                setValues(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="p-3 m-auto bg-white text-dark font-monospace">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-10 col-md-8">
                        <h3>Mức giá</h3>
                        <div className="row row-cols-4">
                            <div className="col form-check form-check-inline">
                                <input className="form-check-input" defaultChecked type="radio" name="inlineRadioOptions" id="inlineRadio1" defaultValue="option1" />
                                <label className="form-check-label" htmlFor="inlineRadio1">Tất cả</label>
                            </div>
                            <div className="col form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" defaultValue="option2" />
                                <label className="form-check-label" htmlFor="inlineRadio2">Dưới 10 Triệu</label>
                            </div>
                            <div className="col form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" defaultValue="option3" />
                                <label className="form-check-label" htmlFor="inlineRadio3">Từ 10 - 15 Triệu</label>
                            </div>
                            <div className="col form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio4" defaultValue="option4" />
                                <label className="form-check-label" htmlFor="inlineRadio4">Từ 15 - 20 Triệu</label>
                            </div>
                            <div className="col form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio5" defaultValue="option5" />
                                <label className="form-check-label" htmlFor="inlineRadio5">Từ 20 - 25 Triệu</label>
                            </div>
                            <div className="col form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio6" defaultValue="option6" />
                                <label className="form-check-label" htmlFor="inlineRadio6">Trên 25 Triệu</label>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <h3>Thương hiệu</h3>
                        <select className="form-select me-3" aria-label="Default select example">
                            <option value="findAll">Tất cả</option>
                            {values.map((brand, key) => (
                                <option value={brand.id} key={key}>{brand.name}</option>
                            ))}
                        </select>
                    </div>

                </div>
            </div>
        </div>

    );
}

export default Search;