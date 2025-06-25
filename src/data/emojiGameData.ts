export interface EmojiQuestion {
  question: string
  option: string[]
  answer: string
  explain: string
}

export const emojiGameData: EmojiQuestion[] = [
  {
    question: "🏴‍☠ 👒 🚢",
    option: ["Naruto", "Attack on Titan", "แม่มดน้อย โดเรมี", "One Piece"],
    answer: "One Piece",
    explain: "โจรสลัด + หมวกฟาง + เรือ",
  },
  {
    question: "🥷🏿 𖣘 🦊",
    option: ["Naruto", "Conan", "กล้วยหอมจอมซน", "One Piece"],
    answer: "Naruto",
    explain: "นินจา + กงจักร + จิ้งจอก",
  },
  {
    question: "🕵 👶🏻 💊",
    option: ["Conan", "Ben 10", "เจ้าขุนทอง", "Jujutsu Kaisen"],
    answer: "Conan",
    explain: "นักสืบ + เด็ก + เม็ดยา",
  },
  {
    question: "⚔️ 🎮 🌐",
    option: [
      "Demon Slayer",
      "Spy x Family",
      "My Hero Academia",
      "Sword Art Online",
    ],
    answer: "Sword Art Online",
    explain: "ดาบ + เกม + โลกเสมือนจริง",
  },
  {
    question: "🐉 🔴 🇿",
    option: ["Jujutsu Kaisen", "Dragon Ball", "Demon Slayer", "Chainsaw Man"],
    answer: "Dragon Ball",
    explain: "มังกร + ลูกแก้ว + Z",
  },
  {
    question: "🤜 🕷️ ⭐",
    option: [
      "Sailor Moon",
      "My Hero Academia",
      "Hunter x Hunter",
      "กล้วยหอมจอมซน",
    ],
    answer: "Hunter x Hunter",
    explain: "หมัด + แมงมุม + ดาว",
  },
  {
    question: "🕵 👧 🐶",
    option: ["My Little Pony", "Spy x Family", "Demon Slayer", "Pokémon"],
    answer: "Spy x Family",
    explain: "Spy + เด็ก + หมา",
  },
  {
    question: "🍌 🍌 🛏️",
    option: [
      "กล้วยหอมจอมซน",
      "Demon Slayer",
      "Pri Jack The Ghost",
      "Sailor Moon",
    ],
    answer: "กล้วยหอมจอมซน",
    explain: "กล้วย + กล้วย + เตียงนอน",
  },
  {
    question: "👦🏻 🟥 🟨",
    option: ["ชินคันเซ็น", "ชินบัญชร", "ชินจัง", " ชิน ชินวุฒ"],
    answer: "ชินจัง",
    explain: " เด็ก + แดง + เหลือง",
  },
  {
    question: "🔰 ⚔️ 🪽",
    option: [
      "Attack on Titan",
      "Tokyo Ghoul",
      "Chainsaw Man",
      "Jujutsu Kaisen",
    ],
    answer: "Attack on Titan",
    explain: "มือใหม่ + ดาบไขว้ + ปีก",
  },
]
