import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Note from "../components/Note";
import BottomNav from "../components/BottomNav";
import { notes } from "../store/dummyData";

const NotesPage = () => {
  const [displayed, setDisplayed] = useState(notes);
  const [searchStr, setSearchStr] = useState("");

  const filterNotes = (str) => {
    const filtered = [];
    notes?.map((note) => {
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
      <Header page="Notes" search={searchStr} setSearch={setSearchStr} />
      <NotesContainer>
        {displayed?.map((item, index) => {
          const dateArr = new Date().toString().split(" ");
          const date = `${dateArr[0]} ${dateArr[1]} ${dateArr[2]} ${dateArr[3]} ${dateArr[4]}`;
          const { id, title, body } = item;
          return (
            <Note key={index} id={id} title={title} body={body} date={date} />
          );
        })}
      </NotesContainer>
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
const NotesContainer = styled.div`
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

export default NotesPage;
