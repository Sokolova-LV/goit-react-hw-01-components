import PropTypes from 'prop-types';

import {
    Wrap,
    Title,
    StatList,
    Item,
    Label,
    Percentage,
} from './Statistics.styled';

export const Statistics = ({ stats }) => {
    return (
        <Wrap>
            <Title>Upload stats</Title>

            <StatList>
                <Item>
                    <Label>{stats.label}</Label>
                    <Percentage>{stats.percentage}%</Percentage>
                </Item>
                <Item>
                    <Label>{stats.label}</Label>
                    <Percentage>{stats.percentage}%</Percentage>
                </Item>
                <Item>
                    <Label>{stats.label}</Label>
                    <Percentage>{stats.percentage}%</Percentage>
                </Item>
                <Item>
                    <Label>{stats.label}</Label>
                    <Percentage>{stats.percentage}%</Percentage>
                </Item>
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
        })
    ).isRequired,
};