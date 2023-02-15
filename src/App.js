
import './App.css';
// import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { PopularRepos } from './components/PopularRepos';
import { Home } from './components/Home';
import { SavedRepo } from './components/SavedRepo';
// import axios from 'axios'


function App() {


    const [dataAPI, setdataAPI] = useState([])

    useEffect(() => {

        fetch('https://api.github.com/search/repositories?q=created:>2017-01-10&sort=stars&order=desc')
            .then((response) => response.json())
            .then((dataAPI) => setdataAPI(dataAPI))
            .then((data) => console.log(data))
            .catch(error => console.error(error))
    }, []);

    return (
        <div className='' >
            <h1>Coding Challenge</h1>

            {/* <Link to="/">
                <h1>Home</h1>
            </Link> */}
            {/* <Routes>
                <Route path="/" element={<Home />} />
            </Routes> */}
            {/* <Home /> */}
            <PopularRepos dataAPI={dataAPI} />
            <SavedRepo dataAPI={dataAPI} />


        </div>
    );
}

export default App;
