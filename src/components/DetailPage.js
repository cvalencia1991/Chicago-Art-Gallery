import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function DetailPage() {
  const info = useSelector((state) => state.gallery);
  const params = useParams();
  const newart = info.filter((art) => art.id.toString() === params.id);
  return (
    <div className="styledetail">
      {newart.map((art) => (
        <div className="styleArtdetail" key={art.id} id={art.id}>
          <img className="detailimag" key={art.id} src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`} alt="" />
          <div className="styleinfodetail">
            <div>
              {art.artist_display}
            </div>
            <div>
              {art.credit_line}
            </div>
            <div>
              {art.classification_title}
            </div>
            <div>
              {art.exhibition_history}
            </div>
            <div>
              {art.provenance_text}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailPage;
