import React, { useState } from 'react';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import NotesIcon from '@mui/icons-material/NotesRounded';
import styled from 'styled-components';
import {  useLocation, useNavigate } from 'react-router-dom';

import AddBtn from './AddBtn';

const BottomNav = () => {
  const location = useLocation().pathname.split("/");
  const page = location[1];
  const navigate = useNavigate();

  return (
   <Container>
      
       <AddBtn />
         

       <IconBtn style={page === "notes"? {color: "#26f906"} : {}} onClick={() => navigate("/notes")}>
        <NotesIcon />
        <p>Notes</p>
       </IconBtn>
    
      <IconBtn style={page === "todo"? {color: "#26f906"} : {}} onClick={() => navigate("/todo")}>
        <TaskAltIcon />
        <p>To-dos</p>
      </IconBtn>
    
    </Container>
  );
}
const Container = styled.div`
width: 100%;
position: absolute;
bottom: 0;
left: 0;
display: flex;
align-items: center;
padding: 10px 0px;
`;

const IconBtn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: all 0.6s linear;

  p{
    margin: 0;
  }
`;

export default BottomNav; 