import React, { useState } from 'react';

const Rating = () => {
    const [isHovered , setIsHovered] = useState(false);

    handleHover =()=>{
        setIsHovered(true);
    }
    handleHoverOut =()=>{
        setIsHovered(false);
    }

    getClassName = () =>{
        const { isRated } = props;
        const { isHovered } = isHovered;
        let className = isRated ? "bi bi-star-fill" : "bi bi-star";
        className += isHovered ? " text-primary" : "";
        return className; 

    }

    return ( 
        <i 
        onMouseOver={handleHover}
        className={getClassName()}
        onMouseOut={handleHoverOut}
        onClick={()=> props.handleToggleRating(props.rank)}
        >
    </i>
     );
}
 
export default Rating;