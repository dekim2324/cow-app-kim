import React from 'react';
import Cow from './Cow.jsx';


function CowList({ list, handleOneCow, handleEditCow}) {
    return(
        <div>
             {list.map(cow => 
                    <Cow 
                    cow={cow} 
                    key={cow.id} 
                    handleOneCow={handleOneCow}
                    handleEditCow={handleEditCow}
                    />
                    )}
        </div>
    )
}

// CowList.propTypes = {
//     list: React.PropTypes.array.isRequired
//   };

export default CowList;