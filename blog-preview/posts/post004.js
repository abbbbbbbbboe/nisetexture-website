// blogcontents.js
//テキストレギュレーション
//テキストテンプレ　
// { type: "p", text: "これは最初の段落です。" class:""},
//class: ["large-space-1"]一段開ける　class: "large-space-2"二段開ける
//イメージテンプレ
//{ src: "https://youtu.be/ciqWFm4FjbQ?si=rLsYED3PpLmLdTTU", caption: "写真2", id: 2 },
//src:リンク(外部リンクOR相対リンク)| caption:写真の下に表示されるテキスト| id:ボタンと関連つけるための数字
//ボタンテンプレ  
// { "type": "button", "targetId": 5, "label": "写真3" }, 
// ここにPC版はイメージエリアの写真をスクロールするためのボタンが入る。モバイル版はここに写真が入る
//targetId:表示させるimagesのid | label:ボタンに表示するテキスト。書かなければimegesのcaptionが入る


//ハイパーリンク
//globalHyperlinks:は汎用的に使える。各post内のhyperlinkGroups:にセット名 ["basic"],を書くと反映される。他にもセットを作れば切り替え可能、複数割り当ても可能
//各ポスト内のpostHyperlinks:にリンクを設定するとこのポスト内でのみリンクが反映される。




export default
  {
    id: "004",
    category: "テスト",
    title: 'テスト_タイトル',
    writer: "小林",
    date: "2026-03-28",
    tag: ["練習"],
    samune: "../blog_img/004_test/post004_test-samune.JPEG",
    imageExtraSpace: "600",
    images: [

    ],
    textBlocks: [
      {type: "skipbutton", text: `本文中のテキスト_練習1`, id: "0", label: "リストのボタン", mobile_label: "1"},
      {type: "p", text: `2月は考え事が多いような月だったように思う。`},
      {type: "p", text: `1月にTwitter（現X）のアプリを消したのだけど、たまにwebブラウザで確認してしまう。その度にいろんなニュースを見て安直に沈んだ気持ちになるのをやめたい。それって結論を速く出そう出そうとしちゃう感覚に依存してることだと思うから。`, class: ["indent-1"]},
      {type: "p", text: `ちゃんとそこから調べて自分の理解で考えること。当たり前のことだけど。そのためにゆっくりでいることを許せる自分でいたい。`, class: ["indent-1"]},
      {type: "p", text: `分からないままでいることは体力がいる。疲れる。調べ続けたりするのはもはや筋トレと変わらない。`, class: ["large-space-2"]},
      {type: "divider"},
      {type: "skipbutton", text: `本文中のテキスト_練習2`, id: "1", label: "リストのボタン", mobile_label: "2"},
    ],

    postHyperlinks: [
      { word: "練習", href: "https://kotobank.jp/word/%E7%B7%B4%E7%BF%92-152131" },
     
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: ["basic"],
  };
