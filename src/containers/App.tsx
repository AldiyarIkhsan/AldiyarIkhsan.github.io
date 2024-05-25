import "./App.css";
import NewsList from "../components/NewsList/NewsList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layouts/MainLayouts";
import NewsDetails from "../components/NewsDetail/NewsDetails.tsx";

function App() {

  return (
    <BrowserRouter>
      <div className="container-wrapper">
        <div className="App">
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<NewsList />} />
              <Route path="newsDetails/:id" element={<NewsDetails />} />
            </Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
