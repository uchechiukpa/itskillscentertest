import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

function GetOneFile({ match }) {
    const [note, setNote] = useState({})
    console.log(match)

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/notes/${match.params.id}/`)
            .then(res => {

                setNote(res.data)

            })
            .catch(err => {
                console.log(err, "failed");

            })
    }, []);
    return (
        <div>
            <h1>{note.note}</h1>
            
           

           

        </div>
    );
}

export default GetOneFile;