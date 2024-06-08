'use client'
import styles from './page.module.css'
import { useState } from 'react'
import NextLink from 'next/link'

export default function Home() {
  const [question, setQuestion] = useState<number[]>([1])

  const handleChoice = (choice: number) => {
    setQuestion([choice]) // Pass the choice as an array
    console.log(question)
  }

  const [selectedChoices, setSelectedChoices] = useState<number[]>([])

  // const handleChoice = (choice: number) => {
  //   setSelectedChoices((prevChoices) => {
  //     if (prevChoices.includes(choice)) {
  //       return prevChoices.filter((prevChoice) => prevChoice !== choice)
  //     } else {
  //       return [...prevChoices, choice]
  //     }
  //   })
  // }

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {question[0] === 1 && (
          <>
            <p>本日もお疲れ様でした!</p>
            <button onClick={() => handleChoice(2)}>自宅にいた</button>
            <button onClick={() => handleChoice(3)}>外出した</button>
            <button onClick={() => handleChoice(4)}>
              少し外出した（10分以内）
            </button>
          </>
        )}
        {(question[0] === 2 || question[0] === 4) && (
          <>
            <p>自宅での過ごし方を教えてください</p>
            <input
              type="checkbox"
              name="choice"
              onClick={() => handleChoice(5)}
            />
            <label>手洗いうがいをした</label>
            <input
              type="checkbox"
              name="choice"
              onClick={() => handleChoice(6)}
            />
            <label>自宅に人を招いた</label>
            <input
              type="checkbox"
              name="choice"
              onClick={() => handleChoice(7)}
            />
            <label>同居人が出かけて帰宅した</label>
            <input
              type="checkbox"
              name="choice"
              onClick={() => handleChoice(8)}
            />
            <label>食事前に石鹸で手を洗った/アルコール消毒をした </label>
          </>
        )}
        {question[0] === 3 && (
          <>
            <p>外出したときのことを教えてください</p>
            <input
              type="checkbox"
              name="choice"
              onClick={() => handleChoice(9)}
            />
            <label>手洗いうがいをした</label>
            <input
              type="checkbox"
              name="choice"
              onClick={() => handleChoice(10)}
            />
            <label>自宅に人を招いた</label>
            <input
              type="checkbox"
              name="choice"
              onClick={() => handleChoice(11)}
            />
            <label>同居人が出かけて帰宅した</label>
            <input
              type="checkbox"
              name="choice"
              onClick={() => handleChoice(12)}
            />
            <label>マスクを着用した </label>
            <input
              type="checkbox"
              name="choice"
              onClick={() => handleChoice(13)}
            />
            <label>公共交通機関をりようした</label>{' '}
            <input
              type="checkbox"
              name="choice"
              onClick={() => handleChoice(14)}
            />
            <label>食事をした</label>{' '}
            <input
              type="checkbox"
              name="choice"
              onClick={() => handleChoice(15)}
            />
            <label>周囲に他の人がいた</label>{' '}
            <input
              type="checkbox"
              name="choice"
              onClick={() => handleChoice(16)}
            />
            <label>帰宅後手洗いうがいをした</label>
            <input
              type="checkbox"
              name="choice"
              onClick={() => handleChoice(17)}
            />
          </>
        )}
      </div>
    </main>
  )
}
