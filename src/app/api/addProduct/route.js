import { connectToDatabase } from "../../../utils/db";
import modelProd from "../../../models/product";
import { NextResponse } from "next/server";

export async function POST(req, res) {
  try {
    const body = await req.json();
    console.log(body);

    console.log("done");
    await connectToDatabase();
    console.log("done");

    const cat = body["Category"];

    var temp1 = false,
      temp2 = false,
      temp3 = false;

    if (cat == "Electronics") {
      temp1 = true;
    } else if (cat == "Fashion") {
      temp2 = true;
    } else if (cat == "Mobile") {
      temp3 = true;
    }

    let demo = {
      Product_Name: body["name"].toUpperCase(),
      Links: {
        Flipkart: body["flipkart"],
        Amazon: body["amazon"],
      },
      Category: {
        Mobile: temp3,
        Electronics: temp1,
        Fashion: temp2,
      },
    };

    console.log(demo);

    const createdProduct = await modelProd.create(demo);
    console.log("done");

    const updatedProduct = await createdProduct.getDetailFrom();

    return NextResponse.json(
      {
        message: "Product Added successfully!",
      },
      {
        status: 200,
      }
    );
  } catch (e) {
    return NextResponse.json(
      { message: "Server error, Please try again!" },
      { status: 500 }
    );
  }
}
