import { Button } from "@material-ui/core";
import { Formik } from "formik";
import { useContext } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../providers/userContext";

const Register = () => {
  const userService = useContext(UserContext);

  const registerForm = {
    username: "",
    email: "",
    password: "",
  };

  const onFormSubmit = (value, { setSubmitting }) => {
    console.log(value);
    setSubmitting = true;

    userService.addUser(value);

    Swal.fire({
      icon: "success",
      title: "Welldone!",
      text: "You have successfully registered",
    });
  };

  return (
    <div className="col-md-6 mx-auto">
      <div className="card">
        <div className="card-body">
          <Formik initialValues={registerForm} onSubmit={onFormSubmit}>
            {({ values, handleChange, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <h3 className="text-center">Register Here</h3>

                <label className="mt-5">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  onChange={handleChange}
                  value={values.username}
                />

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
                  <Button
                    className="mt-5 w-100"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </div>

                <p className="mt-3 text-center">
                  Already Registered? <a href="loginpage.html">Login Here</a>
                </p>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Register;
