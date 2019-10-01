import React from 'react';
import Cow from './Cow.jsx';


function CowList({ list }) {
    return(
        <div>
             {list.map(cow => 
                    <Cow 
                    cow={cow} 
                    key={cow.id} 
                    />
                    )}
        </div>
    )
}

// CowList.propTypes = {
//     list: React.PropTypes.array.isRequired
//   };

export default CowList;