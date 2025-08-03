import type { IconProps } from "../../types/icon"

const Moon: React.FC<IconProps> = ({ className, width = 2 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="#4a5565"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path
                width={width}
                fill="#4a5565"
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
        </svg>
    )
}

export default Moon