
import './App.css';
import { useState, useEffect } from 'react';
import { PopularRepos } from './components/PopularRepos';
import { AboutProject } from './components/AboutProject';


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

        </>
    );
}

export default App;
