import * as React from "react"


const styleObj = {
    position: 'absolute',
    top: '-114%',
    zIndex: '-10',
    right: '-39%',
    width: '134%',
    transform: 'rotate(60deg)'
}

const SvgComponent = (props) => (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props} style={styleObj} className='hidden lg:block'>
        <path
            fill="#F2F4F8"
            d="M126 59.7c12.8 2.8 32.1-.8 41 4.9 9 5.6 7.6 20.5 2.5 32.4-5.2 11.9-14.1 20.9-19.8 32.3-5.6 11.4-7.9 25.2-15.6 29-7.8 3.8-20.9-2.4-30.2-9.2-9.3-6.7-14.7-13.9-25.5-15.9-10.8-2.1-27 1.1-35.2-3.6-8.3-4.7-8.6-17.1-7.3-28.8 1.4-11.7 4.4-22.6 9.2-33.2C50 57 56.7 46.8 66.1 42.1c9.5-4.7 21.7-3.9 31.1 1C106.5 48 113.1 57 126 59.7Z"
        />
    </svg>
)


export default SvgComponent
