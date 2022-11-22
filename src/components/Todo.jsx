// import { Radio } from "@mui/material";
import React from "react";
import styled from "styled-components";
import RadioBtn from "./RadioBtn";

const Todo = ({ body, status, onStatus }) => {
  // const click = (event) => {
  //   if (event.target.Radio.textDecoration) {
  //     event.target.Radio.removeProperty("text-decoration");
  //   } else {
  //     event.target.Radio.setPropery("text-decoration", "line-through");
  //   }

  return (
    <div>
      <Container>
        <RadioBtn body={body} status={status} onStatus={onStatus} />
      </Container>
    </div>
  );
};
const Container = styled.div``;

export default Todo;
