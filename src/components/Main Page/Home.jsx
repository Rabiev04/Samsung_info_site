import { Route, Routes } from "react-router-dom";
import NavbarPage from "./NavbarPage";
import MobilePhones from "../MobilePhones";
import Displays from "../Displays";
import Climat from "../Climat";
import Computers from "../Computers";
import TvAudio from "../TvAudio";
import Footer from "../Footer";
import MainPage from "./MainPage";
import S23Galaxy from "../S23Galaxy";

export default function Home() {
  return (
    <div>
      <NavbarPage />
      <Routes>
        <Route path="/main-page" element={<MainPage />}></Route>
        <Route path="/climat" element={<Climat />}></Route>
        <Route path="/s23galaxy" element={<S23Galaxy />}></Route>
        <Route path="/mobiles" element={<MobilePhones />}></Route>
        <Route path="/tv-audio" element={<TvAudio />}></Route>
        <Route path="/computers" element={<Computers />}></Route>
        <Route path="/displays" element={<Displays />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
