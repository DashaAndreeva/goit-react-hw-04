export default function ImageCard({ image, openModal }) {
  const { urls } = image;

  return (
    <div>
      <img
        src={urls.small}
        alt=""
        onClick={() => {
          openModal(image);
        }}
      />
    </div>
  );
}
