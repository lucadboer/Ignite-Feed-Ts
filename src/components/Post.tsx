import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'
import { useState, FormEvent, ChangeEvent, InvalidEvent } from 'react';

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

interface Author {
	name: String,
	role: String,
	avatarUrl: string
}

interface Content {
	type: 'paragraphy' | 'link'
	content: string
}

export interface PostProps {
	author: Author,
	publishedAt: Date,
	content: Content[]
}

export function Post({ author, publishedAt, content }:PostProps) {

	const [comments, setComments] = useState(['Belo post'])

	const [newCommentText, setNewCommentText] = useState('')


	const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
		locale: ptBR
	})

	const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true
	})
	
	function newHandleCommentText(event: ChangeEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity('')
		setNewCommentText(event.target.value)
	}

	function handleAddComment(event: FormEvent) {
		event.preventDefault()
		setComments([...comments, newCommentText])
		setNewCommentText('')
	}

	function deleteComment(commentToDelete: string) {
			const commentsWithoutDeletedOne = comments.filter(comment => {
				return comment !== commentToDelete 
		})
		setComments(commentsWithoutDeletedOne)
	}

	function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
		event.target.setCustomValidity('Este campo é obrigatório')
	}

	const isNewCommentEmpty = newCommentText.length === 0

	return (
		<article className={styles.post}>
			
			<header className={styles.author}>
				<div className={styles.authorInfo}>
				<Avatar src={author.avatarUrl} />
					<div>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				
				<time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
				{publishedDateRelativeToNow}
				</time>
			</header>

				<main className={styles.content}>
					{content.map(line => {
						if (line.type === "paragraphy") {
							return <p key={line.content}>{line.content}</p>
						}
						else if (line.type === "link") {
							return <p key={line.content}><a href="#">{line.content}</a></p>
						}
					})}

					<form onSubmit={handleAddComment} className={styles.commentForm}>
						<strong>Deixe seu feedback</strong>

						<textarea 
							placeholder='Escreva um comentário...'
							value={newCommentText}
							onChange={newHandleCommentText}
							required
							onInvalid={handleNewCommentInvalid}
						/>

						<footer>
							<button type="submit" disabled={isNewCommentEmpty}>
								Publicar
								</button>
						</footer>
					</form>

					<div className={styles.commentList}>
						{comments.map(comment => {
							return (
								<Comment 
									key={comment} 
									content={comment} 
									onDeleteComment={deleteComment} 
								/>
							)
						})}
					</div>
				</main>
		</article>
	)
}