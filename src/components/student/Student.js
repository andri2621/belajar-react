import React from 'react'
import {Link} from 'react-router-dom'

import './Student.css'




const Student = (props) => {

    const handleLike = (studentNIM) => {
        props.onLike(studentNIM);
    };


    return (
        
        
        <div className="kartu" style={{ backgroundImage: `url(./images/${props.foto})` }}>
            <Link to="/student">
                <div className="vote">
                    <h4>VOTE : {props.VOTE}</h4>
                </div>
                    
                <div className="detailSiswa">
                    <h3>NIM : {props.NIM}</h3>
                    <h3>NAMA : {props.NAMA}</h3>
                    <h3>ASAL : {props.KOTA}</h3>
                    <h3>IPK : {props.IPK}</h3>
                    <h3>SKILL : {props.SKILLS}</h3>
                    <br></br>
                    <center>
                    <button onClick={()=>handleLike(props.NIM)}>Vote me</button>
                    </center>
                    

                </div>
            </Link>
            
        </div>
    )
}

export default Student;

//////