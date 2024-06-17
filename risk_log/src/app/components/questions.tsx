// components/ProgressForm.tsx
import React, { useState } from 'react'

interface FormState {
  publicTransport: boolean
  hadMeal: boolean
  enteredBuilding: boolean
  woreMask: boolean
  aroundOthers: boolean
  washedHands: boolean
}

const ProgressForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    publicTransport: false,
    hadMeal: true,
    enteredBuilding: true,
    woreMask: true,
    aroundOthers: true,
    washedHands: true,
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target
    setFormState((prevState) => ({
      ...prevState,
      [name]: checked,
    }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    console.log('Form submitted:', formState)
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}
    >
      {/* <h2>プログレスバーが入る</h2> */}
      <p>あてはまるものを選択してください。</p>
      <div>
        <label>
          <input
            type="checkbox"
            name="publicTransport"
            checked={formState.publicTransport}
            onChange={handleChange}
          />
          公共交通機関を使用した
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="hadMeal"
            checked={formState.hadMeal}
            onChange={handleChange}
          />
          食事をした
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="enteredBuilding"
            checked={formState.enteredBuilding}
            onChange={handleChange}
          />
          屋内に入った
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="woreMask"
            checked={formState.woreMask}
            onChange={handleChange}
          />
          マスクを着用した
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="aroundOthers"
            checked={formState.aroundOthers}
            onChange={handleChange}
          />
          周囲に自分以外の人がいた
        </label>
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="washedHands"
            checked={formState.washedHands}
            onChange={handleChange}
          />
          帰宅後に手洗いうがいをした
        </label>
      </div>
      <button
        type="submit"
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          backgroundColor: '#FF6F61',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        次へ
      </button>
    </form>
  )
}

export default ProgressForm
