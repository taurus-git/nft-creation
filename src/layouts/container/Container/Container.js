import React from 'react';
import './Container.scss'

const Container = ( props ) => {
    return (
        <section className="container">
            {props.children}
        </section>
    );
}

export default Container;
