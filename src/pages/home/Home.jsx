import React from "react";
import ListSurvey from "../../components/listSurvey/ListSurvey";
import NavBar from "../../components/navBar/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <div id="home">
        <h1>Lista de encuestas</h1>
        <ListSurvey />
      </div>
    </>
  );
}

export default Home;
