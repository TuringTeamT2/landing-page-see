import React from 'react';
import Modal from "@material-ui/icons/Menu";
import Button from "@material-ui/icons/Menu";


const Login = (props) => { 
    return (
        <>
          <Modal show={props.modalOpen} onHide={props.handleModalOpen}>
              <Modal.Header closeButton>
                 <Modal.Title>Login</Modal.Title>
              </Modal.Header>
              <Modal.Body>...</Modal.Body>
              <Modal.Footer>
                 <Button variant="danger" onClick={props.handleModalOpen}>
                    Cancel
                 </Button>
              </Modal.Footer>
          </Modal>
        </>
     );
}

export default Login;