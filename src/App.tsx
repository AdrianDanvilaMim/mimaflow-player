import './App.css';
import {Container} from "./components/Container";
import {MimHeader} from "./components/MimHeader";
import {SearchBar} from "./components/SearchBar";
import {SongList} from "./components/SongList";
import {Reproducer} from "./components/Reproducer";


function App() {

  return (
    <div className="App">
        <MimHeader></MimHeader>
        <main>
            <Container className={"main-container"}>
                <SearchBar className={"search-bar"} ></SearchBar>
                <SongList className={"song-list"}></SongList>
                <Reproducer className={"reproducer"}></Reproducer>
            </Container>
        </main>

    </div>
  );
}

export default App;
