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
    category: "ぬるい言葉マップ",
    title: '第4回　地層',
    writer: "小林玲衣奈",
    date: "2026-08-21",
    tag: ["連載"],
    samune: "../blog_img/thinking-in-lukewarm-words/thumbnail2_tlw.webp",
    imageExtraSpace: "600",
    images: [
        { src: "../blog_img/thinking-in-lukewarm-words/tlw5_1.webp", caption: "マップに書き込みを入れる", id: 1 },
        { src: "../blog_img/opening-with-a-given-key/koba_prof.webp", caption: "プロフィール写真", id: 2 },
    ],
    textBlocks: [ 
        {type: "skipbutton", id: "1", label: "考えながら思いつく", mobile_label: "1"},
        {type: "h1", text: `考えながら思いつく`},
        {type: "p", text: `第3回、第4回と電話の話に触れていたので、もう少し電話について考えてみようと思い、「メディアとしての電話」を読んでみた。メディアとしての電話はどのようなものかを一つずつ丁寧に考えている本で、色々な発見があって面白かった。`, class: ["large-space-1"]},
        {type: "p", text: `この本は1992年に書かれたものなので、読みながら今の自分の周りにはどのような電話を巡る事象があるかを考えていた。そういえばテレフォンショッキングってテレフォンってついていたじゃん、と思いついた。調べなおしてみると番組内の電話のタイミングは思っていたよりもほんの少しで、コーナーの最後の方で次回のゲストに対して来週の番組出演ができるかどうかを尋ねるぐらいだった。`, class: ["large-space-1"]},
        {type: "p", text: `電話が大衆へ普及していくことで、社会に持ち込まれた「新しい関係のモードやパターン」の具体例の中で、アポイントメントなしに会うことが許容されづらくなったことが本の中で挙げられる。個々の家庭に電話が普及していくことで、よりいつでもどこでも個人に対話を始めることができるようになり、相手の予定を先取りし予め未来の活動を調整することが習慣になっていった。人の活動を時間化する近代と、時間や空間の隔たりを越える電話の特性が共鳴し、電話は「アポイントメント化のメディア」として機能した。`},
        {type: "p", text: `「来週来てくれるかな？」という呼びかけはまさにその機能が発揮されている瞬間だった。`, class: ["large-space-1"]},
        {type: "p", text: `音声が電子的に複製された状態で場所に寄らずにやり取りをする状態は、対面で出会う状態とは違う関係性、環境、空間をつくりだしている。人と人とが非対面的に出会うことが可能になる「電話空間」には、眼差しが伴わない。`},
        {type: "p", text: `風景のことを考える際に、私は「まなざし」がそこに存在しているかどうかを軸に考えている。本書での指摘されている電話空間での眼差しの不在は主に視覚について述べていると読んでいたが、電話における環境が存在するとするならば、そこでのまなざしを考えることもできるように思う。`, class: ["large-space-1"]},
        {type: "p", text: `テレフォンショッキングは「友達の友達はみな友達だ、世界に広げよう友達の輪、輪っ!」が番組テーマとして掲げられている。ゲストの友達が次回のゲストとして登場する。次回のゲストは、コーナーの最後に電話でのみ出演をする。コーナーが始まってから途中でパソコンが設置され、次回ゲストは、電話の際に画面に写真として登場している。見た目を画像で、声と耳を電話で補う出演はよく考えるとなんだか奇妙な気がする。`},
        {type: "p", text: `電話は対面で出会うこととは違う空間を持っているとするならば、番組内で電話をかけている時、そこにはスタジオという共同体と電話によるふたつの関係が立ち上がっていたと言えたかもしれない。スタジオの中で行われるやり取りをしながらも、電話による別の空間で出会い、次週の回に広がっていく。`},
        {type: "p", text: `しかし、ここには生放送という手段も存在しているので複雑であり、今そこまで踏み込む気持ちはない…`, class: ["large-space-2"]},
        {type: "p", text: `本で触れられている「裏マニュアル」や「伝言ダイアル」についてはとても興味深かった。`},
        {type: "p", text: `「裏マニュアル」は電話の非公式や非合法的な使い方を紹介するようなものである。自分が生まれた時には電話はすでに普及しきっていたので、電話にもこういう道具として試されていたような若い時があったと思うと少し面白い。`},
        {type: "p", text: `「伝言ダイアル」は、1986年にNTTが発表していた、音声蓄積サービスである。決まった番号に伝言を残しておいて、その番号に入れられたメッセージを聞き取って、待ち合わせなどの用件のやり取りをしていたそうだ。このサービスを通じて知らない人同士がやり取りを交わしたり、はたまた全く知らない人に向けて言いたいことを言う人がいるなど、「電子的な落書き帳」として機能していた。電話の本来の使い方を上手く組み替えることが流行していたらしい。`, class: ["large-space-1"]},
        {type: "p", text: `「メディアとしての電話」で考えられている状況よりも、今の電話の状況は、大きくではないにせよ変化している。`},
        {type: "p", text: `先日、祖母が友人の勧めでLINE通話を積極的に使うようにしていると話してくれた。確かに、話したい相手とやり取りができれば電話回線なのかインターネット回線なのかは利用者にとっては大きな差はない。`},
        {type: "p", text: `知らない人との通話を目的としたアプリや、寝落ち通話（死語かもしれない）といった流行もスマートフォンの普及以後のことなのではないかと体感している。現在での音声でのやり取りも考えてみたい。まずはバックミラーの存在に気づくことができた。`, class: ["large-space-1"]},
        {type: "a", text: `マップ（PDF）`, class: ["link-list"], link: "https://drive.google.com/file/d/1-NqI3DlJAttemkNyr2CqWA8EUaIFfQbw/view?usp=sharing"},
        {type: "img-button", label: "マップに書き込みを入れた", targetId: "1"},
        {type: "skipbutton", id: "2", label: "参考文献", mobile_label: "2"},
        {type: "h1", text: `参考文献`},
        {type: "p", text: `吉見俊哉・若林幹夫・水越伸,1992,『メディアとしての電話』弘文堂.`,class: ["large-space-1"]},
        {type: "p", text: `図：小林玲衣奈`, class: ["footnote","large-space-2"]},
        {type: "h1", text: `バックナンバー`},
        {type: "a", text: `第4回　テレプレゼンス`, class: ["link-list"], link: "../blog/#020"},
        {type: "a", text: `第3回　見えない・聞こえない・分からない`, class: ["link-list"], link: "../blog/#016"},
        {type: "a", text: `第2回　世界と時間を持っている`, class: ["link-list"], link: "../blog/#011"},
        {type: "a", text: `第1回　編集のまわりから`, class: ["link-list"], link: "../blog/#007"},
        {type: "divider"},
        {type: "skipbutton", id: "3", label: "筆者プロフィール", mobile_label: "3"},
        {type: "h1", text: `筆者プロフィール`},
        {type: "img-button", label: "プロフィール写真", targetId: "2"},
        {type: "p", text: `小林玲衣奈`},
        {type: "a", text: `webサイト`, class: ["link-list"], link: "https://kobayashireina.com"},
        {type: "p", text: `ニセテクスチャメンバー`, class: ["large-space-1"]},
        {type: "divider"},
        {type: "p", text: `本記事、本サイトについてのお問い合わせは以下にお願いします。`},
        {type: "p", text: `nise.texture[a]gmail.com`},
        {type: "p", text: `*[a]は@に変更してください。`, class: ["footnote","large-space-1"]},
    ],

    postHyperlinks: [
        { word: "メディアとしての電話", href: "https://www.koubundou.co.jp/book/b156446.html" },
        { word: "電話", href: "https://www.tokuma.jp/coil/words.html#ya"},
        { word: "テレフォンショッキング", href: "https://ja.wikipedia.org/wiki/%E3%83%86%E3%83%AC%E3%83%95%E3%82%A9%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%82%AD%E3%83%B3%E3%82%B0"},
        { word: "呼びかけ", href: "https://tvhumazu.hatenablog.com/entry/20090724/p1"},    
        { word: "通話", href: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q11262299636"},    
        { word: "輪", href: "https://www.uta-net.com/song/24085/"},    
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: [""],
  };
