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

    this.buttons = {
      facebook: {
        src: './logo-facebook.png',
        alt: 'logo facebook',
        link: "https://www.facebook.com/ommega.91",
      },
        
      twitter:{
        src: './logo-twitter.png',
        alt: 'logo twitter',
        link: "https://www.facebook.com/elenaaustral",
      },

      instagram:{
        src: './logo-instagram.png',
        alt: 'logo instagram',
        link: "https://twitter.com/ElenaZilhanij",
      },
      
      store:{
        src: './cart-white.png',
        alt: 'logo store',
        link: "./store.html",
      },

      languague:{
        src: './bandera-mex.jpg',
        alt: 'bandera mexico',
        link: "./es/",
      },
    
    }

    this.logoImage = {
      src: 'https://s3.amazonaws.com/codecademy-content/courses/learn-bootstrap-components/logo.png',
      alt: 'Foto Decoracion'
  };

}

  navButtons() { 
    return Object.keys(this.buttons).map((button, i) => {
      let buttonsValue = this.buttons[button];
      console.log(buttonsValue.src)
       return (  
          <li key={i+5} className="nav-item">
            <a className="nav-link" href={buttonsValue.link} target="_blank">
              <img src={require("" + buttonsValue.src)} alt={buttonsValue.alt}/>
            </a>
          </li>
          )
        }
    );
  };

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
                {this.navButtons()}
              </ul>
            </div>
          
            <div className="bottons-nav">


            </div>
            
          </nav>
        ); 
    }
};

export default NavBar

