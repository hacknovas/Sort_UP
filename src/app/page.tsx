import Link from "next/link";
import Image from "next/image";
import AllProducts from "./Component/AllProducts";

export default function Home() {
  return (
    <>
      <div
        className="p-1"
        style={{
          backgroundImage: "linear-gradient(grey,silver,lightblue,lightyellow)",
        }}
      >
        <div className="m-5 p-3">
          <h3 className="text-center text-light p-4">
            Welcome to our website dedicated to product comparison<br></br>{" "}
            through advanced web Scraping!
          </h3>
          <div className="d-flex m-2" style={{ justifyContent: "flex-end" }}>
            <p className="m-2 p-3 text-end" style={{ fontSize: "0.9rem" }}>
              We're here to simplify your decision-making process by gathering{" "}
              <br></br>real-time data from various online sources.
            </p>
            <Image
              src="/images/img1.jpg"
              alt="NA"
              height={200}
              width={200}
              style={{
                borderRadius: "4%",
                boxShadow: "10px 20px grey",
                width: "20vw",
              }}
            ></Image>
          </div>

          <div className="d-flex m-2" style={{ justifyContent: "flex-start" }}>
            <Image
              src="/images/img2.jpg"
              alt="NA"
              height={200}
              width={200}
              style={{
                borderRadius: "4%",
                boxShadow: "10px 20px grey",
                width: "20vw",
              }}
            ></Image>

            <p className="m-2 p-3" style={{ fontSize: "0.9rem" }}>
              Our platform provides unbiased and up-to-date comparisons of
              products across different brands categories.<br></br> Whether
              you're looking for electronics,appliances, fashion,<br></br> or
              more, we've got you covered.
            </p>
          </div>
        </div>

        <hr></hr>

        <div className="w-100 text-center mt-5">
          <Link
            href="/Products"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "white",
              boxShadow: "4px 3px ",
            }}
            className="p-2 bg-secondary"
          >
            See All Products {"=>"}
          </Link>
        </div>

        <div
          className="d-flex border-top p-3"
          style={{ flexDirection: "row", justifyContent: "space-around" }}
        >
          {["1", "2", "3"].map((val: String, i: any) => {
            return <AllProducts key={i} data={val} _id={123} />;
          })}
        </div>

        <p
          className="text-center mt-5 mb-5 p-4 "
          style={{ fontSize: "0.8rem", fontWeight: "bolder" }}
        >
          Say goodbye to endless searching and hello to informed choices.
          Explore our comprehensive comparisons and make smarter shopping
          decisions today..!
        </p>
      </div>
    </>
  );
}
