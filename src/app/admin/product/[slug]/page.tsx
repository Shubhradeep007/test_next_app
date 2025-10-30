"use client";

import { useParams } from "next/navigation";
import React from "react";

const ID = () => {
  const  id  = useParams();
  console.log("id", id);

  return <div> ID: {id?.slug}</div>;
};

export default ID;
