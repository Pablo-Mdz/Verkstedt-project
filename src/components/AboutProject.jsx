import React from 'react'

export const AboutProject = () => {
    
  return (
    <div className='bg-slate-800 py-4'>
      <h1 className='text-center text-slate-200 text-6xl Class Properties underline p-3'>Coding Challenge</h1>
      <div className='text-slate-400 text-2xl pl-3 '>
        <ul>
          <li>
            Company:
            <a target='_blank' href='https://verkstedt.com/' rel='noreferrer' className='text-blue-700'>
              Verkstedt
            </a>
          </li>
          <li>Date: Feb. 2023</li>
          <li>
            Name:
            <a target='_blank' href='https://pablocigoy.com/' rel='noreferrer' className='text-blue-700'>
              Pablo Cigoy
            </a>
          </li>
          <li className='cursor-pointer '>
            Github repository:
            <a className='text-blue-700' target='_blank' rel='noreferrer' href='https://github.com/Pablo-Mdz/Verkstedt-project'>
              Github
            </a>
          </li>
        </ul>
        <h1 className='text-center text-slate-200 text-4xl Class Properties p-3 mt-6 mb-3'>A list of the most popular repositories on Github of the last week</h1>
      </div>
    </div>
  )
}
