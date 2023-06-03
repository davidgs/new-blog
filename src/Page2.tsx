import RotatingHead from "./components/RotatingHead";
import Typer from "./components/Typer";

export default function Page2() {
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
      </div>
      <div
        style={{
          backgroundColor: "white",
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: "100%",
        }}
      >
        <h1>Text</h1>
      </div>
    </div>
  );
}
