import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const CharacterForm = () => {
  const navigate = useNavigate();
  const [sendData, setSendData] = useState({
    name: "",
    avatar: "",
    job: "",
    description: "",
    id: new Date().getTime(),
  });
  // console.log("sendData", sendData);

  const storageData = JSON.parse(localStorage.getItem("Simpsons"));
  // console.log(storageData);

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setSendData({ ...sendData, [name]: value });
  };

  const handleSubmit = () => {
    localStorage.setItem(
      "Simpsons",
      JSON.stringify([sendData, ...storageData])
    );
    navigate("/");
  };

  return (
    <>
      <div className="text-center pt-4">
        <h1 className="text-decoration-underline">Add Simpsons</h1>
      </div>
      <div className="container mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3 row d-flex justify-content-center">
            <label htmlFor="name" className="col-sm-4 col-md-3  col-form-label">
              Name And Surname
            </label>
            <div className="col-sm-4 ,">
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                value={sendData?.name || ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="mb-3 row d-flex justify-content-center">
            <label htmlFor="job" className="col-sm-4 col-md-3 col-form-label">
              Job Title
            </label>
            <div className="col-sm-4">
              <input
                type="text"
                className="form-control"
                id="job"
                name="job"
                required
                value={sendData?.job || ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="mb-3 row d-flex justify-content-center">
            <label
              htmlFor="avatar"
              className="col-sm-4 col-md-3 col-form-label"
            >
              Avatar
            </label>
            <div className="col-sm-4 d-flex justify-content-center">
              <input
                type="text"
                className="form-control"
                id="avatar"
                name="avatar"
                required
                value={sendData?.avatar || ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="mb-3 row d-flex justify-content-center">
            <label
              htmlFor="description"
              className="col-sm-4 col-md-3 col-form-label"
            >
              Description
            </label>
            <div className="col-sm-4">
              <textarea
                type="text"
                className="form-control"
                id="description"
                name="description"
                required
                value={sendData?.description || ""}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </div>

          <div className="text-center">
            <button
              className="btn fw-bold fs-5 m-2 px-5"
              type="submit"
              style={{ backgroundColor: "#FFDE00", color: "#f51414" }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CharacterForm;
