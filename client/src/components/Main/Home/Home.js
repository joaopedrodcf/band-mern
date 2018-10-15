import React from 'react';
import { Col, Container, Row, Button } from 'reactstrap';
import styles from './styles.module.scss';

const Home = () => (
    <Container fluid>
        <Row>
            <Col sm="12" className={styles.band}>
                <img
                    src="https://images.unsplash.com/photo-1525025500848-f00b7d362dec?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=54bb7909f1d65e323278536d1fb2e06b&auto=format&fit=crop&w=1350&q=80"
                    className={styles.imgBand}
                    alt="band"
                />
                <div className={styles.bandInfo}>
                    <h1>OUR NEW ALBUM</h1>
                    <Button color="primary"> View more</Button>
                </div>
            </Col>
        </Row>
    </Container>
);

export default Home;
