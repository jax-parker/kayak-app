import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Asset from "../../components/Asset";
import Upload from "../../assets/upload.png";

import styles from "../../styles/SalesCreateEditForm.module.css";
import appStyles from "../../App.module.css";
import btnStyles from "../../styles/Button.module.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SalesCreateForm() {
    const [errors, setErrors] = useState({});

    const [salesData, setSalesData] = useState({
        title:"",
        description: "",
        condition:"",
        price:"",
        location:"",
        image:"",
    })
    const { title, description, condition, price, location, image } = salesData;

    // const conditionChoices = [
    //     { value: "new", label: "New" },
    //     { value: "nearly_new", label: "Nearly New" },
    //     { value: "used", label: "Used" },
    //   ];

    const handleChange = (event) => {
        setSalesData({
            ...salesData,
            [event.target.name]: event.target.value,
        });
    }


    const textFields = (
      <div className="text-center">
        <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      {/* <Form.Group>
        <Form.Label>Condition</Form.Label>
        <Form.Select name="condition" options={conditionChoices} />
      </Form.Group> */}
      <Form.Group>
        <Form.Label>Price £</Form.Label>
        <Form.Control
          type="text"
          rows={1}
          name="price"
          value={price}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          rows={2}
          name="location"
          value={location}
          onChange={handleChange}
        />
      </Form.Group>
        
      
        <Button
          className={`${btnStyles.Button} ${btnStyles.Blue}`}
          onClick={() => {}}
        >
          cancel
        </Button>
        <Button className={`${btnStyles.Button} ${btnStyles.Blue}`} type="submit">
          create
        </Button>
      </div>
    );
  
    return (
      <Form>
        <Row>
          <Col className="py-2 p-0 p-md-2" md={7} lg={8}>
            <Container
              className={`${appStyles.Content} ${styles.Container} d-flex flex-column justify-content-center`}
            >
              <Form.Group className="text-center">
                
                  <Form.Label
                    className="d-flex justify-content-center"
                    htmlFor="image-upload"
                  >
                    <Asset
                    src={Upload}
                    message="Click or tap to upload an image"
                  />
                  </Form.Label>
  
              </Form.Group>
              <div className="d-md-none">{textFields}</div>
            </Container>
          </Col>
          <Col md={5} lg={4} className="d-none d-md-block p-0 p-md-2">
            <Container className={appStyles.Content}>{textFields}</Container>
          </Col>
        </Row>
      </Form>
    );
  }

export default SalesCreateForm;