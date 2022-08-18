import styles from './WebInformation.module.css';

const WebInformation = () => {
  return (
    <section className={styles.summary}>
      <h1>Useful tools for work and learning</h1>
      <h4>
         Tools for working with information and dates, 
        solving logical problems and problems with discrete mathematics, 
        links to useful resources for learning in various fields, real-time help
      </h4>
      <h4>
        This is also a vlog and portfolio from web page creator <b>Tigran Badalyan</b>
      </h4>
    </section>
  );
};

export default WebInformation;