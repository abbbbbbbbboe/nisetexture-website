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
    id: "018",
    category: "日記",
    title: 'こぼれちゃうよ',
    writer: "新",
    date: "2026-07-13",
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
        {type: "skipbutton", id: "2", label: "5月28日 木曜日", mobile_label: "2"},
        {type: "h1", text: `5月28日 木曜日 晴れのち雨`, class: ["large-space-1"]},
        {type: "p", text: `仕事終わり、『鉄コン筋クリート』を観るために池袋HUMAXシネマに向かった。沢田という、不感症で少し離れた場所から物事を見つめる男が出てくる。私にも近い部分があって、同時に私のダサい部分を突かれた気がして気分は大変だった。映画は面白かったけどまだわからなくて、帰りは雨が降っていたけど、小雨だから傘は差さなかった。`},
        {type: "p", text: `普段はパソコンの前に座って、SpotifyでPodcastを聴きながら複数のグラフィックソフトを操作する。打ち合わせをして、撮影に立ち会い、それからときどき水かお茶か、調子がよい時は紙コップで出てくる自販機でカフェモカを買って飲む。帰りは電車だけど、心地よい風が吹いている日は最寄りの一駅前で降りて家まで歩いたりする。金曜日の夜はたまに友人と集合し、ご飯を食べて、夜遅くまで営業している古着屋を見たりして、バーとかクラブに行ってみたいよねとか話して、でも結局行かなくて、サーティワンで季節限定のフレーバーを食べたりする。東京のことを全然知らないと思う。盛岡で過ごしていたときの私が、東京の暮らしはどう？と羨望のまなざしで問いかけてきて、それにすぐ答えられないけど、当時宇多田ヒカルの『Fantome』を聴いていたこと、それに「It's a lonely road But I'm not alone そんな気分」だと歌っていることを思い出して、ほんと。ほんと？本当にそうなのか？と思ったりする。最近はもう涼しくて、これから暑い夏がやってくると思うと鬱屈な気持ちになるけど、寒い日より落ち込まないからまだマシなはずだ。それをたしかめるためにまた歩いて帰ろうと思う。Tシャツが肌に張り付くくらい湿っていた。傘を差せばよかった。`, class: ["large-space-2"]},
        {type: "skipbutton", id: "3", label: "6月8日 月曜日", mobile_label: "3"},
        {type: "h1", text: `6月8日 月曜日 雨のち曇り`, class: ["large-space-1"]},
        {type: "p", text: `職場でIllustratorのデータが綺麗だと言われた。アートボードの座標はできるだけ整数にして、フォントサイズのポイント数は小数点第二までにおさめる。レイヤーを整理しながら、アンカーポイントで形を探る。たしかにここにいた、と宣言されたみたいに、オブジェクトを配置したいと思う。`},
        {type: "p", text: `低気圧のせいか疲れている。早めに帰って、猫にごはんをあげて、トイレを掃除する。リビングのソファでうとうとしていると、猫がそろりと膝の上に乗ってくる。このまま目を瞑ってしまうと寝てしまう気がする。いけない、と思い「ごめんね」と猫をソファに移動させる。米を研ぎ、土鍋で炊く。家族の中で一番美味しく米を炊くことができる。夕飯を済ませ、湯船に浸かり、スキンケアを終わらせてから歯を磨く。右上奥歯から一本ずつ手前に向かって磨く。舌を軽く磨き、最後にフロスをする。弟に「磨きすぎだと思う。だから知覚過敏になるんじゃん。」と注意される。何回目の注意だろう。いつも10分以上は磨いているらしい。小4から中1まで、1時間に1回石鹸で手を洗わないと気が済まなかったことを思い出す。いつも通り授業終わりに手を洗っていたら、クラスメイトに「新っていつも手洗ってるよね（笑）」と言われて、そこではじめて、1時間に1回手を洗うことが変わっていることだと知った。`},
        {type: "p", text: `白米2合に対して、200mlの計量カップですり切り2杯と半分より少しだけ少ない水を投入する。蓋をして強火で炊き、沸騰してきたら弱火で17分。つやつやとしていて、少し透きとおっていて、たしかにおいしい白米を、タッパーに詰めた。`, class: ["large-space-2"]},
        {type: "h2", text: `バックナンバー`},
        {type: "a", text: `こぼれちゃうよ (2026-04-13)`, class: ["link-list"], link: "../blog/#005"},
        {type: "a", text: `こぼれちゃうよ (2026-05-11)`, class: ["link-list"], link: "../blog/#009"},
        {type: "a", text: `こぼれちゃうよ (2026-06-15)`, class: ["link-list","large-space-1"], link: "../blog/#014"},
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
    
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: [""],
  };
