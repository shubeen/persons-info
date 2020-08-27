import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus} from '@fortawesome/free-solid-svg-icons'
import './Persons.css';

const Persons = (props) => {
    console.log(props);
    // const {email, name.first, phone} = props.personNames;

    

    return (
        <div className='main-container'>
            <div className='info-container'>
                <div >
                    <h1>Name: {props.name}</h1>
                    <h1>Email: {props.email} </h1>
                    <h2>phone: {props.phone} </h2>
                    <h4><small>Gender: {props.gender}</small></h4>
                    
                    <button className='button'> <FontAwesomeIcon icon={faUserPlus} />  Click To Add</button>
                </div>
                
                <div className='image-container'>
                    <img  src={props.picture} alt=""/>
                </div>
            </div>

          
            <div className='info-cart'>
                <h1>Added Persons</h1>
                <h2>persons info</h2>
                    
            </div>
            
        </div>
       
        
    );
};

export default Persons;