import React, { useState }  from "react";
import styles from "../../styles/Sale.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { axiosRes } from "../../api/axiosDefaults";
import { MoreDropdown } from "../../components/MoreDropdown";
import Button from "react-bootstrap/Button";
import btnStyles from "../../styles/Button.module.css";
import AlertMessage from "../../components/AlertMessage";

    const Sale = (props) => {
    const {
      id,
      owner,
      profile_id,
      profile_image,
      title,
      description,
      condition,
      price,
      location,
      image,
      updated_at,
      salePage,
    } = props;
  
    const currentUser = useCurrentUser();
    const is_owner = currentUser?.username === owner;
    const history = useHistory();
    const [showAlert, setShowAlert] = useState(false);
   
    const handleEdit = () => {
      history.push(`/sales/${id}/edit`);
    };

    const handleDelete = async () => {
      try {
        await axiosRes.delete(`/sales/${id}/`);
        history.goBack();
      } catch (err) {
        // console.log(err);
      }
    };

       return (
        
      <Card className={styles.Sale}>
        <Card.Body>
          <Media className="align-items-center justify-content-between">
            <Link to={`/profiles/${profile_id}`}>
              <Avatar src={profile_image} height={55} />
            {owner}
            </Link>
            <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && salePage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={handleDelete}
              />
            )}
            </div>
          </Media>
        </Card.Body>
          <Link to={`/sales/${id}`}>
            <Card.Img src={image} alt={title} />
          </Link>
        <Card.Body>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {description && <Card.Text>{description}</Card.Text>}
        {condition && <Card.Text>{condition}</Card.Text>}
        {price && <Card.Text>{price}</Card.Text>}
        {location && <Card.Text>{location}</Card.Text>}
        <Button className={btnStyles.Button} onClick={ () =>
        setShowAlert(true)}>
        Buy Now
        </Button>
        </Card.Body>
        
        <AlertMessage
        showAlert={showAlert}
        setShowAlert={setShowAlert}
        variant="success"
        alertMessage="Thanks for your purchase. The seller will be in touch shortly."
        />
        </Card>
  );
};
 

export default Sale;