import AllProducts from "@/app/Component/AllProducts";

type Props = {
  params: { _id: Number };
  searchParams: {};
};

export default function page(props: Props) {
  return (
    <div>
      <div className="card m-5 p-3 shadow" style={{ paddingTop: "100vh" }}>
        {/* Sinle Product Details */}
      </div>

      {/* Related Products */}
      <div
        className="d-flex "
        style={{ flexDirection: "row", justifyContent: "space-around" }}
      >
        {["1", "2", "3"].map((val: String, i: any) => {
          return <AllProducts key={i} data={val} _id={123} />;
        })}
      </div>
    </div>
  );
}
