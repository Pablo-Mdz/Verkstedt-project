import React, { useMemo } from 'react'
import { useState } from 'react'

export const PopularRepos = ({ dataAPI }) => {
  const [savedRepos, setSavedRepos] = useState(JSON.parse(localStorage.getItem('savedRepos')) || [])

  const parceData = useMemo(() => {
    if (!dataAPI.items) {
      return []
    }
    return dataAPI.items.filter((singleData) => savedRepos.includes(singleData.id))
  }, [dataAPI.items, savedRepos])

  // select each item by id and save in savedRepos Hook and localStorage
  const handleSaveRepo = (id) => {
    if (savedRepos.includes(id)) {
      return
    }
    const nexState = [...savedRepos, id]
    setSavedRepos(nexState)
    localStorage.setItem('savedRepos', JSON.stringify(nexState))
  }

  const handleRemoveRepo = (id) => {
    if (!savedRepos.includes(id)) {
      return
    }
    const deleteRepo = savedRepos.filter((elementToDelete) => elementToDelete !== id)
    localStorage.setItem('savedRepos', JSON.stringify(deleteRepo))
    setSavedRepos(deleteRepo)
  }

  return (
    <div className='bg-slate-800 '>
      <div className='relative overflow-x-auto  '>
        <table className='w-screen text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='border-spacing-x-2 p-3 border-separate '>
                Project Name
              </th>
              <th scope='col' className='border-spacing-x-2 p-3 border-separate '>
                github URL
              </th>
              <th scope='col' className='border-spacing-x-2 border-separate px-18 w-4 '>
                Description
              </th>
              <th scope='col' className='border-spacing-x-2 border-separate pr-10 '>
                Stars
              </th>
              <th scope='col' className='px-6 py-3'>
                Action
              </th>
            </tr>
          </thead>

          {dataAPI.items &&
            dataAPI.items.map((oneRepo) => {
            //   const urlGithub = oneRepo.html_url.replace('verkstedt-cigoy.netlify.app/', '').replace('git://', '').replace('.git', '')
              return (
                <tbody key={oneRepo.id}>
                  <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 '>
                    <td className='px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700'>{oneRepo.name}</td>
                    <td className='px-2 py-4 font-medium  whitespace-nowrap dark:text-blue-500 hover:underline border border-slate-700'>
                      <a target='_blank' rel='noreferrer' href={oneRepo.html_url}>
                        {oneRepo.html_url}
                      </a>
                    </td>
                    <td className='px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700'>{oneRepo.description}</td>
                    <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700'>{oneRepo.stargazers_count}</td>
                    <td>
                      <button onClick={() => handleSaveRepo(oneRepo.id)} className='px-6 py-4 font-medium text-blue-900 dark:text-blue-500 hover:underline'>
                        Save
                      </button>
                    </td>
                  </tr>
                </tbody>
              )
            })}
        </table>
      </div>

      <h1 className='text-center text-slate-200 text-4xl Class Properties p-3 mt-16 mb-3'>Your favorite repositories from the list </h1>
      <table className='w-screen text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr className=''>
            <th className='border-spacing-x-1 p-1 border-separate '>Project Name</th>
            <th className='border-spacing-x-2 p-3 border-separate '>github URL</th>
            <th className='border-spacing-x-2 border-separate px-18 '>Description</th>
            <th className='border-spacing-x-2 border-separate pr-10 '>Stars</th>
            <th className='px-6 py-3'>Action</th>
          </tr>
        </thead>

        {parceData.map((savedData) => (
          <tbody key={savedData.id}>
            <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 '>
              <td className='px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700'>{savedData.name}</td>
              <td className='px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700'>{savedData.git_url}</td>
              <td className='px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700'>{savedData.description}</td>
              <td className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-700'> {savedData.stargazers_count}</td>
              <td>
                <button onClick={() => handleRemoveRepo(savedData.id)} className='px-6 py-4 font-medium text-red-900 dark:text-red-500 hover:underline'>
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}
