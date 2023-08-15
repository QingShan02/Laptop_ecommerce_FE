import { useCookies } from "react-cookie";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginProps } from "src/common/types/LoginProps";
import { useFetch } from "src/util/CustomHook";
import Input from "../components/Input";

const Login = () => {
    const [cookie, setCookie] = useCookies(['user']);
    const { register, handleSubmit, formState: { errors } } = useForm<LoginProps>();
    const onSubmit: SubmitHandler<LoginProps> = (data) => {
        async function init() {
            await useFetch.post("/api/auth/login", data).then(result => {
                // if (data.remember) {
                //     document.cookie = `user=${JSON.stringify(result.data)}`
                // }
                setCookie("user", JSON.stringify(result.data));
                window.location.href = "http://localhost:3000/"
            }).catch(errors => alert(errors.response.data.message))
        }
        init();
    };

    return (
        <>
            <div className="container-fluid bg-white" style={{ paddingBlock: "120px", height: "100vh" }}>
                <div className="row">
                    <div className="col-md-1 col-lg-1"></div>
                    <div className="col-12 col-sm-12 col-md-6 col-lg-7" style={{ backgroundImage: `url(https://e1.pxfuel.com/desktop-wallpaper/782/567/desktop-wallpaper-laptop-repair-computer-shop-background.jpg)`, objectFit: "fill", backgroundRepeat: "no-repeat" }}></div>
                    <div className="col-12 col-sm-12 col-md-4 col-lg-3 bg-white">
                        <form className="m-auto p-4 font-monospace text-dark py-5" onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-center text-uppercase fw-bolder" style={{ fontFamily: 'courier, arial, helvetica' }}>Login</h1>
                            <hr />
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="email">Email address</label>
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
                                <label className="form-label" htmlFor="form2Example2">Password</label>
                                <Input type="password" name="password" id="password" className="form-control" register={register("password", {
                                    required: {
                                        value: true,
                                        message: "Bạn không được bỏ trống"
                                    }
                                })} />
                                <div className="text-danger mt-1">{errors.password?.message}</div>
                            </div>
                            {/* 2 column grid layout for inline styling */}
                            <div className="row mb-4">
                                <div className="col d-flex justify-content-center">
                                    {/* Checkbox */}
                                    <div className="form-check">
                                        <Input className="form-check-input" type="checkbox" name="remember" id="remember" register={register("remember")} />
                                        <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
                                    </div>
                                    {/* Register */}
                                    <div className="form-check">
                                        <a href="/register" className="form-check-label"> Đăng ký </a>
                                    </div>
                                </div>
                            </div>
                            {/* Submit button */}
                            <div className="row">
                                <button type="submit" className="btn btn-default border border-info rounded-3 btn-block mb-4">Sign in</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-1 col-lg-1"></div>
                </div>
            </div>
        </>
    );
}
export default Login;