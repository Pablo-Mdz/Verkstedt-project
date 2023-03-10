
import './App.css';
import { useState, useEffect } from 'react';
import { PopularRepos } from './components/PopularRepos';
import { AboutProject } from './components/AboutProject';


function App() {


    const [dataAPI, setdataAPI] = useState([])

    useEffect(() => {

        fetch('https://api.github.com/search/repositories?q=created:>2023-02-01&sort=stars&order=desc')
            .then((response) => response.json())
            .then((dataAPI) => setdataAPI(dataAPI))
            .catch(error => console.error(error))
    }, []);

    return (
        <div className='px-auto mx-auto'>

            <AboutProject />
            <PopularRepos dataAPI={dataAPI} />

        </div>
    );
}

export default App;
