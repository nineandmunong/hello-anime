import { useState } from "react"
import { emojiGameData } from "../../data/emojiGameData"
import EmojiGame from "../../components/GamePage/EmojiGame"
import GameResult from "../../components/GamePage/GameResult"
import gameBackground from "../../img/arcade_game.jpg"

export default function GamePage() {
  const [gameState, setGameState] = useState("welcome")
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
          <div
            className="card-header"
            style={{
              background: " linear-gradient(to left, #00c3ff, #ffff1c)",
            }}
          >
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
                    ตอบผิดนะ: <strong>{currentQuestion.explain}</strong>
                    <br />
                    เฉลยคือเรื่อง: <strong>{currentQuestion.answer}</strong>
                  </div>
                ) : (
                  <div className="alert alert-success">ถูกต้องนะคร้าบบบ!</div>
                )}
                <button className="btn btn-info" onClick={handleNextQuestion}>
                  {questionIndex < emojiGameData.length - 1
                    ? "ข้อต่อไป"
                    : "สรุปคะแนน"}
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
        <h1 className="mb-4">Welcome To Emoji Quiz Game!!</h1>
        <p style={{ fontSize: "18px" }}>
          - ให้ผู้เล่นทายชื่อเรื่อง Anime จาก Emoji
        </p>
        <p style={{ fontSize: "18px" }}>
          - ตอบถูกรับ 1 แต้ม ตอบผิดลุ้น 1 แต้มข้อหน้า
        </p>
        <p style={{ fontSize: "18px" }}>
          - คำถามมี 10 ข้อ ถ้าพร้อมแล้วกดปุ่ม "เริ่มเกม" เลย
        </p>
        <button className="btn btn-primary btn-lg" onClick={handleStartGame}>
          เริ่มเกม
        </button>
      </div>
    )
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: `url(${gameBackground})`,
        backgroundSize: "cover",
      }}
    >
      <div className="card shadow w-75">{renderContent()}</div>
    </div>
  )
}
