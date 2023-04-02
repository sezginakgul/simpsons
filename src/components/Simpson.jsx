import React from "react";
import { useLocation } from "react-router-dom";

const Simpson = () => {
  const { state } = useLocation();
  // console.log("details state", state);
  const { name, avatar, job, description } = state;
  return (
    <div
      className="d-flex flex-column text-center align-items-center"
      style={{ height: "100%", backgroundColor: "#301938" }}
    >
      <div>
        <img
          className="pt-2"
          src={avatar.slice(0, avatar.lastIndexOf("png") + 3)}
          alt="avatar"
        />
      </div>
      <div className="py-3">
        <h1>{name}</h1>
        <p className="fs-5">{job}</p>
        <p
          className="w-50 mx-auto px-md-4 px-lg-5"
          style={{ textAlign: "justify" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default Simpson;
