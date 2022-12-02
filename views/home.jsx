const React = require('react')
const Def = require('./default')

function home() {
    return (
      <Def>
          <main>
              <h1>REST-O-RANT</h1>
              <div>
                  <img src="/images/anh-nguyen-kcA-c3f_3FE-unsplash.jpg" alt="fruit salad" />
                  <div>
                  Photo by <a href="https://cdn.vox-cdn.com/thumbor/96H9Bnu1QFlJHYf4O2AvxbMCOq0=/0x0:4032x3024/1200x800/filters:focal(1694x1190:2338x1834)/cdn.vox-cdn.com/uploads/chorus_image/image/66922238/Mon_Ami_Gabi_new.0.jpg">Unsplash</a>
              </div>
      </div>
               
          </main>
       
      </Def>
    )
 
  }

  
  module.exports = home




  