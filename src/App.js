import './App.css';
import NavBar from "./components/navbar/NavBar";
import Falcon from "./components/falcon/Falcon";
import Universe from "./components/universe/Universe";
import News from "./components/news/News";
import Sun from "./components/universe/Sun";

function App() {
    return (
        <div>

                <NavBar/>
                <Universe/>
            <Sun/>
                <Falcon/>
            <News/>


        </div>

    );
}

export default App;
