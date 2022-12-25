import { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {
    render() {
        return (<div className="row">
            <div className=" col-lg-3 col-md-4 col-sm-11 p-4 h-auto bg-light  mx-auto my-5  border border-secondary rounded">
                <div className="w-100 text-center fs-1 fst-italic text-primary fw-bold ">logo</div>
                <div className="w-100  mx-4">
                    {/* <label className="mt-3" for="Uname">Username:</label> */}
                    <input type="text" placeholder="Username" className="m-2 w-75" />
                    {/* <label className="mt-3" for="Pwd">password:</label> */}
                    <input type="password" placeholder="password" className="m-2 w-75" />
                </div>
                <div className="w-100 mx-4"> <button type="button" className="w-75 rounded btn btn-primary mt-4">Login</button>
                </div>
                <hr />
                <div className="text-center"><small className="text-secondary text-end ">Don't have an account? </small>
                    <Link className=" text-start text-primary text-decoration-none" to="/Signup">SignUp</Link>


                </div>
                <div className="text-center"><small className="text-secondary text-end ">Don't have an account? </small>
                    <Link className=" text-start text-primary text-decoration-none" to="/Home">Logout</Link>


                </div>

            </div>

        </div>
        )

    }
}
export default Login;