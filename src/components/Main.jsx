
function Layout() {
    
    return (
    <>
    <main>
    <div className=" card m-auto mt-5" >
      <div className="row ">

        <div className="col-md-8">
          <div className="card-body ">
            <h5 className="card-title  fs-4 fw-bold">Find the perfect destination</h5>
            <p className="card-text fw-medium ">
 
Our app will help you find the perfect path for your next trip. With an easy-to-use interface and a host of itinerary options, planning your next trip has never been easier.
View More
              </p>
            <div className="p-2 mx-5">
              <button type="button" className="btn btn-primary  " >
                View More
              </button>
            </div>
          </div>

        </div>
        <div className="col-md-4">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6gGdWZP6E2TdMocINnDdlP5Rqte2catje6A&usqp=CAU"
            className="img-fluid rounded-start" alt="..."/>
        </div>
      </div>
    </div>
  </main>
    
    </>
  
  );
}

export default Layout
