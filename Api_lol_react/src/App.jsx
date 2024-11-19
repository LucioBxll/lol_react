import './App.css';
import { LolChampCard } from './LolChampCard.jsx';
import { useState, useEffect } from 'react';

export function App() {
  const [champions, setChampions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/champions")
      .then((response) => response.json())
      .then((data) => {
        console.log("Datos recibidos:", data);
        setChampions(data);
      })
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  return (
    <div>
      <h1>Lista de Campeones</h1>
      <div className="lol-champs-container" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {Array.isArray(champions) && champions.length > 0 ? (
          champions.map((champ) => (
            <LolChampCard
              key={champ.id}
              imagen={champ.imagen}
              nombre={champ.nombre}
              origen={champ.origen}
              lineas={champ.lineas}
              roles={champ.roles}
              recurso={champ.recurso}
              dificultad_uso={champ.dificultad_uso}
            />
          ))
        ) : (
          <p>Cargando campeones o no hay datos disponibles...</p>
        )}
      </div>
    </div>
  );
}


