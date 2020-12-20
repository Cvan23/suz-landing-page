import React from "react";
import Pics from "../components/pics";
import { Modal, Button,  } from "react-bootstrap";



function Pages() {
  return (
    <div>
      <MyModal />
      <App />
    </div>
  )
}

function MyModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="modal-90w"
    >
      <Modal.Header closeButton>
        <Modal.Title as="h3" id="contained-modal-title-vcenter">
          My Favorite Letter!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Pics/>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
    
      <Button variant="btn btn-block" as="h2" onClick={() => setModalShow(true)}>
        Click here for a preview!
      </Button>

      <MyModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}




export default Pages;