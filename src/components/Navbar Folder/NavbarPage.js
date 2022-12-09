import { Link } from "react-router-dom";

export default function NavbarPage() {
  const onClickLogOut = () => {
    const login = localStorage.removeItem("login");
    window.location.reload();
    console.log(login);
  };
  return (
    <div className="header">
      <div className="navbar_header_box">
        <div className="navbar_header">
          <Link className="navbar_user_list" to="/post">
            Post-Page
          </Link>
          {/* <Link to="/add">Add Page</Link> */}
          <Link className="navbar_user_list" to="/user-list">
            User List
          </Link>
          <Link className="navbar_todo_list" to="/todo-list">
            ToDo
          </Link>
        </div>
        <div className="todo_emblem">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="45"
            fill="currentColor"
            className="bi bi-card-checklist todo_logo"
            viewBox="0 0 16 16"
          >
            <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
            <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0zM7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0z" />
          </svg>
        </div>
        <div className="navbar_logout_button">
          <button onClick={onClickLogOut}>Log Out</button>
        </div>
      </div>
      <div className="navbar_content"></div>
    </div>
  );
}
