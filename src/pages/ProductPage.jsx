import React from 'react'
import { useParams } from 'react-router-dom'

function ProductPage() {
    
    const { videoId } = useParams()

    console.log(videoId)


    return (
        <div>
            <h3>videoId: {videoId}</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam error nulla cupiditate?</p>
        </div>
    )
}

export default ProductPage
