import './App.css'
import Photobooth from './pages/Photobooth.tsx';
import Landing from './pages/Landing.tsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PhotoEditor from "./pages/PhotoEditor.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} Component={Landing} />
                <Route path={"/photobooth"} Component={Photobooth} />
                <Route path={"/editor"} Component={PhotoEditor}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
