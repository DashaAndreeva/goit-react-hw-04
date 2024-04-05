import ImageCard from "../imageCard/ImageCard";

export default function ImageGallery({ images, openModal }) {
  return (
    <ul>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} openModal={openModal} />
      ))}
    </ul>
  );
}
