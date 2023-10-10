import React from 'react'

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
    return (
      <>
          <NavBar />
          <ItemListContainer greetings={"BasketBall | STORE"} />
      </>
    )
  }

export default App;

