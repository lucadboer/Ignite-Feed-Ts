import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import { PostProps } from "./components/Post"

import styles from './App.module.css'
import './global.css'

/*
  author: {avatar-url: "", name: "", role: ""}
  publishedAt: Date
  content: {String}
*/

interface Post extends PostProps {
  id: number
}

const posts: Post[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/lucadboer.png",
      name: "Luca Destefano",
      role: "Front-end Developer",
    },
    content: [
        {type: 'paragraphy', content: 'Fala galeraa 👋'},

				{type: 'paragraphy', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

				{type: 'link', content: 'jane.design/doctorcare'},	
    ],
    publishedAt: new Date("2022-09-21 18:30:00")
  },
  
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO @Rocketseat",
    },
    content: [
        {type: 'paragraphy', content: 'Fala galeraa 👋'},

				{type: 'paragraphy', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},

				{type: 'link', content: 'jane.design/doctorcare'},	
    ],
    publishedAt: new Date("2022-08-21 08:40:00")
  },
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
                <Post
                  key={post.id} 
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              ) 
          })}
        </main>
        
      </div>

    </div>
    
  )
}

