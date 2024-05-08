import ImageCard from '../image_card/ImageCard.jsx';
import css from './ImageGallery.module.css';

const ImageGallery = ({ items, onSelect }) => {
    return (
        <ul className={css.gallery}>
            {items.map((item) => {
                return (
                    <li key={item.id}>
                        <ImageCard
                            data={item}
                            onSelect={onSelect}
                        />
                    </li>
                );
            })}
        </ul>
    );
};

export default ImageGallery;