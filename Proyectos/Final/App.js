import 'bootstrap/dist/css/bootstrap.min.css';
import AppLogin from './componentes/AppLogin';
import Menu from './componentes/Menu';
import { Component } from 'react';
import { PHPLOGIN } from './componentes/datos';
import Uno from './componentes/Uno';
import Dos from './componentes/Dos';
import Tres from './componentes/Tres';
import NewUser from './componentes/NewUser';

//Axios es una biblioteca independiente de la librería o el framework, 
//lo que significa que se puede utilizar con cualquier proyecto web,
// no solo con React, y es compatible con el navegador y el lado del servidor (Node.js).
import axios from 'axios';
//El componente "App" tiene un constructor que inicializa el estado con dos valores: "menuItem" y "logged".
// "menuItem" es utilizado para determinar qué elemento del menú está seleccionado
// y "logged" indica si el usuario ha iniciado sesión.
class App extends Component {
  constructor(props) {
    super(props)
    this.state = { menuItem: undefined, logged: false, tipo: '' };


  }
  //funcion para cambiar el estado del menu, en este caso UNO, DOS y TRES
  changeMenu(item) {
    this.setState({ menuItem: item });

  }



  //Esta funcion se usa para iniciar sesión de usuario.
  //Se usa la biblioteca de MD5 para cifrar la contraseña, 
  //luego se realiza una solicitud POST a la dirección especificada en PHPLOGIN
  // con los datos del usuario (teléfono y contraseña cifrada). 
  //Si la respuesta del servidor contiene el usuario,
  // entonces se cambia el estado de la aplicación a 'logged' 
  //para indicar que el usuario ha iniciado sesión exitosamente.
  userLogin(user, password) {
    console.log("2.- ",user," ",password);
    var md5 = require('md5');
    //Axios es una biblioteca JavaScript que se utiliza para realizar solicitudes HTTP
    // (como peticiones GET, POST) desde una aplicación. 
    //En React, se utiliza Axios para hacer solicitudes a un servidor o una API desde el lado del cliente. 
    axios.post(PHPLOGIN, JSON.stringify({
      user: user,
      password: md5(password)
    }))
      .then(res => {
        console.log(res);
        console.log("-------------OK",res.data.mensaje);

        if (res.data.mensaje === "Acceso correcto") {
          console.log("-------------OK",res.data.usuario);
          if(res.data.usuario==="admin"){
            this.setState({tipo:"admin"});

          }else{
            this.setState({tipo:"normal"});

          }
          this.setState({ logged: true });
        }
      }).catch(error => {
        console.log(error);
      });
    //el método "then" se utiliza para especificar una función
    // que se ejecutará cuando la solicitud HTTP realizada con Axios ha sido completada exitosamente,
    // y en este caso, esa función se encarga de verificar la respuesta del servidor
    // para determinar si el usuario ha iniciado sesión correctamente
    // y actualizar el estado de la aplicación en consecuencia.
  }
  //Esta funcion recibe un texto y cambia el estado con el texto que ha recibido
  cambiarTitulo(nuevoTitulo) {
    this.setState(prevState => ({ title: prevState.title.concat(nuevoTitulo) }));
  }

  borrarContenidoTitulo() {
    this.setState({ title: '' });

  }

  render() {
    //Creamos objetoMenu y le metemos el menu:
    //"Menu" está recibiendo datos del estado de la aplicación y una función para manejar el cambio de estado //<Titulo cambiarTitulo={this.cambiarTitulo} />
    let objmenu = <>
      <Menu menuItem={this.state.menuItem} changeMenu={(item) => this.changeMenu(item)} />
      {/* <Titulo cambiarTitulo={this.cambiarTexto} text={this.state.text} /> */}

    </>;
    let obj;//Aqui declaramos un objeto sin darle valor si el usuario
    //no esta logueado ese obj le metemos el componente login
    if (!this.state.logged) {
      obj = <AppLogin userLogin={(user, password) => this.userLogin(user, password)} />
    } else {

        if(this.state.tipo=="normal"){
          console.log("normal")
          switch (this.state.menuItem) {
            case 'UNO':
              obj = <Uno cambiarTitulo={(nuevoTitulo) => this.cambiarTitulo(` ${nuevoTitulo}`)} />
              break;
            case 'DOS':
              obj = <Dos cambiarTitulo={(nuevoTitulo) => this.cambiarTitulo(` ${nuevoTitulo}`)} />
              break;
            case 'TRES':
              obj = <Tres cambiarTitulo={(nuevoTitulo) => this.cambiarTitulo(` ${nuevoTitulo}`)} />
              break;
          }
        }else{
          console.log("admin");

          switch (this.state.menuItem) {
            case 'UNO':
              obj = <Uno cambiarTitulo={(nuevoTitulo) => this.cambiarTitulo(` ${nuevoTitulo}`)} />
              break;
            case 'DOS':
              obj = <Dos cambiarTitulo={(nuevoTitulo) => this.cambiarTitulo(` ${nuevoTitulo}`)} />
              break;
            case 'TRES':
              obj = <Tres cambiarTitulo={(nuevoTitulo) => this.cambiarTitulo(` ${nuevoTitulo}`)} />
              break;
          }

          obj = <NewUser/>
        }
  
      //Aqui anidamos el objeto menu con el obj del login o Uno Dos y Tres
      obj = <>
        {objmenu}<h1>{this.state.title}</h1>{obj}<>
        </></>

    }

    return (
      <div className="App">
        {obj}
      </div>
    );
  }
}


export default App;
