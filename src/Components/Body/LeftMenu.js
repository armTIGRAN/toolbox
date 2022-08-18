import styles from './LeftMenu.module.css'
import Card from '../Card/Card'


const LeftMenu = () => {
    console.log(styles.leftMenu)
    return (
        <Card className={styles.leftMenu}>
              <ul>
                <li >Date</li>
                <li >Resourses</li>
                <li >Math</li>
                <li >Fizika</li>
                <li >Lalala</li>
              </ul>
         </Card>
    )
}

export default LeftMenu