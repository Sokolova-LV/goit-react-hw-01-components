import styled from '@emotion/styled';

export const Item = styled.li`
    display: flex;
    width: 400px;
    align-items: center;
    background-color: lightgreen;
    margin: 0 auto 20px;
    padding: 20px;
    border-radius: 10px;
`;

export const Status = styled.span`
width: 16px;
height: 16px;
margin-right: 16px;
border-radius: 50%;
background-color: ${props => (props.spanStatus ? 'green' : 'red')};
`;

export const Avatar = styled.img`
margin-left: 8px;
width: 50px;
height: 50px;
`;

export const Name = styled.p`
margin-left: 20px;
text-align: center;
font-weight: 700;
font-size: 24px;
color: #212121;
`;