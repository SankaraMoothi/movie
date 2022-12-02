import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./Component/DashBoard";
import LoginForm from "./Component/LoginForm";
import MovieEdit from "./Component/MovieEdit";
import MovieInput from "./Component/MovieInput";
import MovieView from "./Component/MovieView";
import Portal from "./Component/Portal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/Portal" element={<Portal />}>
          <Route path="" element={<DashBoard />} />
          <Route path="MovieInput" element={<MovieInput />} />
          <Route path="MovieView/:id" element={<MovieView />} />
          <Route path="MovieEdit/:id" element={<MovieEdit />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
