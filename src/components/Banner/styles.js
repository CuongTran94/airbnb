import styled from 'styled-components';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/banner-lg.jpg';
import { AIR_WHITE, AIR_BLACK, AIR_LIGHTRED } from '../../constants/color';

const { Title } = Typography;


const StyledBanner = styled.div`
    background-image: url(${banner}); 
    height: 80vh;
    background-size: cover;
    position: relative;
`;

const StyledInfo = styled.div`
    color: ${AIR_WHITE};
    font-weight: 600;
    position: absolute;
    top: 40vh;
    max-width: 25rem;
    padding-left: 50px;
    z-index: 1;
`;

const StyledTitle = styled(Title)`
    color: ${AIR_WHITE} !important;
    font-weight: 700 !important;
`;

const StyledPhara = styled.p`
    font-size: .875rem;
`;

const StyledLink = styled(Link)`
    color: ${AIR_BLACK};
    background: ${AIR_WHITE};
    height: 34px;
    padding: 0 16px;
    line-height: 34px;
    display: inline-block;
    border-radius: 5px;

    &:hover {
        color: ${AIR_BLACK};
        background: rgb(247, 247, 247);
    }
`;

const StyledSearch = styled.div`
    display: flex;
    flex-direction: column;

    > .banner__search {
        font-weight: 700;
        text-transform: inherit;

        &:hover, &:focus {
            color: ${AIR_LIGHTRED};
            border-color: ${AIR_LIGHTRED};
        }
    }
`;

export {
    StyledBanner,
    StyledInfo,
    StyledTitle,
    StyledPhara,
    StyledLink,
    StyledSearch
};