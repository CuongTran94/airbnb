import styled from 'styled-components';
import { Layout } from 'antd';
import { AIR_LIGHTRED, AIR_WHITE, AIR_BLACK } from '../../constants/color';

const { Header } = Layout;

const StyledHeader = styled(Header)`
    background: ${AIR_WHITE};
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 14px -12px rgba(0,0,0.75);

    .header {
        &__logo {
            height: 80px;
            object-fit: contain;
        }

        &__search {
            flex: 1;
            height: 48px;
            border-radius: 999px;
            max-width: fit-content;

            > input {
                width: 240px;
            }

            .ant-input-search-icon {
                border: 1px solid ${AIR_LIGHTRED};
                padding: .5rem;
                border-radius: 50%;
                margin-right: .375rem;
                background: ${AIR_LIGHTRED};
                color: ${AIR_WHITE};

                &::before {
                    border-left: none;
                }                
            }
        }

        &__meta {
            display: flex;
            align-items: center;
        }
    }
`;

const StyledMeta = styled.div`
    padding: .75rem;
    background: transparent;
    display: flex;
    align-items: center;
    font-size: .875rem;
    color: ${AIR_BLACK};
    line-height: 1.2;
    border-radius: 22px;

    &:hover {
        background: rgb(247, 247, 247);
        cursor: pointer;
    }

    a {
        color: ${AIR_BLACK};
    }
`;

const StyledMR = styled.div`
    margin-right: .375rem;
`;

export {
    StyledHeader,
    StyledMeta,
    StyledMR
};