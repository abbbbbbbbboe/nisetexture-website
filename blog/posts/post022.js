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
    id: "022",
    category: "日記",
    title: 'もらったカギで開ける',
    writer: "小林玲衣奈",
    date: "2026-08-17",
    tag: ["連載", "日記"],
    samune: "../blog_img/opening-with-a-given-key/thumbnail.webp",
    imageExtraSpace: "600",
    images: [
        { src: "../blog_img/opening-with-a-given-key/thumbnail.webp", caption: "　", id: 1 },
        { src: "../blog_img/opening-with-a-given-key/owkg5/blog22_1.webp", caption: "今のベランダ", id: 2 },
        { src: "../blog_img/opening-with-a-given-key/koba_prof.webp", caption: "プロフィール写真", id: 3 },
    ],
    textBlocks: [
        {type: "img-button", label: "サムネイル", targetId: "1"},
        {type: "skipbutton", id: "1", label: "持ちながら持たれながら", mobile_label: "1"},
        {type: "h1", text: `持ちながら持たれながら`},
        {type: "p", text: `いっせーので、一度に全員が夜型になった方がいいのにと思うぐらい暑すぎる。18:30ごろから出かけるとちょうどいい。`},
        {type: "p", text: `脳みそがなんだかぼーっとしてしまって、いまだに気持ちは6月のままだ。この調子で行くと気持ちがやっと夏を過ぎた頃には良いお年をと言っているような気がして恐ろしい。`},
        {type: "p", text: `長袖のシャツで出勤している。自分のデスクについてからもしばらくは体の熱がなかなか逃げていかない。敬遠していたハンディファンをとうとう買った。暑い場所で暑い空気を顔に当ててどうするんだと思って避けていたのだが、想像していたよりも便利で顔に風があたれば涼しく感じる。こういうのは馬鹿にならないなとか思いながらこうやって年をとっていくのかも知れない。`, class: ["large-space-2"]},
        {type: "p", text: `友達のために買ったお土産の賞味期限が切れていることに気づいた。自分に買うのを忘れていたので、キッチンで見かけるたびに美味しそうだなとか思っていたけれど、それだったらもっと早く食べればよかった。そう思いながら結局ひとつは自分で食べて、もうひとつは泣く泣く捨ててしまった。`, class: ["large-space-1"]},
        {type: "p", text: `元々お土産にあまり興味のない性分で、一人でふらふら遠くに出かける時でも手ぶらで帰ってきてしまうことも多く、帰りの電車に乗っている時に思い出して、しまったなあ、買った方が良かったのかなあとうじうじ考える。`, class: ["large-space-1"]},
        {type: "p", text: `仲の良い友達がいつもまめにお土産をくれて、不意に色々もらうとなんだか嬉しい。最初は私もちゃんとお土産を返さなきゃなと思って始めた習慣だけど、今では出かけたらなるべく買えるようになったし、選ぶ時間も楽しい。`},
        {type: "p", text: `お土産を通して自分の目ききをみられているような気がして、つまらないものをあげたくないし、なるべくその人にあったものをあげたいなという気持ちがある。でも、真剣に選び出すと難しい。なるべくその場所の特産品のようなものがいいなとか、次に相手に会うスケジュールを確認してどれだけ日持ちするかとか、苦手な食べ物だったかなとか。あげた後にあれはちょっと失敗だったかも知れないなと反省する時もある。`},
        {type: "p", text: `自分が買いたいものと相手に合うものは違うこともある。`},
        {type: "p", text: `あと、相手に会う時に持っていくのを忘れないというのも大事なポイントだ。日が持つものならいいが、そうでないものは大抵仕方なしに自分で食べてしまう。`},
        {type: "p", text: `何をあげたかとか特段記録しているとかではないが、最初の頃よりも断然にお土産選びが上手になっていると思う。何を持って上手さを測るのかは全然わからないが。`, class: ["large-space-2"]},
        {type: "p", text: `職場から小ぶりなポットの花をもらってきた。赤、黄色、オレンジと選べたが、一番部屋の中で見当たらなさそうなビビッドなピンク色のを持ち帰った。他の植物と一緒に室内に入れていたが、どうやら合わなかったようで、今はひとりだけ室外機の上で過ごしてもらっている。日当たりが悪いわけではないが、直射日光が入りにくいからか、小さい花が全部ベランダの外側方向に傾いてしまった。ベランダで過ごせるようになるぐらい涼しくなってもまだ花が開いていたらいいなと思う。`},
        {type: "img-button", label: "今のベランダ", targetId: "2", class: ["large-space-2"]},
        {type: "h1", text: `バックナンバー`},
        {type: "a", text: `もらったカギで開ける　2026-07-20`, class: ["link-list"], link: "../blog/#019"},
        {type: "a", text: `もらったカギで開ける　2026-06-22`, class: ["link-list"], link: "../blog/#015"},
        {type: "a", text: `もらったカギで開ける　2026-05-18`, class: ["link-list"], link: "../blog/#010"},
        {type: "a", text: `もらったカギで開ける　2026-04-20`, class: ["link-list"], link: "../blog/#006"},
        {type: "divider"},
        {type: "skipbutton", id: "2", label: "筆者プロフィール", mobile_label: "2"},
        {type: "h1", text: `筆者プロフィール`},
        {type: "img-button", label: "プロフィール写真", targetId: "3"},
        {type: "p", text: `小林玲衣奈`},
        {type: "p", text: `ニセテクスチャメンバー`},
        {type: "p", text: `先日髪を短くした。かれこれ5、6年同じ美容院に通っている。`, class: ["large-space-1"]},
        {type: "p", text: `banner design: 新`, class: ["footnote","large-space-1"]},
        {type: "divider"},
        {type: "p", text: `本記事、本サイトについてのお問い合わせは以下にお願いします。`},
        {type: "p", text: `nise.texture[a]gmail.com`},
        {type: "p", text: `*[a]は@に変更してください。`, class: ["footnote","large-space-1"]},
    ],

    postHyperlinks: [
    
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: ["basic","owgk"],
  };
