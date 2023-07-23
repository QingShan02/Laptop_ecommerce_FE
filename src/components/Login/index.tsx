import { useState } from "react";
import Users from "src/common/model/Users";
import { LoginProps } from "src/common/types/LoginProps";
import AuthService from "src/services/auth.service";

const Login = () => {
    const [user, setUser] = useState<Users>();
    const [inputs, setInputs] = useState<LoginProps>({ email: '', password: '', remember: false });
    const handleChange = (event: any) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value,
        }));
    };
    const handleRemember = (event: any) => {
        const name = event.target.name;
        const value = event.target.checked;
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value,
        }));
    }
    const handleSubmit = (event: any) => {
        event.preventDefault();
        AuthService.login(inputs.email, inputs.password).then(
            (user) => {
                setUser(user)
                localStorage.setItem("user", JSON.stringify(user));
            },
            error => {
                const resMessage =
                    (error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString();
                console.log(resMessage);
            }
        )
    };
    console.log(user);

    return (
        <>
            <div className="row">
                <div className="col"></div>
                <div className="col-8 col-sm-6 col-md-4 col-lg-3">
                    <form className="m-auto font-monospace text-dark pb-5" onSubmit={handleSubmit}>
                        <h1 className="text-center text-uppercase fw-bolder" style={{ fontFamily: 'courier, arial, helvetica' }}>Login</h1>
                        <hr />
                        {/* Email input */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="email">Email address</label>
                            <input type="email" onChange={handleChange} name="email" id="email" className="form-control" />
                        </div>
                        {/* Password input */}
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example2">Password</label>
                            <input type="password" onChange={handleChange} name="password" id="password" className="form-control" />
                        </div>
                        {/* 2 column grid layout for inline styling */}
                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                                {/* Checkbox */}
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" onChange={handleRemember} name="remember" id="remember" />
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
                        {/* Register buttons */}
                        <div className="text-center">
                            <p>Not a member? <i><a href="/remember">Register</a></i></p>
                            <p>or sign up with:</p>
                            <button type="button" className="btn btn-link btn-floating border border-info mx-1">
                                <i className="bi bi-facebook"></i>
                            </button>
                            <button type="button" className="btn btn-link btn-floating border border-info mx-1">
                                <i className="bi bi-google"></i>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col"></div>
            </div>
        </>
    );
}
export default Login;