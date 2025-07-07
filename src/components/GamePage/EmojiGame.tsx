import { EmojiQuestion } from "../../data/emojiGameData"

interface EmojiGameProps {
  question: EmojiQuestion
  isAnswered: boolean
  selectAnswer: string | null
  onAnswerSelect: (option: string) => void
}

export default function EmojiGame({
  question,
  isAnswered,
  selectAnswer,
  onAnswerSelect,
}: EmojiGameProps) {
  const getButtonVariant = (option: string): string => {
    if (!isAnswered) {
      return "btn-outline-primary"
    }
    if (option === question.answer) {
      return "btn-success"
    }
    if (option === selectAnswer) {
      return "btn-danger"
    }
    return "btn-outline-secondary disabled"
  }

  return (
    <div>
      <div className="text-center mb-4" style={{ fontSize: "50px" }}>
        {question.question}
      </div>

      <div className="d-flex flex-column gap-2">
        {question.option.map((option, index) => (
          <button
            key={index}
            className={`btn text-start p-3 ${getButtonVariant(option)}`}
            onClick={() => onAnswerSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  )
}
