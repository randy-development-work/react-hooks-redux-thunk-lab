import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCats } from "./catsSlice";
import CatList from "./CatList";

function Cats() {
  const catPics = useSelector((state) => state.entities);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.status);

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  return (
    <div>
      <h1>CatBook</h1>
      {status === "loading" ? (
        <div className="d-flex justify-content-center">
        <div className="spinner-grow text-danger" style={{width: "10rem", height: "10rem"}} role="status">
          <span className="sr-only">Loading...</span>
        </div>
        </div>
      ) : null}
      <CatList catPics={catPics} />
    </div>
  );
}

export default Cats;
