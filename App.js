import React, {Component} from 'react';


const Header = function(){
  return(
    <div>
      <h1>Ini Halaman untuk header</h1>
    </div>
  )
}

const Footer = function(){
  return(
    <div>
      <h1>Ini Halaman untuk footer</h1>
    </div>
  )
}

class App extends Component {
  render(){
    return (
      <div>
        <Header />
        <p>Ini Halaman Menu utama</p>
        <p>Ini Halaman Menu product</p>
        <p>Ini Halaman Menu Kotak</p>
        <p>Ini Halaman Menu Tentang Kami</p>
        <Footer />
      </div>
    )
  }
}

export default App;
