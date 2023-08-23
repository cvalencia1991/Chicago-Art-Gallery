/* eslint-disable global-require */
import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectArt, fetchArt, galleryIsLoading } from '../Redux/ArtGallery/ArtGallery';

function Gallery() {
  const info = useSelector(selectArt);
  const dispatch = useDispatch();
  const galleryLoading = useSelector(galleryIsLoading);

  const fetchArtCallback = useCallback(() => {
    dispatch(fetchArt());
  }, [dispatch]);

  useEffect(() => {
    fetchArtCallback();
  }, [fetchArtCallback]);

  if (galleryLoading) {
    return (
      <div className="lds-ring">
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }

  return (
    <>
      <div className="styleimages">
        {info.map((art) => (
          <div className="styleArt" key={art.id} id={art.id}>
            <Link key={info.id} to={`/Details/${art.id}`}>
              { art.image_id === null
                ? (
                  <img
                    className="styleArtimage"
                    key={art.id}
                    src={require('../imgs/NoImageAvailable.jpg')}
                    alt={`${art.title} - ${art.artist_display}}`}
                  />
                )
                : (
                  <img
                    className="styleArtimage"
                    key={art.id}
                    src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
                    alt={`${art.title} - ${art.artist_display}}`}
                  />
                )}
            </Link>
            <div>
              {art.title}
            </div>
          </div>
        ))}
      </div>
    </>

  );
}

export default Gallery;
