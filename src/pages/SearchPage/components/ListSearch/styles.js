import styled from 'styled-components';
import { AIR_WHITE } from '../../../../constants/color';
import { Tag } from 'antd';
import { HeartOutlined } from '@ant-design/icons';

const StyledListSearch = styled.div`
    background: ${AIR_WHITE};
    padding: 3.125rem;
`;

const SectionSearchInfo = styled.section`
`;

const SectionSearchResult = styled.section`
    .ant-list-item {
        padding: 24px 0;
    }
    .ant-list-item-meta-title {
        position: relative;
    }
    .ant-list-item-meta-description {
        overflow: hidden;
        margin-top: 1.5rem;
        display: flex;
        justify-content: space-between;
        flex-grow: 1;
        align-items: flex-end;
        
    }
    .ant-list-item-meta-content {
        display: flex;
        flex-direction: column;
        height: 200px;
    }
`;

const StyledSearchInfo = styled.div`
    font-size: .875rem;
    color: #333;
    font-weight: 600;
    margin-bottom: .5rem;
`;

const StyledTag = styled(Tag)`
    border-radius: 1.2rem;
    background: ${AIR_WHITE};
    padding: .5rem 1rem;
    cursor: pointer;
    font-size: .875rem;

    &:hover {
        border-color: #333;
    }
`;

const StyledLocation = styled.div`
    font-size: .8125rem;
    height: .8125rem;
    line-height: .8125rem;
    color: rgb(113, 113, 113);
`;

const StyledTitleResult = styled.div`
    font-size: 1.125rem;
    font-weight: 700;
    margin-top: .5rem;
    color: #333;
`;

const StyledHorizon = styled.div`
    color: rgb(184, 184, 184);
`;

const StyledIconHeart = styled(HeartOutlined)`
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    font-size: 1.5rem;

    &:hover {
        background: rgb(247, 247, 247);
        border-radius: 50%;
        padding: .875rem;
    }
`;

const StyledDescription = styled.p`
    margin-top: 1rem;
    color: #333;
`;

const StyledStar = styled.div`
    font-size: 1rem;

    .anticon-star {
        color: #ff0000; 
        margin-right: .375rem;
    }

    strong {
        color: #333;
        font-weight: 600;
    }
`;

const StyledImage = styled.img`
    width: 300px;
    height: 200px;
    border-radius: 5px;
`;

const StyledPrice = styled.div`
    
`;

export {
    StyledListSearch,
    StyledSearchInfo,
    StyledTag,
    SectionSearchInfo,
    SectionSearchResult,
    StyledLocation,
    StyledTitleResult,
    StyledIconHeart,
    StyledHorizon,
    StyledDescription,
    StyledStar,
    StyledPrice,
    StyledImage
};