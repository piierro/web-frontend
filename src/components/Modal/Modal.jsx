import './Modal.css';
import React, { useEffect } from 'react';

const Modal = ({isOpen, onClose, project}) => {
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.keyCode === 27) {
                onClose();
            }
        };

        window.addEventListener('keydown', handleEsc);

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [onClose]);

    if (!isOpen) return null;

    const handleOverlayClick = (event) => {
        if (event.target.className === 'modal') {
            onClose();
        }
    };

    return (
        <div className="modal" onClick={handleOverlayClick}>
        <div className="modal-content">
            <span className="close" onClick={onClose}>&times;</span>
            <h2 className="modal-title">{project.title}</h2>
            <img className="modal-img" src={project.imgBig} alt={project.title} />
            <p className="modal-description">{project.description}</p>
            {project.gitHubLink && (
                <a href={project.gitHubLink} target="_blank" rel="noopener noreferrer">
                    <button className="github-button">
                        View on GitHub
                        <i className='fa-icon fa-solid fa-angle-right'></i>
                    </button>
                </a>
            )}
        </div>
    </div>
    );
}

export default Modal;