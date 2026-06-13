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
    id: "014",
    category: "日記",
    title: 'こぼれちゃうよ',
    writer: "新",
    date: "2026-06-15",
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
        {type: "skipbutton", id: "2", label: "5月31日 日曜日", mobile_label: "2"},
        {type: "h1", text: `5月31日 金曜日 雨`, class: ["large-space-1"]},
        {type: "p", text: `ぼーっとしていると到着できないで有名な駅、初台に向かっている。新宿から京王新線で一駅だが、似た名前の京王線に乗ってしまうと笹塚まで一気に飛ばされてしまう。複雑な都市、東京の罠。電車の方が早いんだけど、なんだか今日は心配♩でバスに乗って向かっていた。初台駅から少し歩いた場所にあるデニーズで展示の打ち合わせをする予定だ。一階は駐車場になっていて、階段を登った先に入口がある。東京のファミレスってピロティが採用されていることが多くて嬉しい。とにかく、地面から少し浮いているくらいの場所で、外の景色を眺めながらご飯を食べるのが好きなんだと思う。今日は家族連れが多くて、席に案内されるまで少し待った。案内された席は二人で座るには充分なテーブルで、窓の向こうには街のスケールにそぐわない広さのテニスコートが見えた。`},
        {type: "p", text: `何を話したのかほとんど覚えていない。大学時代の先生の展示を観たあとだったので、私たちも何かやりたいね、という話だけはしていた。展示のタイトルも決まってないし、作品もない。けど二人とも「光」についてぼんやり考えていた。モニターは光源。プロジェクターは反射光。夜に散歩している犬の首輪ってちょっと光りすぎてませんか。そもそもなぜ私たちは光に惹かれるんだろう、みたいなことも話した気がする。もし私たちも蛍みたいに自ら発光する存在だったら？と頭の中で考えていたけど、なんかどうでもよすぎてそれは話さなかった。真面目に会話していた気がするし、聞き流した気もする。何を食べたのかも正直覚えてなくて、ネコ型配膳ロボットが運んできたステーキ？と小ライス？を食べたはずだけどぱさぱさしていて正直あまり美味しくなかった気もする。しっかりしてくれ。`},
        {type: "p", text: `店を出ると、信号機も自動販売機も車も街灯もコンビニも光ってるし、犬も光ってたけど別に普通だった。それよりも頭の中でずーっとILLITのMagneticが流れていた。今の私は何よりもこのメロディに夢中なのです（by GLLIT）、とか思っていた。`, class: ["large-space-2"]},
        {type: "skipbutton", id: "3", label: "11月8日 日曜日", mobile_label: "3"},
        {type: "h1", text: `11月8日 金曜日 晴れ`, class: ["large-space-1"]},
        {type: "p", text: `ようやく個人サイトが完成した。アクセス数は表示されない。誰が見ているのかもわからない。ブラウザで検索しても上位に表示されづらい。なかなかたどり着けないようなところで、10ヶ月くらいかかった。`},
        {type: "p", text: `仕事と展示の準備と並行しながら進めていたWebサイトの構築は、展示が終わったあとも修正を続けていたけど、詳しいことはよく覚えていない。画面の左側に据えたChatGPTに相談しながらコードを書いて（実際は書いているというより書かせているだけにすぎない。懺悔。）Visual Studio Codeにコードをペーストする。毎日自宅で深夜まで作業していたし、コードの意味もあまり理解できていないままで、でも仕事もしているし、簡単に疲れちゃう。Webサイトを公開するために、わざわざzoomを繋いであれこれの手続きに付き合ってくれた友人には大変感謝しています。ChatGPTもありがとう。`},
        {type: "p", text: `白背景に黒い文字と、シンプルなグラフィックが載るだけのサイトにしようと思う。どんなテキストを載せようか、誰にも見せないはずの日記を見返す。気になる断片を見つける。私のからだが思い通りに動かなくて苦しくなるたび、それを紛らわすために集めていた光について。`},
        {type: "p", text: `そういえば、展示の準備中に原田マハの『独立記念日』を読んだことを思いだした。まぶしい窓の向こうの景色。夜空に浮かぶ星。鳥の群れ。懐かしい曲。作業しているとデスクの上にふと現れる小さな蜘蛛。ここではないどこかではなくて。ブラウザを閉じて、そのまま寝た。`, class: ["large-space-2"]},
        {type: "h2", text: `バックナンバー`},
        {type: "a", text: `こぼれちゃうよ (2026-04-13)`, class: ["link-list"], link: "../blog/#005"},
        {type: "a", text: `こぼれちゃうよ (2026-05-11)`, class: ["link-list","large-space-1"], link: "../blog/#009"},
        {type: "divider"},
        {type: "skipbutton", id: "4", label: "筆者プロフィール", mobile_label: "4"},
        {type: "h1", text: `筆者プロフィール`},
        {type: "img-button", label: "プロフィール写真", targetId: "2"},
        {type: "p", text: `新`},
        {type: "a", text: `webサイト`, class: ["link-list"], link: "https://arata-new.jp/"},
        {type: "p", text: `グラフィックデザイナー`},
        {type: "p", text: `1998年岩手県生まれ。武蔵野美術大学基礎デザイン学科卒業。岡本健デザイン事務所を経て、現在はロゴデザイン、ブランディング、美術やファッション領域のグラフィックデザインワークを主に行う。パピコが好き。`, class: ["large-space-1"]},
        {type: "p", text: `banner design: 新`, class: ["footnote","large-space-1"]},
        {type: "divider"},
        {type: "p", text: `本記事、本サイトについてのお問い合わせは以下にお願いします。`},
        {type: "p", text: `nise.texture[a]gmail.com`},
        {type: "p", text: `*[a]は@に変更してください。`, class: ["footnote","large-space-1"]},
    ],

    postHyperlinks: [
        { word: "独立記念日", href: "https://booklog.jp/item/1/4569679137" },
        { word: "個人サイト", href: "https://arata-new.jp/" },
        { word: "Magnetic", href: "https://youtu.be/Vk5-c_v4gMU?si=PHtmUOSVQIBtAf46" },
        { word: "ネコ型配膳ロボット", href: "https://wired.jp/article/pudu-robotics-felix-zhang-interview/" },
        { word: "ピロティ", href: "https://hash-casa.com/2019/06/23/villasavoye/" },
        { word: "デニーズ", href: "https://maps.app.goo.gl/Z5XaTBCYsLDyWf1J7" },
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: [""],
  };
