'use client'
import styles from './page.module.css'
import ProgressForm from './components/questions'
import FirstQuestion from './components/firstQuestion'
import { useState } from 'react'

export default function Home() {
  const [question, setQuestion] = useState<number[]>([1])
  const NextAndBackButton = (setQuestion: any) => (
    <div style={{ marginTop: '20px' }}>
      <button
        type="button"
        onClick={() => console.log('Back button clicked')}
        style={{ marginRight: '10px' }}
      >
        もどる
      </button>
      <button
        type="submit"
        style={{ marginLeft: '10px' }}
        onClick={() => setQuestion([question[0] + 1])}
      >
        すすむ
      </button>
    </div>
  )

  return (
    <main className={styles.main}>
      {question.includes(1) && (
        <div>
          <FirstQuestion />
          <NextAndBackButton />
        </div>
      )}
      {question.includes(2) && (
        <div>
          <ProgressForm />
        </div>
      )}
    </main>
  )
}
