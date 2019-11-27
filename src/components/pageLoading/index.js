import React from "react";
import ReactLoading from "react-loading";

import { Container } from "./style";

export default function pageLoading() {
  return (
    <Container>
      <ReactLoading
        type="spokes"
        color="rgba(0,0,0,0.5)"
        height="15%"
        width="15%"
      />
    </Container>
  );
}
