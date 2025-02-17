import { useState } from "react";
import FormTravels from "./FormTravels";

const NewTravel = ({ }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleShow}
      >
        Aggiungi viaggio
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
              <div className="modal-header d-flex align-items-center">
                <h4 className="fw-semibold my-auto"> <i class="bi bi-airplane fs-5 me-2"></i>Aggiungi il nuovo viaggio</h4>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <FormTravels />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewTravel