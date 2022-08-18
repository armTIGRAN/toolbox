import React from 'react'

import styles from './Content.module.css'
import Card from '../Card/Card'
import Input from './Input'
import Data from './Tools/Data'


const Content = () => {
    return (
        <>
            <Card className={styles.content}>
                <Input />
                <div className={styles.outputDiv}> </div>
            </Card>
            <Card className={styles.tool}>
                <Data/>
            </Card>
        </>
    )
}

export default Content