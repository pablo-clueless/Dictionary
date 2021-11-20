import React from 'react'
import Header from './Header'

const NotFound = ({error}) => {
    return (
       <>
       <Header />
        <main>
            <div className="error">
                <h1>{error}</h1>
                <button onClick={() => window.location.reload()}>Refresh</button>
            </div>
        </main>
       </>
    )
}

export default NotFound
