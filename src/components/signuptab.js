import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
// import React from 'react';
import DataTable from 'react-data-table-component';

    const table01 = props =>  {

        // const [columns, setColumns] = useState("");
        // const [data, setData] = useState("");

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
}

const Signuptab = props => {

 const [columns, setColumns] = useState("");
  const [data, setData] = useState("");

//  const onChangeUsername = e => {
//   const username = e.target.value;
//   setUsername(username);
//   }

//  const onChangePassword = e => {
//   const password = e.target.value;
//   setPassword(password);
//  }



 return(
  <Container>
   <Form>
    <Form.Group className="mb-3">
     <Form.Label>Username</Form.Label>
      <Form.Control
             type="text"
             placeholder="Enter username"
             value={columns}
      onChange={onChangeColumns}
     />
    </Form.Group>
    <Form.Group className="mb-3">
     <Form.Label>Password</Form.Label>
      <Form.Control
             type="password"
             placeholder="Enter password"
             value={data}
     onChange={onChangeData}
    />
     </Form.Group>
   <Button variant="primary" onClick={Signuptab}>
    Sign Uptab
   </Button>
   </Form>
 </Container>
)
}
export default Signuptab;