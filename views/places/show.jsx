const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
           
          <main>
          <div className="row">
          <div className="col-sm-6">
        <img src={data.place.pic} alt={data.place.name} />
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
      </div>
      <div className="col-sm-6">
            <div>
                <h5>Rating</h5>
                <p>NOT RATED</p>
                <h2>
          Description
        </h2>
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
            </div>
            </div>
            <div>
                <h5>Comments</h5>
                <p>No Comments yet!</p>
            </div>
            </div>
          </main>
          <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
  Edit
</a>     
  
<form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form> 
   
 

        </Def>
    )
}

module.exports = show







