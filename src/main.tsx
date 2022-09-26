import React from "react";
import ReactDOM from "react-dom/client";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <main
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(40vw, 1fr))",
        placeContent: "space-evenly",
        placeItems: "center",
        height: "100vh",
        backgroundColor: "beige",
        color: "white",
        fontSize: "1.5rem",
      }}
    >
      <section
        style={{
          position: "relative",
          background: "lightgrey",
          aspectRatio: "16/9",
          width: "90%",
        }}
      >
        <Content />
      </section>
    </main>
  </React.StrictMode>
);

function Content() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#228833",
          position: "absolute",
          top: "45px",
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        Grün
      </div>
      <div
        style={{
          backgroundColor: "#4477AA",
          position: "absolute",
          height: "45px",
          top: 0,
          right: "60px",
          left: 0,
        }}
      >
        Blau
      </div>
      <div
        style={{
          backgroundColor: "#CCBB44",
          position: "absolute",
          height: "100%",
          width: "60px",
          top: 0,
          right: 0,
        }}
      >
        Gelb
      </div>
      <div
        style={{
          backgroundColor: "#EE6677",
          position: "absolute",
          right: "60px",
          left: 0,
          bottom: 0,
        }}
      >
        Rot
      </div>
      <div
        style={{
          backgroundColor: "#000",
          marginLeft: "10px",
          paddingLeft: "10px",
          width: "100px",
          position: "absolute",
          top: "80px",
          left: 0,
        }}
      >
        1
      </div>
      <div
        style={{
          backgroundColor: "#000",
          marginRight: "10px",
          paddingLeft: "10px",
          width: "100px",
          position: "absolute",
          top: "80px",
          right: "60px",
        }}
      >
        2
      </div>
      <div
        style={{
          backgroundColor: "#000",
          marginLeft: "10px",
          paddingLeft: "10px",
          width: "100px",
          position: "absolute",
          left: 0,
          bottom: "45px",
        }}
      >
        3
      </div>
      <div
        style={{
          backgroundColor: "#000",
          marginRight: "10px",
          paddingLeft: "10px",
          width: "100px",
          position: "absolute",
          right: "60px",
          bottom: "45px",
        }}
      >
        4
      </div>
    </>
  );
}
