import React from 'react'
import {Link} from 'react-router-dom'

import './Student.css'



const Student = (props) => {
    return (
        <div className="kartu" style={{ backgroundImage: `url(./images/${props.foto})` }}>
            <Link to="/student">
                
                <div className="detailSiswa">
                    NIM : {props.NIM}<br></br>
                    NAMA : {props.NAMA}<br></br>
                    ASAL : {props.KOTA}<br></br>
                    IPK : {props.IPK}<br></br><br></br>
                    VOTE : {props.VOTE}

                </div>
            </Link>
            <center>
            <button>Vote Me</button>
            </center>
        </div>
    )
}

export default Student;

//////