import { useState } from "react";
import FormPartecipants from "./FormPartecipants";

const NewTravel = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="d-flex justify-content-center my-5">
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleShow}
      >
        Aggiungi partecipante
      </button>

      {showModal && (
        <div
          className="modal fade show"
          id="staticBackdrop"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="false"
          style={{ display: 'block' }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="fw-semibold my-auto"> <i class="bi bi-person-plus fs-5 me-2"></i>Aggiungi il nuovo partecipante</h5>


                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <FormPartecipants />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewTravel