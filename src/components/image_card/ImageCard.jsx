import css from './ImageCard.module.css';

const ImageCard = ({ data, onSelect }) => {

    const onImgClick = () => {
        onSelect(data);
    }

    return (
        <div>
            <img className={css.image} src={data.urls.small} alt={data.alt_description} onClick={onImgClick} />
        </div>
    );
};

export default ImageCard;