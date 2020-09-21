import React, { useState } from 'react';
import PropTypes from 'prop-types';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { StyledSearch, StyledTitle, StyledInput, StyledButton } from './styles.js';
import { UserOutlined } from '@ant-design/icons';

import { DateRangePicker } from 'react-date-range';

const Search = props => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'
    };

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    };

    return (
        <StyledSearch className="search">
            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />
            <StyledTitle level={3}>
                Number of guests
                <UserOutlined />
            </StyledTitle>
            <StyledInput min={0} defaultValue={2} />
            <StyledButton>
                Search Airbnb
            </StyledButton>
        </StyledSearch>
    );
};

Search.propTypes = {

};

export default Search;