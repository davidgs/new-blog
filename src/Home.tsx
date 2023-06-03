import Page2 from "./Page2";
import RotatingHead from "./components/RotatingHead";
import Typer from "./components/Typer";


export default function Home() {

  return (
    <div
      style={{
        position: "absolute",
        height: "100vh",
        top: "30px",
        width: "1fr",
        overflow: "hidden",
      }}
    >
      <img
        src="https://davidgs.com/images/site/background2.jpg"
        alt="DavidGS.com"
        height={"100%"}
      />
      <div
        style={{
          justifyContent: "center",
          top: "50%",
          transform: "translate(25%, -50%)",
          paddingLeft: "10rem",
          position: "absolute",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <div
          style={{
            width: "170px",
            height: "170px",
            color: "white",
            margin: "auto",
          }}
        >
          <RotatingHead />
        </div>
        <div
          style={{
            width: "500px",
            display: "flex",
            justifyContent: "center",
            left: `calc(100vw/2)`,
          }}
        >
          <Typer />
        </div>

      </div>
      <div style={{
        position: "absolute",
        width: "100%",
        height: "100px",
        textAlign: "center",
        color: "white",
        transform: "translate(75%, -50%)",
    top: "90%",

      }}>
          <i className="arrow bounce fa fa-chevron-down"></i>
      </div>
      <div></div>
      <div style={{ display: "block", backgroundColor: "white", width: "100%", height: "800px" }}>
        <h1>Text</h1>
        <Page2 />
      </div>

    </div>
  );
}
