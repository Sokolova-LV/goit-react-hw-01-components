// import css from './Statistics.module.css';
import statistics from './data.json';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
    return (
        <Statistics title={statistics.title} stats={statistics.stats} />
    )
}

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats:PropTypes.array.isRequired,
};