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
    id: "006",
    category: "日記",
    title: 'もらったカギで開ける',
    writer: "小林玲衣奈",
    date: "2026-04-20",
    tag: ["連載", "日記"],
    samune: "../blog_img/opening-with-a-given-key/thumbnail.webp",
    imageExtraSpace: "600",
    images: [
        { src: "../blog_img/opening-with-a-given-key/thumbnail.webp", caption: "　", id: 1 },
        { src: "../blog_img/opening-with-a-given-key/owgk1/blo6_1.webp", caption: "間違えてシャッターを押した", id: 2 },
        { src: "../blog_img/opening-with-a-given-key/owgk1/blog6_2.webp", caption: "よく晴れてたのでランチの待ちの間に散歩", id: 3 },
        { src: "../blog_img/opening-with-a-given-key/owgk1/blog6_3.webp", caption: "絵に描いたような間一髪", id: 4 },
        { src: "../blog_img/opening-with-a-given-key/owgk1/blog6_4.webp", caption: "プラスチックの代用としてのテープ", id: 5 },
        { src: "../blog_img/opening-with-a-given-key/koba_prof.webp", caption: "プロフィール写真", id: 6 },
    ],
    textBlocks: [
        {type: "img-button", label: "サムネイル", targetId: "1"},
        {type: "skipbutton", id: "1", label: "塩梅とそれから", mobile_label: "1"},
        {type: "h1", text: `塩梅とそれから`},
        {type: "p", text: `月ごとにニセテクスチャのメンバーが日記を書いていく。他のメンバーが日記についてどう思っているのかも、どんな感じで進めるのかも分からないが、今月は自分が担当である。`},
        {type: "p", text: `「もらったカギで開ける」は元々、飲み会後の散歩の最中に行ったゲームに由来している。気になる方は「立春！飲み会の記録」も読んでみて欲しい。`},
        {type: "p", text: `シルエットが可愛らしいサムネイルは新さんによるデザイン。新さんからの提案を見る時、いつも「わ！」となって、なんとも形容するのがむずかしいが多幸感に満たされる。`, class: ["large-space-2"]},
        {type: "p", text: `あまり日記を書かない。どのように書き進めれば良いのか、何を書けば良いのかすごく悩んでいる。ひとまず毎月、その月にあったことをまとめてみているが、どうも続けるのが難しいし、書き始めたらそれはそれでどこまでも続いてしまってまとまらない。`},
        {type: "p", text: `日記というシステムが自分にあっていないのかもと思いつつ、頑張って書いてみよう。記事ごとでも違った書き方に挑戦してみてもいいかもしれない。`, class: ["large-space-1"]},
        {type: "p", text: `「もらったカギで開ける」という言葉がゲーム中に出てきた時には、もう少しドラマチックなシーンを想像していて、家主がいない状況、おそらく一人の時に、渡された鍵を使って部屋にあがって、なんともドキドキしながら「おじゃましま〜す」とか言ってみちゃうかもしれない情景を思い描いてみていたが、単語だけ切り取ると泥棒のイメージが強くなってしまっていて、なんともマヌケな言葉となった。これから日記に書かれていくことも、私のその日起こったことが書き言葉によってぼろぼろと削られて、その部分だけ強調されたなんともマヌケなものかもしれない…`, class: ["large-space-2"]},
        {type: "p", text: `3月は友達と遠出することが多くて、このあいだ3泊4日で那覇に行った。3月なのに半袖でも良いぐらいに暖かくてじめじめしていた。`},
        {type: "p", text: `旅行で撮った写真を見返してみたけど、どれも絶妙にピントがあってない。（あわせて撮ろうという強い気もなく。）けれども、普段、周りにはない光の明るさは映っていたので、こんな感じでもいいのかもしれない。`, class: ["large-space-2"]},
        {type: "img-button", label: "間違えてシャッターを押した", targetId: "2"},
        {type: "p", text: ``},
        {type: "img-button", label: "よく晴れてたのでランチの待ちの間に散歩", targetId: "3"},
        {type: "p", text: `那覇では主に車で移動をした。友達がレンタカーの予約をしてくれていたので、空港で合流後にレンタカー屋に連絡をして迎えにきてもらった。「白いハイエースで迎えにいきます」って電話で聞いたらしいが、迎えにきたのは銀色のセレナだった。どの部分も合ってない。`, class: ["large-space-1"]},
        {type: "p", text: `レンタカー屋の兄ちゃんは私たちがこの旅行で2回以上会った数少ない人だ。客に媚びないタイプの接客で、淡々と仕事をする。裏路地を走って、その場所を知っている手つきで運転する。運転者の免許証のコピーはスマホで写真を撮るだけだった。この免許証提示の仕方は初めて見た。`},
        {type: "p", text: `車を返却しに行った時なんかは、送迎用のセレナで甲子園を爆音で流しながら他のレンタカーの洗車をしてた。甲子園はつけっぱなしのまま、私たちを空港に送り返してくれて、降り際には「お気をつけて」って言ってくれた。`, class: ["large-space-1"]},
        {type: "p", text: `借りた車は絶妙に古めの軽で、綺麗にはされているが細かい傷が多かった。兄ちゃんも「小石ぐらいならいいんで」みたいなこと言っていた気がする。`},
        {type: "p", text: `バックモニターもセンサーもないので、駐車の際には、誤って後ろに突っ込みすぎて小石ぐらいじゃ済まないかもしれない瞬間があった。`, class: ["large-space-1"]},
        {type: "img-button", label: "絵に描いたような間一髪", targetId: "4"},
        {type: "p", text: `車は鍵を差し込んでエンジンをかけるタイプで、キーはビニールテープでぐるぐるまきにしてあった。中古車の中古具合を全然隠さない。とりあえずガソリンを使った移動という機能が使えればそれでいいとみんな思っている。`, class: ["large-space-2"]},
        {type: "img-button", label: "プラスチックの代用としてのテープ", targetId: "5"},
        {type: "p", text: `ドライブが好きなので、色々な場所で運転をする。なんとなく地域ごとの特徴みたいなものを感じる。運転という行為を通して、地域を感じ分けるのがおもしろい。`},
        {type: "p", text: `沖縄はやっぱりバイクが荒い。中央線の上を走っていくので、抜かれた時に本当にびっくりするし、「ちょっと私が車線変更しようと思ったらどうするつもりなのか」とキレる。`, class: ["large-space-1"]},
        {type: "p", text: `あと、右折の矢印の点灯時間が長い気がした。焦らず運転できてありがたい。右折の矢印が出るとついつい焦って前の車に「いけいけいけいけ」とか言ってしまう。`},
        {type: "p", text: `基地関連の施設が多いせいか、市内の主要な道路とそこからの右折が混む。市内を北に向かおうと走っている時の運転のしづらさがあった。琵琶湖の近くを走っているのとはまたちょっと違う違和感。`},
        {type: "p", text: `南に戻る時は、海沿いの新しそうな道をまっすぐ走った。`, class: ["large-space-2"]},
        {type: "divider"},
        {type: "skipbutton", id: "2", label: "筆者プロフィール", mobile_label: "2"},
        {type: "h1", text: `筆者プロフィール`},
        {type: "img-button", label: "プロフィール写真", targetId: "6"},
        {type: "p", text: `小林玲衣奈`},

        { type: "a", text: `webサイト`, link: "https://kobayashireina.com", class: ["link-list"] },
        {type: "p", text: `ニセテクスチャメンバー`},
        {type: "p", text: `日記を続けられた覚えがなく日記に対して憧れはあるが苦手意識がある。4月からは会計の仕事をしている。`, class: ["large-space-1"]},
        { type: "divider" },
        { type: "p", text: `本記事、本サイトについてのお問い合わせは以下にお願いします。` },
        { type: "p", text: `nise.texture[a]gmail.com` },
        { type: "p", text: `*[a]は@に変更してください。`, class: ["footnote", "large-space-1"] },
    ],

    postHyperlinks: [
        { word: "新", href: "https://arata-new.jp/" },
        { word: "立春！飲み会の記録", href: "https://nisetexture.com/blog/#003" },
        { word: "新しそうな道", href: "https://www.dc.ogb.go.jp/nahakou/kihon/rinkoudouro.html" },
        { word: "おじゃましま〜す", href: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1344329078" },
        { word: "白いハイエース", href: "https://www.google.com/search?sca_esv=1706ac29faa211ec&rlz=1C5OZZY_enJP1128JP1160&sxsrf=ANbL-n64p9CpsNIWpe5drTjDUzfWXLYa9A:1776443924751&udm=2&fbs=ADc_l-ZhZwqRfIRNTFz1njGTSUZt_WHSGYjcjLhdJT2TZdYW6yflDhv1zgC3cJSwvVJ-xSgN_2_ioiGrSspnYUHPIls7z8YFV6N8Hy_KWQOGku5NETLXZ1QyhoE9h57L6NBVYFG8bqa7iN9zQz0mJ31M7zbXwVxdg0F0UTMqpDM-rrSVRx9UsqtCPPzIjjIBYisxmo8NEFJtLtX4OmHug4ud_FoCCnJHHC2bZjTm-1E12OKlACZAdww&q=%E3%83%8F%E3%82%A4%E3%82%A8%E3%83%BC%E3%82%B9%E3%80%80%E7%99%BD&sa=X&ved=2ahUKEwiPnOSoqfWTAxW8gK8BHWPADgYQtKgLegQIHhAB&biw=1311&bih=933&dpr=2" },
        { word: "銀色のセレナ", href: "https://www.google.com/search?q=%E3%82%BB%E3%83%AC%E3%83%8A%E3%80%80%E9%8A%80&sca_esv=1706ac29faa211ec&rlz=1C5OZZY_enJP1128JP1160&udm=2&biw=1311&bih=933&sxsrf=ANbL-n7Foi5XUqUpbXqG9mzQCXCy9IpNHg%3A1776443978201&ei=SmLiafT6C5HmosUP6Nyh4Aw&ved=0ahUKEwj0x6LCqfWTAxURs6gCHWhuCMwQ4dUDCBI&uact=5&oq=%E3%82%BB%E3%83%AC%E3%83%8A%E3%80%80%E9%8A%80&gs_lp=Egtnd3Mtd2l6LWltZyIP44K744Os44OK44CA6YqAMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIEEAAYHjIEEAAYHjIGEAAYBRgeMgYQABgFGB4yBhAAGAgYHjIGEAAYCBgeSJEbUDJY9QlwAXgAkAEAmAGBAaAB7QOqAQM0LjG4AQPIAQD4AQGYAgSgApMCwgIGEAAYBxgewgIIEAAYgAQYsQPCAgsQABiABBixAxiDAcICBxAAGIAEGASYAwCIBgGSBwE0oAfMDrIHATO4B5ECwgcFMC4zLjHIBweACAE&sclient=gws-wiz-img" },

    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: ["basic","owgk_kobalinks"],
  };
