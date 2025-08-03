import React from 'react'
import type { IconProps } from '../../types/icon'

const GraduationCap: React.FC<IconProps> = ({ className, width = 2 }) => {
    return (
        <svg
            width="40px"
            height="40px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth={width}
            // stroke="#fff"
            fill="none"
            className={className}
        >
            <path
                strokeWidth={width}
                d="M48.11,30V41.75a1.71,1.71,0,0,1-1,1.58L35.23,48.56A10.39,10.39,0,0,1,26,48.17l-8.53-4.68a1.73,1.73,0,0,1-.9-1.52V30.33"
                strokeLinecap="round"
            />
            <path
                strokeWidth={width}
                d="M29.32,15.22,8.93,24.88a.86.86,0,0,0,0,1.55l19.74,10a7,7,0,0,0,6.15,0l20.28-9.83a.86.86,0,0,0,0-1.55L35.37,15.28A6.91,6.91,0,0,0,29.32,15.22Z"
                strokeLinecap="round"
            />
            <polyline
                strokeWidth={width}
                points="32 25.86 10.33 27.15 10.63 39.45"
                strokeLinecap="round" />
            <circle
                cx={10.66}
                cy={42.39}
                r={2.53}
                strokeLinecap="round"
                strokeWidth={width}
            />
            <polyline
                strokeWidth={width}
                points="11.53 44.76 13.53 51.03 7.79 51.03 9.82 44.76"
                strokeLinecap="round"
            />
        </svg>
    )
}

export default GraduationCap