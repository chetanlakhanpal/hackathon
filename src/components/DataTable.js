import React from "react";

const DataTable = (props) => (
    <div>
      <br></br>
        {props.users.length > 0 && (
        <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Email</th>
              <th>Credit Score</th>
              <th>Salary</th>
              <th>Bank Account No.</th>
              <th>Phone No.</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {props.users && props.users.map(value => (
              <tr>
              <td>{value.id}</td>
              <td>{value.first_name}</td>
              <td>{value.last_name}</td>
              <td>{value.age}</td>
              <td>{value.email}</td>
              <td>{value.credit_score}</td>
              <td>{value.salary}</td>
              <td>{value.bank_account}</td>
              <td>{value.phone_no}</td>
              <td><button>Check Eligiblity</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        )}
    </div>
)

export default DataTable