import react, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmployeeCreate = () => {
// api.multiavatar.com/stefan.svg

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [active, setActive] = useState(true)

  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
    //console.log({name,email,phone})
    const empdata = { name, email, phone, active };

    const url = "https://api-try-2-928fb-default-rtdb.asia-southeast1.firebasedatabase.app/employee.json"
    // const url2 = "https://my-json-server.typicode.com/vishalsathawara/api/employee"
    fetch(url, {
      method: "POST",
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
      <div>
        <div className="row item-centre">
          <div className="clo-lg-6 mx-4">
            <form className="container" onSubmit={handlesubmit}>

              <div className="card" >
                <div className="card-title">
                  <h2 className="m-2 text-center">Employee Create</h2>
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
                        <input type="text" required value={name} onChange={e => setName(e.target.value)} className="form-control"></input>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Email :</label>
                        <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="form-control"></input>
                      </div>
                    </div>

                    <div className="col-lg-12">
                      <div className="form-group">
                        <label>Phone :</label>
                        <input type="tel" maxLength="10" required value={phone} onChange={e => setPhone(e.target.value)} className="form-control"></input>
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
    </>
  );
};

export default EmployeeCreate;