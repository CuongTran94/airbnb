import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Layout, Typography } from 'antd';

const { Footer } = Layout;
const { Title } = Typography;

const StyledFooter = styled(Footer)`
    .ant-list-item {
        padding: 0;
        margin-top: 1rem;
        border-bottom: 0;

        @media (max-width: 1199px) {
            flex: 0 0 33.33333333%;
            padding: 0 8px;
            align-items: flex-start;
        }
    }

    .ant-spin-container {
        @media (max-width: 1199px) {
            display: flex;
            flex-wrap: wrap;
            margin-left: -8px;
            margin-right: -8px;
        }
    }

    .footer-col {
        @media (max-width: 1199px) {
            padding-bottom: 24px;
            margin-bottom: 24px;
            border-bottom: 1px solid #dddddd;
        }
    }
`;

const StyledTitle = styled(Title)`
    font-size: 0.9375rem !important;
    margin-bottom: 0 !important;
    text-transform: uppercase !important;
`;

const StyledLink = styled(Link)`
    color: #666;
    font-family: sans-serif;

    &:hover {
        color: #444;
        text-decoration: underline;
    }    
`;

export {
    StyledFooter,
    StyledTitle,
    StyledLink,
};