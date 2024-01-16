import BootstrapTable from "react-bootstrap/Table";
import { IAccount } from "../types/placeholder-data";
import { Link, useSearchParams } from "react-router-dom";
import "../App.css";
import { useEffect, useState } from "react";

interface IAccountsTable {
  data: IAccount[];
}

const AccountsTable = ({ data }: IAccountsTable) => {
  const [searchParams, setSearchParams] = useSearchParams();
    const avaliableInput = searchParams.get("input") || '';

  const [value, setValue] = useState<string>(avaliableInput);
    const [filteredData, setFilteredData] = useState<IAccount[]>(data);
    
  const handleInputQuery = (value: string) => {
    if (value) {
        setSearchParams({ input: value }, { replace: true, });
    } else {
      setSearchParams('', {replace: true});
    }
  };

  useEffect(() => {
    const newData = data.filter(
      ({ accountId, email, authToken, creationDate }) =>
        accountId.toString().includes(value) ||
        email.toLowerCase().includes(value.toLowerCase()) ||
        authToken.toLowerCase().includes(value.toLowerCase()) ||
        creationDate.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredData(newData);
     
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, value]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
      setValue(inputValue);
      handleInputQuery(inputValue)
  };
    
    useEffect(() => {
        setValue(avaliableInput)
    }, [avaliableInput])

  return (
    <>
      <div className="custom-container">
        <input
          type="text"
          value={value}
          placeholder="Filter by keyword"
          onChange={handleInputChange}
        />
      </div>

      {filteredData.length > 0 ? (
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
            {filteredData.map(
              ({ accountId, email, authToken, creationDate }) => (
                <tr key={accountId}>
                  <td>
                    <Link className="custom-a" to={`/profiles/${accountId}`}>
                      {accountId}
                    </Link>
                  </td>
                  <td>{email}</td>
                  <td>{authToken}</td>
                  <td>{creationDate}</td>
                </tr>
              )
            )}
          </tbody>
        </BootstrapTable>
      ) : (
        <p>No matching data found.</p>
      )}
    </>
  );
};

export default AccountsTable;
