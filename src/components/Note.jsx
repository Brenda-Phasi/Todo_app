import * as React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Note = ({ id, title, body, date }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(`/editnote/${id}`)}>
      <h4>{title}</h4>
      <h5>{body}</h5>
      <p>{date}</p>
    </Container>
  );
};
const Container = styled.div`
  cursor: pointer;
  background: #f8f8f8;
  padding: 10px 6px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 10px;
  border-radius: 5px;

  h4 {
    margin: 0%;
    font-weight: 500;
    width: 70%;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  h5 {
    margin: 0%;
    font-weight: 400;
    font-size: 16px;
    width: 70%;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  p {
    margin: 0%;
    font-size: 14px;
    opacity: 0.5;
  }
`;
export default Note;
