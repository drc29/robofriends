import React from 'react';

const Scroll = (props) => {
    return (
        <div style={styles}>
            {props.children}
        </div>
    );
}

const styles = {
    overflow: 'scroll',
    border: '5px solid black',
    height: '800px',
}

export default Scroll;