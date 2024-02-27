import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import styles from './rating.module.css'
const Rating = ({ value, text, color }) => {
    return (
        <div className={styles.rating}>
            <span>
                {value >= 1 ? (
                    <FaStar />
                ) : value >= 0.5 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
            <span>
                {value >= 2 ? (
                    <FaStar />
                ) : value >= 1.5 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
            <span>
                {value >= 3 ? (
                    <FaStar />
                ) : value >= 2.5 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
            <span>
                {value >= 4 ? (
                    <FaStar />
                ) : value >= 3.5 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
            <span>
                {value >= 5 ? (
                    <FaStar />
                ) : value >= 4.5 ? (
                    <FaStarHalfAlt />
                ) : (
                    <FaRegStar />
                )}
            </span>
            <span className={styles.ratingText}>{text && text}</span>
        </div>
    );
};

Rating.defaultProps = {
    color: '#f8e825',
};

export default Rating;