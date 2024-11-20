import { LolChampCardComponent } from "../components/LolChampCard.jsx";
import { useState, useEffect } from "react";

export function Inicio() {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/champions")
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos recibidos:", data);
        setChampions(data.champs || []);
      })
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Campeones</h1>
      <div className="lol-champs-container" style={{ display: "flex", flexWrap: "wrap" }}>
        {Array.isArray(champions) && champions.length > 0 ? (
          champions
            .filter(champ => champ.nombre && champ.imagen)
            .map((champ) => (
              <LolChampCardComponent
                key={champ.id || champ._id}
                imagen={champ.imagen}
                nombre={champ.nombre}
                origen={champ.origen || 'No disponible'}
                lineas={champ.lineas ? champ.lineas.join(", ") : 'No disponible'}
                roles={champ.roles ? champ.roles.join(", ") : 'No disponible'}
                recurso={champ.recurso || 'No disponible'}
                dificultad_uso={champ.dificultad_uso || 'No disponible'}
              />
            ))
        ) : (
          <p>Cargando campeones o no hay datos disponibles...</p>
        )}
      </div>
    </div>
  );
}