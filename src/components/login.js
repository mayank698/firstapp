import { Formik } from "formik";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../providers/userContext";

const Login = () => {
  const userService = useContext(UserContext);

  const loginForm = {
    email: "",
    password: "",
  };

  const onFormSubmit = (value, { setSubmitting }) => {
    console.log(value);
    setSubmitting = true;

    userService.getUserByEmail(value.email).then((userdata) => {
      if (userdata) {
        if (value.password == userdata.password) {
          alert("login success");
        } else {
          alert("password is invalid");
        }
      } else {
        alert("email not valid");
      }

      setSubmitting = false;
    });
  };

  return (
    <div className="col-md-6 mx-auto">
      <div className="card">
        <div className="card-body">
          <Formik initialValues={loginForm} onSubmit={onFormSubmit}>
            {({ values, handleChange, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <h3 className="text-center">Login Here</h3>

                <label className="mt-4">Email</label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  onChange={handleChange}
                  value={values.email}
                />

                <label className="mt-4">Password</label>
                <input
                  type="text"
                  className="form-control"
                  id="password"
                  onChange={handleChange}
                  value={values.password}
                />

                <div className="text-center">
                  <button className="btn btn-warning mt-5 w-100">Submit</button>
                </div>

                <p className="mt-3 text-center">
                  Register Instead? <Link to="/register">Here</Link>
                </p>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
