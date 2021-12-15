import * as React from "react"

function CalendarIcon(props) {
    return (
        <svg
            width={20}
            height={20}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M14.167 2.5H17.5a.833.833 0 01.833.833v13.334a.833.833 0 01-.833.833h-15a.833.833 0 01-.833-.833V3.333A.833.833 0 012.5 2.5h3.333V.833H7.5V2.5h5V.833h1.667V2.5zM12.5 4.167h-5v1.666H5.833V4.167h-2.5V7.5h13.334V4.167h-2.5v1.666H12.5V4.167zm4.167 5H3.333v6.666h13.334V9.167zM5 11.667h1.667v1.666H5v-1.666zm3.333 0H15v1.666H8.333v-1.666z"
                fill="#7C7F99"
            />
        </svg>
    )
}

export default CalendarIcon
