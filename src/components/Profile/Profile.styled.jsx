import styled from '@emotion/styled';

export const Wrap = styled.div`
    width: 400px;
    margin: 0 auto;
    padding: 50px 40px;
    background-color: lightblue;
    border-radius: 10px;
`;
    
export const Description = styled.div`
    width: 220px;
    height: 200px;
    margin: 0 auto;
    padding: 20px;
    background-color: #ffffff;
    border-radius: 10px;
`;

export const Avatar = styled.img`
    width: 80px;
    display: block;
    margin: 0 auto 10px;
    border-radius: 50%;
`;

export const Name = styled.p`
    text-align: center;
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 16px;
`;

export const Tag = styled.p`
    text-align: center;
    color: darkgrey;
    margin-bottom: 8px;
    font-size: 16px;
`;

export const Location = styled.p`
    text-align: center;
    color: darkgrey;
    font-size: 16px;
`;

export const Stats = styled.ul`
    width: 240px;
    height: 80px;
    background-color: darkgray;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
`;

export const Item = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const Label = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
`;

export const Quantity = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 16px;
`;
