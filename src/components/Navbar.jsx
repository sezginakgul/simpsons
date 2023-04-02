import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav className=" d-flex justify-content-between px-3 align-items-center">
      {window.location.href === "http://localhost:3000/" ? (
        <div className="fw-bold">
          <i
            className="fa-solid fa-house fa-bounce fa-2xl me-1"
            style={{ color: "#83570c" }}
          ></i>
          Home
        </div>
      ) : (
        <div className="fw-bold" type="button" onClick={() => navigate(-1)}>
          <i
            className="fa-solid fa-hand-point-left fa-bounce fa-2xl me-1"
            style={{ color: "#83570c" }}
          ></i>
          Back
        </div>
      )}

      <div>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/98/The_Simpsons_yellow_logo.svg"
          alt="TheSimpsons"
          width="150px"
          onClick={() => navigate("/")}
        />
      </div>
      <div className="fw-bold" type="button" onClick={() => navigate("/add")}>
        <i
          className="fa-solid fa-meteor fa-shake fa-2xl me-1"
          style={{ color: "#f51414" }}
        ></i>
        <span>Add</span>
      </div>
    </nav>
  );
};

export default Navbar;
