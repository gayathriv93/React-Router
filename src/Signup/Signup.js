import { Component } from "react";
import { Link } from "react-router-dom";

class SignUp extends Component {
    render() {
        return (<div className="container">
            <div className=" col-lg-6 col-md-4 col-sm-12 p-2 h-auto bg-light  mx-auto my-5  border border-secondary rounded">
                <div className="w-100 text-center fs-1 fst-italic text-primary fw-bold ">SignUp</div>
                <form>
                    <div className="w-100  m-3">
                        <input className="ms-5 text-center" type="text" placeholder="Firstname" required />
                        <input className="ms-5 text-center" type="text" placeholder="Secondname" required />

                    </div>
                    <div className="w-100  m-3">
                        <input className="ms-5 text-center" type="email" placeholder="EmailID" required />
                        <input className="ms-5 text-center" type="password" placeholder="password" required />

                    </div>
                    <div className="w-100  m-3">
                        <input className="ms-5 text-center" type="tel" placeholder="Mobile" required />
                        <input className="ms-5 text-center" type="tel" placeholder="Alternate Mobile" />

                    </div>
                    <label className="fw-bold fs-6 text-info mx-5 " for="address">Address:</label>
                    <div className="w-100  m-3">
                        <input className="ms-5 mb-3 text-center" type="text" placeholder="Doorno" />

                        <input className="ms-5 mb-3 text-center" type="text" placeholder="Street" />
                        <input className="ms-5 mb-3 text-center" type="text" placeholder="district" />
                        <input className="ms-5 mb-3 text-center" type="text" placeholder="state" />
                        <input className="ms-5 mb-3 text-center" type="text" placeholder="country" />
                        <input className="ms-5 mb-3 text-center" type="text" placeholder="Pincode" />

                    </div>

                    <div className="w-100 text-center ">
                        <Link className=" text-start text-primary text-decoration-none" to="/">Submit</Link>
                    </div>

                </form>            
                <div className="text-center m-5"><small className="text-secondary text-end ">already have an account? </small>
                    <Link className=" text-start text-primary text-decoration-none" to="/Login">Login</Link>


                </div>
            </div>

        </div>)
    }
}

export default SignUp;