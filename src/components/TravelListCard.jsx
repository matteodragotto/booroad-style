import { Link } from "react-router-dom"


const TravelListCard = ({ viaggio }) => {

  const id = viaggio.id_viaggio

  return (
    <Link to={`/dettaglio-viaggio/${id}`}>





      <div className="card my-4">
        <div className="card-header">
          <img src={`../public/img/${viaggio.immagine}`} class="img-fluid rounded-start" alt={viaggio.nome_viaggio} />
        </div>
        <div className="card-body">
          <h3 className="mb-3">{viaggio.nome_viaggio}</h3>
          <p className="card-text">{viaggio.descrizione}</p>
          <div className="d-flex justify-content-center">
            <p className="card-text"><small>Data di partenza: {viaggio.data_inizio}</small></p>
            <span className="mx-4">-</span>
            <p className="card-text"><small>Data di ritorno: {viaggio.data_fine}</small></p>
          </div>

        </div>
      </div>
    </Link>


  )
}

export default TravelListCard



