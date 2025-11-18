import './index.css'
import Photobooth from './pages/Photobooth.tsx';
import Landing from './pages/Landing.tsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PhotoEditor from "./pages/PhotoEditor.tsx";
import {PhotoProvider} from "./context/PhotoContext.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <PhotoProvider>
                <Routes>
                    <Route path={"/"} Component={Landing} />
                    <Route path={"/photobooth"} Component={Photobooth} />
                    <Route path={"/editor"} Component={PhotoEditor}/>
                </Routes>
            </PhotoProvider>
        </BrowserRouter>
    </>
  )
}

export default App
