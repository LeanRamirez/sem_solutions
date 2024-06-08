import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import style from './whatsappButton.module.css';

const WhatsappButton = () => {

    const numeroTelefono = '1169763444';

    const handleWhatsAppClick = () => {
        const WhatsAppLink = `https://api.whatsapp.com/send?phone=${numeroTelefono}`;
        window.open(WhatsAppLink, '_blank', 'noopener noreferrer');
    }

    return (
        <div className={style.whatsappButtonContainer}>
            <button onClick={handleWhatsAppClick} className={style.whatsappButton} aria-label="Enviar mensaje por WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} className={style.icon}/> 
            </button>
        </div>
    )
}

export default WhatsappButton;