import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = (props) => (
    <ContentLoader className='pizza-block'
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="140" cy="125" r="125" />
        <rect x="0" y="270" rx="10" ry="10" width="280" height="26" />
        <rect x="0" y="425" rx="15" ry="15" width="90" height="45" />
        <rect x="120" y="425" rx="25" ry="25" width="150" height="45" />
        <rect x="0" y="315" rx="15" ry="15" width="280" height="85" />
    </ContentLoader>
)

