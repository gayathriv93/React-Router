import { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
    render() {
        return (<div className="row">
            <div className=" col-lg-3 col-md-4 col-sm-11  p-4 h-75 bg-light  mx-auto my-5  border border-secondary rounded">
                <div className="w-100 text-center fs-1 fst-italic text-primary fw-bold ">logo</div>
                <div className="w-100 mx-5 ">
                    <div className="w-100 ">
                        {/* <label className="mt-3 text-start" for="Uname">Username:</label> */}
                        <input type="text" placeholder="Username" className=" mt-3 w-75" />
                    </div>               <div>
                        {/* <label className="mt-3" for="Pwd">password:</label> */}
                        <input type="password" placeholder="password" className="mt-3 w-75" />
                    </div></div>
                <div className="w-100 mx-5"> <button type="button" className="w-75 rounded btn btn-primary mt-4">Login</button>
                </div>
                <hr />
                <div className="text-center"><small className="text-secondary text-end ">Don't have an account? </small>
                <Link className=" text-start text-primary text-decoration-none" to="/Signup">SignUp</Link>


                </div>
                <div className="text-center m-5"><small className="text-secondary text-end ">already have an account? </small>
                <Link className=" text-start text-primary text-decoration-none" to="/Login">Login</Link>


                </div>

            </div>

        </div>
        )

    }
}
export default Home;