import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

interface CommentProps {
  content: string,
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {

  const [likeComment, setLikeComment] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeComment((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" />

    <div className={styles.commentBox}>
      <div className={styles.commentContent}>
        <header>
          <div className={styles.authorAndTime}>
            <strong>Mayk Brito</strong>
            <time title='20 de setembro às 15:29h' dateTime='2022-09-20 15:29h'>Cerca de 1h atrás</time>
          </div>

          <button title='Deletar Comentário' onClick={handleDeleteComment}>
            <Trash size={24} />
          </button>
        </header>

        <p>{content}</p>
    </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeComment}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}