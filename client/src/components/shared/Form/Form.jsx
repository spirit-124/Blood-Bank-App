import React, { useState } from "react";
import InputType from "../InputType";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../services/authService";
const Form = ({ formType, submitButton, formTittle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("donor");
  const [name, setName] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [website, setWebsite] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <>
      <form
        className="text-center"
        onSubmit={(e) => {
          if (formType === "login")
            return handleLogin(e, email, password, role);
          else if (formType === "register")
            return handleRegister(
              e,
              email,
              password,
              role,
              name,
              organizationName,
              hospitalName,
              website,
              address,
              phone
            );
        }}
      >
        <h1>{formTittle}</h1>
        <hr />
        <div className="d-flex mb-3">
          <div className="form-check ms-2">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              value={"donor"}
              onChange={(e) => setRole(e.target.value)}
              defaultChecked
              id="donorRadio"
            />
            <label htmlFor="donorRadio" className="form-check-label">
              Donor
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              value={"admin"}
              onChange={(e) => setRole(e.target.value)}
              id="adminRadio"
            />
            <label htmlFor="adminRadio" className="form-check-label">
              Admin
            </label>
          </div>
          <div className="form-check ms-2">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              value={"hospital"}
              onChange={(e) => setRole(e.target.value)}
              id="hospitalRadio"
            />
            <label htmlFor="hospitalRadio" className="form-check-label">
              Hospital
            </label>
          </div>

          <div className="form-check ms-2">
            <input
              className="form-check-input"
              type="radio"
              name="role"
              value={"organization"}
              onChange={(e) => setRole(e.target.value)}
              id="organizationRadio"
            />
            <label htmlFor="organizationRa" className="form-check-label">
              Organization
            </label>
          </div>
        </div>
        {(() => {
          // eslint-disable-next-line default-case
          switch (true) {
            case formType === "login": {
              return (
                <>
                  <InputType
                    labelText={"Email"}
                    labelFor={"forEmail"}
                    name={"email"}
                    inputType={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    name={"password"}
                    inputType={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </>
              );
            }
            case formType === "register": {
              return (
                <>
                  {(role === "admin" || role === "donor") && (
                    <InputType
                      labelText={"Name"}
                      labelFor={"forName"}
                      name={"name"}
                      inputType={"text"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  )}
                  {role === "organization" && (
                    <InputType
                      labelText={"Organization Name"}
                      labelFor={"forOrganizationName"}
                      name={"OrganizationName"}
                      inputType={"text"}
                      value={organizationName}
                      onChange={(e) => setOrganizationName(e.target.value)}
                    />
                  )}
                  {role === "hospital" && (
                    <InputType
                      labelText={"Hospital Name"}
                      labelFor={"forHospitalName"}
                      name={"hospitalName"}
                      inputType={"text"}
                      value={hospitalName}
                      onChange={(e) => setHospitalName(e.target.value)}
                    />
                  )}

                  <InputType
                    labelText={"Email"}
                    labelFor={"forEmail"}
                    name={"email"}
                    inputType={"email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <InputType
                    labelText={"Password"}
                    labelFor={"forPassword"}
                    name={"password"}
                    inputType={"password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <InputType
                    labelText={"Website "}
                    labelFor={"forwebsite"}
                    name={"website"}
                    inputType={"text"}
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                  <InputType
                    labelText={"Address"}
                    labelFor={"forAddress"}
                    name={"Address"}
                    inputType={"text"}
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  <InputType
                    labelText={"Phone"}
                    labelFor={"forPhone"}
                    name={"Phone"}
                    inputType={"text"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </>
              );
            }
          }
        })()}

        <div className="d-flex flex-row justify-content-between">
          {formType === "login" ? (
            <p>
              Not Registered yet
              <Link to="/Register"> Here!</Link>
            </p>
          ) : (
            <p>
              Already a User
              <Link to="/Login"> Login!</Link>
            </p>
          )}
          <button className="btn btn-primary" type="submit">
            {submitButton}
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
