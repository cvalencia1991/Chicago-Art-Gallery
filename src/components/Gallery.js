import { useSelector } from 'react-redux';

function Gallery() {
  const info = useSelector((state) => state.gallery);

  return (
    <>
      {info.map((art) => {
        const img = `https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`;
        return (
          <>
            <img src={img} alt="" />
            <div key={art.id} id={art.id}>{art.title}</div>
          </>
        );
      })}
    </>
  );
}

export default Gallery;
