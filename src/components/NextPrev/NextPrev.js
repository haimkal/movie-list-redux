import React from 'react'
import './NextPrev.css'

export default function NextPrev({ turnToPrevPage, turnToNextPage, page }) {
    return (
        <div className='buttons-container'>
            <button disabled={page === 1} className={`prev ${page === 1 ? 'disabled' : ''}`} onClick={() => turnToPrevPage()}>Previous</button>
            <span className='page-number'>{page}</span>
            <button onClick={() => turnToNextPage()}> Next </button>
        </div>
    )
}
