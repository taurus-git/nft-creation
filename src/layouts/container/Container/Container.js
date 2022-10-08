import React from 'react';

const Container = ( props ) => {
    const className = `container ${ props.class || '' }`;

    return (
        <section className={ className }>
            {props.children}
        </section>
    );
}

export default Container;
