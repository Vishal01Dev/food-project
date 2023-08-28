
import * as React from "react"

const styleObj = {
    position:'absolute',
    top:'-110%',
    right: '-40%',
    width:'1600px',
    transform : 'rotate(30deg)'
}

const SvgComponent = (props) => (
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={styleObj}>
        <defs>
            <linearGradient id="a" x1={0} x2={1} y1={1} y2={0}>
                <stop stopColor="rgba(233, 233, 233, 1)" offset="0%" />
                <stop stopColor="rgba(233, 233, 233, 1)" offset="100%" />
            </linearGradient>
        </defs>
        <path
            fill="url(#a)"
            d="M23.1-39.7c6.5 3.4 11.2 10.3 12.1 17.5.9 7.2-1.9 14.7-1.6 22.4.4 7.7 3.9 15.6 2.8 22.5-1 6.9-6.7 12.9-13.6 14.7C16 39.3 8 37 .1 36.9c-8-.1-15.9 2-23 .3s-13.4-7.1-13.7-14c-.3-6.8 5.4-15 7-22.3 1.6-7.3-1-13.7-.6-20.3.4-6.7 3.8-13.7 9.3-17.6 5.5-4 13.2-5 21.2-5.6 8-.5 16.3-.6 22.8 2.9Z"
            transform="translate(50 50)"
            style={{
                transition: "all .3s ease 0s",
            }}
        />
    </svg>
)

export default SvgComponent
