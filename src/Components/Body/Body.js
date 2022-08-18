import styles from './Body.module.css'
import Content from './Content'
import LeftMenu from './LeftMenu'

const Body = () => {
    return (
        <div className={styles.body}>
            <LeftMenu></LeftMenu>
            <Content></Content>
        </div>
    )
}

export default Body