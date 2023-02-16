import React from "react";
import {useState, useEffect} from "react";
// import {SavedRepo} from "./SavedRepo";

export const PopularRepos = ({dataAPI}) => {


    const [savedRepos, setSavedRepos] = useState([]);

    const handleSaveRepo = (id) => {
        const selected = dataAPI.items.find(
            (singleData) => singleData.id === id
        );
        localStorage.setItem("savedRepos", JSON.stringify(savedRepos));
        console.log(savedRepos);
        setSavedRepos([...savedRepos, selected]);
    };


    //to take from localstorage when you refresh
    const [parceData, setParceData] = useState([]);

    useEffect(() => {
        const refreshedItem = JSON.parse(localStorage.getItem("savedRepos"));
        if (refreshedItem) {
            setParceData(refreshedItem);
        }
    }, [savedRepos]);

    console.log("%cEste mensaje es red", "color: red", parceData);

    return (
        <>
            
            <div className="relative overflow-x-auto space-">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>

                    {dataAPI.items &&
                        dataAPI.items.map((oneRepo) => {
                            // console.log(" One item", oneRepo);
                            return (
                                <>
                                    <tbody>
                                        <tr
                                            key={oneRepo.id}
                                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 "
                                        >
                                            <td
                                                scope="row"
                                                className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700"
                                            >
                                                {oneRepo.name}
                                            </td>
                                            <td
                                                // key={oneRepo.git_url}
                                                scope="row"
                                                className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700"
                                            >
                                                {oneRepo.git_url}
                                            </td>
                                            <td
                                                // key={oneRepo.description}
                                                scope="row"
                                                className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700"
                                            >
                                                {oneRepo.description}
                                            </td>
                                            <td
                                                // value={oneRepo.stargazers_count}
                                                // key={oneRepo.stargazers_count}
                                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700"
                                            >
                                                {oneRepo.stargazers_count}
                                            </td>

                                            <button
                                                onClick={() =>
                                                    handleSaveRepo(oneRepo.id)
                                                }
                                                // type="submit"
                                                className="px-6 py-4 font-medium text-blue-900 dark:text-blue-500 hover:underline"
                                            >
                                                Save
                                            </button>
                                        </tr>
                                    </tbody>
                                </>
                            );
                        })}
                </table>
            </div>

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

            {parceData.map((savedData) => (
                <>
                    <tbody>
                        <tr
                            key={savedData.id}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 "
                        >
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
                            {/* <button onClick={handleSaveRepo(savedData)}>
                                    {" "}
                                    save
                                </button> */}
                        </tr>
                    </tbody>
                </>
            ))}
        </>
    );
};
