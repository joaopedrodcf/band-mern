import React from 'react';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Row,
    Col,
    Container
} from 'reactstrap';
import styles from './styles.module.scss';

const Contact = () => (
    <Container fluid>
        <Row className={styles.center}>
            <Col sm="6">
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Your name</Label>
                        <Input
                            type="text"
                            name="text"
                            id="text"
                            placeholder="Email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="text">Text Area</Label>
                        <Input type="textarea" name="text" id="text" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Col>
        </Row>
    </Container>
);

export default Contact;
