import react, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"


const EmployeeList = () => {

  const navigate = useNavigate()

  const [employeeData, setEmployeeData] = useState({});
  
  const LoadEdit = (id) => {
    navigate("/employee/edit/" + id)
  }

  const LoadRemove = (id) => {
    if (window.confirm('Do you want to remove?')) {
      fetch(`https://api-try-2-928fb-default-rtdb.asia-southeast1.firebasedatabase.app/employee/${id}.json?key=AIzaSyCP33WLYjOkhZFBFQvouGqLPcVyWbmqOP4`, {
        method: "DELETE"
      }).then((res) => {
        alert('Removed successfully.')
        window.location.reload();
      }).catch((err) => {
        console.log(err.message)
      })
    }
  }

  const LoadDetails = (id) => {
    navigate("/employee/detail/" + id)
  }

  useEffect(() => {
    axios.get('https://api-try-2-928fb-default-rtdb.asia-southeast1.firebasedatabase.app/employee.json?key=AIzaSyCP33WLYjOkhZFBFQvouGqLPcVyWbmqOP4')
      .then(res => {
        setEmployeeData(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const datalenth =Object.entries(employeeData)
  

  

  
  return (
    <>

      <div className="container">
        <div className="card ">
          <div className="card-title ">
            <h2 className="text-center m-2">Employee List</h2>
          </div>
          <div className="card-body">
            <div className="text-center">
              <Link to="/employee/create" className="btn btn-success m-2">Add New (+)</Link>
            </div>
            <div className="m-1">
            <p> Note : <span className="text-danger"> * Do not remove first list data or Do not empty the table. keep at least one data</span></p>
            </div>           

            <div className="table-responsive">
              <table className="table table-bordered ">
                <thead className="bg-dark text-white">
                  <tr>

                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                    <td>Action</td>
                  </tr>
                </thead>
                <tbody>

                  {Object.entries(employeeData).map(([id, employee]) => (
      
      
                    <tr key={id}>

                      <td>{employee.name || ''}</td>
                      <td>{employee.email || ''}</td>
                      <td>{employee.phone || ''}</td>
                      <td><button  onClick={() => { LoadEdit(id) }} className="btn btn-success mx-1">Edit</button>
                        <button disabled={datalenth.length <=1 ? true : false} onClick={() => { LoadRemove(id) }} className="btn btn-danger mx-1">Remove</button>
                        <button  onClick={() => (LoadDetails(id))} className="btn btn-primary mx-1">Details</button>
                      </td>

                    </tr>
                  ))}


                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default EmployeeList;