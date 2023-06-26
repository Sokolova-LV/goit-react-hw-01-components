import PropTypes from 'prop-types';

import {
    Wrap,
    Title,
    StatList,
    Item,
    Label,
    Percentage,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
    return (
        <Wrap>
            {title.length > 0 && (
                <Title>{title}</Title>
            )}
            
            <StatList>
                {stats.map(stat => (
                <Item>
                    <Label>{stat.label}</Label>
                    <Percentage>{stat.percentage}%</Percentage>
                </Item>
                ))}
            </StatList>
        </Wrap>
    ) 
}

Statistics.propTypes = {
    stats:PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};