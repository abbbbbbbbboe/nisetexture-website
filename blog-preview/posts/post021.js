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
    id: "021",
    category: "sleep soundly 安心して眠る",
    title: '#5　訓練された馬',
    writer: "オオタソラ",
    date: "2026-08-08",
    tag: ["連載"],
    samune: "../blog_img/sleep-soundly/sleepSoundly_samune.webp",
    imageExtraSpace: "600",
    images: [
        { src: "../blog_img/sleep-soundly/sleepSoundly_samune.webp", caption: "　", id: 1 },
        { src: "../blog_img/sleep-soundly/icon.JPG", caption: "プロフィール写真", id: 2 },
    ],
    textBlocks: [
        {type: "skipbutton", text: `top`, id: "1", label: "top", mobile_label: "1"},
        {type: "img-button", label: "サムネイル", targetId: "1"},
        {type: "p", text: `2回にわたって馬の話をしたけれど、伝承の中の馬しか登場していない。なので、実物の馬を観にいくことにした。`, class: ["large-space-1"]},
        {type: "p", text: `外は炎天下、冷えた家を出る。全日晴れた三連休の最終日で、街は意外と賑わっている。日陰の中を歩いても暑い。日陰の外はもっと暑い。梅雨も明けて夏になった。`},
        {type: "p", text: `今から向かうのは大井競馬場。三軒茶屋から渋谷に出て、山手線で浜松町、浜松町からモノレールで大井競馬場前駅で降りる。浜松町からのモノレールは羽田空港に行く時くらいしか使わないし、各駅停車に乗るのも珍しい。競馬場前駅につくと、一斉に人が降りて意外だった。思っていたよりも競馬に行く人は多い。駅はシンプルで自販機が数台と申し訳程度の観光案内エリアだけだった。駅を出ると馬の匂いが流れてくる。けれどそんなに強烈ではない。駅のすぐ隣に厩舎が大量に並んでいるのに、少し匂ってくるくらいしか感じられなかった。それでも人間以外の動物の匂いがした。`, class: ["large-space-1"]},
        {type: "p", text: `ゾロゾロと駅から競馬場に向かう人波に混じって、私も向かう。`},
        {type: "p", text: `入り口はLEDのパネルに覆われて荒いピクセルの映像が流れている。門を潜って少し歩くと改札のようなものがあって、そこに100円玉を入れて入場する。指定席を購入している場合はチケットをかざす。1レース目が始まるくらいの時間に入ったので、まだそんなに人は少ない。レースの数が増えていくごとに人は増えていった。`, class: ["large-space-1"]},
        {type: "p", text: `どうしたらいいのか分からず、とりあえず建物の中を物色する。想像していたよりも綺麗で、涼しい。至る所にモニターがあってそこには小さな数字がたくさん載っている。駅から向かう時にも思ったが、昔観た刑事ドラマに出てくるような競馬好きなじいさんはほとんどいなくて、若い男女が多いことに驚いた。もちろん、口を開けて画面越しにレースを観ているじいさんやばあさんもいたし、耳に鉛筆をかけて予想している人もいた。でも、今日は人を観にきた訳じゃないので馬を観にいく。`, class: ["large-space-1"]},
        {type: "p", text: `競馬ではパドックという陸上競技の小さなトラックのような場所で、出走する馬の状態をレース直前に下見する。そのパドックの中を馬は厩務員（きゅうむいん）や調教助手にひかれながらぐるぐると回る。興奮して歩くのが乱れる馬や淡々と歩く馬を眺める。競馬場の施設の中で一番馬に近づける場所だった。馬の首筋からは汗がダラダラと流れている。太陽の光がそれに反応して綺麗になる。頭の中にいた抽象的な馬の形はより具体的に筋肉をつけてハリをもち始める。匂いはしないが足音のリズムは聞こえる。強い光の中で艶やかな毛並みは次第に獣のようになっていった。`, class: ["large-space-1"]},
        {type: "p", text: `レースが始まる数分前になると知らないメロディーがアナウンスされて、投票が締め切られる。馬券は実際には「勝馬投票券」といって一枚10円で10枚セット、つまり100円単位で購入することができる。投票の仕方にも色々あって、その方法によって馬券の記載も違った。会場ではビギナー向けの券の購入方法などを教えてくれるカウンターもあった。受験の時以来のマークシートを急いで塗りつぶして券を買う。競馬場に出ると階段状にベンチが並んでいて、その先に進むと開けたエリアでコースに近づくことができる。後ろを振り向くと、馬券を買った建物の上階にはガラス張りの観客席もあった。強い日差しを遮るこの建物の影から私はレースを観る。飛行機がすごい頻度で頭上を飛んでいるのも印象的だった。着陸地点の羽田空港に向けて下降した機体は大きく、轟音が鳴り響く。飛行機の音を聞くと祖父母の家の近くの航空自衛隊の演習の音を思い出す。`, class: ["large-space-1"]},
        {type: "p", text: `巨大なモニターにスタート地点の発馬機のゲートの様子が映る。観客はここから自分の投票した馬の様子を気にする。なかなかゲートの中に入らない馬がいると会場はどよめいた。一斉にゲートが開き馬は走り出す。まだ実物は見えない。トラックの向こう側にいる。巨大なモニターには先頭から順番に馬の様子を映す。映像の横には上位3頭の名前が並ぶ。コーナーを曲がって実際に馬の姿が見えてくるとそのランキングは消えた。初めは小さくしか見えなかった馬がだんだんと勢いよく大きくなっていく。そのまますごいスピードでゴールの横にいる私の目の前を通り過ぎた。細い足としなやかで強靭な筋肉の動きに驚く。馬も騎手も颯爽とゴールするというより、誰よりも貪欲に必死にゴールに向かって走っているように見えた。`, class: ["large-space-2"]},
        {type: "skipbutton", id: "2", label: "参考リンク", mobile_label: "2"},
        {type: "h1", text: `参考リンク`},
        {type: "a", text: `厩舎スタッフの仕事：競馬学校 JRA`, class: ["link-list"], link: "https://www.jra.go.jp/school/stable/work/"},
        {type: "a", text: `日本競馬の歴史をわかりやすくまとめてみる｜ほどよい競馬`, class: ["link-list"], link: "https://mag-p.com/39/"},
        {type: "a", text: `競馬場などの施設、設備 一覧表示（競馬用語辞典） JRA`, class: ["link-list","large-space-1"], link: "https://www.jra.go.jp/kouza/yougo/c10090_list.html"},
        {type: "h1", text: `バックナンバー`},
        {type: "a", text: `#1 安心して眠る方法`, class: ["link-list"], link: "../blog/#004"},
        {type: "a", text: `#2 マツボックリ イン タイホウ`, class: ["link-list"], link: "../blog/#008"},
        {type: "a", text: `#3 あなたの馬`, class: ["link-list"], link: "../blog/#013"},
        {type: "a", text: `#4 馬魂碑`, class: ["link-list","large-space-1"], link: "../blog/#017"},
        {type: "divider"},
        {type: "skipbutton", id: "3", label: "筆者プロフィール", mobile_label: "3"},
        {type: "h1", text: `筆者プロフィール`},
        {type: "img-button", label: "プロフィール写真", targetId: "2"},
        {type: "p", text: `オオタソラ`},
        {type: "a", text: `webサイト`, class: ["link-list"], link: "https://otasora.website/"},
        {type: "p", text: `何レースか投票しましたが、どれも当たらなかった。投票するかしないかでレースへの没入感が変わる。`, class: ["large-space-1"]},
        {type: "p", text: `banner design: オオタソラ`, class: ["footnote","large-space-1"]},
        {type: "divider"},
        {type: "p", text: `本記事、本サイトについてのお問い合わせは以下にお願いします。`},
        {type: "p", text: `nise.texture[a]gmail.com`},
        {type: "p", text: `*[a]は@に変更してください。`, class: ["footnote","large-space-1"]},
    ],

    postHyperlinks: [
        { word: "大井競馬場前駅", href: "https://www.tokyo-monorail.co.jp/guidance/ooikeiba/" },
        { word: "厩務員", href: "https://www.jra.go.jp/school/stable/become/" },
        { word: "調教助手", href: "https://www.keibabook.co.jp/homepage/sp/dictionary/ti/ti_014.html" },
        { word: "勝馬投票券", href: "https://jra.jp/kouza/yougo/w411.html" },
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: [""],
  };
