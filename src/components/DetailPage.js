/* eslint-disable react/no-danger */
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { selectArt } from '../Redux/ArtGallery/ArtGallery';

function DetailPage() {
  const info = useSelector(selectArt);
  const params = useParams();
  const newart = info.filter((art) => art.id.toString() === params.id);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div className="styledetail">
      {newart.map((art) => (
        <div className="styleArtdetail" key={art.id} id={art.id}>
          <img className="detailimag" key={art.id} src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`} alt="" />
          <div className="styleinfodetail">
            <div>
              <h1>{art.title}</h1>
            </div>
            <div>
              {art.artist_display}
            </div>
            <div>
              <h3>
                {art.credit_line}
              </h3>
            </div>
            <div>
              {art.classification_title}
            </div>
            <div>
              <p dangerouslySetInnerHTML={{ __html: art.exhibition_history }} />
            </div>
            <div>
              <p dangerouslySetInnerHTML={{ __html: art.provenance_text }} />
            </div>
            <div className="stylebuttonreturn">
              <button className="stylebuttonback" onClick={handleNavigate} type="button">return</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailPage;
