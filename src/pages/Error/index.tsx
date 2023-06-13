import React from "react";
import { Link } from "react-router-dom";

const Error: React.FC = () => (
  <div>
    <h1 className="text-center color-red">
      404
    </h1>
    <div className="color-black-1 text-center">PAGE NOT FOUND</div>
    <div className="mt-9 text-center">
      <Link to="/">Back to Home</Link>
    </div>
  </div>
);

export default Error;
