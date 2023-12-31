import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Umss from "./pages/Umss";
import Autoridades from "./pages/Autoridades";
import Docentes from "./pages/Docentes";
import Estudiantes from "./pages/Estudiantes";
import Usr from "./pages/Usr";
import Postulantes from "./pages/Postulantes";
import Navbar from "./components/Navbar";
import LogSansi from "./components/LogSansi";
import Kardex from "./pages/Kardex";
import Notas from "./pages/Notas";
import Inscripcion from "./pages/Inscripcion";
import Estu from "./pages/Estu";
import InitEs from "./pages/InitEs";
function App() {
  return (
    <>
      <HashRouter>
        <Navbar/>
        <LogSansi/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/umss" element={<Umss/>} />
          <Route path="/autoridades" element={<Autoridades/>}  />
          <Route path="/docente" element={<Docentes/>} />
          <Route path="/estudiantes" element={<Estudiantes/>} />
          <Route path="/usr" element={<Usr/>} />
          <Route path="/postulantes" element={<Postulantes/>}  />
          <Route path="/kardex" element={<Kardex/>} />
          <Route path="/notas"  element={<Notas/>}/>
          <Route path="/inscripcion" element={<Inscripcion/>}  />
          <Route path="/estudiantess" element={<Estu/>} />
          <Route path="/init" element={<InitEs/>}/>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
