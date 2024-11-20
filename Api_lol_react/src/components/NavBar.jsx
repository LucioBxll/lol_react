// Importa App.scss si es necesario para estilos globales
// import '../App.scss'; // Asegúrate de que la ruta sea correcta

export function NavBar() {
  return (
    <nav className="lol-navBar">
      <img className="lol-navBar-logo" src="logo.png" alt="Logo" />
      <ul className="lol-navBar-list-item">
        <li><a className="lol-navBar-item" href="/inicio">Inicio</a></li>
        <li><a className="lol-navBar-item" href="/campeones">Campeones</a></li>
        <li><a className="lol-navBar-item" href="/mapas">Mapas</a></li>
        <li><a className="lol-navBar-item" href="/iniciarSesion">Iniciar Sesión</a></li>
      </ul>
    </nav>
  );
}
