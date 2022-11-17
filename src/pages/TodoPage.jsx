import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import Todo from "../components/Todo";
import { todos } from "../store/dummyData";

const TodoPage = () => {
  const [displayed, setDisplayed] = useState(todos);
  const [searchStr, setSearchStr] = useState("");
  // console.log(note);

  const filterNotes = (str) => {
    const filtered = [];
    todos?.map((note) => {
      const { title, body } = note;
      const noteStr = `${title} ${body}`.toLowerCase();
      if (noteStr.includes(str.toLowerCase())) {
        return filtered.push(note);
      } else {
        return 0;
      }
    });
    setDisplayed(filtered);
  };

  useEffect(() => {
    filterNotes(searchStr);
  }, [searchStr]);

  return (
    <Container>
      <Header page="To-do" search={searchStr} setSearch={setSearchStr} />
      <TodoContainer>
        {displayed?.map((item, index) => {
          const { id, body } = item;
          return <Todo key={index} body={body} />;
        })}
      </TodoContainer>
      <BottomNav />
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
`;

const TodoContainer = styled.div`
  padding: 0px 5px;
  margin-top: 20px;
  height: 70%;

  overflow-y: scroll;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export default TodoPage;
