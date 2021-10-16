import React, { useState, useEffect } from "react";
import ImageViewer from 'react-simple-image-viewer';
import { useSelector, useDispatch } from "react-redux";

// Components
import PhotoCollection from "../../Components/restaurant/PhotosCollection";

// Redux Actions
import { getImage } from "../../Redux/Reducer/Image/image.action";

const Photos = () => {
    const [photos, setPhotos] = useState([]);
    const [ isMenuOpen, setIsMenuOpen] = useState(false);
    const [ CurrentImg, setCurrentImg] = useState(0);

    const reduxState = useSelector(
        (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
      );
    const dispatch = useDispatch();

    useEffect(() => {
        if (reduxState) {
          dispatch(getImage(reduxState?.photos)).then((data) => {
            const images = [];
            data.payload.image.images.map(({ location }) => images.push(location));
            setPhotos(images);
          });
        }
      }, []);

    const closeViewer = () => setIsMenuOpen(false);
    const openViewer = () => setIsMenuOpen(true);

    return (
        <>
            {isMenuOpen && (
                <ImageViewer
                    src={ photos }
                    currentIndex={ CurrentImg }
                    disableScroll={ false }
                    onClose={ closeViewer }
                />
            )}
            <div className="flex flex-wrap gap-3">
                {
                    photos.map((photo) =>
                        <PhotoCollection image={photo} openViewer={openViewer} />
                    )
                }
            </div>
        </>
    );
};

export default Photos;