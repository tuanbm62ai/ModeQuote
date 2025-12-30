import { useState } from 'react'
import './App.css'

const moods = [
  { id: 'happy', label: '😊 Vui', emoji: '😊' },
  { id: 'sad', label: '😢 Buồn', emoji: '😢' },
  { id: 'stress', label: '😰 Stress', emoji: '😰' },
  { id: 'bored', label: '😑 Chán', emoji: '😑' },
  { id: 'love', label: '❤️ Yêu đời', emoji: '❤️' },
]

const quotes = {
  happy: [
    'Hạnh phúc không phải là đích đến, mà là cách bạn đi.',
    'Mỗi ngày mới là một cơ hội để vui vẻ.',
    'Hãy mỉm cười, cuộc sống sẽ mỉm cười lại với bạn.',
    'Vui vẻ là liều thuốc tốt nhất cho mọi vấn đề.',
  ],
  sad: [
    'Nước mắt rơi xuống để rửa sạch nỗi buồn, không phải để nhấn chìm bạn.',
    'Buồn là một phần của cuộc sống, nhưng không phải là tất cả.',
    'Sau cơn mưa trời lại sáng. Hãy kiên nhẫn.',
    'Nỗi buồn sẽ qua, nhưng những bài học sẽ ở lại.',
  ],
  stress: [
    'Hít thở sâu. Bạn đã vượt qua khó khăn trước đây, lần này cũng vậy.',
    'Stress chỉ là phản ứng. Bạn có quyền chọn cách phản ứng.',
    'Nghỉ ngơi một chút không phải là lười biếng, mà là thông minh.',
    'Mọi thứ sẽ ổn. Hãy làm từng bước một.',
  ],
  bored: [
    'Chán là dấu hiệu bạn cần thử điều gì đó mới.',
    'Khoảnh khắc chán nhất có thể là lúc bạn sáng tạo nhất.',
    'Hãy tìm một điều nhỏ nhặt để làm ngay bây giờ.',
    'Chán là cơ hội để khám phá bản thân.',
  ],
  love: [
    'Yêu đời là cách sống, không phải là cảm xúc.',
    'Mỗi ngày đều có điều gì đó đáng yêu, chỉ cần để ý.',
    'Yêu đời bắt đầu từ việc yêu chính mình.',
    'Cuộc sống đẹp khi bạn biết trân trọng những điều nhỏ bé.',
  ],
}

function App() {
  const [selectedMood, setSelectedMood] = useState(null)
  const [currentQuote, setCurrentQuote] = useState('')

  const handleMoodClick = (moodId) => {
    setSelectedMood(moodId)
    const moodQuotes = quotes[moodId] || []
    const randomQuote = moodQuotes[Math.floor(Math.random() * moodQuotes.length)]
    setCurrentQuote(randomQuote)
  }

  return (
    <div className="app">
      <div className="container">
        <h1>MoodQuote</h1>
        <p className="subtitle">Chọn mood của bạn</p>
        
        <div className="moods">
          {moods.map((mood) => (
            <button
              key={mood.id}
              className={`mood-btn ${selectedMood === mood.id ? 'active' : ''}`}
              onClick={() => handleMoodClick(mood.id)}
            >
              <span className="emoji">{mood.emoji}</span>
              <span>{mood.label}</span>
            </button>
          ))}
        </div>

        {currentQuote && (
          <div className="quote-box">
            <p className="quote">{currentQuote}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

