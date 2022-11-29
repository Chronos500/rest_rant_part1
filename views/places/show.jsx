const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
           
          <main>
          <img src={data.place.pic} alt={data.place.name} />
          <div>
            <h1>{ data.place.name }</h1>
            <h2>{ data.place.city }</h2>
            <h2>{ data.place.state }</h2>
            <h1>{ data.place.cuisines }</h1>
            </div>

            <div>
                <h5>Rating</h5>
                <p>NOT RATED</p>
            </div>
            <div>
                <h5>Comments</h5>
                <p>No Comments yet!</p>
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

