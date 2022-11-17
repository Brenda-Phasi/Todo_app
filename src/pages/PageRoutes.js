import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import NotesPage from "./NotesPage";
import TodoPage from "./TodoPage";
import Page404 from "./Page404";
import EditNote from "./EditNote";
import AddNote from "./AddNote";

const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/notes" element={<NotesPage />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/" element={<Navigate to="/notes" />} />
      <Route path="/index.html" element={<Navigate to="/notes" />} />
      <Route path="*" element={<Page404 />} />
      <Route path="/addnote" element={<AddNote />} />
      <Route path="/editnote/:id" element={<EditNote />} />
      {/* <Route path="/notes" element={<Navigate to="/editnote" />} /> */}
    </Routes>
  );
};

export default PageRoutes;
