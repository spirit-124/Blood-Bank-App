import React from "react";
import Form from "../../components/shared/Form/Form";
const Register = () => {
  return (
    <>
      <div className="row g-0">
        <div className="col-md-8 form-image">
          <img src="./assets/login-img.svg" alt="" />
        </div>
        <div
          className="col-md-4 form-container
        "
        >
          <Form
            formTittle={"Register Page"}
            submitButton={"Register"}
            formType={"register"}
          />
        </div>
      </div>
    </>
  );
};

export default Register;
