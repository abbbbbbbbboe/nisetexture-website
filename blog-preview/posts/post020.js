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
    id: "020",
    category: "ぬるい言葉マップ",
    title: '第4回　テレプレゼンス',
    writer: "小林玲衣奈",
    date: "2026-07-25",
    tag: ["連載"],
    samune: "../blog_img/thinking-in-lukewarm-words/thumbnail2_tlw.webp",
    imageExtraSpace: "600",
    images: [
        { src: "../blog_img/thinking-in-lukewarm-words/tlw4_2.webp", caption: "重曹で擦ってギリギリ消した", id: 1 },
        { src: "../blog_img/thinking-in-lukewarm-words/tlw4_1.webp", caption: "空間で考えるテスト", id: 2 },
        { src: "../blog_img/thinking-in-lukewarm-words/tlw4_3.webp", caption: "マップに書き込みを入れる", id: 3 },
        { src: "../blog_img/opening-with-a-given-key/koba_prof.webp", caption: "プロフィール写真", id: 4 },
    ],
    textBlocks: [
            
        {type: "skipbutton", id: "1", label: "マップのかたちについて", mobile_label: "1"},
        {type: "h1", text: `マップのかたちについて`},
        {type: "p", text: `A3の紙に更新したマップを印刷して、ペンで上から書き加えている。書き込みを元に、Figmaの上で整理をして書き出す。`},
        {type: "p", text: `紙に書き込みを入れる時、なんだかA3の平面に思考を押し込めてしまっている感じがもどかしい。考え事をする時は大抵、洗面所で支度をしていたり、ソファに腰かけたりしている気がして、自室の形や家具の形に沿って思考のスイッチが所々に収まっている。`},
        {type: "p", text: `そんな感覚をマップにも取り入れられたらと思う。ポストイットで壁や家具に貼っていけば、場所は机からは離れることができるけど、結局決まった紙の大きさに書き込むということには変わりがなくて、いっそ空間に直書きすればいいのか？と水で消えるクレヨンで壁に試し書きをしてみたら水で全然消えなくて困った。`},
        {type: "p", text: `何事もまず隅っこの方で試してからということを何回失敗しても覚えられない。`, class: ["large-space-1"]},
        {type: "img-button", label: "重曹で擦ってギリギリ消した", targetId: "1"},
        {type: "p", text: `そうなれば、ARのように仮想的に空間に重ねてみるのはどうだろうかと思い、MetaQuest3を使ってみる。自分の希望に合ったアプリケーションを探してみるものの、探し方が悪いのかあまりしっくりくるものが分からなかった。試しにlogicoolが提供しているアプリケーションでなんとなく空間に書き込みを入れてみる。読みにくさはあるが、これまでにない感覚で新鮮さを感じている。ただ、ヘッドマウントディスプレイで何かをすることに慣れていなさすぎて、頭の中が別の刺激によって分散していってしまう。一定の空間から出てしまうと、書き込みが消えてしまうのももどかしい。`, class: ["large-space-1"]},
        {type: "img-button", label: "空間で考えるテスト", targetId: "2"},
        {type: "p", text: `AIに聞いてみたら自分でコードを書かずとも理想の効果を得られるかもしれないと期待して試してみるが、そう魔法のようにはいかず自身の慣れなさを感じている。自分でチミチミと探っていくしかないのかしら、ならA3の紙とペンなのかしら、でも使ったこともないものと比べようなんてないかしら…と、もぞもぞしている。`},
        {type: "a", text: `マップ（PDF）`, class: ["link-list"], link: "https://drive.google.com/file/d/19vTrlB42kyua8uSE6QH2OtXuRhnow4C2/view?usp=sharing"},
        {type: "img-button", label: "マップに書き込みを入れた", targetId: "3"},
        {type: "skipbutton", id: "2", label: "まとまらないいくつかのこと", mobile_label: "2"},
        {type: "h1", text: `まとまらないいくつかのこと`},
        {type: "p", text: `学習した声の音を使った電話詐欺があるというニュースを聞いた。電話を使って相手の声を聞く時、相手の存在を確かめて安心する。そういう道具であると思ってきた経験を弄ばれたような、なんとも複雑な気持ちになる。`},
        {type: "p", text: `電話は自分が存在している範囲ではない場所にいる相手とやり取りをする。声を使って（もしくは使わずに）話す。話している間は、声だけが別の新たな空間に行ってしまうようなイメージがある。`},
        {type: "p", text: `距離と時間と速さを考えていると、小学校でやるような「はじき」の図を思い出す。圧倒的な速さによってどんな距離も短くなる、またはなくなる。電話を繰り返していると本当にその人が遠い場所にいるのかどうか感覚が鈍くなる。この時「はじき」のバランスはどうなっているのだろうかと考える。`, class: ["large-space-1"]},
        {type: "p", text: `物事には裏面も表面もないように考えることが度々ある。そして、そのことに気がつくにはやはり話しをするほかないのだろうと思う。理解のほとんどは言葉によってぼんやりと形が見えてくる。話しをして語彙を増やしていくことでその形に面が増えて、他の物事とも接続ができるような気がする。言葉によってそこに現れた形が正しいかどうかは問題ではない。`},
        {type: "p", text: `語彙を増やすことで接続ができるということは同時に私たちは元よりばらばらであることを明確にし、そのことになんとなく寂しさを感じる。これらのいくつかのヒントを、朱喜哲「バラバラな世界で共に生きる: リチャード・ローティの哲学」から得る。`, class: ["large-space-1"]},
        {type: "p", text: `ここでわかりあう対象としての他者は、他人だけではないとも思う。最近自分の中の自分でない他者（と呼んで良いのか）を感じる時がある。コントロールできないけど自分自身として存在している部分について、話し合うことができるのかとか考える。`},
        {type: "p", text: `電話が高価で気軽にどこでもいつでもかけることができなかった頃は、電話の基本は「要件電話」で「おしゃべり電話」は嫌われていたらしい。対話とおしゃべりを分けて考えたいと思う。目的もゴールもない、だらだらとした会話が物事の面を増やすこと。`, class: ["large-space-2"]},

        {type: "skipbutton", id: "3", label: "参考文献", mobile_label: "3"},
        {type: "h1", text: `参考文献`},
        {type: "p", text: `朱喜哲,2026,『バラバラな世界で共に生きる: リチャード・ローティの哲学』NHK出版.`},
        {type: "p", text: `飯田豊,2024,『メディアの歴史から未来をよむ』NHK出版.`, class: ["large-space-1"]},
        {type: "p", text: `図：小林玲衣奈`, class: ["footnote","large-space-1"]},
        {type: "h1", text: `バックナンバー`},
        {type: "a", text: `第3回　見えない・聞こえない・分からない`, class: ["link-list"], link: "../blog/#016"},
        {type: "a", text: `第2回　世界と時間を持っている`, class: ["link-list"], link: "../blog/#011"},
        {type: "a", text: `第1回　編集のまわりから`, class: ["link-list"], link: "../blog/#007"},
        {type: "divider"},
        {type: "skipbutton", id: "4", label: "筆者プロフィール", mobile_label: "4"},
        {type: "h1", text: `筆者プロフィール`},
        {type: "img-button", label: "プロフィール写真", targetId: "4"},
        {type: "p", text: `小林玲衣奈`},
        {type: "a", text: `webサイト`, class: ["link-list"], link: "https://kobayashireina.com"},
        {type: "p", text: `ニセテクスチャメンバー`, class: ["large-space-1"]},
        {type: "divider"},
        {type: "p", text: `本記事、本サイトについてのお問い合わせは以下にお願いします。`},
        {type: "p", text: `nise.texture[a]gmail.com`},
        {type: "p", text: `*[a]は@に変更してください。`, class: ["footnote","large-space-1"]},
    ],

    postHyperlinks: [
        { word: "朱喜哲「バラバラな世界で共に生きる: リチャード・ローティの哲学」", href: "https://www.nhk-book.co.jp/detail/000000887602026.html?srsltid=AfmBOoq-7Twu1O3YF2f7aco-SVNopDpOrz9XVYkSrTp2b7TvoCgA8q2x" },
        { word: "飯田豊,2024,『メディアの歴史から未来をよむ』NHK出版.", href: "https://www.nhk-book.co.jp/detail/000069110912024.html?srsltid=AfmBOorqvIOqve28RdiGKv6B6YMv9ri8n26YhKuz8aRH-EPFo1QILybD"},
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: [""],
  };
