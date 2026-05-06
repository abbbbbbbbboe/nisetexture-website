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
    id: "008",
    category: "sleep soundly 安心して眠る",
    title: '#2 マツボックリ　イン　タイホウ',
    writer: "オオタソラ",
    date: "2026-05-09",
    tag: ["連載"],
    samune: "../blog_img/sleep-soundly/sleepSoundly_samune.webp",
    imageExtraSpace: "600",
    images: [
        { src: "../blog_img/sleep-soundly/sleepSoundly_samune.webp", caption: "　", id: 1 },
        { src: "../blog_img/sleep-soundly/icon.JPG", caption: "プロフィール写真", id: 2 },
    ],
    textBlocks: [
    {type: "skipbutton", id: "1", label: "top", mobile_label: "1"},
    {type: "img-button", label: "thumbnail", targetId: "1"},
    {type: "p", text: `ベットの横のカーテンの隙間から強い光が入ってくる。夜更かしした目が開かない。もう10時になっていた。`},
    {type: "p", text: `父は外で生垣に生えた艶やかな赤芽を切って、汗だく。私はなんとか起きて顔をごしごし擦って眠気を落とす。着替えて、道に落ちた赤芽をゴミ袋に入れるのを手伝う。切った枝はそのままでは袋に入りきらなくて、数回折り曲げて袋に押し込む。つるつるしていて、柔らかくみずみずしい赤芽はパキッと折れることなく折り曲げることができる。袋のなかで手を離すと折りたたんだ枝のテンションは弾けて膨らむ。ぱつぱつに膨らんだゴミ袋はどんどん増えていき、足りなくなってしまって近所のホームセンターに歩いて買いに行った。`},
    {type: "p", text: `日差しと呼べるくらいに太陽の光は熱く強い。風は服と皮膚の間を通り抜けて気持ちいい。`, class: ["large-space-1"]},
    {type: "p", text: `そろそろ出かけようかと後始末をして、準備をしながら思い出す。今日は母は出かけていて、晩御飯を作る必要があった。私も少し帰りが遅くなりそうだったので、事前に晩御飯の魚の煮付けを作る。料理中、腕は少し汗ばんで、着ていたロンTを脱いでタンクトップになった。このままでは真夏を迎えることはできないかもしれない。`, class: ["large-space-2"]},
    {type: "p", text: `北九州市平和のまちミュージアムは住んでいる家から駅まで歩いて25分、電車に乗って40分、そこからまた歩いて10分くらいの場所にある。午前中の作業に手間取って、到着は昼過ぎくらいになりそうだと乗り換えアプリをみながら勘案する。`, class: ["large-space-1"]},
    {type: "p", text: `ミュージアム最寄りの一つ向こうの小倉駅で降りる。先に駅で少し用事を済ませて、そこから歩いて向かう。地図を見ずにたどり着ける。この連載をはじめるために既に2回訪れていて、展示内容については新鮮さは少ない。新鮮さを書く必要もないとも思う。今回はミュージアムの中だけでなく周辺の記念碑などを見ながら向かうことにした。`, class: ["large-space-1"]},
    {type: "p", text: `リバーウォークという巨大な積み木が並べられたような商業施設から小倉城の方へ歩く。城の堀にかかった橋で、子供がシャボン玉を飛ばしている。屋台も出ていて大人は昼から酒を飲んだりしていて、その横をひとりで通り抜ける。まだ桜は散り切ってなくて、少し葉が混ざって咲いていた。`, class: ["large-space-1"]},
    {type: "p", text: `遺跡や記念碑などが小倉城やミュージアムを含めたエリアに点在する。明治以降の戦争のものもあれば、それ以前のものもあった。戦争のために国外に送られた軍馬の霊を慰めるためのものや江戸時代に作られた灯台についてのものもあった。そして大きな公園もある。このエリアはかつては工廠、造兵廠が設置された場所だった。かなり広い範囲に兵器を作るための工場があった街なのだ。なぜこの場所に作られたのか、戦前からの歴史も踏まえてミュージアムで知ることができる。`, class: ["large-space-1"]},
    {type: "p", text: `城内の広場の端には四年式十五珊榴弾砲のレプリカ、つまり日本が制作した大砲についてのモニュメントが設置してある。その周りでは家族がお花見をしていたり、腰掛けて話したりしている。明るい空間に黒く重い塊があることは異常で、でも当たり前のようにそこにある。宴会の横を通って大砲に近寄ってみる。砲口は私の目線より少し高いくらいで、背伸びして中が見えるくらいだった。砲口の中には石や松ぼっくりがたくさん入れられている。奥行きは私の身長より少し長いくらいだろう。人がなんとか運べるくらいのサイズだ、と思った。重さは想像がつかない。横の石には説明が書かれている。その場で立って読む、というか解読するのは難しい。`},
    {type: "p", text: `適当にみているとこどもが横に立っていて、何か言っている。鉄砲？って私に聞いているようだった。大砲じゃない？って返した。そうするとなんだか話しはじめてそれを聞いたりした。せっちゃんがかわいそうだということをずっと言っていて、どのせっちゃんなのか分からない。よくよく聞いてようやく火垂るの墓のことだとわかる。この子にとっては同い年くらいのこどもなのでせっちゃんのことがより身近なのだと思った。`},
    {type: "p", text: `この場所に大砲が置いてあることの強さ。お花見をする横に黒く重く何かを破壊するための大砲が置かれていることのチグハグさ。視界に入って認識することも、しないこともできる寛容さについて頭の中で考えながら、ミュージアムに向かう。`, class: ["large-space-1"]},
    {type: "p", text: `ミュージアムでは、なぜこの街が原爆の第二投下予定地だったのかということがわかるような構成だったと思う。どのように軍都として栄えてきたのか、街の人の暮らしを物や証言を展示しながら確認することができる。`},
    {type: "p", text: `また、陸軍造兵廠内でどのような武器が作られていたのか、どのような人が働いていたのかなども資料をもとに展示されている。特に、風船爆弾という兵器を用いた作戦について興味を持った。1/7サイズの模型や触れることのできる実際に使われていた和紙が展示してある。和紙で太平洋を横断させる兵器を作っていたことに驚いたのだ。展示されている和紙を幾重にもこんにゃくのりで重ね合わせることで強度を出している。学徒動員でその作業に就いた、元女学生の方のインタビュー映像も観ることができた。`, class: ["large-space-1"]},
    {type: "p", text: `造兵廠のあった敷地の大通りを南下して一番端まで歩いてみる。途中にある大きな公園には広さに似合った大きな遊具があって、たくさんの子供達がそこで遊んでいた。`, class: ["large-space-2"]},
    {type: "skipbutton", id: "2", label: "参考リンク", mobile_label: "2"},
    {type: "h2", text: `参考リンク`},
    {type: "a", text: `北九州市平和のまちミュージアム　公式サイト`, class: ["link-list"], link: "https://kitakyushu-peacemuseum.jp/"},
    {type: "a", text: `「小倉陸軍造兵廠の勤労動員」｜戦争｜NHKアーカイブス`, class: ["link-list"], link: "https://www2.nhk.or.jp/archives/movies/?id=D0001130015_00000"},
    {type: "a", text: `戦捜録 「小倉陸軍造兵廠 遺構巡り」`, class: ["link-list","large-space-1"], link: "https://www1.linkclub.or.jp/~oya-wm/arsenalkokurafile/arsenalkokura.html"},
    {type: "h2", text: `バックナンバー`},
    {type: "a", text: `#1 安心して眠る方法`, class: ["link-list","large-space-1"], link: "../blog/#004"},
    {type: "divider"},
    {type: "skipbutton", id: "3", label: "筆者プロフィール", mobile_label: "3"},
    {type: "img-button", label: "プロフィール写真", targetId: "2"},
    {type: "p", text: `筆者：オオタソラ`},
    {type: "p", text: `ニセテクスチャメンバー。引っ越しました。新居での生活を始めております。すぐに暑くなるので、ロンTを着れる季節ってすごく短いですよね。`, class: ["large-space-1"]},
    ],

    postHyperlinks: [
      { word: "生垣", href: "https://ueki-dr.com/column/hedge/" },
      { word: "赤芽", href: "https://www.uekipedia.jp/%E5%B8%B8%E7%B7%91%E5%BA%83%E8%91%89%E6%A8%B9-%E3%83%8F%E8%A1%8C/%E3%83%99%E3%83%8B%E3%82%AB%E3%83%8A%E3%83%A1%E3%83%A2%E3%83%81/" },
      { word: "ホームセンター", href: "https://gooday.co.jp/" },
      { word: "北九州市平和のまちミュージアム", href: "https://kitakyushu-peacemuseum.jp/" },
      { word: "小倉駅", href: "https://maps.app.goo.gl/fmeVtU47GcPuRSkN8" },
      { word: "リバーウォーク", href: "https://riverwalk.co.jp/" },
      { word: "小倉城", href: "https://kokura-castle.jp/" },
      { word: "工廠", href: "https://www.tokyo-np.co.jp/article/436360" },
      { word: "四年式十五珊榴弾砲", href: "https://ja.wikipedia.org/wiki/%E5%9B%9B%E5%B9%B4%E5%BC%8F%E5%8D%81%E4%BA%94%E7%B3%8E%E6%A6%B4%E5%BC%BE%E7%A0%B2" },
      { word: "モニュメント", href: "https://www.waseda.jp/top/news/97655" },
      { word: "火垂るの墓", href: "https://www.ghibli.jp/works/hotarunohaka/" },
      { word: "風船爆弾", href: "https://www.nippon.com/ja/japan-topics/c13905/" },
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: ["basic"],
  };
