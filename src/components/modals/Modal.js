import React from 'react'

const Modal = (props) => {

    const { state, setState } = props
    if (state === true) {

        document.body.style.overflow = "hidden"

        return (
            <div className='fixed top-0 right-0 bottom-0 left-0 bg-black/10 z-50 '>
                <div className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 rounded-2xl shadow-lg w-[90%] sm:min-w-[500px] sm:w-[500px] min-h-[200px]">
                    <div className='absolute top-3 right-3 cursor-pointer bg-gray-100 p-1 rounded-full' onClick={() => setState(!state)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    {props.children}
                </div>
            </div>
        )
    }
    else {
        document.body.style.overflow = "auto"
        return null
    }


}

export default Modal
