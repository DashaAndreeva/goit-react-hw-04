export default function ImageCard({ image, openModal }) {
  return (
    <div>
      <img
        src={image.urls.small}
        alt=""
        onClick={() => {
          openModal(image);
        }}
      />
    </div>
  );
}
