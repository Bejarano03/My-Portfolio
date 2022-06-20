import styled from 'styled-components';

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 950px;
    position: relative;
    color: #fff;
    margin-top: -170px;
`;

export const HeroContent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0 20px;
`;

export const HeroH1 = styled.h1`
    font-family: Arial;
    font-size: 33px;
    text-align: center;
    margin-bottom: 20px;

    @media screen and (max-width: 768px){
        font-size: 22px;
    }
`;

export const HeroP = styled.p`
    font-family: Georgia;
    font-size: 22px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 18px;
    }
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    background: #232a34;
    -o-object-fit: cover;
    object-fit: cover;
`;