import React from "react";

export const PopularRepos = ({repository}) => {
    // console.log("complete repository on Component  ", repository.items);

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
                            <th scope="col" class="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>

                    {repository &&
                        repository.items &&
                        repository.items.map((oneRepo) => {
                            // console.log(" One repo", oneRepo);
                            return (
                                <tbody>
                                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                                        <th
                                            scope="row"
                                            className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700"
                                        >
                                            {oneRepo.name}
                                        </th>
                                        <th
                                            scope="row"
                                            className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700"
                                        >
                                            {oneRepo.git_url}
                                        </th>
                                        <th
                                            scope="row"
                                            className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700"
                                        >
                                            {oneRepo.description}
                                        </th>
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700">
                                            {" "}
                                            {oneRepo.stargazers_count}
                                        </td>
                                        <a href="#" class="px-6 py-2 font-medium text-blue-600 dark:text-blue-500 hover:underline">Save</a>
                                    </tr>
                                </tbody>
                            );
                        })}
                </table>
            </div>
        </>
    );
};
