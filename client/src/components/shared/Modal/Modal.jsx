import React, { useState } from "react";
import InputType from "../InputType";
import { toast } from "react-toastify";
import API from "../../../services/API";
import { useSelector } from "react-redux";

const Modal = () => {
  const [inventoryType, setInvetoryType] = useState("in");
  const [bloodGroup, setBloodGroup] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [donorEmail, setDonorEmail] = useState("");
  //   const [organisation, setOrganisation] = useState("");

  const { user } = useSelector((state) => state.auth);

  const handleModalSubmit = async () => {
    try {
      if (!bloodGroup || !quantity) {
        toast.warning("Please Provide blood group and quantity");
        // return alert("Please Provide all fields");
      }
      const { data } = await API.post("/inventory/create-inventory", {
        donorEmail,
        email: user?.email,
        organisation: user?._id,
        inventoryType,
        bloodGroup,
        quantity,
      });
      if (data?.success) {
        await toast.success("Successfully created");
        // console.log(data?.message);
        alert("Successfully created");
        window.location.reload();
      }
    } catch (error) {
      alert(error.response.data.message);
      console.log(error);
      window.location.reload();
    }
  };

  return (
    <>
      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Manage Blood Record
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="d-flex mb-3">
                Blood Type: &nbsp;
                <div className="form-check ms-3">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="Radio"
                    value={"in"}
                    onChange={(e) => setInvetoryType(e.target.value)}
                    defaultChecked
                  />
                  <label htmlFor="in" className="form-check-label">
                    IN
                  </label>
                </div>
                <div className="form-check ms-3">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="Radio"
                    value={"out"}
                    onChange={(e) => setInvetoryType(e.target.value)}
                  />
                  <label htmlFor="out" className="form-check-label">
                    OUT
                  </label>
                </div>
              </div>
              <select
                className="form-select"
                aria-label="Default select example"
                onChange={(e) => setBloodGroup(e.target.value)}
              >
                <option selected>Select Blood Group</option>
                <option value={"O+"}>O+</option>
                <option value={"O-"}>O-</option>
                <option value={"A+"}>A+</option>
                <option value={"A-"}>A-</option>
                <option value={"B+"}>B+</option>
                <option value={"B-"}>B-</option>
                <option value={"AB+"}>AB+</option>
                <option value={"AB-"}>AB-</option>
              </select>
              <InputType
                labelText={"Donor Email"}
                labelFor={"donorEmail"}
                inputType={"email"}
                value={donorEmail}
                onChange={(e) => setDonorEmail(e.target.value)}
              />
              <InputType
                labelText={"Quantity (ML)"}
                labelFor={"quantity"}
                inputType={"Number"}
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleModalSubmit}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
