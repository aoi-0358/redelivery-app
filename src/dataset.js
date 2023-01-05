const defaultDataset = {
  "init": {
      answers: [
          {content: "今日中ならいつでも", nextId: "job_offer"},
          {content: "８時〜１２時", nextId: "job_offer"},
          {content: "１２時〜１４時", nextId: "job_offer"},
          {content: "１４時〜１６時", nextId: "job_offer"},
          {content: "１６時〜１８時", nextId: "job_offer"},
          {content: "１８時〜２０時", nextId: "job_offer"},
          {content: "２０時〜２１時", nextId: "job_offer"},
      ],
      question: "配達希望時間を指で触って選んでください！🧸",
  },
  "job_offer": {
      answers: [
          {content: "チャイムならして大きな声で声掛けして", nextId: "delivery method"},
          {content: "すぐとるので玄関前に置いといてほしい", nextId: "delivery method"},
          {content: "玄関あけて置いといてほしい", nextId: "delivery method"},
          {content: "到着したら電話してほしい📞", nextId: "tel"},
          {content: "すぐ動けないので待ってほしい", nextId: "delivery method"},
          {content: "特にありません", nextId: "delivery method"}
      ],
      question: "承りました！希望の配達方法はありますか？",
  },
  "delivery method": {
      answers: [
          {content: "再配達を依頼する", nextId: "contact"},
         ],
      question: "承りました！下の『再配達を依頼する』を押して完了です",
  },
  "tel": {
      answers: [
          {content: "入力する", nextId: "phone number"},
      ],
      question: "電話番号を入力してください📞",
  },
  //"automation_tool": {
  //  answers: [
  //        {content: "問い合わせる", nextId: "contact"},
  //         {content: "最初の質問に戻る", nextId: "init"}
  //     ],
  //    question: "自動化ツール開発についてですね。コチラからお問い合わせできます。",
  //  },
  "phone number": {
      answers: [
          {content: "再配達を依頼する", nextId: "contact"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "承りました！下の『再配達を依頼する』を押して完了です",
  },
  "consultant": {
      answers: [
          {content: "YouTubeで動画を見る", nextId: "https://www.youtube.com/channel/UC-bOAxx-YOsviSmqh8COR0w"},
          {content: "学習コミュニティについて知りたい", nextId: "community"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "トラハックは普段からYouTubeでキャリアについて発信しています。また、僕が運営するエンジニア向け学習コミュニティ内でも相談に乗っていますよ。",
  },
  "community": {
      answers: [
          {content: "どんな活動をしているの？", nextId: "community_activity"},
          {content: "コミュニティに参加したい", nextId: "https://torahack.web.app/community/"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "2020年3月から学習コミュニティを始めました！🎉Webエンジニアへの転職を目指す人向けに、プログラミングを教えたりキャリアの相談に乗っています。",
  },
  "community_activity": {
      answers: [
          {content: "さらに詳細を知りたい", nextId: "https://youtu.be/tIzE7hUDbBM"},
          {content: "コミュニティに参加したい", nextId: "https://torahack.web.app/community/"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "フロントエンド向けの教材の提供、キャリアや勉強法に関するメルマガの配信、週1のオンライン作業会などを開催しています！\n詳細はYouTube動画で紹介しています。",
  },
  "dating": {
      answers: [
          {content: "DMする", nextId: "https://twitter.com/torahack_"},
          {content: "最初の質問に戻る", nextId: "init"}
      ],
      question: "まずは一緒にランチでもいかがですか？DMしてください😘",
  },
}

export default defaultDataset