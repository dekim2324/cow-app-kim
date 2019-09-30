import React from 'react';

function Cow({cow}) {
    const style = {
        listStyleType: 'none',
        textAlign: 'center',
        margin: '25px',
        fontSize: '18px',
        fontFamily: "Comic Sans MS"
    }

    return(
        <div style={style}>
            <li>{cow.name} {cow.description} </li>
        </div>
    )
}

// Cow.propTypes = {
//     cow: React.PropTypes.object.isRequired
// }

export default Cow;