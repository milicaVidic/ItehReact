
import { useState } from 'react'

function ContactForm(props) {

    const [ime, setIme] = useState('');
    const [prezime, setPrezime] = useState('');
    const [email, setEmail] = useState('');
    const [poruka, setPoruka] = useState('');

    function handleIme(e) {
        setIme(e.target.value)
    }

    function handlePrezime(e) {
        setPrezime(e.target.value)
    }

    function handleEmail(e) {
        setEmail(e.target.value)
    }

    function handlePoruka(e) {
        setPoruka(e.target.value)
    }

    return (
        <div className="contact-forma">
            <h2>Contact Page</h2>
            <div className="form-f">
                <label>Ime: </label>
                <input type="text" className="form-control" value={ime} onChange={handleIme} />
            </div>
            <div className="form-f">
                <label htmlFor="form-label">Prezime: </label>
                <input type="text" className="form-control" value={prezime} onChange={handlePrezime} />
            </div>
            <div className="form-f">
                <label htmlFor="form-label">Email: </label>
                <input type="email" className="form-control" value={email} onChange={handleEmail} />
            </div>
            <div className="form-f">
                <label htmlFor="form-label">Poruka: </label>
                <textarea type="text" className="form-control" value={poruka} onChange={handlePoruka} />
            </div>
            <button type="button" id="dugmic" onClick={() => props.swal(ime, prezime, email, poruka)} className="btn btn-dark" id="btn_save">Sacuvaj</button>
        </div>
    );
}

export default ContactForm