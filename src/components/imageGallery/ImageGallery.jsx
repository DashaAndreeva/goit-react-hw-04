import ImageCard from "../imageCard/ImageCard";

export default function ImageGallery({ images }) {
  return (
    <ul>
      {images.map((image, index) => (
        <li key={index}>
          <ImageCard imageUrl={image.url} alt={image.alt} />
        </li>
      ))}
    </ul>
  );
}
