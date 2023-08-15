import { useCookies } from "react-cookie";
import { SubmitHandler, useForm } from "react-hook-form";
import { RegisterProps } from "src/common/types/RegisterProps";
import { useFetch } from "src/util/CustomHook";
import Input from "../components/Input";

const Register = () => {
    const [cookie, setCookie] = useCookies(['user']);
    const { register, handleSubmit, formState: { errors } } = useForm<RegisterProps>();
    const onSubmit: SubmitHandler<RegisterProps> = (data) => {

        async function init() {
            if (data.password === data.repassword) {
                await useFetch.post("/api/auth/register", data).then(result => {
                    alert("Đăng ký thành công !")
                    setCookie("user", JSON.stringify(result.data))
                    window.location.href = "http://localhost:3000/"
                }).catch(errors => alert(errors.response.data.message))
            } else {
                alert("Mật không đúng !")
            }
        }
        init();
    };

    return (
        <>
            <div className="container-fluid bg-white" style={{ paddingBlock: "20px", height: "100vh" }}>
                <div className="row">
                    <div className="col-md-1 col-lg-1"></div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-4 bg-white">
                        <form className="m-auto p-4 font-monospace text-dark py-5" onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-center text-uppercase fw-bolder" style={{ fontFamily: 'courier, arial, helvetica' }}>Đăng ký</h1>
                            <hr />
                            {/* Fullname input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="email">Họ và tên:</label>
                                <Input type="text" name="fullname" id="fullname" className="form-control" register={register("fullname", {
                                    required: {
                                        value: true,
                                        message: "Bạn không được bỏ trống"
                                    }
                                })} />
                                <div className="text-danger mt-1">{errors.fullname?.message}</div>
                            </div>
                            {/* Phone input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="phone">Số điện thoại:</label>
                                <Input type="text" name="phone" id="phone" className="form-control" register={register("phone", {
                                    required: {
                                        value: true,
                                        message: "Bạn không được bỏ trống"
                                    }
                                })} />
                                <div className="text-danger mt-1">{errors.fullname?.message}</div>
                            </div>
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="email">Email:</label>
                                <Input type="email" name="email" id="email" className="form-control" register={register("email", {
                                    required: {
                                        value: true,
                                        message: "Bạn không được bỏ trống"
                                    }
                                })} />
                                <div className="text-danger mt-1">{errors.email?.message}</div>
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example2">Mật khẩu: </label>
                                <Input type="password" name="password" id="password" className="form-control" register={register("password", {
                                    required: {
                                        value: true,
                                        message: "Bạn không được bỏ trống"
                                    }
                                })} />
                                <div className="text-danger mt-1">{errors.password?.message}</div>
                            </div>
                            {/* RePassword input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example2">Nhập lại mật khẩu: </label>
                                <Input type="password" name="repassword" id="repassword" className="form-control" register={register("repassword", {
                                    required: {
                                        value: true,
                                        message: "Bạn không được bỏ trống"
                                    }
                                })} />
                                <div className="text-danger mt-1">{errors.repassword?.message}</div>
                            </div>
                            {/* Submit button */}
                            <div className="row">
                                <button type="submit" className="btn btn-default border border-info rounded-3 btn-block mb-4">Đăng ký</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-6" style={{ backgroundImage: `url(https://e1.pxfuel.com/desktop-wallpaper/782/567/desktop-wallpaper-laptop-repair-computer-shop-background.jpg)`, objectFit: "fill", backgroundRepeat: "no-repeat" }}></div>
                    <div className="col-md-1 col-lg-1"></div>
                </div>
            </div>
        </>
    );
}
export default Register;