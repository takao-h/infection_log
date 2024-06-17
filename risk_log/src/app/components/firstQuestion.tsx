import React, { useState } from 'react'
import './ProgressForm.css'

const FirstQuestion: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('')

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    // Handle form submission logic here
    console.log('Selected option:', selectedOption)
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ textAlign: 'center', padding: '20px' }}
    >
      {/* <h2>プログレスバーが入る</h2> */}
      <p>本日もお疲れ様でした!</p>
      <p>本日のあなたのことについて教えてください</p>
      <div>
        <label>
          <input
            type="radio"
            value="自宅にいた"
            checked={selectedOption === '自宅にいた'}
            onChange={handleOptionChange}
          />
          自宅にいた
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="外出した"
            checked={selectedOption === '外出した'}
            onChange={handleOptionChange}
          />
          外出した
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="少し外出した"
            checked={selectedOption === '少し外出した'}
            onChange={handleOptionChange}
          />
          少し外出した
        </label>
      </div>
      {/* <div style={{ marginTop: '20px' }}>
        <button
          type="button"
          onClick={() => console.log('Back button clicked')}
          style={{ marginRight: '10px' }}
        >
          もどる
        </button>
        <button type="submit" style={{ marginLeft: '10px' }}>
          すすむ
        </button>
      </div> */}
    </form>
  )
}

export default FirstQuestion
