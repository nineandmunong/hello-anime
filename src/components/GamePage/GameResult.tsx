interface GameResultProps {
  score: number
  totalQuestions: number
  onRestart: () => void
}

export default function GameResult({
  score,
  totalQuestions,
  onRestart,
}: GameResultProps) {
  return (
    <div className="text-center">
      <h1 className="card-title">จบเกมแล้ว</h1>
      <p className="fs-3">คะแนนที่ได้ทั้งหมด</p>
      <p className="fw-bold fs-1">
        {score} / {totalQuestions}
      </p>
      <button className="btn btn-primary mt-3" onClick={onRestart}>
        เล่นอีกครั้ง
      </button>
    </div>
  )
}
