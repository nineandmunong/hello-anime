import { useState } from "react"
import EmojiGame from "../../components/GamePage/EmojiGame"
import { emojiGameData } from "../../data/emojiGameData"
import GameResult from "../../components/GamePage/GameResult"

type GameState = "welcome" | "playing" | "finish"

export default function GamePage() {
  const [gameState, setGameState] = useState<GameState>("welcome")
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectAnswer, setSelectAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [isAnswered, setIsAnswered] = useState(false)

  const handleStartGame = () => {
    setGameState("playing")
  }
  const handleRestartGame = () => {
    setGameState("welcome")
    setQuestionIndex(0)
    setScore(0)
    setSelectAnswer(null)
    setIsAnswered(false)
  }

  const handleAnswerSelect = (option: string) => {
    if (isAnswered) return
    setIsAnswered(true)
    setSelectAnswer(option)
    if (emojiGameData[questionIndex].answer === option) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNextQuestion = () => {
    if (questionIndex < emojiGameData.length - 1) {
      setQuestionIndex((prev) => prev + 1)
      setSelectAnswer(null)
      setIsAnswered(false)
    } else {
      setGameState("finish")
    }
  }

  const currentQuestion = emojiGameData[questionIndex]

  const renderContent = () => {
    if (gameState === "finish") {
      return (
        <div className="card-body p-5">
          <GameResult
            score={score}
            totalQuestions={emojiGameData.length}
            onRestart={handleRestartGame}
          />
        </div>
      )
    }

    if (gameState === "playing") {
      return (
        <div>
          <div className="card-header">
            <h2 className="mb-0">
              คำถามที่ {questionIndex + 1} / {emojiGameData.length}
            </h2>
          </div>
          <div className="card-body">
            <EmojiGame
              question={currentQuestion}
              isAnswered={isAnswered}
              selectAnswer={selectAnswer}
              onAnswerSelect={handleAnswerSelect}
            />
            {isAnswered && (
              <div className="mt-4 text-center">
                {selectAnswer !== currentQuestion.answer ? (
                  <div className="alert alert-danger">
                    {currentQuestion.explain && (
                      <div>
                        <strong>{currentQuestion.explain}</strong>
                        <br />
                      </div>
                    )}
                    ตอบผิดนะเฉลยคือ: <strong>{currentQuestion.answer}</strong>
                  </div>
                ) : (
                  <div className="alert alert-success">ถูกต้องนะคร้าบบบ!</div>
                )}
                <button className="btn btn-info" onClick={handleNextQuestion}>
                  {questionIndex < emojiGameData.length - 1
                    ? "ข้อต่อไป"
                    : "ดูผลลัพธ์"}
                </button>
              </div>
            )}
          </div>
          <div className="card-footer text-muted">Score: {score}</div>
        </div>
      )
    }

    return (
      <div className="card-body text-center p-5">
        <h1 className="card-title mb-4">Welcome To Emoji Quiz Game!!</h1>
        <p className="card-text" style={{ fontSize: "18px" }}>
          - ให้ผู้เล่นทายชื่อเรื่อง Anime จาก Emoji
        </p>
        <p className="card-text" style={{ fontSize: "18px" }}>
          - ตอบถูกรับ 1 แต้ม ตอบผิดลุ้น 1 แต้มข้อหน้า
        </p>
        <p className="card-text" style={{ fontSize: "18px" }}>
          - คำถามมี 10 ข้อ ถ้าพร้อมแล้วกดปุ่ม "เริ่มเกม" เลย
        </p>
        <button className="btn btn-primary btn-lg" onClick={handleStartGame}>
          เริ่มเกม
        </button>
      </div>
    )
  }

  return (
    <div className="container my-5" style={{ height: "100vh" }}>
      <div className="card shadow">{renderContent()}</div>
    </div>
  )
}
