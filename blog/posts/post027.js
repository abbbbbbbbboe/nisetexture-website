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
    id: "027",
    category: "日記",
    title: 'もらったカギで開ける',
    writer: "オオタソラ",
    date: "2026-09-20",
    tag: ["連載", "日記"],
    samune: "../blog_img/opening-with-a-given-key/thumbnail.webp",
    imageExtraSpace: "600",
    images: [
        { src: "../blog_img/opening-with-a-given-key/thumbnail.webp", caption: "　", id: 1 },
        { src: "../blog_img/opening-with-a-given-key/icon.JPG", caption: "プロフィール写真", id: 2 },
    ],
    textBlocks: [
      {type: "img-button", label: "サムネイル", targetId: "1"},
      {type: "skipbutton", id: "1", label: "top", mobile_label: "1"},
      {type: "h1", text: `いくつかの散歩について`},
      {type: "p", text: `仕事中に2回散歩に出る。`},
      {type: "p", text: `1回目は昼食をとってから。2回目は夕方の18時くらい。ともに短い。`},
      {type: "p", text: `昼食は毎日お弁当を作って持っていく。朝のルーティンのなかで簡単に野菜炒めと卵焼きをタッパーみたいな弁当箱に詰め込む。ラップでおにぎりにした白米とお弁当をパクパクとつついて、そのまま会社の外に出る。会社の周りはオフィスビルが並ぶような大都会ではなくて、それでも商店街というか飲み屋街というかお店がたくさん並んだ場所だ。歩くのは大体いつも同じルートである。`, class: ["large-space-1"]},
      {type: "p", text: `会社の周りの大通りを少し入れば住宅街で、その変わらない道をたんたんと歩く。お腹がいっぱいで仕事は手につかないから。眠くて何も考えられないから。それらを調整するために歩く。ルートの途中には小学校があって、時間が少し遅くなると小学生たちが集団で帰宅している。正門の前の道にはベンチが並んでいて、犬を散歩している人々がそこで休憩し、子供達が犬と遊ぶ。犬も飼い主もきっと子供達を待って座っているのだろうし、子供達も犬のことを考えながら帰りの会をやっている。私は犬も子供も同じ眼差しを向けて黙々と歩く。`, class: ["large-space-1"]},
      {type: "p", text: `2回目は椅子に座っていることに窮屈さを感じて脚が寂しくなったら、会社を飛び出す。だいたい18時ごろ。今度は騒がしい方の通りを通って帰宅中のサラリーマンや飲み会に向かう集団を眺める。18時を過ぎれば多くの人は帰路なのだ。私は居酒屋を探す顔も、喫煙所に入っていく顔も、マクドナルドに並ぶ顔も、信号を待つ顔も全て確認しながら、決めたルートを進む。工事していたビルもいつの間にか綺麗になった。道と建物の間に生えた草がゲロに見えた。子供は真剣にセミの死骸をケータイで撮影している。犬の小便を隠すためにペットボトルの水をかける。自転車の後ろに乗せた子供との会話。空いてるスペースは青緑色の電動キックボードの停車場ばかり。花壇にはしっかりと、飲み終わったプラカップが並べられている。プールの匂いがする居酒屋の換気口。いつの間にか会社の前。`, class: ["large-space-2"]},
      {type: "p", text: `夜の散歩`},
      {type: "p", text: `仕事から帰ると22時くらいで、弁当を洗ったりお米を研いだりして片付けや明日の準備をする。風呂に入る前にゴソゴソと部屋の中で物音がして、固まる。音のする方を見ると大きめのゴキブリが壁を這っている。少し睨みつけて、目を離さないように戸棚から殺虫剤を静かに取り出す。音のする方に近づき一気に噴射。固く艶やかな体は脚の節々を動かして悶える。心の中で謝りながら、もう何度か噴き付ける。ゴキブリが動かなくなったのを確認し、何枚も重ねた袋に入れ、きつく結び捨てた。`, class: ["large-space-1"]},
      {type: "p", text: `部屋の窓を閉めて、部屋の四角に噴いて虫を駆除するタイプの、あの小さい缶の殺虫剤を噴く。部屋は30分くらい密封状態にしなければならず、私はサンダルで外に出た。`, class: ["large-space-1"]},
      {type: "p", text: `住宅街を進む。柴田聡子とか聴きながら適当な道を歩く。暗くて人がいない。猫が追いかけあったりしている。まっすぐな道をボロボロのサンダルでスキップしてみる。音楽があってよかった。リズムに迷うことなくスキップできる。体は盛り上がって、ワイヤレスイヤホンは地面に落ちる。体は重いが、無様になんとか跳ねたりして、気分が良い。こういうことが楽しいと久々に思った。`, class: ["large-space-2"]},
      {type: "h1", text: `バックナンバー`},
      {type: "a", text: `もらったカギで開ける　2026-08-17`, class: ["link-list"], link: "../blog/#022"},
      {type: "a", text: `もらったカギで開ける　2026-07-20`, class: ["link-list"], link: "../blog/#019"},
      {type: "a", text: `もらったカギで開ける　2026-06-22`, class: ["link-list"], link: "../blog/#015"},
      {type: "a", text: `もらったカギで開ける　2026-05-18`, class: ["link-list"], link: "../blog/#010"},
      {type: "a", text: `もらったカギで開ける　2026-04-20`, class: ["link-list"], link: "../blog/#007"},
      {type: "divider"},
      {type: "skipbutton", id: "2", label: "筆者プロフィール", mobile_label: "2"},
      {type: "h1", text: `筆者プロフィール`},
      {type: "img-button", label: "プロフィール写真", targetId: "2"},
      {type: "a", text: `webサイト`, class: ["link-list"], link: "https://otasora.website/"},
      {type: "p", text: `オオタソラ`},
      {type: "p", text: `ニセテクスチャメンバー`},
      {type: "p", text: `大きな梨を買って食べた。まだ早いかもと思ったけど、みずみずしく甘い。もう秋だ。`, class: ["large-space-1"]},
      {type: "divider"},
      {type: "p", text: `本記事、本サイトについてのお問い合わせは以下にお願いします。`},
      {type: "p", text: `nise.texture[a]gmail.com`},
      {type: "p", text: `*[a]は@に変更してください。`, class: ["footnote","large-space-1"]},
    ],

    postHyperlinks: [
      { word: "ルーティン", href: "http://ayumugoromaru.com/" },
      { word: "柴田聡子", href: "https://youtu.be/B4oFhYVSzjc?si=gumJRhUhzdUJvVvi" },
      { word: "あの小さい缶の殺虫剤", href: "https://www.kincho.co.jp/seihin/insecticide/go_aerosol/muender/index.html" },
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: ["basic","owgk"],
  };
