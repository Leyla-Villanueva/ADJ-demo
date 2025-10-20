import TestController from "./modules/test/test.controller"

function App() {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a href="" className="navbar-brand">ADJ DEMO</a> 
          <div className="collapse navbar-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="" className="nav-link active">Home</a>
              </li>  
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <h2>Inicio</h2>
        <hr/>
        <button onClick={() => TestController.callToAPI} className="btn btn-success"> Llame a mi api</button>
      </div>
    </>
  )
}

export default App
