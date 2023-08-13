import { useCookies } from "react-cookie";
import { useForm } from "react-hook-form";
import { LoginProps } from "src/common/types/LoginProps";
import { useFetch } from "src/util/CustomHook";

const LoginAdmin = () => {
    const [cookie, setCookie] = useCookies(['admin']);
    const { register, handleSubmit, formState: { errors } } = useForm<LoginProps>();

    const onSumit = (e: any) => {
        async function init() {
            await useFetch.post("/api/auth/login", e).then(result => {
                if (result.data.admin) {
                    setCookie("admin", JSON.stringify(result.data));
                    window.location.href = "http://localhost:3000/admin"
                }
                if (!result.data.admin) {
                    alert("Không có quyền truy cập !!")
                }
            }).catch(errors => alert(errors.response.data.message))
        }
        init();
    }
    return (
        <>
            <div className="container w-100 mt-5">
                <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab" aria-controls="pills-login" aria-selected="true">Login</a>
                    </li>
                    <li className="nav-item" role="presentation">
                        <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab" aria-controls="pills-register" aria-selected="false">Register</a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form onSubmit={handleSubmit(onSumit)}>
                            <div className="text-center mb-3">
                                <p>Sign in with:</p>
                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-facebook-f" />
                                </button>
                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-google" />
                                </button>
                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-twitter" />
                                </button>
                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-github" />
                                </button>
                            </div>
                            <p className="text-center">or:</p>
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <input type="email" id="loginName" {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Bạn không được bỏ trống"
                                    }
                                })} className="form-control" />
                                <label className="form-label" htmlFor="loginName">Email or username</label>
                            </div>
                            <div className="text-danger mt-1">{errors.email?.message}</div>
                            {/* Password input */}
                            <div className="form-outline mb-4">
                                <input type="password" id="loginPassword" {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Bạn không được bỏ trống mật khẩu"
                                    }
                                })} className="form-control" />
                                <label className="form-label" htmlFor="loginPassword">Password</label>
                            </div>
                            <div className="text-danger mt-1">{errors.password?.message}</div>
                            {/* 2 column grid layout */}
                            <div className="row mb-4">
                                <div className="col-md-6 d-flex justify-content-center">
                                    {/* Checkbox */}
                                    <div className="form-check mb-3 mb-md-0">
                                        <input className="form-check-input" type="checkbox" defaultValue="" id="loginCheck" defaultChecked />
                                        <label className="form-check-label" htmlFor="loginCheck"> Remember me </label>
                                    </div>
                                </div>
                                <div className="col-md-6 d-flex justify-content-center">
                                    {/* Simple link */}
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>
                            {/* Submit button */}
                            <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>
                            {/* Register buttons */}
                            <div className="text-center">
                                <p>Not a member? <a href="#!">Register</a></p>
                            </div>
                        </form>
                    </div>
                    <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                        <form>
                            <div className="text-center mb-3">
                                <p>Sign up with:</p>
                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-facebook-f" />
                                </button>
                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-google" />
                                </button>
                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-twitter" />
                                </button>
                                <button type="button" className="btn btn-link btn-floating mx-1">
                                    <i className="fab fa-github" />
                                </button>
                            </div>
                            <p className="text-center">or:</p>
                            {/* Name input */}
                            <div className="form-outline mb-4">
                                <input type="text" id="registerName" className="form-control" />
                                <label className="form-label" htmlFor="registerName">Name</label>
                            </div>
                            {/* Username input */}
                            <div className="form-outline mb-4">
                                <input type="text" id="registerUsername" className="form-control" />
                                <label className="form-label" htmlFor="registerUsername">Username</label>
                            </div>
                            {/* Email input */}
                            <div className="form-outline mb-4">
                                <input type="email" id="registerEmail" className="form-control" />
                                <label className="form-label" htmlFor="registerEmail">Email</label>
                            </div>
                            {/* Password input */}
                            <div className="form-outline mb-4">
                                <input type="password" id="registerPassword" className="form-control" />
                                <label className="form-label" htmlFor="registerPassword">Password</label>
                            </div>
                            {/* Repeat Password input */}
                            <div className="form-outline mb-4">
                                <input type="password" id="registerRepeatPassword" className="form-control" />
                                <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                            </div>
                            {/* Checkbox */}
                            <div className="form-check d-flex justify-content-center mb-4">
                                <input className="form-check-input me-2" type="checkbox" defaultValue="" id="registerCheck" defaultChecked aria-describedby="registerCheckHelpText" />
                                <label className="form-check-label" htmlFor="registerCheck">
                                    I have read and agree to the terms
                                </label>
                            </div>
                            {/* Submit button */}
                            <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}
export default LoginAdmin;