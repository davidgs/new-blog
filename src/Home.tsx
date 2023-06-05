import Page2 from "./Page2";
import RotatingHead from "./components/RotatingHead";
import Typer from "./components/Typer";
import background from "./assets/images/background2.jpg";


export default function Home() {

  return (
    <div
      style={{
        position: "absolute",
        top: "30px",
        width: `calc(100vw - 14rem)`,
        overflow: "hidden",
      }}
    >
      <img
        src={background}
        alt="DavidGS.com"
        height={"100%"}
        id="bg-img"
        style={{
          objectFit: "contain",
        }}
      />
      <div
        style={{
          justifyContent: "center",
          top: "30%",
          transform: "translate(100%, -50%)",
          paddingLeft: "10rem",
          marginBottom: "1rem",
          position: "absolute",
          textAlign: "center",
          margin: "auto",
          clear: "both",
        }}
      >
          <RotatingHead />
        <div
          style={{
            width: "500px",
            position: "absolute",
            justifyContent: "center",
            left: `calc(1vw/2)`,
            marginTop: "1rem",
            clear: "both",
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
