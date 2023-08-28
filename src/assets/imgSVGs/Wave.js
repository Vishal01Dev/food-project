import * as React from "react"

const styleObj = {
    position: 'absolute',
    zIndex: '-10',
    
    // transform: 'rotate(60deg)'
}

const Wave = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" {...props} style={styleObj}>
        <path
            fill="#f3f4f5"
            d="m0 32 26.7 5.3C53.3 43 107 53 160 90.7 213.3 128 267 192 320 197.3c53.3 5.7 107-48.3 160-58.6 53.3-10.7 107 21.3 160 48 53.3 26.3 107 48.3 160 26.6 53.3-21.3 107-85.3 160-112C1013.3 75 1067 85 1120 112c53.3 27 107 69 160 74.7 53.3 5.3 107-26.7 133-42.7l27-16v192H0Z"
        />
    </svg>
)

export default Wave
