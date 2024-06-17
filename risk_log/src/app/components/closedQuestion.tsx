import React, { useState } from 'react'

const SurveyForm: React.FC = () => {
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
      <h2>プログレスバーが入る</h2>
      <p>2m以内の距離で会話をするときにマスクをした。</p>
      <div>
        <label>
          <input
            type="radio"
            value="はい"
            checked={selectedOption === 'はい'}
            onChange={handleOptionChange}
          />
          はい
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="いいえ"
            checked={selectedOption === 'いいえ'}
            onChange={handleOptionChange}
          />
          いいえ
        </label>
      </div>
      <div style={{ marginTop: '20px' }}>
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
      </div>
    </form>
  )
}

export default SurveyForm
