import { useState, useEffect } from 'react';
import './Logo.css';
import Express from '../../assets/Express.png';
import Firebase from '../../assets/Firebase.png';
import Node from '../../assets/Node.png';
import Reacts from '../../assets/React.png';

/*font awesome*/
/*import { FontAwesomeIcon } from "@fortawesome/free-brands-svg-icons";*/



function Display() {


  return (
    <> 
    <div className='logo-Container'>
      <img src={Firebase} className="logo firebase" alt="Firebase logo" />
      <img src={Express} className="logo express" alt="Express logo" />
      <img src={Reacts} className="logo react" alt="Reacts logo" />
      <img src={Node} className="logo node" alt="Node logo" />
    </div>
    </>
  );
}

export default Display;