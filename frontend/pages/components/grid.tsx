import React, { Fragment } from 'react';
import Link from 'next/link';
import styles from '../../styles/landing.module.css'
import Card from './card';

function Grid() {
  return (

<Fragment>

<div className= {styles.cardcontainer}>
  <h1 className = {styles.cardHeader}>Welcome to BioTrain</h1>

  <p className={styles.cardBody}>
    BioTrain is a free program funded by an EARN grant from MD Department of Labor provides a boost to both employees(existing and potential) and employers. The program offers lectures, workshops, and hands-on training for technical and soft skills for upskilling and reskilling the biotech workforce. 
  </p>
</div>



<div className={styles.grid}>

    <Card></Card>


    <div className= {styles.cardcontainer}>

    <h1 className = {styles.cardHeader}>Biotech Bootcamp</h1>

    <p className={styles.cardBody}>
    Four weeks intensive training, ideal for those who seek a new career, change of career or are unemployed.  
    <br></br>
    <br></br>
    The Life Sciences industry is heavily regulated given that products are developed to enter the human body. 
    Working in this industry requires keen attention to detail and preciseness, methodical practices, carefully following directions, 
    and adherence to safety protocols (including proper gowning in laboratories), along with exceptional observation, 
    and documentation skills. The industry-reviewed lecture and hands-on laboratory intensive skill-set training in Biotech Boot 
    Camp prepares the desired workforce ready for entry-level biotech jobs. 
    </p>

    </div>


    <div className= {styles.cardcontainer}>

    <h1 className = {styles.cardHeader}>Technical Skills</h1>

    <p className={styles.cardBody}>
    The demand for skilled Biotech Industry workers is rising as the industry grows. 
    Technical Skills are weapons to enhance your ability to perform technical tasks in the biotech industry.
    </p>

    <ul className={styles.cardBody}>
      <li>Drug Development</li>
      <li>Supply Chain Dynamics</li>
      <li>Biotech Warehouse Logistics</li>
      <li>Lab Essentials: NGS Technician</li>
      <li>Customized Biomanufacturing</li>
      <li>Raw Material Testing BioPharma</li>
      <li>Quality Control in Biotechnology</li>
      <li>Operating in Regulated Environment</li>
      <li>Bioprocessing Monitoring & impuritiesTesting</li>
      <li>Molecule to Market Place: RegulatoryConsideration</li>
    </ul>

    </div>


</div>
</Fragment>
  );
}

export default Grid;
