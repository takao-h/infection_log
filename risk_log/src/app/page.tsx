'use client'
import styles from './page.module.css'
import ProgressForm from './components/questions'

export default function Home() {
  return (
    <main className={styles.main}>
      <ProgressForm />
    </main>
  )
}
