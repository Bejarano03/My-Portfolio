import styled from 'styled-components';

export const HeroWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position:relative;
    background: rgb(204, 204, 204); /* Fallback for older browsers without RGBA-support */
    background: rgba(204, 204, 204, 0.5);
    height: 480px;
    margin: 20px 100px 0 100px;
`;

export const HeroH1 = styled.h1`
    margin-top: 20px;
    font-size: 1.5rem;
    text-align: center;
`;

export const HeroP = styled.p`
    text-align: center;
`