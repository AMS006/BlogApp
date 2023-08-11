import React,{useState} from 'react'

import Skeleton from './Skeleton'

const Image = ({ src, classData }) => {
    const [loading, setLoading] = useState(true)
    return (
        <>
            {loading && <Skeleton />}
            <img src={src} onLoad={() => setLoading(false)} className={` ${classData} object-cover ${loading ? 'hidden' : 'block'}`} alt="" />
        </>
    )
}

export default Image