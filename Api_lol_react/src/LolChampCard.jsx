import PropTypes from 'prop-types';

export function LolChampCard({ imagen, nombre, origen, lineas, roles, recurso, dificultad_uso }) {
    console.log("Props recibidas en LolChampCard:", { imagen, nombre, origen, lineas, roles, recurso, dificultad_uso });

    return (
        <article className="lol-champ-card">
            <header>
                <img
                    className="lol-champ-card-img"
                    alt={`Imagen de ${nombre || 'campeón'}`}
                    src={imagen || 'default-image-url.jpg'}
                />
                <div>
                    <strong className="lol-champ-card-title">{nombre || 'Nombre no disponible'}</strong>
                </div>
            </header>
            <aside className="lol-champ-card-aside">
                <ol className="lol-champ-card-list-item">
                    <li className="lol-champ-card-item"><strong>Origen:</strong> {origen || 'No disponible'}</li>
                    <li className="lol-champ-card-item"><strong>Linea:</strong> {lineas || 'No disponible'}</li>
                    <li className="lol-champ-card-item"><strong>Rol:</strong> {roles || 'No disponible'}</li>
                    <li className="lol-champ-card-item"><strong>Recurso:</strong> {recurso || 'No disponible'}</li>
                    <li className="lol-champ-card-item"><strong>Dificultad:</strong> {dificultad_uso || 'No disponible'}</li>
                </ol>
            </aside>
        </article>
    );
}


LolChampCard.propTypes = {
    imagen: PropTypes.string,
    nombre: PropTypes.string,
    origen: PropTypes.string,
    lineas: PropTypes.string,
    roles: PropTypes.string,
    recurso: PropTypes.string,
    dificultad_uso: PropTypes.string,
};
