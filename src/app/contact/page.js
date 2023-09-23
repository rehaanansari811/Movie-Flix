import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import  styles from "./contact.module.css"
import ContactForm from "@/app/components/ContactForm";
const Contact = () => {
    return (
        <>
            <div className={styles.container}></div>
            <ContactCard/>
            <section className={ styles.contact_section}>
                <h2>We'd love to hear <span> from you</span></h2>
                <ContactForm/>
            </section>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.101902955158!2d77.31084507508187!3d28.38598997580026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc46cc975fbf%3A0x9838665e30946c48!2sBata%20Chowk!5e0!3m2!1sen!2sin!4v1695480317451!5m2!1sen!2sin" width={"600"} height={"450"} style={{border:0}} allowFullScreen="" loading="lazy" className={styles.mapping}
            referrerPolicy="no-referrer-when-downgrade"></iframe>
        </>
    );
};

export default Contact;