import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { findById_Users } from "src/api/Customers/route";
import Users from "src/common/model/Users";
import Input from "src/components/Input";

type Props = {
    id: string | null
}
const UserDetail = (props: Props) => {
    const [user, setUser] = useState<Users>();
    useEffect(() => {
        findById_Users(props.id).then(resp => {
            setUser(resp)
        }).catch(error => console.log(error));
    }, []);
    const { register, handleSubmit } = useForm<Users>();
    const onSubmit: SubmitHandler<Users> = (data) => {
        console.log(data);


    }
    return (
        <div className="row mt-3">
            <h3 className="text-center">User Settings</h3>
            <div className="p-0">
                <div className="row py-3">
                    <div className="col-4">
                        <p className="w-100 text-end">Họ và Tên:</p>
                        <p className="w-100 text-end pt-2">Email:</p>
                        <p className="w-100 text-end pt-2">Mật Khẩu:</p>
                        <p className="w-100 text-end pt-2">Số Điện Thoại:</p>
                        <p className="w-100 text-end pt-2">Vai Trò:</p>
                    </div>
                    <div className="col-8">
                        <form action="" onSubmit={handleSubmit(onSubmit)} className="w-50 ps-3">
                            <Input type="text" register={register("fullname")} name="fullname" value={user?.fullname} className="form-control mb-2" />
                            <Input type="email" register={register("email")} name="email" value={user?.email} className="form-control mb-2" />
                            <Input type="password" register={register("password")} name="password" value={user?.password} className="form-control mb-2" />
                            <Input type="number" register={register("phone")} name="phone" value={user?.phone} className="form-control mb-2" />
                            <div className="form-check form-check-inline">
                                <Input type="radio" register={register("admin")} name="phone" value={1} className="form-check-input mb-2" checked={user?.admin ? true : false || user === undefined} />
                                <label className="form-check-label" >Admin</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Input type="radio" register={register("admin")} name="phone" value={0} className="form-check-input mb-2" checked={user?.admin === false ? true : false || user === undefined} />
                                <label className="form-check-label" >Customer</label>
                            </div>
                            {user == null && <button type="submit" className="btn btn-primary">Create</button>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetail;