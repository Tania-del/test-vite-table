import BootstrapTable from 'react-bootstrap/Table';
import { IAccount } from '../types/placeholder-data';
import { Link } from 'react-router-dom';

interface IAccountsTable {
    data: IAccount[];
}
    
const AccountsTable = ({ data }: IAccountsTable) => {
    
  return (
      <BootstrapTable striped bordered hover>
          <thead>
              <tr>
                  <th>Account ID</th>
                  <th>Email</th>
                  <th>Auth Token</th>
                  <th>Creation Date</th>
              </tr>
          </thead>
          <tbody>
              
                  {data.map(({ accountId, email, authToken, creationDate }) => (
                      <tr key={accountId}>
                          <td>
                              <Link to={`/profiles/${accountId}`}>{accountId}</Link>
                          </td>
                          <td>{email}</td>
                          <td>{authToken}</td>
                          <td>{creationDate}</td>
                      </tr>
                  ))}
         
          </tbody>
   </BootstrapTable>
  )
}

export default AccountsTable;
