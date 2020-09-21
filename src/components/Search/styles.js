import styled from 'styled-components';
import { Typography, InputNumber, Button } from 'antd';
import { AIR_WHITE, AIR_LIGHTRED } from '../../constants/color';


const { Title } = Typography;

const StyledSearch = styled.div`
    position: absolute;
    left: 35%;
    top: 32px;
    z-index: 2;
`;

const StyledTitle = styled(Title)`
    font-weight: 700;
    background: ${AIR_WHITE};
    display: flex;
    justify-content: space-between;
    padding: 0 1.25rem;
    align-items: center;
    margin-bottom: 0 !important;
`;

const StyledInput = styled(InputNumber)`
    width: 100%;
    border: none;
    padding: 0 10px;
`;

const StyledButton = styled(Button)`
    width: 100%;
    background-color: ${AIR_LIGHTRED};
    color: ${AIR_WHITE};
    font-weight: 700;

    &:hover, &:focus {
        background-color: ${AIR_WHITE};
        color: ${AIR_LIGHTRED};
        border-color: ${AIR_LIGHTRED};
    }
`;

export {
    StyledSearch,
    StyledTitle,
    StyledInput,
    StyledButton
};