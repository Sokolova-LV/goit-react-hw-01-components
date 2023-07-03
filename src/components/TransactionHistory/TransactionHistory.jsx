import PropTypes from 'prop-types';

import {
    History,
    Head,
    Body,
    Row,
    HeadRow,
    BodyRow,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <History>
            <Head>
                <Row>
                    <HeadRow>Type</HeadRow>
                    <HeadRow>Amount</HeadRow>
                    <HeadRow>Currency</HeadRow>
                </Row>
            </Head>

            <Body>
                {items.map(({ id, type, amount, currency }) => (
                    <Row key={id}>
                        <BodyRow>{type}</BodyRow>
                        <BodyRow>{amount}</BodyRow>
                        <BodyRow>{currency}</BodyRow>
                    </Row>
                ))}
            </Body>
        </History>
    ) 
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
};
