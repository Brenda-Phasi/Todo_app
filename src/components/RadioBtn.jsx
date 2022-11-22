import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { FormControlLabel } from "@mui/material";
import styled from "styled-components";

const RadioBtn = ({ body, onStatus, status }) => {
  // const [check, setCheck] = useState(status);

  return (
    <Container>
      <FormControlLabel
        className="task"
        // label={body}
        label=""
        control={
          //   <Radio checked={status} onChange={(e) => onStatus(e)} />
          <Checkbox checked={status} onChange={onStatus} />
        }
      />
      <div id="task">
        <h4>{body}</h4>
      </div>
    </Container>
  );
};
const Container = styled.div`
  background: #f8f8f8;
  padding: 5px 3px;
  display: flex;
  /* flex-direction: column; */
  /* gap: 5px; */
  margin-top: 4px;
  border-radius: 5px;

  h4 {
    margin: 0%;
    margin-top: 10px;
    font-weight: 400;
    width: 300px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
export default RadioBtn;
