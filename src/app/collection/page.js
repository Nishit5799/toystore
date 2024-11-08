import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-white">Toy store</h1>
      <Link href={"/"}>
        <h1 className="text-white">Go back</h1>{" "}
      </Link>
    </div>
  );
};

export default page;
