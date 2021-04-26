import { useState } from "react";
import Swal from 'sweetalert2';
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);



const Signup = () => {

    const [formdata, setFormdata] = useState({ name: '', email: '', password: '' });

    const cssStyle = {
        card: {
            marginTop: '10%',
            border: 'none',
            boxShadow: '1px 4px 10px -2px rgba(0, 0, 0, 0.452)'
        },
        form: {
            padding: '35px'
        }
    }

    const handleSubmit = () => {

        MySwal.fire({
            icon: 'success',
            title: 'Hurray!!',
            text: 'We Won!!'
        })

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        setFormdata({ name, email, password });
        console.log(formdata);
    }

    return (
        <div className="col-md-6 mx-auto">
            <div className="card" style={cssStyle.card}>

                <div className="card-body">

                    <div className="row">
                        <div className="col-md">
                            <form style={cssStyle.form}>

                                <h3 className="text-center">Register Here</h3>

                                <label className="mt-5">Name</label>
                                <input type="text" className="form-control" id="name" />

                                <label className="mt-4">Email</label>
                                <input type="text" className="form-control" id="email" />

                                <label className="mt-4">Password</label>
                                <input type="text" className="form-control" id="password" />

                                <div className="text-center">
                                    <button type="button" className="btn btn-warning mt-5 w-100" onClick={handleSubmit}>Submit</button>
                                </div>

                                <p className="mt-3 text-center">Already Registered? <a href="loginpage.html">Login Here</a></p>

                            </form>
                        </div>
                        <div className="col-md">

                        </div>
                    </div>

                </div>
            </div>

            <div className="card">
                <div className="card-body">
                    <h3>Name : {formdata.name}</h3>
                    <h3>Email : {formdata.email}</h3>
                    <h3>Password : {formdata.password}</h3>
                </div>
            </div>
        </div>
    )
}

export default Signup;