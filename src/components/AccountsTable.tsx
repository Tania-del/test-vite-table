import React from 'react'
import BootstrapTable from 'react-bootstrap/Table';


const AccountsTable = () => {
  return (
      <BootstrapTable striped bordered hover>
          <thead>
              <tr>
                  <th>Account ID</th>
                  <th>Email</th>
                  <th>Creation Date</th>
              </tr>
          </thead>
          <tbody>
              
          </tbody>
   </BootstrapTable>
  )
}

export default AccountsTable;
