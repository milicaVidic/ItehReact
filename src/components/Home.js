import { useEffect, useState } from 'react'
import Pevaci from './Pevaci'
import axios from 'axios'

function Home() {

    const [sviPevaci, setSviPevaci] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/pevac').then(response => {
            setSviPevaci(response.data.data)
        });
    }, []);


    return (
        <div className="home">
            <Pevaci />
        </div>
    );
}

export default Home;
