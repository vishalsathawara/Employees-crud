import react, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"
import axios from "axios"
import QRCode from "react-qr-code";


const EmployeeDetails = () => {

  const empId = useParams()

  const [employeeData, setEmployeeData] = useState(null)



  const objectConvert = Object.values(empId)
  const paramId = objectConvert[0]

  const url = `https://api-try-2-928fb-default-rtdb.asia-southeast1.firebasedatabase.app/employee/${paramId}.json`
  useEffect(() => {
    axios.get(url)
      .then(res => {
        setEmployeeData(res?.data)
      })
      .catch(error => {
        console.error(error);
      });

  }, []);

  const avatarurlOne = "https://api.dicebear.com/5.x/open-peeps/svg?seed="
  const avatarurlTwo = "https://api.multiavatar.com/"
  return (
    <>
      <h1 className="text-center m-4 ">Employee Details </h1>
      <div >
        <div className=" text-center ">
          <div className="m-4">
            <div className="row">
              <div className="col-sm-12 text-center">
                <div className="card border border-dark">
                  <div className="text-center m-2">
                    <img className="card-img-top detalilImage" src={`${avatarurlTwo}${employeeData?.name}.svg`} alt="Card image cap" />
                  </div>
                  <div className="card-body">
                    <h1 className="card-title"> Name : {employeeData?.name} </h1>
                    <h5 className="card-title">Email : {employeeData?.email}</h5>
                    <h5 className="card-title">Phone No : {employeeData?.phone}</h5>
                    <div className="m-4">
                      <p>Note : scan QR Code for more information</p>
                      <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>
                        <QRCode
                          size={500}
                          style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                          value={`Employee Name : ${employeeData?.name} , Employee Email:${employeeData?.email} , Employee Phone No :${employeeData?.phone} , Employee Active : ${employeeData?.active} , Unique Employee ID : ${paramId}`}
                          viewBox={`0 0 500 500`}
                        />
                      </div>
                    </div>
                    <div className="text-center">
                      <Link to="/" className="btn btn-primary m-4 text-center">Go To Home </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default EmployeeDetails;
