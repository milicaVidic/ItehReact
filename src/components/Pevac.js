import { useState } from 'react'

function Pevac(props) {

    let pevac = props.pevac

    return (
        <div className="pevac">
            <p>Ime: {pevac.ime} Prezime: {pevac.prezime} Instagram: {pevac.instagram}</p>
        </div >
    );
}

export default Pevac;