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
    id: "005",
    category: "日記",
    title: 'こぼれちゃうよ',
    writer: "新",
    date: "2026-04-13",
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
        {type: "skipbutton", id: "2", label: "10月5日 月曜日", mobile_label: "2"},
        {type: "h1", text: `10月5日 日曜日 晴れ時々曇り`, class: ["large-space-1"]},
        {type: "p", text: `昨日買ったばかりのキャップを被って出かけようと思った。とりあえず自転車で近所の本屋に向かい、伊坂幸太郎の『マイクロスパイ・アンサンブル』と、スヌーピーのボンボンドロップシールを購入。スヌーピーを見ると、元恋人のことを思い出す。たしか好きだったな、と思う。今は私の知らない人と結婚したらしい。`},
        {type: "p", text: `「仕事が終わってこれから帰るよ」`},
        {type: "p", text: `母からLINEが来たので、本屋の近くにあるドトールで一緒にお昼を食べることにした。私は期間限定ミラノサンド 牛カルビ ねぎ塩レモン、母はホットサンド 大豆のミート ～チーズ＆トマト～、そして和梨と葡萄のグリーンティーを2つ注文した。店員さんがミラノサンドを作りながら、「牛カルビの作り方、あやふやなんだよな……」とこぼれるようにつぶやいた。あぶないものが入っていなければいいよ、と思った。ちゃんとおいしかった。`},
        {type: "p", text: `ふたりとも食べ終わり、そのまま席で少し休憩していたら、母の電話が鳴った。どうやらとある撮影で、お弁当を100個作ってほしいという依頼が入ったようだ。思わず腕を振り上げた、その瞬間。袖にストローが引っかかり、グリーンティーをひっくり返してしまった。まだたくさん残っていたのに。さっき牛カルビのミラノサンドをあやふやに作ってくれた店員さんに事情を話し、ふきんを借りて、こぼれたグリーンティーを拭き取る。店員さんも続いてやってきて、「大丈夫っすよー」と何も気にしない様子で、私たちのまわりに散乱したグリーンティーを片付けてくれた。`},
        {type: "p", text: `帰宅後、母はチョコとミル（一緒に暮らしている、真っ黒な猫と黒と白が混ざった猫）の首輪を作ると言い出し、押し入れから裁縫道具を引っ張り出してきた。ミルが市販の首輪を嫌がってすぐ外してしまうので、シュシュのようなものを季節ごとに作ってあげるのだ。今年の冬は、真っ白な毛糸にしよう。そうして編んだものにゆるいゴムを通して、チョコとミルの首につけてあげる。姫みたいでかわいい。気に入ってくれたようで、ほどけるようにあくびをしながらまた寝ようとしている。`},
        {type: "p", text: `「あなたたちは愛されているよ」`},
        {type: "p", text: `母がぽつりとつぶやいた。`, class: ["large-space-2"]},
        {type: "skipbutton", id: "3", label: "2月28日 土曜日", mobile_label: "3"},
        {type: "h1", text: `2月28日 土曜日 晴れ`, class: ["large-space-1"]},
        {type: "p", text: `大学の同期でグラフィックデザイナーの友人と東京駅で待ち合わせ。八重洲南口から徒歩3分ほどの場所にあるBUGで、やんツー『浮遊する器官』を観る。戦争をテーマにした、ドローンとカタパルトによる対話劇。事前に設定された条件をもとに、毎回Geminiによって台本が生成される。両者の対話は最後まで噛み合わず、私が観た回では、あらゆる暴力や犠牲を回避すべきだという理想を掲げながらも、現実では兵器として利用されているドローンがその自己矛盾に耐えきれず、最終的に自爆するという物理的破壊で終わった。`},
        {type: "p", text: `友人と感想を話しながら大手町まで歩き、そこから千代田線で千駄木へ向かう。土井樹『あたらしい天気』を観る。作者本人がたまたま居合わせ、作品解説が始まる。気がつけば私たちの後ろに何人か増えていて、小さなギャラリーツアーのようになっていた。会話を広げてくれる友人に引っ張られるように場が進んでいく。私はそのあいだ、話を聞いたり、少し離れて作品を眺めたり、また戻ってきて反応したりしていた。`},
        {type: "p", text: `大きな事象と個人的な話がフラットに並ぶ展示だった。日本最初の天気予報音声が流れるカセットデッキの上には、作者の子どもが作ったお天気マシーンが置かれている。プラスチックの箱に竹串が垂直に刺さっており、晴れや雨の絵が描かれた紙がセロハンテープで留められている、かんたんなつくりのものだった。すぐ劣化する素材で「いま」を組み立てること。私（たち）は常に、できるだけ、長期保存が可能な素材で制作すること。そう試みること。`},
        {type: "p", text: `次のフロアには、展示の核である『Wheather』プロジェクトに関する資料が並んでいた。天気にまつわる歴史や、風向きを計測する装置。議論の痕跡やリサーチの断片。センサーの試作と、その過程。そのあいだを埋めるように、参加者の日記が壁一面に貼られている。`},
        {type: "p", text: `部屋の中央から少し外れた場所に、真っ青に光るモニターが佇んでいた。異質だった。モニターの中で、旗が揺れていた。いまこの瞬間、戦争や紛争が起こっている地域の気象情報をもとに、シミュレーションされた風。その風を受けて、旗が揺れていた。その日の夜、アメリカがイランへの軍事攻撃を開始したことをニュースで知る。`},
        {type: "p", text: `遠い場所のことを考える。`, class: ["large-space-2"]},
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
        { word: "マイクロ", href: "https://ja.wikipedia.org/wiki/%E3%83%9E%E3%82%A4%E3%82%AF%E3%83%AD" },
        { word: "スパイ", href: "https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%91%E3%82%A4" },
        { word: "アンサンブル", href: "https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%B3%E3%82%B5%E3%83%B3%E3%83%96%E3%83%AB_(%E6%9B%96%E6%98%A7%E3%81%95%E5%9B%9E%E9%81%BF)" },
        { word: "ボンボンドロップシール", href: "https://www.instagram.com/bonbon_drop_seal?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
        { word: "ドトール", href: "https://www.doutor.co.jp/dcs/" },
        { word: "期間限定ミラノサンド 牛カルビ ねぎ塩レモン", href: "https://www.doutor.co.jp/news/newsrelease/detail/20250611165021.html" },
        { word: "ホットサンド 大豆のミート ～チーズ＆トマト～", href: "https://www.doutor.co.jp/dcs/menu/detail/20250912133152.html" },
        { word: "和梨と葡萄のグリーンティー", href: "https://x.com/DoutorCoffee_co/status/1971434601395654939?s=20" },
        { word: "シュシュ", href: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14297151584?__ysp=44K344Ol44K344Ol" },
        { word: "姫", href: "https://booklog.jp/q/2567" },
        { word: "浮遊する器官", href: "https://bug.art/exhibition/yang02-2026/" },
        { word: "ドローン", href: "https://biz.kddi.com/content/column/smartwork/what-is-drone/" },
        { word: "カタパルト", href: "https://www.scientificamerican.com/article/build-a-catapult/" },
        { word: "理想", href: "https://wired.jp/article/markus-gabriel-interview/" },
        { word: "あたらしい天気", href: "https://ccbt.rekibun.or.jp/events/another_weather" },
        { word: "日本最初の天気予報", href: "https://www.bioweather.net/column/weather/%E6%97%A5%E6%9C%AC%E6%9C%80%E5%88%9D%E3%81%AE%E5%A4%A9%E6%B0%97%E4%BA%88%E5%A0%B1/" },
        { word: "セロハンテープ", href: "https://www.tanomail.com/dyn/sp/bf/tanokun-room/trivia/index19.html" },
        { word: "Wheather", href: "https://www.w-e-a-t-h-e-r.jp" },
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: [""],
  };
