import { Routes, Route } from "react-router-dom";
import LearnMoreBlog from "./Applications/LearnMoreBlog";
import Body from "./Applications/Body";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' exact element={<Body />} />
        <Route path='/Body' element={<Body />} />
        <Route path='/Learn-More' element={<LearnMoreBlog />} />
      </Routes>
    </>
  );
}

export default App;
