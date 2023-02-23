import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "../layout/Layout";
import "./../styles/global.css"
const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<h1>Home</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
};


export { App };
