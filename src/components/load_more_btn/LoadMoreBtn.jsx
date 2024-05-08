import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ handleLoadMore }) => {
    return (
        <div>
            <button className={css.more} onClick={handleLoadMore}>Load more</button>
        </div>
    );
};

export default LoadMoreBtn;