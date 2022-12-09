import MainPage from "./components/MainPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <div>
      {!JSON.parse(localStorage.getItem("login")) ? (
        <LoginPage />
      ) : (
        <MainPage />
      )}
    </div>
  );
}

export default App;
