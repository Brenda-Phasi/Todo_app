import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const AddBtn = () => {
  return (
    <Container>
      <Link to="/addnote">
        <div className="addBtn">
          <AddIcon />
        </div>
      </Link>
    </Container>
  );
};
const Container = styled.div`
  position: absolute;
  top: -60px;
  left: 42%;

  .addBtn {
    background-color: #26f906;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 3px white;
    cursor: pointer;

    border-radius: 50%;
    width: 40px;
    height: 40px;

    svg {
      color: white;
      transition: all 0.3s linear;
    }

    &:hover {
      svg {
        transform: rotate(45deg);
      }
    }
  }
`;

export default AddBtn;
