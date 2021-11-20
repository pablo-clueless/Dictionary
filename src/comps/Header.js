import React from 'react'
import { FaTwitter, FaGithub, FaGlobe } from 'react-icons/fa'

const Header = () => {
    return (
        <header>
            <h1 className='title'>Dictionary</h1>
            <ul>
                <li>
                    <a href="https://github.com/pablo-clueless" rel='noopener noreferrer' target='_blank'>
                        <FaGithub />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/pablo_clueless" rel='noopener noreferrer' target='_blank'>
                        <FaTwitter />
                    </a>
                </li>
                <li>
                    <a href="https://okunolasamson.netlify.app" rel='noopener noreferrer' target='_blank'>
                        <FaGlobe />
                    </a>
                </li>
            </ul>
        </header>
    )
}

export default Header
