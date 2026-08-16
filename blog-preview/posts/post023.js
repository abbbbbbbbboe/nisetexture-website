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
    id: "023",
    category: "日記",
    title: 'こぼれちゃうよ',
    writer: "新",
    date: "2026-08-24",
    tag: ["連載", "日記"],
    samune: "../blog_img/spillover/thumbnail.webp",
    imageExtraSpace: "600",
    images: [
        { src: "../blog_img/spillover/thumbnail.webp", caption: "　", id: 1 },
        { src: "../blog_img/spillover/arata_profile.webp", caption: "プロフィール写真", id: 2 },
    ],
    textBlocks: [
        {type: "img-button", label: "サムネイル", targetId: "1"},
        {type: "skipbutton", id: "1", label: "ルール", mobile_label: "1"},
        {type: "h1", text: `ルール`},
        {type: "p", text: `・過去の記録から二日だけ選択し、並置する`, class: ["indent-1"]},
        {type: "p", text: `・タイトルの表記は「日時と天気」のみとする`, class: ["large-space-1","indent-1"]},
        {type: "divider"},
        {type: "skipbutton", id: "2", label: "7月23日 木曜日", mobile_label: "2"},
        {type: "h1", text: `7月23日 木曜日 晴れ`, class: ["large-space-1"]},
        {type: "p", text: `できるだけ木陰に身を潜めながら、都内の撮影スタジオに向かっている。数年前に買った晴雨兼用の日傘を差しているけど、もう紫外線をカットしている気がしない。真っ黒な傘なのに、見上げると普通に太陽が透けて見える。おはようございます。今回は子どもたちが主役の現場だった。撮影は順調、とは決して言えず、キャスター付きの椅子に跨ってスタジオを駆け回ったと思うと、疲れちゃったのか部屋の隅に座り込んだり、カーテンの裏に隠れたり、大の字で寝転がったりする。その自由気ままさがなんだか嬉しくて、でもこのままだと仕事が進まないから少し休憩しよっかと声をかけ、一緒にお菓子を食べて、また撮影に戻る。大人だけの撮影とは全く違う時間が流れていた。`},
        {type: "p", text: `13時くらいに私の担当分が終了。ケータリングのお弁当を食べて、先輩と一緒に一足先にスタジオを出る。オフィスに戻る前に近所のコンビニでアイスを買おうか先輩と悩んだけど、からだがとにかくクイックな糖分を求めている気がしたのでコーラにした。先輩はちゃんとアイスを買っていた。`},
        {type: "p", text: `なんだか最近忙しい。案件の締切が複数重なると、定時に上がるのはほぼ不可能。アートボードの座標を整数にするとか、レイヤーを綺麗に整理するとか、そういうことを気にしていたはずなのに、最近のデータは結構はちゃめちゃだ。血糖値をブーストしたこの肉体で、とにかく目の前に迫ってくるボールを打ち返す。22時くらいになるとオフィスが少しずつ消灯する。さすがにそろそろ帰ってねと促しているわけだけど、もう何度か消灯後も、一部のフロアだけ電気をつけて仕事をしている。これって私の作業効率が悪いからなのだろうか、と不安になる。でももう少し良くできる気がすると思って手を動かしていると、もうこんな時間なのか（涙）、と困惑する。毎日が一瞬で過ぎていく。それは仕事が楽しい証拠でもあるのだが。でも正直なところ、週3勤務で週4休み、年に3ヶ月夏休みが欲しい。`},
        {type: "p", text: `「今年のお盆は休みますか？」`},
        {type: "p", text: `隣のデスクに座っている先輩に聞くと、「うーん、どうかなあ」とむずかしそうな表情。今日は朝から撮影もあったし少し早めに上がりますね、と言いながらデータを保存する。すでに定時は過ぎているけど。`, class: ["large-space-2"]},
        {type: "skipbutton", id: "3", label: "10月15日 木曜日", mobile_label: "3"},
        {type: "h1", text: `10月15日 水曜日 雨`, class: ["large-space-1"]},
        {type: "p", text: `仕事終わり、雨が降るなか傘も差さずに歩いている。小雨なら傘は差さない。幼い頃からのポリシー。この程度で風邪をひくほどやわじゃないと信じている。とりあえずファミマに入って、長方形に折り畳まれたコンパクトなチョコバナナクレープを買う。再開発中の渋谷駅を通り過ぎ、少し離れたところにあるバス停までとぼとぼ歩く。その間、雨の水気をたぶん含んでいるであろうクレープを平然と食べながら歩く奇妙な人間が誕生するわけで、私は意外と適当に生活していると気づく。クレープは左の奥歯だけで食べたい。口腔右側の、特に上の歯に冷たいものが当たると緊張感が走る。これは絶対に知覚過敏であって、決して虫歯ではないと信じたい。`},
        {type: "p", text: `最近は夜遅くまで仕事をしている。在宅の日は深夜の2時くらいまで作業していたりする。明日は定時で上がるぞという意思のもと、奥山由之が監督した『秒速5センチメートル』のチケットをバスの中で予約した。`},
        {type: "p", text: `お風呂上がりに窓を開けると、まだ雨が降っていた。ひんやりとした空気が網戸をすり抜けて肌を引っ掻く。これが多分秋。季節の変わり目になると必ずベッドシーツを交換する。洗いざらしのコットンから、白くて柔らかいガーゼに変えているとねこが邪魔をしてくる。`},
        {type: "p", text: `「ひとの顔を舐めない。」`},
        {type: "p", text: `ねこと一緒に寝るとき、いつもかける言葉。`, class: ["large-space-2"]},
        {type: "h2", text: `バックナンバー`},
        {type: "a", text: `こぼれちゃうよ (2026-04-13)`, class: ["link-list"], link: "../blog/#005"},
        {type: "a", text: `こぼれちゃうよ (2026-05-11)`, class: ["link-list"], link: "../blog/#009"},
        {type: "a", text: `こぼれちゃうよ (2026-06-15)`, class: ["link-list"], link: "../blog/#014"},
        {type: "a", text: `こぼれちゃうよ (2026-07-13)`, class: ["link-list","large-space-1"], link: "../blog/#018"},
        {type: "divider"},
        {type: "skipbutton", id: "4", label: "筆者プロフィール", mobile_label: "4"},
        {type: "h1", text: `筆者プロフィール`},
        {type: "img-button", label: "プロフィール写真", targetId: "2"},
        {type: "p", text: `新`},
        {type: "a", text: `webサイト`, class: ["link-list"], link: "https://arata-new.jp/"},
        {type: "p", text: `グラフィックデザイナー`},
        {type: "p", text: `1998年岩手県生まれ。武蔵野美術大学造形学部基礎デザイン学科卒業。岡本健デザイン事務所を経て、現在はロゴデザイン、ブランディング、美術やファッション領域のグラフィックデザインワークを主に行う。パピコが好き。`, class: ["large-space-1"]},
        {type: "p", text: `banner design: 新`, class: ["footnote","large-space-1"]},
        {type: "divider"},
        {type: "p", text: `本記事、本サイトについてのお問い合わせは以下にお願いします。`},
        {type: "p", text: `nise.texture[a]gmail.com`},
        {type: "p", text: `*[a]は@に変更してください。`, class: ["footnote","large-space-1"]},
    ],

    postHyperlinks: [
    { word: "（涙）", href: "https://narupopo.com/post-6203" },
    { word: "週3勤務で週4休み、年に3ヶ月夏休み", href: "https://youtu.be/urIjglVrOpk?si=yICpmESTDSaGFs8i" },
    { word: "チョコバナナクレープ", href: "https://news.yahoo.co.jp/expert/articles/0196c4ec847f2d099af77d2435aa2b7033abe0ae" },
    { word: "再開発中の渋谷駅", href: "https://biz.shibuyabunka.com/watch/54/" },
    { word: "誕生", href: "https://youtu.be/0-ShpILIW3k?si=yTIj-ud7pTvVtR9y" },
    { word: "緊張感", href: "https://x.com/xmakisex/status/1605753650252369923?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1605753650252369923%7Ctwgr%5E67fe28a9eaa0984842a16433d33ab269aece08e1%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fdic.nicovideo.jp%2Fa%2FE6BB9DE6B197E381AEE382B7E382ABE3839EE383AB" },
    { word: "秒速5センチメートル", href: "https://5cm-movie.jp/" },
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: [],
  };
