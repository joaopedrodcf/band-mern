import React from 'react';
import { Row } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './styles.module.scss';

const Footer = () => (
    <footer>
        <Row className={styles.links}>
            <a href="https://github.com/joaopedrodcf" className={styles.link}>
                <FontAwesomeIcon icon={['fab', 'github-square']} size="2x" />
            </a>

            <a
                href="https://www.linkedin.com/in/joaoferr93"
                className={styles.link}
            >
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
            </a>
            <a href="https://twitter.com/Joaopedrodcf" className={styles.link}>
                <FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x" />
            </a>
            <a href="https://medium.com/@joaoferr93" className={styles.link}>
                <FontAwesomeIcon icon={['fab', 'medium']} size="2x" />
            </a>
        </Row>
        <Row className={styles.author}>
            <div>© João Ferreira 2018</div>
        </Row>
    </footer>
);

export default Footer;
