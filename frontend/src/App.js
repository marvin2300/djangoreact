import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Nav from './components/Nav';
import Create from './components/Create';
import Upload from "./components/Upload";
import Player from "./components/Player";
import AdminPage from "./components/AdminPage";

function App() {
  return (
      <div className="flex min-h-screen bg-doggo-green">
          <div className="w-80">
          <aside aria-label="Sidebar">
              <Nav/>
          </aside>
          </div>
          <div className="flex flex-col justify-center items-center w-full">
          <main>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/about" element={<Nav/>}/>
                  <Route path="/create" element={<Create/>}/>
                  <Route path="/upload" element={<Upload/>}/>
                  <Route path="/player" element={<Player/>}/>
                  <Route path="/admin" element={<AdminPage/>}/>
              </Routes>
          </main>
          </div>
      </div>
  );
}

export default App;
