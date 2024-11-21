import { Banner } from '../components/banner.jsx';

export function Inicio() {
  const slides = [
    {
      message: "Bienvenido a nuestra aplicación",
      type: "info",
      image: "url_de_tu_imagen1.jpg"
    },
    {
      message: "Advertencia: Mantenimiento programado",
      type: "warning",
      image: "url_de_tu_imagen2.jpg"
    },
    {
      message: "Error: No se pudo cargar la página",
      type: "error",
      image: "url_de_tu_imagen3.jpg"
    }
  ];

  return (
    <div>
      <Banner slides={slides} />
    </div>
  );
}
