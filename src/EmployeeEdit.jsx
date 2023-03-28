import react, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"
import axios from "axios"

const EmployeeEdit = () => {

  const empId = useParams();
  

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [active, setActive] = useState(true)


  const objectConvert = Object.values(empId)
  const paramId = objectConvert[0]
  
  const navigate = useNavigate();
  
  const url = `https://api-try-2-928fb-default-rtdb.asia-southeast1.firebasedatabase.app/employee/${paramId}.json?key=AIzaSyCP33WLYjOkhZFBFQvouGqLPcVyWbmqOP4`
  useEffect(() => {
    fetch(url).then((res) => {
      return res.json();
    }).then((resp) => {
      setName(resp.name)
      setEmail(resp.email)
      setPhone(resp.phone)
    }).catch((err) => {
      console.log(err.message);
    })
  }, []);


  const handlesubmit = (e) => {
    e.preventDefault();
    //console.log({name,email,phone})
    const empdata = { name, email, phone, active };

    const url = `https://api-try-2-928fb-default-rtdb.asia-southeast1.firebasedatabase.app/employee/${paramId}.json`
   fetch(url, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata)
    }).then((res) => {
      alert('Saved successfully.')
      navigate('/');
    }).catch((err) => {
      console.log(err.message)
    })
 }

  return (
    <>
      <h1 className="text-center">edit componenet </h1>
      <div>
        <div>
          <div className="row item-centre">
            <div className="clo-lg-6 mx-4">
              <form className="container" onSubmit={handlesubmit}>

                <div className="card" >
                  <div className="card-title">
                    <h2 className="m-2 text-center">Employee Edit</h2>
                  </div>
                  <div className="card-body">

                    <div className="row">

                      <div className="col-lg-12">
                        <div className="form-group">

                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Name :</label>
                          <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control"></input>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Email :</label>
                          <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <label>Phone :</label>
                          <input type="tel" maxLength="10" value={phone} onChange={e => setPhone(e.target.value)} className="form-control"></input>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-check">
                          <label className="form-check-label">Is Active</label>
                          <input type="checkbox" checked={active} onChange={e => setActive(e.target.checked)} className="form-control"></input>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="form-group">
                          <button className="btn btn-success m-2" type="submit"> Save </button>
                          <Link to="/" className="btn btn-danger m-2">Back</Link>

                        </div>
                      </div>

                    </div>

                  </div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default EmployeeEdit;

