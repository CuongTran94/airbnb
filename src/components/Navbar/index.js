import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { StyledHeader, StyledMeta, StyledMR } from './styles.js';
import airLogo from '../../assets/images/airb-lg.png';
import { Input } from 'antd';
import { GlobalOutlined, DownOutlined } from '@ant-design/icons';

const { Search } = Input;

const Navbar = props => {
    return (
        <StyledHeader className="header">
            <Link to="/">
                <img src={airLogo} alt="logo" className="header__logo" />
            </Link>
            <Search
                placeholder='Bắt đầu tìm kiếm'
                className="header__search"
            />
            <div className="header__meta">
                <StyledMeta>
                    <Link to="/">Trở thành chủ nhà</Link>
                </StyledMeta>
                <StyledMeta>
                    <StyledMR>
                        <GlobalOutlined />
                    </StyledMR>
                    <DownOutlined />
                </StyledMeta>

            </div>
        </StyledHeader>
    );
};

Navbar.propTypes = {

};

export default Navbar;