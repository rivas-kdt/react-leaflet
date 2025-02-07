import React from "react";
import { useParams } from "react-router";

const Photo = () => {
  let params = useParams();
  console.log(params);

  return <div>Photo</div>;
};

export default Photo;
