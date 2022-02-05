
import swal from 'sweetalert';
import ContactForm from './ContactForm';

function Contact() {

    function swalPoruka(ime, prezime, email, poruka) {
        swal({
            title: "Ime:" + ime + " Prezime:" + prezime + " Email:" + email + " Poruka:" + poruka,
            icon: "info",
            button: "Zatvori!",
        });
    }

    return (
        <div className="contact">
            <ContactForm swal={swalPoruka} />
        </div>
    );
}

export default Contact;
