import React from "react";
import { PageProps } from "gatsby";

export default function IndexRoute(props: PageProps) {
  return (
    <>
      <h1>Gatsby!</h1>
      <p>{props.path}</p>
    </>
  );
}
