import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Users from "src/common/model/Users";
import AuthService from "src/services/auth.service";
import Input from "../Input";
type FormValues = {
    email: string,
    password: string,
    remember: boolean
}
const Login = () => {
    const [user, setUser] = useState<Users>()
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        AuthService.login(data).then(
            (user) => {
                if (data.remember) {
                    localStorage.setItem("user", JSON.stringify(user));
                    sessionStorage.setItem("user", JSON.stringify(user));
                }
                setUser(user);
                window.location.href = "http://localhost:3000/"
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                alert(resMessage)
            }
        )
    };
    // #TEST
    // console.log(sessionStorage.getItem("user"));
    // console.log(localStorage.getItem("user"));
    console.log(user);

    return (
        <>
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
                            </div>
                            <i className="col">
                                {/* Simple link */}
                                <a href="/forgot">Forgot password?</a>
                            </i>
                        </div>
                        {/* Submit button */}
                        <div className="row">
                            <button type="submit" className="btn btn-default border border-info rounded-3 btn-block mb-4">Sign in</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-1 col-lg-1"></div>
            </div>
        </>
    );
}
export default Login;