import "./App.css";
import Row from "./components/Row/Row";
import requests from "./requests";
import Banner from "./components/Banner/Banner";
import Nav from "./components/nav/nav";
import { Routes, Route } from "react-router-dom";
import Profile from "./components/profile/profile";
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Banner />
              <Row
                title="Netflix Original"
                fetchURL={requests.fetchNetflixOriginals}
                isLargeRow={true}
              />
              <Row title="TopRated" fetchURL={requests.fetchTopRated} />
              <Row title="Comedy" fetchURL={requests.fetchComedyMovies} />
              <Row title="Horror" fetchURL={requests.fetchHorrorMovies} />
              <Row title="Romance" fetchURL={requests.fetchTopRated} />
              <Row title="Action" fetchURL={requests.fetchNetflixOriginals} />
              <Row
                title="Documentaries"
                fetchURL={requests.fetchDocumentaries}
              />
            </div>
          }
        />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
export default App;
