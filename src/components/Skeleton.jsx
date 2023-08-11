import React from 'react'
import ContentLoader from 'react-content-loader';


const SkeletonImage = () => {
    return (
        <ContentLoader className='h-full w-full'>
            <rect color='blue' x="0" y="0" rx="5" ry="5" width={'100%'} height={'100%'} />
        </ContentLoader>
    )
}

export default SkeletonImage