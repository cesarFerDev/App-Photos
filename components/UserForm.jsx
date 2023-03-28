import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { logIn, updateUser, logOut } from "../features/user/UserSlice";



export const UserForm = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let user = useSelector((state) => state.user);

    const logInSubmitHandler = (event) => {
        event.preventDefault();
        let userName = event.target.username.value;
        let password = event.target.password.value;
        dispatch(logIn({name: userName, password: password, logged: true}));
        navigate("/my-photos");
    }

    const updateSubmitHandler = (event) => {
        event.preventDefault();
        let userName = event.target.username.value;
        let password = event.target.password.value;
        dispatch(updateUser({name: userName, password: password, logged: true}));
        navigate("/my-photos");
    }

    const logOutClickHandler = (event) => {
        dispatch(logOut());
    }

    if (user.logged) {
        return (
            <div>
                <img />
                <form onSubmit={updateSubmitHandler} action="">
                    <label htmlFor="username">UserName</label>
                    <input type="text" id="username" name="username" value={user.username}/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"/>
                    <button type="submit">Update Info</button>
                </form>
                <button onClick={logOutClickHandler}>Log Out</button>
            </div>
        )
    } else {
        return (
            <div>
                <form onSubmit={logInSubmitHandler} action="">
                    <label htmlFor="username">UserName</label>
                    <input type="text" id="username" name="username"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"/>
                    <button type="submit">Log In</button>
                </form>
            </div>
        )
    }
}