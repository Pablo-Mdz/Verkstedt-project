import React, {useState, useEffect} from "react";

export const SavedRepo = ({dataAPI}) => {
    //     const [repoSaved, setReposSaved] = useState("");
    //     // Handle changes to the input field

    //     useEffect(() => {
    //         const storedValue = localStorage.getItem("repoSaved");
    //         if (storedValue) {
    //             setReposSaved(storedValue);
    //         }
    //     }, []);

    //  const handleSelect = (event) => {
    //         const value = event.target.value;
    //         repoSaved(value);
    //         localStorage.setItem("selectedValue", value);
    //     };

    //     // setReposSaved(repoSaved);
    //     // localStorage.setItem("repoSaved", JSON.stringify(repoSaved));

    const [savedRepos, setSavedRepos] = useState([]);

    // take data from API
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(dataAPI)
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error(error));
    }, [dataAPI]);

    const handleStarClick = (item) => {
        const newArrSavedRepos = [...savedRepos, item];
        setSavedRepos(newArrSavedRepos);
        console.log(newArrSavedRepos);
        //   localStorage.setItem("savedRepos", JSON.stringify(newArrSavedRepos));
        //   alert()
    };
    // const handleStarClick = (cliked ) => {
    //     const savedReposLocal = [...data, cliked];
    //     // console.log(cliked)
    //     setData(savedReposLocal);
    //     // localStorage.setItem("data", JSON.stringify(savedReposLocal));
    // };

    // useEffect(() => {
    //     const dataFromStorage = JSON.parse(
    //         localStorage.getItem("data")
    //     );
    //     if (dataFromStorage) {
    //         setData(dataFromStorage);
    //     }
    // }, []);

    return (
        <div>
            <h2>Favourites Repositories</h2>
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    {/* <select value={repoSaved} onChange={handleSelect}> */}
                    <tr>
                        <th
                            scope="col"
                            className="border-spacing-x-2 p-3 border-separate "
                        >
                            Project Name
                        </th>
                        <th
                            scope="col"
                            className="border-spacing-x-2 p-3 border-separate "
                        >
                            github URL
                        </th>
                        <th
                            scope="col"
                            className="border-spacing-x-2 border-separate px-18  "
                        >
                            Description
                        </th>
                        <th
                            scope="col"
                            className="border-spacing-x-2 border-separate pr-10 "
                        >
                            Stars
                        </th>
                    </tr>
                </thead>
            </table>

            {savedRepos.map((savedData) => (
                    <>
                        <tbody>
                            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                                <td
                                    scope="row"
                                    className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700"
                                >
                                    {savedData.name}
                                </td>
                                <td
                                    scope="row"
                                    className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700"
                                >
                                    {savedData.git_url}
                                </td>
                                <td
                                    scope="row"
                                    className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700"
                                >
                                    {savedData.description}
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700">
                                    {" "}
                                    {savedData.stargazers_count}
                                </td>
                                <button onClick={handleStarClick(savedData)}>
                                    {" "}
                                    save
                                </button>
                            </tr>
                        </tbody>
                    </>
                ))}
        </div>
    );
};
