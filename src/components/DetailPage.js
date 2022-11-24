/* eslint-disable react/no-danger */
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

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
              <Link className="stylebuttonreturn" to="/"><button className="stylebuttonback" type="button">return</button></Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DetailPage;
