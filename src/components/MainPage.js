import { Route, Routes } from "react-router-dom";
import NavbarPage from "../components/Navbar Folder/NavbarPage";
import UserList from "../components/UserList";
import AddPage from "../components/AddPage";
import PostPage from "../components/PostPage";
import ToDoPage from "./ToDo Folder/ToDoPage";

export default function MainPage() {
  return (
    <div>
      <NavbarPage />
      <Routes>
        <Route path="/post" element={<PostPage />}></Route>
        <Route path="/add" element={<AddPage />}></Route>
        <Route path="/user-list" element={<UserList />}></Route>
        <Route path="/todo-list" element={<ToDoPage />}></Route>
      </Routes>
    </div>
  );
}
