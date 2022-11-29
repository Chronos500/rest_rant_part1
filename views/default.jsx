const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossOrigin="anonymous"></link>
                <link rel="stylesheet" href="/css/style.css"></link>
            </head>
            <body>
            <nav>
  <ul>
    <li>
      <a href="/">Home</a>
    </li>
    <li>
      <a href="/places">Places</a>
    </li>
    <li>
      <a href="/places/new">Add Place</a>
    </li>
  </ul>
</nav>

                {html.children}
                
            <footer className="footer">
  
  <p><a href="https://github.com/Chronos500">my Github</a></p>
    </footer>
            </body>
        </html>
    )
}

module.exports = Def
