import Modal from 'react-modal';

const ImageModal = ({ modalIsOpen, photo, closeModal }) => {
    Modal.defaultStyles.overlay.backgroundColor = "rgba(41, 40, 40, 0.724)";
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            background: 'transparent',
            border: 'none',
        },
    };
    Modal.setAppElement(document.getElementById("root"));
    return (
        <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            shouldCloseOnEsc={true}
            shouldCloseOnOverlayClick={true}

        >
            <img src={photo.urls.regular} alt={photo.alt_description}></img>
        </Modal>
    );
};

export default ImageModal;