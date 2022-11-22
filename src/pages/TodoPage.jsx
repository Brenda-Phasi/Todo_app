import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import BottomNav from "../components/BottomNav";
import Todo from "../components/Todo";
import { todos } from "../store/dummyData";

const TodoPage = () => {
  const [displayed, setDisplayed] = useState(todos);
  const [searchStr, setSearchStr] = useState("");

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

  // Tasks to be completed
  const tasksNotDone = displayed.filter((task) => {
    if (task.status === false) {
      return true;
    }
  });

  const onStatus = (id) => {
    setDisplayed(
      displayed.map((item) => {
        if (item.id === id) {
          item["status"] = !item["status"];
          return item;
        } else {
          return item;
        }
      })
    );
  };

  return (
    <Container>
      <Header page="To-do" search={searchStr} setSearch={setSearchStr} />
      <TodoContainer>
        {/* {displayed?.map((item, index) => {
          const { id, body, status } = item;
          return <Todo key={index} body={body} />;
        })} */}
        {/* {displayed
          .filter((task) => {
            if (task.status === false) {
              return true;
            }
          })
          .map((item, index) => {
            const { id, body } = item;
            return <Todo key={index} body={body} />;
          })} */}

        {tasksNotDone.map(({ id, body, status }, index) => (
          <Todo
            key={index}
            body={body}
            status={status}
            onStatus={() => onStatus(id)}
          />
        ))}
      </TodoContainer>

      <div className="done">
        {displayed
          .filter(({ status }) => status)
          .map((item, index) => {
            const { id, body, status } = item;
            return (
              <Todo
                key={index}
                body={body}
                status={true}
                onStatus={() => onStatus(id)}
              />
            );
          })}
      </div>

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

  .done {
    text-decoration: line-through;
    opacity: 0.5;
  }
`;

const TodoContainer = styled.div`
  padding: 0px 5px;
  margin-top: 20px;
  /* height: 70%; */

  overflow-y: scroll;

  -ms-overflow-style: none; /* Internet Explorer 10+ */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none; /* Safari and Chrome */
  }
`;

export default TodoPage;
