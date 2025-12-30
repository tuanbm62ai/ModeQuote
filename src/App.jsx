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
    'Hạnh phúc đến từ những điều nhỏ bé nhất.',
    'Hôm nay là ngày tốt để bắt đầu một điều gì đó mới.',
    'Niềm vui không phải là thứ bạn tìm thấy, mà là thứ bạn tạo ra.',
    'Hãy sống như thể hôm nay là ngày cuối cùng của bạn.',
    'Mỗi khoảnh khắc đều là cơ hội để bắt đầu lại.',
    'Hạnh phúc là khi bạn biết trân trọng những gì mình có.',
    'Đừng chờ đợi điều kỳ diệu, hãy tạo ra nó.',
    'Vui vẻ là cách tốt nhất để sống.',
    'Hãy để nụ cười của bạn thay đổi thế giới.',
    'Hạnh phúc không phải là điểm đến, mà là hành trình.',
    'Mỗi ngày đều mang đến những điều tốt đẹp mới.',
    'Hãy tìm niềm vui trong những điều đơn giản nhất.',
    'Cuộc sống quá ngắn để không vui vẻ.',
    'Hạnh phúc là khi bạn sống đúng với chính mình.',
    'Hãy lan tỏa niềm vui đến mọi người xung quanh.',
    'Vui vẻ là quyền lợi của bạn, đừng để ai lấy đi.',
  ],
  sad: [
    'Nước mắt rơi xuống để rửa sạch nỗi buồn, không phải để nhấn chìm bạn.',
    'Buồn là một phần của cuộc sống, nhưng không phải là tất cả.',
    'Sau cơn mưa trời lại sáng. Hãy kiên nhẫn.',
    'Nỗi buồn sẽ qua, nhưng những bài học sẽ ở lại.',
    'Buồn không phải là dấu hiệu của yếu đuối, mà là của sự nhạy cảm.',
    'Hãy cho phép bản thân cảm nhận nỗi buồn, rồi bạn sẽ mạnh mẽ hơn.',
    'Nỗi buồn dạy ta biết trân trọng niềm vui.',
    'Mọi thứ rồi sẽ ổn, chỉ cần thời gian.',
    'Buồn là tạm thời, nhưng hy vọng là vĩnh cửu.',
    'Hãy nhớ rằng bạn không đơn độc trong nỗi buồn này.',
    'Nỗi buồn sẽ làm bạn mạnh mẽ hơn khi bạn vượt qua nó.',
    'Đừng sợ nỗi buồn, nó sẽ dạy bạn nhiều điều.',
    'Sau mỗi đêm tối đều có bình minh.',
    'Nỗi buồn là cách trái tim chữa lành chính nó.',
    'Hãy tin rằng ngày mai sẽ tốt đẹp hơn.',
    'Buồn không phải là kết thúc, mà là khởi đầu của sự hiểu biết.',
    'Mỗi nỗi buồn đều mang đến một bài học quý giá.',
    'Hãy để nỗi buồn đi qua, đừng giữ nó lại.',
    'Bạn mạnh mẽ hơn bạn nghĩ, ngay cả khi bạn buồn.',
    'Nỗi buồn sẽ qua, nhưng bạn sẽ ở lại và mạnh mẽ hơn.',
  ],
  stress: [
    'Hít thở sâu. Bạn đã vượt qua khó khăn trước đây, lần này cũng vậy.',
    'Stress chỉ là phản ứng. Bạn có quyền chọn cách phản ứng.',
    'Nghỉ ngơi một chút không phải là lười biếng, mà là thông minh.',
    'Mọi thứ sẽ ổn. Hãy làm từng bước một.',
    'Đừng để stress kiểm soát bạn, hãy kiểm soát stress.',
    'Hãy nhớ rằng bạn không thể kiểm soát mọi thứ, chỉ có thể kiểm soát phản ứng của mình.',
    'Stress là tạm thời, nhưng sức khỏe của bạn là vĩnh cửu.',
    'Hãy làm từng việc một, đừng cố gắng làm tất cả cùng lúc.',
    'Nghỉ ngơi là một phần của công việc, không phải là sự lười biếng.',
    'Bạn đã vượt qua 100% những ngày khó khăn trước đây.',
    'Hãy ưu tiên sức khỏe tinh thần của bạn.',
    'Stress không phải là vấn đề, cách bạn đối mặt với nó mới là vấn đề.',
    'Hãy nhớ rằng bạn không cần phải hoàn hảo.',
    'Mọi thứ rồi sẽ ổn, chỉ cần bạn bình tĩnh.',
    'Hãy cho phép bản thân nghỉ ngơi khi cần thiết.',
    'Stress là dấu hiệu bạn đang sống, nhưng đừng để nó chi phối bạn.',
    'Hãy tập trung vào những gì bạn có thể kiểm soát.',
    'Bạn mạnh mẽ hơn stress của bạn.',
    'Hãy nhớ rằng không có gì là khẩn cấp đến mức bạn phải hy sinh sức khỏe.',
    'Mọi thứ sẽ ổn. Hãy tin vào bản thân và tiếp tục bước đi.',
  ],
  bored: [
    'Chán là dấu hiệu bạn cần thử điều gì đó mới.',
    'Khoảnh khắc chán nhất có thể là lúc bạn sáng tạo nhất.',
    'Hãy tìm một điều nhỏ nhặt để làm ngay bây giờ.',
    'Chán là cơ hội để khám phá bản thân.',
    'Hãy biến sự chán chường thành động lực để thay đổi.',
    'Chán là cách cuộc sống nói với bạn rằng đã đến lúc thử điều gì đó mới.',
    'Đừng để sự chán chường làm bạn mất đi cơ hội khám phá.',
    'Hãy tìm niềm vui trong những điều đơn giản nhất.',
    'Chán là cơ hội để bạn sáng tạo và đổi mới.',
    'Hãy thử một điều gì đó bạn chưa từng làm trước đây.',
    'Sự chán chường có thể là khởi đầu của một cuộc phiêu lưu mới.',
    'Hãy để sự chán chường thúc đẩy bạn tìm kiếm điều mới mẻ.',
    'Chán không phải là vấn đề, mà là cơ hội để phát triển.',
    'Hãy tìm một sở thích mới hoặc học một kỹ năng mới.',
    'Sự chán chường là dấu hiệu bạn cần thay đổi góc nhìn.',
    'Hãy biến khoảnh khắc chán thành khoảnh khắc sáng tạo.',
    'Chán là cách để bạn nhận ra điều gì thực sự quan trọng với bạn.',
    'Hãy thử làm điều gì đó khác biệt, ngay cả khi nhỏ nhặt.',
    'Sự chán chường sẽ qua, nhưng những trải nghiệm mới sẽ ở lại.',
    'Hãy nhớ rằng mỗi khoảnh khắc chán đều có thể là khởi đầu của điều gì đó thú vị.',
  ],
  love: [
    'Yêu đời là cách sống, không phải là cảm xúc.',
    'Mỗi ngày đều có điều gì đó đáng yêu, chỉ cần để ý.',
    'Yêu đời bắt đầu từ việc yêu chính mình.',
    'Cuộc sống đẹp khi bạn biết trân trọng những điều nhỏ bé.',
    'Hãy yêu cuộc sống và cuộc sống sẽ yêu lại bạn.',
    'Yêu đời là cách tốt nhất để sống một cuộc sống ý nghĩa.',
    'Mỗi khoảnh khắc đều đáng yêu nếu bạn biết cách nhìn.',
    'Hãy tìm niềm vui trong mọi điều, dù là nhỏ nhất.',
    'Yêu đời là khi bạn biết trân trọng hiện tại.',
    'Cuộc sống đẹp nhất khi bạn sống với tình yêu.',
    'Hãy để tình yêu cuộc sống dẫn lối cho bạn.',
    'Yêu đời là cách để bạn tìm thấy hạnh phúc thực sự.',
    'Mỗi ngày đều là cơ hội để yêu thêm cuộc sống.',
    'Hãy sống với trái tim rộng mở và yêu thương.',
    'Yêu đời không phải là không có khó khăn, mà là biết cách đối mặt với chúng.',
    'Cuộc sống đẹp khi bạn biết yêu từng khoảnh khắc.',
    'Hãy để tình yêu cuộc sống làm cho bạn mạnh mẽ hơn.',
    'Yêu đời là khi bạn biết tìm thấy vẻ đẹp trong mọi thứ.',
    'Mỗi ngày đều mang đến những lý do để yêu cuộc sống.',
    'Hãy sống với tình yêu và lòng biết ơn, cuộc sống sẽ đẹp hơn.',
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

