import styles from './Section.module.scss';
import PropTypes from 'prop-types';

const Section = ({ title, children }) => (
  <div className={styles.container}>
    <h1 className={styles.heading}>{title}</h1>
    {children}
  </div>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
