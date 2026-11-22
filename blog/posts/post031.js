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
    id: "031",
    category: "日記",
    title: 'こぼれちゃうよ',
    writer: "新",
    date: "2026-11-23",
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
        {type: "skipbutton", id: "2", label: "10月30日 金曜", mobile_label: "2"},
        {type: "h1", text: `10月30日 金曜 曇り時々雨`, class: ["large-space-1"]},
        {type: "p", text: `弟が恋人から「今バーガーキングで注文するときに“トリックオアトリート”って言うとソフトクリームがもらえるんだって」と聞き、実際に注文してみたところ、`},
        {type: "p", text: `「キャンペーンは明日の一日限定です」`},
        {type: "p", text: `と返されてしまったらしい。さらに年齢も聞かれ、`},
        {type: "p", text: `「すみません、18歳以下の方が対象です」`},
        {type: "p", text: `と断られた。二重に恥ずかしくなったよと笑っていた。最寄りの一つ先の駅にはそのバーガーキングとサーティワンがあって、たまにアイスを食べながら歩いて帰ることができる。ここにミスタードーナツもあったらもっと嬉しいのに、と話す。`},
        {type: "p", text: `喉が痛い。少し前に風邪を引いた。熱が出て仕事を休んだ日。夜にはもう平熱に戻っていたから、次の日からは一日分の遅れを取り戻すように夜遅くまで働いた。その次の日も働いたけど、翌朝、目覚めとともに身体が重いことに気がつく。熱を測るとまた上がっていて、その日はしっかり休むことにした。明日に備えていつもより二時間くらい早く寝る。そうすると熱はすっかり下がっていて、出勤できるくらい元気になっていたけど、会社の人たちに随分と心配されてしまい、夕方には帰ることにした。`},
        {type: "p", text: `それからしばらく経った日曜日、友人と『我々は宇宙人』を観たけど、その後しばらくうまく話せなかった。複雑な気持ちを抱えながら、でも、子どもの頃は自分の中にもっと広い場所があった気がしたと話す。誰にも見えないものを考える時間があったはずで、遠い星に誰かが住んでいるかもしれない。校庭に咲くひまわりを青い絵の具で描いてみたり、家の近くにあった山を越えると誰も知らない街があるんだと想像した。自分自身と交信する時間があったことを思い出す。`},
        {type: "p", text: `社会人になって仕事から帰ると、一日がどれだけあっという間か身に沁みて感じる。夕食を済ませて食器を洗い、お風呂に入っている間に溜まった服を洗濯して、スキンケアをしてから洗濯物を干す。乾燥機を回している間に掃除機をかけて、専用の毛布ですやすやと眠るねこを撫でる。友人からメッセージが来ていて、返そうと思うけど返せなくて、明日返そうと思う。仕事の連絡だけ返して、そうじゃないメッセージだけが未読のまま溜まっていく。アプリの右上に出る赤い通知が大きい数字に更新されていく。`},
        {type: "p", text: `映画を観てもう一週間くらい経ったけど、喉がまだ少しいがいがする。もともと呼吸器系が弱く、咳がひどくなると病院でシムビコートという吸入薬を処方してもらう。今は咳より喉に違和感があって、寝る前にトローチを舐めるようになった。そのトローチには穴があって、口の中で小さくなっていく輪を舌でたしかめる。ドーナツみたいだ。そういえば宇宙もドーナツのようなかたちをしていると、どこかで聞いたことを思い出して、宇宙のかたちについて調べ始める。現代の観測では、限りなく平坦に広がっているのが有力だけど、実のところまだ分からないことだらけらしい。観測できる宇宙より向こうに、どれだけ続いているのかも分からない。私たちの宇宙以外にも宇宙が存在するのかも分からない。そんなに大きな話をされると困る。でもまだ分からないみたいで少し安心する。最近は、自分が何をしたいのかもよく分からないから。`},
        {type: "p", text: `今、何が飲みたいのかも分からなくなる時があって、仕事の合間に近くのコンビニに来ては、ペットボトルが並ぶ棚の前で立ち尽くしてしまう。お茶にしてはもう少しだけ香りか甘みが欲しくて、その近くにあるレモンティーを手に取る。でもこれは今の自分には甘すぎるんだよね、と過去に何度も飲んだ経験を思い出して棚に戻す。水ではないし、炭酸でもない。少しひんやりとした店内をうろうろして、結局何も買わずにオフィスに戻る。カフェモカを砂糖なしにカスタムしたものを一口飲んで、うん、まあこれだったのかもしれない。と自分に言い聞かせる。その時、なんとなくまっすぐかなと思う方向に進んでいても、いつか元の場所へ戻ってこれる宇宙があることを願う。口の中のトローチはもう髪の毛みたいに細くなっているけど、穴が最後までぽっかり空いていることだけは分かった。`, class: ["large-space-2"]},
        {type: "skipbutton", id: "3", label: "11月16日 木曜", mobile_label: "3"},
        {type: "h1", text: `11月16日 木曜 晴れのち曇り`, class: ["large-space-1"]},
        {type: "p", text: `むせているとき人は孤独。`, class: ["large-space-2"]},
        {type: "h2", text: `バックナンバー`},
        {type: "a", text: `こぼれちゃうよ (2026-04-13)`, class: ["link-list"], link: "../blog/#005"},
        {type: "a", text: `こぼれちゃうよ (2026-05-11)`, class: ["link-list"], link: "../blog/#009"},
        {type: "a", text: `こぼれちゃうよ (2026-06-15)`, class: ["link-list"], link: "../blog/#014"},
        {type: "a", text: `こぼれちゃうよ (2026-07-13)`, class: ["link-list"], link: "../blog/#018"},
        {type: "a", text: `こぼれちゃうよ (2026-08-24)`, class: ["link-list"], link: "../blog/#024"},
        {type: "a", text: `こぼれちゃうよ (2026-09-14)`, class: ["link-list"], link: "../blog/#025"},
        {type: "a", text: `こぼれちゃうよ (2026-10-12)`, class: ["link-list","large-space-1"], link: "../blog/#029"},
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
        { word: "我々は宇宙人", href: "https://youtu.be/YLqfyrQ56yY?si=jJG0g0QsG9OGZpNy" },
        { word: "赤い通知", href: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14295813054" },
        { word: "宇宙のかたち", href: "https://yomeruba.com/hiroba/learn/tenmonnozukan/entry-44758.html" },
        { word: "むせているとき人は孤独。", href: "https://youtu.be/rArlDsd_XLQ?si=HUiqR5tzL8Rqw8os" },
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: [""],
  };
