import React, { useState } from 'react'
import './App.css'

const App = () => {


  const [inputVal, setInputVal] = useState("");
  console.log(inputVal, 'inputVal');




  const tableData = [
    {
      id: 1,
      name: 'Owes',
      degree: 'Bsc it',
      profession: 'Frontend developer'
    },
    {
      id: 2,
      name: 'Bilal',
      degree: 'Bsc it',
      profession: 'React developer'
    },
    {
      id: 3,
      name: 'Usama',
      degree: 'Bsc it',
      profession: 'Devops'
    },
    {
      id: 4,
      name: 'Zaid',
      degree: 'Bsc it',
      profession: 'full stack'
    },
    {
      id: 5,
      name: 'Nouman',
      degree: 'Bsc it',
      profession: 'Java developer'
    },
    {
      id: 6,
      name: 'Huzaifa',
      degree: 'Bsc it',
      profession: 'Cyber security'
    },
    {
      id: 7,
      name: 'Rayyan',
      degree: 'Bsc it',
      profession: 'Backend developer'
    },
  ]

  const filteredData = tableData.filter((data) => {
    return (
      data.name.toLowerCase().includes(inputVal.toLowerCase()) ||
      data.degree.toLowerCase().includes(inputVal.toLowerCase()) ||
      data.profession.toLowerCase().includes(inputVal.toLowerCase())
    );
  })
  return (  
    <>
      <div className="main">

        <input type="text" placeholder='Names' className='my_input' value={inputVal} onChange={(e) => setInputVal(e.target.value)} />

        <table width="80%" border="1px" id="my_table" className='my_table' >
          <thead>
            <tr >
              <th width="30%">Name</th>
              <th width="30%">degree</th>
              <th width="40%">profession</th>
            </tr>
          </thead>
          <tbody>
            {
              filteredData.map((item, index) => {
                return (
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.degree}</td>
                    <td>{item.profession}</td>
                  </tr>
                )
              })
            }


          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
