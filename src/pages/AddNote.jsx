// import { Container } from '@mui/material'
import React, { useState } from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";
import Input from "@mui/material/Input";
import { notes } from "../store/dummyData";
import { TextField } from "@mui/material";
// import { TextInput } from 'react-native-paper'
// import Header from './Header'

const AddNote = () => {
  const navigate = useNavigate();
  const dateArr = new Date().toString().split(" ");
  const time = `${dateArr[4]}`;

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <Container>
      <div className="head">
        <Arrow onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </Arrow>
        <br />
        <br />
        {/* <h6>{date}</h6> */}
        <h3>Notes</h3>
      </div>
      {time}
      <div className="field">
        <Input
          disableUnderline="true"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          style={{
            color: "black",
            fontSize: "25px",
            fontWeight: "bold",
            outline: "none",
            borderBottom: "none",
          }}
        />
        <br />
        <br />
        <TextField
          id="outlined-multiline-flexible"
          // label="Multiline"
          fullWidth
          placeholder="Note Something down"
          multiline
          maxRows={15}
          variant="standard"
          InputProps={{
            disableUnderline: true,
          }}
          value={body}
          onChange={(event) => setBody(event.target.value)}
        />
      </div>
    </Container>
  );
};
const Container = styled.div`
  background-color: white;
  position: relative;
  height: 90vh;
  width: 400px;
  padding: 10px 10px;
  box-shadow: 0px 0px 5px;
  border-radius: 5px;

  .head {
    display: flex;
  }

  .field {
    margin-top: 20px;
    padding: 10px;
  }
  .field ::placeholder {
    color: black;
    /* opacity: 1; */
  }
`;

const Arrow = styled.div`
  margin-top: 20px;
  margin-right: 15px;
  cursor: pointer;
`;

// const Input = styled.div``;

export default AddNote;
