import Link from "next/link";

type Props = {
  data: String;
  _id: Number;
};

export default function AllProducts(props: Props) {
//   console.log(props.data);

  return (
    <div>
      <Link href={`/Products/${props._id}`} style={{ textDecoration: "none" }}>
        <div className="d-flex flex-wrap card my-3 p-3 rounded shadow-lg">
          <div className="">
            <img
              src={"prop.image"}
              className="card-img-top img-fluid"
              alt="Not Available"
              style={{ height: "18vmin", width: "12vmax" }}
            />
            <div className="">
              <div className="card-title text-center text-responsive">
                {String("prop.name")}
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
