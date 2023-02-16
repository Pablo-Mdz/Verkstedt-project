
import './App.css';
// import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import { PopularRepos } from './components/PopularRepos';
import { Home } from './components/Home';
import { SavedRepo } from './components/SavedRepo';
import { AboutProject } from './components/AboutProject';
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
        <>
            <AboutProject />
            <PopularRepos dataAPI={dataAPI} />
            {/* <SavedRepo dataAPI={dataAPI} /> */}

        </>
    );
}

export default App;
