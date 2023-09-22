"use client";

import { FormEvent } from "react";
import AllProducts from "../Component/AllProducts";

export default function page() {
  async function addProductDetails(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    try {
      const res = await fetch("/api/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: event.target["names"].value,
          amazon: event.target["amazon"].value,
          flipkart: event.target["flipkart"].value,
          Category: event.target["selection"].value,
        }),
      });

      if (res.status === 200) {
        console.log("Successfuly Added...");
      } else {
        console.log("Server Error");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="d-flex " style={{ justifyContent: "space-evenly" }}>
        <div className=" p-3 ">
          <div className=" shadow-lg m-3 rounded">
            <div className="m-5">
              <form
                onSubmit={addProductDetails}
                className="border-bottom d-flex flex-column text-center mb-3  pb-2 px-2 rounded"
              >
                <div className="p-2 border-bottom rounded mb-3">
                  Product Details
                </div>
                <div className="mb-3">
                  <div className="badge text-secondary">Name:</div>
                  <br />
                  <input
                    type="text"
                    name="names"
                    className="w-75 rounded"
                    required
                  />
                </div>
                <div className="mb-3">
                  <div className="badge  text-secondary">Flipkart:</div>
                  <br />
                  <input
                    type="text"
                    name="flipkart"
                    className="w-75 rounded"
                    required
                  />
                </div>
                <div className="mb-3 ">
                  <div className="badge  text-secondary">Amazon:</div>
                  <br />
                  <input
                    type="text"
                    name="amazon"
                    className="w-75 rounded"
                    required
                  />
                </div>

                <div className="mx-5 my-2 d-flex justify-content-center">
                  <div className="badge text-dark">Category</div>
                  <select className="mb-3 w-50" name="selection">
                    <option value="Mobile">Mobiles</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                  </select>
                </div>

                <div
                  className="d-flex p-2"
                  style={{ justifyContent: "space-evenly" }}
                >
                  <input type="submit" value="Add Product" />
                  <input type="reset" value="Reset" />
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* {display submitted data} */}
        {/* <div className="p-5">
          <AllProducts data={"val"} _id={123} />;
        </div> */}
      </div>
    </>
  );
}
