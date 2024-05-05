'use client';
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [question, setQuestion] = useState(1);

  const handleChoice = (choice: number) => {
    setQuestion(choice);
  };

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        {question === 1 && (
          <>
            <p>Question 1: Which color do you prefer?</p>
            <button onClick={() => handleChoice(2)}>Red</button>
            <button onClick={() => handleChoice(3)}>Blue</button>
            <button onClick={() => handleChoice(4)}>Green</button>
          </>
        )}
        {question === 2 && (
          <>
            <p>Question 2: What is your favorite animal?</p>
            <button onClick={() => handleChoice(5)}>Dog</button>
            <button onClick={() => handleChoice(6)}>Cat</button>
            <button onClick={() => handleChoice(7)}>Bird</button>
          </>
        )}
        {question === 3 && (
          <>
            <p>Question 3: Which programming language do you prefer?</p>
            <button onClick={() => handleChoice(8)}>JavaScript</button>
            <button onClick={() => handleChoice(9)}>Python</button>
            <button onClick={() => handleChoice(10)}>Java</button>
          </>
        )}
      </div>
    </main>
  );
}
