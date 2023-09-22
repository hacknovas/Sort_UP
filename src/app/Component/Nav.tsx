import Link from "next/link"

export default function Nav() {
  return (
    <div
      className="d-flex shadow-lg  justify-content-around "
      style={{ position: "sticky", top: "0" }}
    >
      <div>
        <img
          src="./images/logo.png"
          style={{
            filter: "invert(0)",
          }}
          height={"50vh"}
        />
      </div>

      <Link
        className="text-dark mt-2 p-1"
        style={{ cursor: "pointer" }}
        href="/"
      >
        <img src="/images/Home.png" className="" height="30px"></img>
      </Link>

    </div>
  );
}
