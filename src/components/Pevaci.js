import Pevac from './Pevac'
import { useState, useEffect } from 'react'
import axios from 'axios'

function Pevaci() {

    const [sviPevaci, setSviPevaci] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pevac').then(response => {
            setSviPevaci(response.data.data)
        });
    }, []);

    console.log(sviPevaci)
    const pevaci = sviPevaci.map(pevac => (
        <Pevac key={pevac.id} pevac={pevac} />
    ))

    return (
        <div className="pevaci">
            <h2 className="mt-3 mb-3">Pevači</h2>
            {pevaci}
        </div>
    );
}

export default Pevaci;
