import './index.css'
import Photobooth from './pages/Photobooth.tsx';
import Landing from './pages/Landing.tsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PhotoEditor from "./pages/PhotoEditor.tsx";
import {PhotoProvider} from "./context/PhotoContext.tsx";
import {PhotoBgProvider} from "./context/PhotoBgContext.tsx";

function App() {

  return (
    <>
        <BrowserRouter>
            <PhotoProvider>
                <PhotoBgProvider>
                    <Routes>
                        <Route path={"/"} Component={Landing} />
                        <Route path={"/photobooth"} Component={Photobooth} />
                        <Route path={"/editor"} Component={PhotoEditor}/>
                    </Routes>
                </PhotoBgProvider>
            </PhotoProvider>
        </BrowserRouter>
    </>
  )
}

export default App
