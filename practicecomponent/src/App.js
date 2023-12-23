import { Route, Routes } from "react-router-dom";
import { PostsPage, PostPage, NotFoundPage } from "@pages";
import DefaultTemplate from "@components/template/DefaultTemplate";

const App = () => {
  return (
    <DefaultTemplate>
      <Routes>
        <Route path="/" element={<h1>Home</h1>}></Route>
        <Route path="/posts" element={<PostsPage />}></Route>
        <Route path="/posts/:postId" element={<PostPage />}></Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
    </DefaultTemplate>
  );
};

export default App;
