import Home from "./components/Main Page/Home";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div>
      {!JSON.parse(localStorage.getItem("login")) ? <LoginPage /> : <Home />}
    </div>
  );
}

export default App;
