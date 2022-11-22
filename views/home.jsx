const React = require('react')
const Def = require('./default')

function home() {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
              <div>
                  <img src="/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg" alt="fruit salad" />
                  <div>
                  Photo by <a href="https://unsplash.com/@pwign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anh Nguyen</a> on <a href="https://unsplash.com/@pwign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </div>
      </div>
               
          </main>
       
      </Def>
    )
 
  }

  
  module.exports = home




  