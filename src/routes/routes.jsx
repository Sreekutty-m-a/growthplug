import { Route, Routes } from "react-router-dom";
import Home from "../component/form/home";
import Movie from "../component/movies/movies";

const Router = ()=>{
    return (
        <Routes>
            <Route path="/" exact element={<Home />}/>
            <Route path="/movie/:id" exact element={< Movie/>} />

        </Routes>
    )
}

export default Router;