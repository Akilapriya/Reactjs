import { useState } from "react";

function IterateObjectByMap() {
    
    
  
    const [users, setUsers] = useState([
      {
        id: 1,
        name: "Akila",
        designation: "Developer",
        phone: "098765434",
        email: "ak@gmail.com",
      },
      {
        id: 2,
        name: "Priya",
        designation: "Tester",
        phone: "0987645434",
        email: "pri@gmail.com",
      },
      {
        id: 3,
        name: "Varsha",
        designation: "Developer",
        phone: "092345434",
        email: "var@gmail.com",
      },
    ]);

    return(
        <>
        <div className="container">
        <h2 className="text-center">Users List</h2>
        <table className="table table-striped mt-3">
          <thead>
            <tr className="table table-dark">
              <th>Name</th>
              <th>Designation</th>
              <th>Phone</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.designation}</td>
                        <td>{item.phone}</td>
                        <td>{item.email}</td>
                        <td>
                            <button
                                className="btn btn-primary me-3"
                                // onClick={() => editUser(index)}
                            >
                                Edit
                            </button>
                            <button
                                className="btn btn-danger"
                                // onClick={() => deleteUser(index)}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                );
            })}
          </tbody>
        </table>
      </div>
        </>
    )
}
export default IterateObjectByMap;