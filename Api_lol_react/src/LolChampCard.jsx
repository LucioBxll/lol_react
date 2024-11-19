export function LolChampCard({ imagen, nombre, origen, lineas, roles, recurso, dificultad_uso }) {
    return(
        <article className="lol-champ-card">
            <header>
                <img className="lol-champ-card-img" alt="Esto es la imagen del campeon :D" src={imagen} />
                <div>
                    <strong className="lol-champ-card-title">{nombre}</strong>
                </div>
            </header>
            <aside className="lol-champ-card-aside">
            <ol className="lol-champ-card-list-item">
                <li className="lol-champ-card-item" ><strong>Origen:</strong>{origen}</li>
                <li className="lol-champ-card-item" ><strong>Linea:</strong> {lineas}</li>
                <li className="lol-champ-card-item" ><strong>Rol:</strong> {roles}</li>
                <li className="lol-champ-card-item" ><strong>Recurso:</strong> {recurso}</li>
                <li className="lol-champ-card-item" ><strong>Dificultad:</strong> {dificultad_uso}</li>
                
            </ol>
            </aside>
        </article>
    )
}