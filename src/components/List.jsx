import React, { useEffect, useState, useSyncExternalStore } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import useDataCalls from "../hooks/useDataCalls";
import { useSelector } from "react-redux";
import useSortData from "../hooks/useSortData";
import useDataEvents from "../hooks/useDataEvents";
import { useNavigate } from "react-router-dom";

const List = () => {
  const { getData } = useDataCalls();
  const { simpsons, loading } = useSelector((state) => state.data);
  const [animationParent] = useAutoAnimate();
  const storageData = JSON.parse(localStorage.getItem("Simpsons"));
  const [localeData, setLocaleData] = useState([]);
  const { handleSort, sortFlag } = useSortData();
  const { handleUpData, handleDownData, handleDeleteData } = useDataEvents();
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (!storageData) {
      getData();
    }
  }, []);

  useEffect(() => {
    if (!storageData.length) {
      getData();
    }
  }, []);

  useEffect(() => {
    setLocaleData(storageData);
  }, [simpsons]);

  useEffect(() => {
    setLocaleData(storageData);
  }, []);

  return (
    <div style={{ height: "100%", backgroundColor: "#301938" }}>
      {loading && (
        <div
          style={{ height: "91.3vh" }}
          className="d-flex justify-content-center align-items-center "
        >
          <div
            className="spinner-border text-light"
            style={{ width: "5rem", height: "5rem" }}
            role="status"
          >
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {!localeData?.length && (
        <div className="text-center pt-5 ">
          No item in application. Please{" "}
          <span className="fw-bold text-danger" onClick={getData} type="button">
            refresh
          </span>{" "}
          to update this application...
        </div>
      )}

      {localeData?.length && (
        <>
          <div className="d-flex justify-content-end  align-items-center p-2">
            {sortFlag ? (
              <i
                className="fa-solid fa-arrow-down-a-z fa-shake fa-2xl"
                type="button"
                style={{ color: "#f51414" }}
                onClick={() => handleSort(localeData)}
              ></i>
            ) : (
              <i
                className="fa-solid fa-arrow-up-z-a fa-shake fa-2xl"
                type="button"
                style={{ color: "#f51414" }}
                onClick={() => handleSort(localeData)}
              ></i>
            )}
            <input
              type="text"
              value={search}
              className="fw-bold p-2 ms-2"
              placeholder="Search Your Simpsons"
              style={{
                backgroundColor: "#FFDE00",
                color: "#301938",
                border: "none",
                borderRadius: "10px",
                outline: "none",
              }}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <ol ref={animationParent} className="px-0 mx-0">
            {localeData
              .filter(
                (l) =>
                  l.name.toLowerCase().includes(search.toLowerCase()) ||
                  search === ""
              )
              .map((s, index) => {
                const { id, avatar, name } = s;

                return (
                  <div
                    key={id}
                    className="p-3 d-flex align-items-center border-bottom"
                  >
                    <li className="my-1 list-unstyled w-100 d-flex justify-content-between">
                      <div
                        className="d-flex w-100 align-items-center justify-content-start"
                        onClick={() => navigate(`${id}`, { state: s })}
                      >
                        <div className="pe-4">{index + 1}</div>
                        <div>
                          <img
                            className="pe-4"
                            src={avatar.slice(0, avatar.lastIndexOf("png") + 3)}
                            alt="avatar"
                            height="110px"
                            width="80px"
                          />
                        </div>
                        <div className="px-2">{name}</div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between ">
                        <i
                          className="fa-solid fa-angles-up fa-2xl "
                          type="button"
                          style={{ color: "#FFDE00" }}
                          onClick={() =>
                            handleUpData(s, localeData, setLocaleData)
                          }
                        ></i>
                        <i
                          className="fa-solid fa-angles-down fa-2xl px-3"
                          type="button"
                          style={{ color: "#FFDE00" }}
                          onClick={() =>
                            handleDownData(s, localeData, setLocaleData)
                          }
                        ></i>

                        <i
                          className="fa-solid fa-trash fa-xl"
                          type="button"
                          style={{ color: "#f51414" }}
                          onClick={() =>
                            handleDeleteData(s, localeData, setLocaleData)
                          }
                        ></i>
                      </div>
                    </li>
                  </div>
                );
              })}
          </ol>
        </>
      )}
    </div>
  );
};

export default List;
