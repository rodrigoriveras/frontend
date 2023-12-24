import React from 'react';
import DataTable from 'react-data-table-component';
// import React, {useState} from 'react';

      columns = [
        {
            name: 'Title',
            selector: row => row.title,
        },
        {
            name: 'Year',
            selector: row => row.year,
        },
    ];
    
      data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    return (  
        <div className="container mt-5">
        <DataTable 
          columns={columns}
          data={data}
        ></DataTable>  
        </div>
    )       


// function Table01() {
//     return (
//       <>

//         <h1>Name: Octavia</h1>
//         <h2>Species: Octopus</h2>
//          <h2>Class: Cephalopoda</h2>
//       </>
//     )
//   }

export default Table01;