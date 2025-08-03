import React from 'react'
import type { IconProps } from '../../types/icon'

const ExternalLink: React.FC<IconProps> = ({ className, width = 2 }) => {
    return (
        <svg
            width={24}
            height={24}
            viewBox="0 0 1000 1000"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                strokeWidth={width}
                d="M790 790H208V208h291v-83H208q-35 0-59 24.5T125 208v582q0 35 24 59t59 24h582q35 0 59-24t24-59V499h-83v291zM582 125v83h150L323 617l58 58 409-408v149h83V125H582z" />
        </svg>
    )
}

export default ExternalLink