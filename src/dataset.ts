type Answer = {
  content: string;
  nextId: string;
};

export type AnswerListType = Answer[];

type Question = {
  text: string;
  content: string;
  type?: string;
};

export type ChatsType = (Question | { text: string })[];

const DEFAULT_DATASET = {
  init: {
    answers: [
      { content: "今日中ならいつでも", nextId: "delivery_time" },
      { content: "明日", nextId: "job_offer" },
      { content: "明後日", nextId: "job_offer" },
      { content: "４日後", nextId: "job_offer" },
      { content: "５日後", nextId: "job_offer" },
      { content: "６日後", nextId: "job_offer" },
      { content: "７日後", nextId: "job_offer" },
    ],
    question: {
      text: "配達日を指で触って選んでください！🧸",
      type: "question",
    },
  },

  job_offer: {
    answers: [
      { content: "指定なし", nextId: "delivery_time" },
      { content: "８時〜１２時", nextId: "delivery_time" },
      { content: "１２時〜１４時", nextId: "delivery_time" },
      { content: "１４時〜１６時", nextId: "delivery_time" },
      { content: "１６時〜１８時", nextId: "delivery_time" },
      { content: "１８時〜２０時", nextId: "delivery_time" },
      { content: "１９時〜２１時", nextId: "delivery_time" },
      { content: "２０時〜２１時", nextId: "delivery_time" },
    ],
    question: {
      text: "承りました！希望時間はありますか？",
      type: "question",
    },
  },

  delivery_time: {
    answers: [
      { content: "特になし", nextId: "method" },
      { content: "チャイムならして声掛けしてほしい", nextId: "method" },
      { content: "すぐとるので玄関前に置いといてほしい", nextId: "method" },
      { content: "玄関あけて置いといてほしい", nextId: "method" },
      { content: "到着したら電話してほしい📞", nextId: "method" },
      { content: "すぐ動けないので待ってほしい", nextId: "method" },
    ],
    question: {
      text: "承りました！希望の配達方法はありますか？",
      type: "question",
    },
  },

  method: {
    answers: [
      { content: "内容を確認する", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: {
      text: "下の『内容を確認する』を押して完了です",
      type: "question",
    },
  },
};

export default DEFAULT_DATASET;
