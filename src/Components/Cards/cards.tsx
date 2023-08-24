import React from 'react'
import '../../Assets/Styles/cards.css'
import { Link } from 'react-router-dom';

interface CardProps {
    data: any
}

function Card(props: CardProps) {
    const {data } = props; 
    const {gender, location, name, status, image, species, id} = data; 
    const locationName = location.name; 

    let statusBackgroundColor = '';
    if (status === 'Alive') {
        statusBackgroundColor = 'green';
    } else if (status === 'Dead') {
        statusBackgroundColor = 'red';
    } else {
        statusBackgroundColor = 'grey';
    }

  return (
      
      
    <div className="card">
        <div className='card-status' style={{backgroundColor: statusBackgroundColor}}>{status}</div>
        <div className="card-details">
      <img src={image} alt={name} className="card-image" />
      
        <h2 className="card-name">
         <Link to={"/character/" + id}>
            {name}
         </Link>
        </h2>
        <p className="card-location">Last location - {locationName}</p>
        <p className="card-species">Species - {species}</p>
      </div>
    </div>
  )
}

export default Card