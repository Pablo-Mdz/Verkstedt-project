import React from "react";
import {useState, useEffect} from "react";

export const PopularRepos = ({dataAPI}) => {

    const [savedRepos, setSavedRepos] = useState([]);
    const [parceData, setParceData] = useState([]);

    // select each item by id and save un savedRepos
    const handleSaveRepo = (id) => {
        const selected = dataAPI.items.find(
            (singleData) => singleData.id === id);
        localStorage.setItem("savedRepos", JSON.stringify(savedRepos));
        setSavedRepos([...savedRepos, selected]);
    };

    
    //to take data from localstorage when you refresh
    useEffect(() => {
        const refreshedItem = JSON.parse(localStorage.getItem("savedRepos"));
        if (refreshedItem) {
            setParceData(refreshedItem);
        }
    }, [savedRepos]);

  

    return (
        <div className="bg-slate-800">
            <div className="relative overflow-x-auto  ">
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
                                                scope="row"
                                                className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700"
                                            >
                                                {oneRepo.git_url}
                                            </td>
                                            <td
                                                scope="row"
                                                className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700"
                                            >
                                                {oneRepo.description}
                                            </td>
                                            <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700">
                                                {oneRepo.stargazers_count}
                                            </td>

                                            <button
                                                onClick={() =>
                                                    handleSaveRepo(oneRepo.id)
                                                }
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

            <h1 className="text-center text-slate-400 text-4xl Class Properties p-3">
                Your favorite repositories from the list{" "}
            </h1>
 {/* second table  */}
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
                        </tr>
                    </tbody>
                </>
            ))}
        </div>
    );
};
