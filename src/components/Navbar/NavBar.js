import React from 'react';

class NavBar extends React.Component {
  constructor(props){
    super(props);

    this.pages = {
    index:'Inicio',
    cuadros:'Cuadros',
    galeria: 'Galería',
    artistas: 'Los Artistas',
    contacto: 'Contacto'
  };

  this.logoImage = {
    src: 'https://s3.amazonaws.com/codecademy-content/courses/learn-bootstrap-components/logo.png',
    alt: 'Foto Decoracion'
  };

}
  navLinks() { 
    return Object.keys(this.pages).map((page, i) => {
      let pagesValue = this.pages[page];
      var url = window.location; 
      console.log(url.pathname)
      console.log(`/${page}`)
      if(url.pathname=== `/${page}`){
      return (
        <li key={i} className= "nav-item active">
            <a className="nav-link" href={'/' + page}>
              {pagesValue}<span className="sr-only">(current)</span>
            </a>
        </li>
        )} else { 
          return (        
          <li key={i} className="nav-item">
            <a className="nav-link" href={'/' + page}>
              {pagesValue}
            </a>
          </li>
          )
        }
      
    });
  }
  render() {
        return (
          <nav className="navbar fixed-top navbar-expand-sm navbar-light bg-light">
           
          <a href="/index" className="navbar-brand"> <img src={this.logoImage.src} alt={this.logoImage.alt} height="30"/></a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {this.navLinks()}
          </ul>
          </div>
        </nav>
        ); 
    }
};

export default NavBar

