import { LolChampCardComponent } from "../components/LolChampCard.jsx";
import { useState, useEffect } from "react";

export function Champions() {
  const [searchTerm, setSearchTerm] = useState("");
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

  const filteredChampions = champions.filter(champ =>
    champ.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Lista de Campeones</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Buscar campeones..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="lol-champs-container" style={{ display: "flex", flexWrap: "wrap" }}>
      {Array.isArray(filteredChampions) && filteredChampions.length > 0 ? (
          filteredChampions
            .filter(champ => champ.imagen)
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
