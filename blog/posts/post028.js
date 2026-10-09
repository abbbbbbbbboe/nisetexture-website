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
    id: "028",
    category: "sleep soundly 安心して眠る",
    title: '#7　軍馬の展示',
    writer: "オオタソラ",
    date: "2026-10-10",
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
      {type: "p", text: `あまりにも多い、そして実際の数からすると少なすぎる遺影が並ぶ部屋を通り過ぎて、軍馬について展示されている部屋に入る。`},
      {type: "p", text: `前の展示室の映像で聴いた「日本の武士道精神が世界に認められたのです。」という言葉が私を落ち着かせない。`, class: ["large-space-2"]},
      {type: "p", text: `九段下にある靖国神社に併設された遊就館で展示されている『令和八年 いななき 「軍馬」にみる英霊のご事績』という展示をみた。いななきは馬の鳴き声。`, class: ["large-space-1"]},
      {type: "p", text: `常設展が終わるとその先にあるスロープを下って、特別展の会場に入る。`},
      {type: "p", text: `入ってすぐの壁には軍馬の歴史や人と馬の関係について簡潔に書いてあって、その先で上映されている「軍馬物語」（昭和7年 山口シネマ制作）に吸い寄せられるように向かい観賞用の椅子に座る。常設展は2時間弱くらい観るのにかかって、それでもすべてきちんと観れた気はしない。疲れていた。`},
      {type: "p", text: `「軍馬物語」は18分の映像ではあるけれど、馬が生まれてから戦地に送られるまでの過程が記録されたわかりやすい映画だった。本や資料ではなんとなくみていたけど映像で見るとリアリティが増した。`},
      {type: "p", text: `映像の横には、馬の埴輪の複製から始まって、古代から近世までの実際の馬具や資料が並べられている。`},
      {type: "p", text: `次のエリアでは明治維新以降の軍馬の育成方法や政策についてまとめられ、書類や写真がメインに並んでいる。太平洋戦争時に各地に動員された馬の数と兵員の数が比べられた表なども展示されている。下馬図書館で読んだ資料で知った徴用馬について触れられた資料もあった。`},
      {type: "p", text: `「皇室と馬」というタイトルで明治・大正・昭和天皇と皇族の愛用していた馬具などが肖像と共に展示されていた。`},
      {type: "p", text: `靖国神社ではかつて馬場があり例大祭の際には競馬が行われていた。靖国神社と馬の関係についても数点の浮世絵と共に当時の様子が展示してある。`},
      {type: "p", text: `最後には「英霊と馬」というタイトルで靖国神社に祀られている戦争の犠牲になった軍人と馬の個別のエピソードが並べられる。パンフレットをみると馬ではなく人の名前と遺影が大きく並ぶ。`, class: ["large-space-2"]},
      {type: "p", text: `軍馬をテーマに扱う展示は珍しいと思う。そもそも平和学習が目的の資料館や博物館があることは知っていても、軍事関係の資料を収蔵・展示する場所についてはあまり知らない。同じ戦争の結果としての資料が、ある種の物語によって構成された施設だった。その中での軍馬の展示だ。`, class: ["large-space-1"]},
      {type: "p", text: `また、靖国神社という場所についても純粋な戦争の犠牲になった軍人を祀るための場所だけではなく政治的に常に利用される場所なのだと思う。同時に、実際に足を運んでみて想像よりも他の神社と同じようにも見えた。メディアを通じてみた印象とも違った。`, class: ["large-space-1"]},
      {type: "p", text: `遊就館の常設展は扇動的な部分も多く含んだ構成になっていると思った。単純に資料を時代に合わせて並べたというよりも明治維新後、「なぜ戦争をしないといけなかったのか」「戦争をして世界に認められた」という大きな物語があり、その物語を遺品を用いたエピソードで強化するというような構成だったと思う。前半にも書いたけれど、かなりの面積と物量で鑑賞には時間がかかったし、すべてきちんと観れたとは思わない。その中での感想だ。受付横の看板には1時間から1時間30分は鑑賞にかかるという文言も書かれていた。しかしながら、その分、観やすく没入しやすいとも感じた。例えば美術館での企画展示ではキュレーションという形で構成や物語化されている。そもそも美術の前提には歴史があるし、鑑賞するにはその歴史そのものを俯瞰して疑ってみなければいけない。`, class: ["large-space-1"]},
      {type: "p", text: `平和学習を目的とした資料館では個別のディテールから受けるショッキングな感情が、戦争による悲しさや虚しさ、あるいは暴力的な痛みのようなものに対する想像力を作る体験がある。遊就館は、それではなぜ戦争を行わなければいけなかったのかという疑問に対する一つの回答を提示するための場所としてあるのではないかと思った。靖国神社は戦死した軍人が祀られている場所で、その回答を肯定的に提示し、正当化せざるおえない環境なのではとも思う。つまり展示にあるメッセージの正しさをジャッジするということよりも、物語によって進行する展示には常に物語そのものに疑いの目を向けなければならない。`},
      {type: "p", text: `特別展については、軍馬をテーマに扱っているけれど、国家や天皇、人が全面に出ているのも興味深かった。飼育や管理の都合上、馬には名前がつけられていたはずなのに、あまり個別の馬の名前は出ないし、天皇や人ばかりが固有名詞で語られる。陸軍大将乃木希典がロシア将軍ステッセルから譲り受けた馬の名前が出てくるけれど、結局はこの二人のエピソードを強化するためのもののように感じた。特別展全体を通して軍馬が主題というよりも、軍馬を軸として軍人や天皇が主題の展示のようだった。`, class: ["large-space-1"]},
      {type: "p", text: `最後に喫茶スペースで海軍タルトを注文して食べた。ついてきた説明には特攻する機内で食べられたものと書かれていた。`, class: ["large-space-2"]},
      {type: "h1", text: `バックナンバー`},
      {type: "a", text: `#1 安心して眠る方法`, class: ["link-list"], link: "../blog/#004"},
      {type: "a", text: `#2 マツボックリ イン タイホウ`, class: ["link-list"], link: "../blog/#008"},
      {type: "a", text: `#3 あなたの馬`, class: ["link-list"], link: "../blog/#013"},
      {type: "a", text: `#4 馬魂碑`, class: ["link-list"], link: "../blog/#017"},
      {type: "a", text: `#5 訓練された馬`, class: ["link-list"], link: "../blog/#021"},
      {type: "a", text: `#6 馬の話`, class: ["link-list"], link: "../blog/#026"},
      {type: "divider"},
      {type: "skipbutton", id: "2", label: "筆者プロフィール", mobile_label: "2"},
      {type: "h1", text: `筆者プロフィール`},
      {type: "img-button", label: "プロフィール写真", targetId: "2"},
      {type: "p", text: `オオタソラ`},
      {type: "a", text: `webサイト`, class: ["link-list"], link: "https://otasora.website/"},
      {type: "p", text: `いくつかの順序、並び替える単語、同じTシャツが何枚も干してあるベランダ、信用できる肩書き、靴下の底面に穴が開くのは靴のサイズが合っていないから。`, class: ["large-space-1"]},
      {type: "p", text: `banner design: オオタソラ`, class: ["footnote","large-space-1"]},
      {type: "divider"},
      {type: "p", text: `本記事、本サイトについてのお問い合わせは以下にお願いします。`},
      {type: "p", text: `nise.texture[a]gmail.com`},
      {type: "p", text: `*[a]は@に変更してください。`, class: ["footnote","large-space-1"]},
    ],

    postHyperlinks: [
      { word: "靖国神社", href: "https://www.yasukuni.or.jp/" },
      { word: "遊就館", href: "https://www.yasukuni.or.jp/yusyukan/" },
      { word: "令和八年 いななき 「軍馬」にみる英霊のご事績", href: "https://www.yasukuni.or.jp/yusyukan/news_detail.html?id=682" },
      { word: "スロープ", href: "https://www.yamane-m.co.jp/kurasu/4325/" },
      { word: "扇動", href: "https://hyogen.info/word/6633066" },
      { word: "乃木希典", href: "https://kokuracastle-story.com/2020/07/story19/" },
      { word: "ステッセル", href: "https://ja.wikipedia.org/wiki/%E3%82%A2%E3%83%8A%E3%83%88%E3%83%BC%E3%83%AA%E3%82%A4%E3%83%BB%E3%82%B9%E3%83%86%E3%83%83%E3%82%BB%E3%83%AA" },
      { word: "海軍タルト", href: "https://fukuya.ocnk.net/product/14" },
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: [""],
  };
