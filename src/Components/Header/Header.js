import React from 'react'

import styles from './Header.module.css'
import headerImage from './headerImage.jpg'
import TopMenu from './TopMenu'
import WebInformation from './WebInformation'

function Header() {

    return (
        <>
            <header className={styles.header}>
                <h1>Tool Box</h1>
            </header>
            <img src={headerImage} className={styles.img} alt=''></img>
            <div>
                <WebInformation />
                <TopMenu />
            </div>
        </>
    )
}


export default Header





