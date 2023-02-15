import React, {useState, useEffect} from "react";

export const SavedRepo = ({dataAPI}) => {
    const [repoSaved, setReposSaved] = useState("");
    // Handle changes to the input field

    useEffect(() => {
        const storedValue = localStorage.getItem("repoSaved");
        if (storedValue) {
            setReposSaved(storedValue);
        }
    }, []);

 const handleSelect = (event) => {
        const value = event.target.value;
        repoSaved(value);
        localStorage.setItem("selectedValue", value);
    };

    // setReposSaved(repoSaved);
    // localStorage.setItem("repoSaved", JSON.stringify(repoSaved));

    return (
        <div>
            {/* <h2>Select a value:</h2>
            <select value={repoSaved} onChange={handleSelect}>
                <option value="">saved</option>
                {dataAPI &&
                    dataAPI.items &&
                    dataAPI.items.map((item) => (
                        <>
                            <tbody>
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
                                    <th
                                        scope="row"
                                        className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700"
                                    >
                                        {item.name}
                                    </th>
                                </tr>
                            </tbody>
                        </>
                    ))}
            </select> */}
        </div>
    );
};


