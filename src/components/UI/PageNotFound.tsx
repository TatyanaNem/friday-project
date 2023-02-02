import React from 'react';
import errorImage from '../../assets/images/PageNotFound.svg';

const PageNotFound = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h3>Sorry, the page is not found</h3>
            <img src={errorImage} alt="Page not found"/>
        </div>
    );
};

export default PageNotFound;