import React from "react";
import styles from "../../styles/Sale.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";


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
            {is_owner && salePage && "..."}
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
       
      </Card.Body>
    </Card>
  );
};

export default Sale;