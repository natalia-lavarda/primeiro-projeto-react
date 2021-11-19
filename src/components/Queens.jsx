import json from "../data/database";
import './styles.css';

const Queens = () => {
  return (
    <div class="main">
      {json.map(json =>
        <div class="container" key={json.id}>
          <h2 class="titulo">{json.nome}</h2>
          <img class="foto" src={json.foto} alt={json.nome} />
          <p class="p">{json.descricao}</p>
        </div>
      )}
    </div>
  )
}

export default Queens