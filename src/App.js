import React, { useState } from 'react'
import './App.css'

const App = () => {

  const [inputVal, setInputVal] = useState("");
  console.log(inputVal, 'inputVal');

  const tableData = [
    {
      id: 0,
      Name: 'OWES',
      degree: 'Bsc it',
      profession: 'frontend developer',
    },
    {
      id: 1,
      Name: 'ABBAS',
      degree: 'Bsc it',
      profession: 'React developer',
    },
    {
      id: 2,
      Name: 'ASHAR',
      degree: 'Bsc it',
      profession: 'devops',
    },
    {
      id: 3,
      Name: 'AHMED',  
      degree: 'Msc it',
      profession: 'devops',
    },
    {
      id: 4,
      Name: 'AMIR',
      degree: 'Bsc it',
      profession: 'full stack',
    },
    {
      id: 5,
      Name: 'ARHAM',
      degree: 'Bsc it',
      profession: 'java developer',
    },
    {
      id: 6,
      Name: 'ARSHAD',
      degree: 'Bsc it',
      profession: 'cyber security',
    },
    {
      id: 7,
      Name: 'ATIF',
      degree: 'Bsc it',
      profession: 'backend developer',
    },
    {
      id: 8,
      Name: 'ASIF',
      degree: 'BCA',
      profession: 'full stack',
    },
  ]

  const filterData = tableData.filter((ele) => {
    return (
      ele.Name.toLowerCase().includes(inputVal.toLowerCase()) || 
      ele.degree.toLowerCase().includes(inputVal.toLowerCase()) ||
      ele.profession.toLowerCase().includes(inputVal.toLowerCase()) 
    )
  })

  return (
    <>
      <div className="main">

        <input type="text" placeholder='Names' className='my_input' value={inputVal} onChange={(e) => setInputVal(e.target.value)} />

        <table width="80%" border="1px" id="my_table" className='my_table' >
          <thead>
            <tr>
              <th width="30%">Name</th>
              <th width="30%">degree</th>
              <th width="40%">profession</th>
            </tr>
          </thead>
          <tbody >
            {filterData.map((ele, idx) => {
              const { id, Name, degree, profession } = ele;
              return (
                <tr key={id}>
                  <td>{Name}</td>
                  <td>{degree}</td>
                  <td>{profession}</td>
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
