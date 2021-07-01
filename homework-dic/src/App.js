import Home from "./pages/Home";
import Form from "./pages/Form";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import styled from "styled-components";
import { firestore } from "./firebase";

function App() {
  const dbdictionary = firestore.collection("dictionary");
  dbdictionary.get().then((docs) => {
    docs.forEach((doc) => {
      console.log(doc.data());
    });
  });

  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={Home} exact></Route>
        <Route path="/create" component={Form}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
