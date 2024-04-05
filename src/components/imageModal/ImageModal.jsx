import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function ImageModal({ image, openModal, closeModal }) {
  const { urls, description, likes } = image;

  return (
    <>
      <Modal isOpen={openModal} isClose={closeModal} style={customStyles}>
        <div>
          <img src={urls.regular} alt={description} />
          <p>{description}</p>
          <p>Likes: {likes}</p>
        </div>
      </Modal>
    </>
  );
}
