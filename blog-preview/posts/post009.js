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
    id: "009",
    category: "日記",
    title: 'こぼれちゃうよ',
    writer: "新",
    date: "2026-05-11",
    tag: ["連載", "日記"],
    samune: "../blog_img/spillover/thumbnail.webp",
    imageExtraSpace: "600",
    images: [
        { src: "../blog_img/spillover/thumbnail.webp", caption: "サムネイル", id: 1 },
        { src: "../blog_img/spillover/arata_profile.webp", caption: "プロフィール写真", id: 2 },
    ],
    textBlocks: [
       
        {type: "img-button", targetId: "1"},
        {type: "skipbutton", id: "1", label: "ルール", mobile_label: "1"},
        {type: "h1", text: `ルール`},
        {type: "p", text: `・過去の記録から二日だけ選択し、並置する`, class: ["indent-1"]},
        {type: "p", text: `・タイトルの表記は「日時と天気」のみとする`, class: ["large-space-1","indent-1"]},
        {type: "divider"},
        {type: "skipbutton", id: "2", label: "3月8日 日曜日", mobile_label: "2"},
        {type: "h1", text: `3月8日 日曜日 晴れ`, class: ["large-space-1"]},
        {type: "p", text: `「ねえ今日暇？これから会わない？」`},
        {type: "p", text: `大学時代の友人からDMが届いた。社会人になった今も、月に2、3回は会っている。数日前から約束することもあれば、当日の朝に突然誘われることもある。私から誘うこともある。お互い予定がなければ昼頃に集合し、散歩することが多い。というか最近はほぼそれでしかない。普段から他愛のない会話をDMでしているはずなのに、会えばそれはそれで話が尽きない。`},
        {type: "p", text: `今日は初台の東京オペラシティで待ち合わせ、アルフレド・ジャー『あなたと私、そして世界のすべての人たち』を観たあと、バスを使いつつ渋谷周辺を練り歩いた。移動中も絶え間なく会話をしている。展示の感想から最近の仕事、今欲しい服、最近観た映画、恋バナ。建築計画の看板を見つけては何が建つのか予想し、通りすがりの犬を見てかわいいと言う。お互い人生の進捗を共有し、共感を重ね、わからないことが出てきたら立ち止まって聞く。それは何？どういうこと？会話というより、報連相である。`},
        {type: "p", text: `ずっと話していれば喉が渇くわけで、カフェ・ベローチェ 渋谷二丁目店で休憩することにした。都内のベローチェでもここがいちばん好きだ。窓から歩道橋が見えるから。夕方になるとビルの隙間から斜めに差し込む光が、そのあたりを照らす。きらきらと光る人や車の流れを見ているだけで少しうっとりする。`},
        {type: "p", text: `「2030年問題って知ってる？東京も2020年代後半をピークに少しずつ人口も減少して、都市も縮小していくんだって。今見えているこの大きい建物ももうすぐ先、巨大な廃墟になるのかな。」と適当な知識のまま話してしまう。「えーじゃあ人や車が行き交うこの景色も愛おしくなるね。」と友人は言う。近くの席で高校生たちが無邪気に笑っていた気がする。`},
        {type: "p", text: `友人が突然、海外留学を考えていると話し始めた。似合うと思った。たぶん向こうでも友達ができて、私の知らない街を好きになって、憶えた言葉で泣いたり笑ったりするのだろう。そうあってほしいと思う。少し寂しくなった。誰かの未来を願いながら、その未来に私がいないかもしれないと思うと涙が溢れそうになるのは、まだ若いからだろうか。コーヒーゼリーの上で、食べられるのを静かに待っていたソフトクリームはもう、渦巻きのかたちを失いかけていた。`, class: ["large-space-2"]},


        {type: "skipbutton", id: "3", label: "3月20日 金曜日", mobile_label: "3"},
        {type: "h1", text: `3月20日 金曜日 雨`, class: ["large-space-1"]},
        {type: "p", text: `4月から三軒茶屋で暮らし始める友人がいる。`},
        {type: "p", text: `「住む前に、三茶の生活を少し想像したくて。」`},
        {type: "p", text: `新生活のリハーサルに誘われたので、フレッシュネスバーガー 三軒茶屋店で待ち合わせをして、この街を散策することになった。三軒茶屋って、名前の通り、昔茶屋が三軒並んでいた場所らしい。江戸から大山街道（現在の国道246号線）を通ってきた人が、ここで休み、またどこかへ向かっていく。通過するための場所に、息をつく名前がついている。`},
        {type: "p", text: `気になる店を見つけては立ち止まり、ここは入りやすい、ここは少し緊張する、などと話す。よい感じの店に入るとき、外部から人格を降ろす必要があるらしい。「うつわ」だから、と友人は話す。私は、自分を「多面体」だと思う。すでにいくつもの面を内側に持っていて、状況や角度によって違う光を返している。それを自覚するかどうか。どちらが優れているという話ではない。`},
        {type: "p", text: `途中、世田谷区立下馬図書館にも寄った。人が少なくて、こういう場所があると暇なとき助かるよね、と話す。入り口すぐの壁面には江戸時代のこのあたりの地図が貼られていた。田んぼが多いね、と指でなぞる。いまカフェやマンションが並ぶ場所はかつて、水が張られ、風が通っていた時間がある。`},
        {type: "p", text: `三茶の一面を知れたところで、そのまま別の街まで歩いてみようとなった。下北沢を経由し、駒場東大前、渋谷まで歩く。途中、フレッシュネスバーガー 1号店の前を通り、「また食べる？」と聞かれた。さすがに1日2バーガーは結構です、と断った。`, class: ["large-space-2"]},

        {type: "divider"},
        {type: "skipbutton", id: "4", label: "筆者プロフィール", mobile_label: "4"},
        {type: "h1", text: `筆者プロフィール`},
        {type: "img-button", label: "プロフィール写真", targetId: "2"},
        {type: "p", text: `新`},
        { type: "a", text: `webサイト`, link: "https://arata-new.jp/", class: ["link-list"] },

        {type: "p", text: `グラフィックデザイナー`},
        {type: "p", text: `1998年岩手県生まれ。武蔵野美術大学造形学部基礎デザイン学科卒業。岡本健デザイン事務所を経て、現在はロゴデザイン、ブランディング、美術やファッション領域のグラフィックデザインワークを主に行う。パピコが好き。`, class: ["large-space-1"]},
        {type: "p", text: `banner design: 新`, class: ["footnote","large-space-1"]},
        { type: "divider" },
        { type: "p", text: `本記事、本サイトについてのお問い合わせは以下にお願いします。` },
        { type: "p", text: `nise.texture[a]gmail.com` },
        { type: "p", text: `*[a]は@に変更してください。`, class: ["footnote", "large-space-1"] },
    ],

    postHyperlinks: [
        { word: "東京オペラシティ", href: "https://www.operacity.jp/" },
        { word: "あなたと私、そして世界のすべての人たち", href: "https://bijutsutecho.com/magazine/news/report/31993" },
        { word: "バス", href: "https://www.shibuyabunka.com/blog.php?id=741" },
        { word: "最近観た映画", href: "https://rakkanooukoku4k.jp/" },
        { word: "報連相", href: "https://slack.com/intl/ja-jp/blog/transformation/unable-to-report-and-communicate" },
        { word: "カフェ・ベローチェ 渋谷二丁目店", href: "https://maps.app.goo.gl/3vUj73Jsx6oHAVTR7" },
        { word: "2030年問題", href: "https://mori-column.notion.site/top" },
        { word: "コーヒーゼリー", href: "https://ameblo.jp/marimariara/entry-12848661965.html" },
        { word: "フレッシュネスバーガー 三軒茶屋店", href: "https://maps.app.goo.gl/xX5WQrSNx32iAbN67" },
        { word: "大山街道", href: "https://www.ktr.mlit.go.jp/kawakoku/kawakoku_index017.html" },
        { word: "世田谷区立下馬図書館", href: "https://libweb.city.setagaya.tokyo.jp/index?2" },
        { word: "フレッシュネスバーガー 1号店", href: "https://www.freshnessburger.co.jp/story" },
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: [""],
  };
