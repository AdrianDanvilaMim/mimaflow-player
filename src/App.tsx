import React, {useEffect, useState} from 'react';
import './App.css';
import {Container} from "./components/Container";
import {MimHeader} from "./components/MimHeader";
import {SearchBar} from "./components/SearchBar";
import {SongList} from "./components/SongList";


function App() {

  return (
    <div className="App">
        <MimHeader></MimHeader>
        <main>
            <Container className={"main-container"}>
                <SearchBar className={"search-bar"} ></SearchBar>
                <SongList className={"song-list"}></SongList>
            </Container>
        </main>

    </div>
  );
}

export default App;
