import React, { useMemo, useState } from 'react'

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
    setSavedRepos(deleteRepo)
    localStorage.setItem('savedRepos', JSON.stringify(deleteRepo))
  }

  const emptyStar = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/800px-Five-pointed_star.svg.png'
  const fullStar = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/2153px-Star_icon_stylized.svg.png'
  const unStar = 'https://pbs.twimg.com/profile_images/1064391458269134849/Pq7SFgCy_400x400.jpg'

  return (
    <div className='bg-white '>
      <div className='relative overflow-x-auto  '>
        <table className='bg-white shadow-lg rounded-md overflow-hidden w-full'>
          <thead className='bg-blue-500 text-white text-lg font-bold'>
            <tr>
              <th className='py-4 px-6'>Repository Name</th>
              <th className='py-4 px-6'> github URL</th>
              <th className='py-4 px-6'>Language</th>
              <th className='py-4 px-6'>Stars</th>
              <th className='py-4 px-6'></th>
            </tr>
          </thead>

          {dataAPI.items &&
            dataAPI.items.map((oneRepo) => {
              return (
                <tbody key={oneRepo.id}>
                  <tr>
                    <td className='py-3 px-6 border-b border-gray-200 font-medium'>{oneRepo.name}</td>
                    <td className='py-3 px-6 border-b border-gray-200 dark:text-blue-500 hover:underline'>
                      <a target='_blank' rel='noreferrer' href={oneRepo.html_url}>
                        {oneRepo.html_url}
                      </a>
                    </td>
                    <td className='py-3 px-6 border-b border-gray-200'>{oneRepo.language}</td>
                    <td className='py-3 px-6 border-b border-gray-200'>100</td>
                    <td className='py-3 px-6 border-b border-gray-200'>
                      <button onClick={() => handleSaveRepo(oneRepo.id)}>
                        {/* className='bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-700' */}
                        <img className='w-14' src={savedRepos.includes(oneRepo.id) ? fullStar : emptyStar} alt=' star' />
                      </button>
                    </td>
                  </tr>
                </tbody>
              )
            })}
        </table>
      </div>

      <h1 className='text-center text-slate-800 text-4xl Class Properties p-3 my-10'>Your favorite repositories from the list </h1>
      <table className='bg-white shadow-lg rounded-md overflow-hidden w-full'>
        <thead className='bg-blue-500 text-white text-lg font-bold'>
          <tr>
            <th className='py-4 px-6'>Repository Name</th>
            <th className='py-4 px-6'> github URL</th>
            <th className='py-4 px-6'>Language</th>
            <th className='py-4 px-6'>Stars</th>
            <th className='py-4 px-6'></th>
          </tr>
        </thead>

        {parceData.map((savedData) => (
          <tbody key={savedData.id}>
            <tr>
              <td className='py-3 px-6 border-b border-gray-200 font-medium'>{savedData.name}</td>
              <td className='py-3 px-6 border-b border-gray-200 dark:text-blue-500 hover:underline'>
                <a target='_blank' rel='noreferrer' href={savedData.html_url}>
                  {savedData.html_url}
                </a>
              </td>
              <td className='py-3 px-6 border-b border-gray-200'>{savedData.language}</td>
              <td className='py-3 px-6 border-b border-gray-200'>100</td>
              <td className='py-3 px-6 border-b border-gray-200'>
                <button onClick={() => handleRemoveRepo(savedData.id)}>
                  <img className='w-8' src={unStar} alt=' unStar' />
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  )
}
