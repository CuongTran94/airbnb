import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    StyledBanner,
    StyledInfo,
    StyledTitle,
    StyledPhara,
    StyledLink,
    StyledSearch
} from './styles.js';
import { Button } from 'antd';
import Search from '../Search';

const Banner = props => {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <StyledBanner className="banner">
            <StyledSearch>
                {showSearch && <Search />}
                <Button
                    className="banner__search"
                    onClick={() => setShowSearch(!showSearch)}
                >
                    {!showSearch ? 'Search Date' : 'Hide'}
                </Button>
            </StyledSearch>
            <StyledInfo>
                <StyledTitle level={1}>Du lịch gần nhà</StyledTitle>
                <StyledPhara>Dừng chân ở một điểm đến mới mẻ. Khám phá các chỗ ở gần bạn để sinh hoạt, làm việc hay chỉ đơn giản là thư giãn.</StyledPhara>
                <StyledLink to="/search">Khám phá những điểm đến gần đây</StyledLink>
            </StyledInfo>
        </StyledBanner>
    );
};

Banner.propTypes = {

};

export default Banner;