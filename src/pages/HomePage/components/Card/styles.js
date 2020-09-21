import styled from 'styled-components';
import { AIR_WHITE } from '../../../../constants/color';
import { Link } from 'react-router-dom';

const StyledWrapCard = styled.div`
    padding: 1.875rem 3.125rem;
    background-color: ${AIR_WHITE};

    .ant-col:not(:first-child) {
        @media (max-width: 767px) {
            margin-top: 30px;
        }
    }

    .ant-card {
        transition: transform 0.5s ease-in;
        height: 100%;
        width: 100%;

        &:hover {
            transform: scale(1.04);
        }

        &-bordered {
            border-radius: 16px;
            box-shadow: 0 1px 2px -2px rgba(0,0,0,0.16), 0 3px 6px 0 rgba(0,0,0,.12), 0 5px 12px -14px rgba(0,0,0.75);
        }

        &-cover {
            img {
                border-top-left-radius: 16px;
                border-top-right-radius: 16px;
            }
        }

        &-meta {
            &-title {
                font-size: 1.125rem;
                font-weight: 600;
            }

            &-description {
                color: #999;
                font-family: sans-serif;
            }
        }
    }
`;

const StyledLink = styled(Link)`
    display: block;
    height: 100%;
    width: 100%;
`;

export {
    StyledWrapCard,
    StyledLink,
};