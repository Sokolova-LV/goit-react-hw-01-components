import styled from '@emotion/styled';

export const Wrap = styled.section`
    width: 400px;
    padding: 50px 40px;
    margin: 40px auto;
    background-color: pink;
    border-radius: 10px;
`;

export const Title = styled.h2`
    margin: auto;
    padding: 30px 0;
    text-align: center;
    text-transform: uppercase;
    background-color: white;
    font-size: 24px;
    font-weight: 700;
    border-radius: 10px;
`;

export const StatList = styled.ul`
    display: flex;
    justify-content: center;
    margin: 20px auto;
    padding: 0;
    background-color: white;
    border-radius: 10px;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40px;
    padding: 16px 16px;
    background-color: yellow;
    border: 1px solid pink;
`;

export const Label = styled.span`
    font-weight: 700;
    font-size: 20px;
`;

export const Percentage = styled.span`
    font-weight: 700;
    font-size: 20px;
`;