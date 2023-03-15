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
    question: { text: "承りました！希望時間はありますか？", type: "question" },
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
    question: "承りました！希望の配達方法はありますか？",
  },
  tell: {
    answers: [{ content: "入力する", nextId: "phone_number" }],
    question: "電話番号を入力してください📞",
  },
  method: {
    answers: [
      { content: "内容を確認する", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "下の『内容を確認する』を押して完了です",
  },
  phone_number: {
    answers: [
      { content: "再配達を依頼する", nextId: "contact" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "承りました！下の『再配達を依頼する』を押して完了です",
  },

  consultant: {
    answers: [
      {
        content: "YouTubeで動画を見る",
        nextId: "https://www.youtube.com/channel/UC-bOAxx-YOsviSmqh8COR0w",
      },
      { content: "学習コミュニティについて知りたい", nextId: "community" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "トラハックは普段からYouTubeでキャリアについて発信しています。また、僕が運営するエンジニア向け学習コミュニティ内でも相談に乗っていますよ。",
  },
  community: {
    answers: [
      { content: "どんな活動をしているの？", nextId: "community_activity" },
      {
        content: "コミュニティに参加したい",
        nextId: "https://torahack.web.app/community/",
      },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "2020年3月から学習コミュニティを始めました！🎉Webエンジニアへの転職を目指す人向けに、プログラミングを教えたりキャリアの相談に乗っています。",
  },
  community_activity: {
    answers: [
      {
        content: "さらに詳細を知りたい",
        nextId: "https://youtu.be/tIzE7hUDbBM",
      },
      {
        content: "コミュニティに参加したい",
        nextId: "https://torahack.web.app/community/",
      },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question:
      "フロントエンド向けの教材の提供、キャリアや勉強法に関するメルマガの配信、週1のオンライン作業会などを開催しています！\n詳細はYouTube動画で紹介しています。",
  },
  dating: {
    answers: [
      { content: "DMする", nextId: "https://twitter.com/torahack_" },
      { content: "最初の質問に戻る", nextId: "init" },
    ],
    question: "まずは一緒にランチでもいかがですか？DMしてください😘",
  },
};

export default DEFAULT_DATASET;
