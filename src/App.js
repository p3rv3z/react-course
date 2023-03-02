import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/">
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
  </Route>
));

function App() {
  return <RouterProvider router={router}/>
}

export default App;
