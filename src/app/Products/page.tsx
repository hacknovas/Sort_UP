"use client";
import { ChangeEvent } from "react";
import AllProducts from "../Component/AllProducts";

export default function page() {
  var arr: String[] = ["1", "2", "3"];

  const handleSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    event.preventDefault();
    // console.log("sjfd");
  };

  return (
    <>
      <div className="d-flex justify-content-center mt-4 ">
        <input
          type="text"
          placeholder="Search Product"
          onChange={handleSearch}
          className="bg-light p-2"
        />
      </div>

      <div
        className="d-flex mt-3 mb-3 border-bottom container p-2"
        style={{ justifyContent: "space-evenly", flexDirection: "column" }}
      >
        <div className="badge text-dark pointer">Tags {"^"}</div>
        <div className="d-flex " style={{ justifyContent: "space-evenly" }}>
          <div>Mobiles</div>
          <div>Electronics</div>
          <div>Fashions</div>
        </div>
      </div>

      <div
        className="d-flex "
        style={{ flexDirection: "row", justifyContent: "space-around" }}
      >
        {arr.map((val: String, i: any) => {
          return <AllProducts key={i} data={val} _id={123} />;
        })}
      </div>
    </>
  );
}
