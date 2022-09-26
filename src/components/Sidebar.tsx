import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'

export function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <aside>
        <img 
        className={styles.cover} 
        src="https://images.unsplash.com/photo-1590608897129-79da98d15969?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        />

        <div className={styles.profile}>
        <Avatar src="https://github.com/lucadboer.png" />
          <strong>Luca Destefano</strong>
          <span>Web Developer</span>
        </div>

        <footer>
          
          <a href="#">
            <PencilLine size={20} />
            Edite o seu perfil
          </a>
        </footer>
      </aside>
    </div>
  )
}