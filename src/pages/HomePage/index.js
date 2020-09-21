import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../../components/Banner';
import ListCard from './components/Card';

const HomePage = props => {
    return (
        <div>
            <Banner />
            <ListCard />
        </div>
    );
};

HomePage.propTypes = {

};

export default HomePage;