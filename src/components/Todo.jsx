import React from 'react'
import styled from 'styled-components';

const Todo = ({body}) => {
  return (
    <div>
        <Container>
        <input type="radio" />
        <h4>
          {body}
        </h4>
      </Container>
    </div>
  )
}
const Container = styled.div`
background: #f8f8f8;
padding: 10px 6px;
display: flex;
/* flex-direction: column; */
/* gap: 5px; */
margin-top: 10px;
border-radius: 5px;

  h4{
    margin: 0%;
    /* margin-top: 10px; */
    font-weight: 500;
    width: 70%;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const input = styled.div`
 
`;

export default Todo;