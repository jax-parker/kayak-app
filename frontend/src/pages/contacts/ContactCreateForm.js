import React, { useState } from "react";
import styles from "../../styles/ContactPage.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import Modal from "react-bootstrap/Modal";
import { useHistory } from "react-router-dom";
import btnStyles from "../../styles/Button.module.css";
import { axiosReq } from "../../api/axiosDefaults";
import AlertMessage from "../../components/AlertMessage";

const ContactCreateForm = () => {
  const [errors, setErrors] = useState({});
  
  const [showAlert, setShowAlert] = useState(false);
  
  const [contactData, setContactData] = useState({
    reason: "",
    content: "",
  });
  const { reason, content } = contactData;
  const history = useHistory();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    history.push('/');
  }
  const handleShow = () => setShow(true);

  const handleChange = (event) => {
    setContactData({
      ...contactData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("reason", reason);
    formData.append("content", content);

    try {
      await axiosReq.post("/contacts/", formData);
      setShowAlert(true);
      handleShow();
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }
  };

  const textFields = (
    <div className={styles.Post}>
      <Form.Group>
        <Form.Label>Reason for contacting us</Form.Label>
        <Form.Control
          type="text"
          name="reason"
          value={reason}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Details</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="content"
          value={content}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button className={btnStyles.Button} onClick={() => history.push('/')}>
        Cancel
      </Button>
      <Button className={btnStyles.Button} type="submit">
        Send
      </Button>
    </div>
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Container className={styles.Contacts}>{textFields}</Container>
      </Form>

      <AlertMessage
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        variant="success"
        alertMessage="Your message has been successfully sent to the admin team!"
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Thanks for contacting us!
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className={btnStyles.Button} onClick={handleClose}>
            Return to Home Page
          </Button>
                    
        </Modal.Footer>
        
      </Modal>
    </Container>
  );
};

export default ContactCreateForm;


