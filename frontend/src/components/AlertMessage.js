import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';

const AlertMessage = (props) => {

    const{showAlert, variant, alertMessage} = props;

    return (
        showAlert && (
            <Container className='my-3'>
                <Alert variant={variant} onClose={
                    () => showAlert(false)
                } className = "" dismissable="true">
                    <p> {alertMessage}</p>
                    
                </Alert>
            </Container>
        )
    )
}

export default AlertMessage