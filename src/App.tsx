import React from "react";
import "./App.css";
import "./hyde.css";
import SideNav from "./SideNav";
import Navbar from "./NavBar";
import Home from "./Home";
import useDebouncedResize from "./components/useDebouncedResize";
import RotatingHead from "./components/RotatingHead";
import Typer from "./components/Typer";
import 'font-awesome/css/font-awesome.min.css';
import Page2 from "./Page2";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [pageIndex, setPageIndex] = React.useState(0);
  const [pages, setPages] = React.useState<JSX.Element[]>([<Home />]);

  React.useEffect(() => {
    setDarkMode(darkMode);
  }, [darkMode]);

  const size = useDebouncedResize(300);

  const setPage = (index: number) => {
    console.log(`Setting page to ${index}`);
    setPageIndex(index);
  };
  const updateDarkMode = (dark: boolean) => {
    dark
      ? window.document
          .getElementsByTagName("html")[0]
          .setAttribute("data-bs-theme", "dark")
      : window.document
          .getElementsByTagName("html")[0]
          .setAttribute("data-bs-theme", "light");
    setDarkMode(dark);
  };
  return (
    <div>
      <div className="App">
        <header className="App-header"></header>


        <div
          style={{
            display: "grid",
            gridTemplateColumns: "14rem 1fr",
            height: "100vh",
          }}
        >
          <div>
          <SideNav
            dark={darkMode}
            callback={updateDarkMode}
            propogateDarkMode={updateDarkMode}
            />
          </div>
          <div>
            <Navbar index={pageIndex} callback={setPage} />
            {pages[pageIndex]}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
