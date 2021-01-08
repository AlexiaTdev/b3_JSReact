import React, { useMemo } from 'react'

const Button = ({clear, ...props}) => {
    

    return(
        <button {...props} className={clear && "clear"}>
            {props.children}
        </button>
    )
}


export default Button