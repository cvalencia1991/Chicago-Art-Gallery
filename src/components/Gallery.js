import { useSelector } from 'react-redux';

function Gallery() {
  const info = useSelector((state) => state.gallery);
  return (
    <div className="styleimages">
      {info.map((art) => (
        <div className="styleArt" key={art.id} id={art.id}>
          <img className="styleArtimage" key={art.id} src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`} alt="" />
          <div>
            {art.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
