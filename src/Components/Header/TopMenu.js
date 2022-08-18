import styles from './TopMenu.module.css'
import Card from '../Card/Card'

const TopMenu = () => {
    return (
        <Card className={styles.topMenu}>
            <ul>
                <li>About me</li>
                <li>Contacts</li>
                <li>About webpage</li>
                <li>lalala 1</li>
                <li>lalala 2</li>
            </ul>
        </Card>
    )
}

export default TopMenu