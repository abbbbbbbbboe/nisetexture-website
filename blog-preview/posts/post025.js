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
    id: "025",
    category: "日記",
    title: 'こぼれちゃうよ',
    writer: "新",
    date: "2026-09-14",
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
        {type: "skipbutton", id: "2", label: "7月23日 木曜日", mobile_label: "2"},
        {type: "h1", text: `2月24日 月曜日 晴れ`, class: ["large-space-1"]},
        {type: "p", text: `慌てて家を飛び出す。12時過ぎ、雲ひとつない空。高校生の頃から使っていた眼鏡の丁番が外れてしまったので、新しい眼鏡を受け取りに向かっていた。事前に視力検査をして、レンズの度数を新しくした。印象も変えたくて、フレームをボストンからオーバルにした。意外と顔に馴染む。賢そうにも見える。今までより縦幅が狭いため、視界にフレームが入り込む感じが少し気になる。乱視も以前より酷くなり、新しい眼鏡をかけて歩いてみると若干ふらふらする。まあ、いずれ慣れるだろう。`},
        {type: "p", text: `前から欲しいと思っていたクロスバイクをまた見に来て、よし、買うぞと決断する。購入の手続きを済ませ、マットブラックの車体を背後に置きながら契約書の説明を受けているが、暖房の効き過ぎた店内でダウンを脱ぐタイミングを見失い、途中から意識が朦朧。と。して。い。た。気づいたら約7万円の翼を入手。入手ってひらがなにすると可愛い。にゅうしゅ。`},
        {type: "p", text: `三軒茶屋のtwililightで、会社の先輩が絵を展示している。ここに来る途中、実は『have a good MARKET!!!』というイベントで目が3つある北風と太陽に遭遇したのだ。目がたくさんあるのにそのどれとも合わなかった。`},
        {type: "p", text: `その賑わいをあとに狭い階段を上ると、書店とカフェとギャラリーが併設された静かな空間が出迎えてくれた。キャンバス、薄い画用紙、シーラーを塗った木製パネル。それに冬の乾いた風みたいな筆致。木枠に入っていたり、絵よりも大きなアルミフレームに収められていたり、壁の高い位置に配置されていたりした。普段やわらかく話す先輩の、ちょっとしたいたずらを感じる。一緒にチャイを飲もうと誘われて屋上へ出てみたけど、まだ空気は冷たくて、ここで飲むのはつらいねと笑いながらすぐに室内へ戻った。`},
        {type: "p", text: `渋谷を通り過ぎて南青山まで歩いたから、とてもへとへとです。途中ドトールに入り、温かい紅茶にレモンポーションを溶かして飲んだ。ドトールってかなり好きなカフェなんだけど、ドトールが好きですと声に出しているひとを見たことがない気がする。適当にInstagramをスクロールして、この服欲しいなとか、次はこんな感じのパーマをかけようかなとか考えているともう18時。今日で寒波が終わり、明日から暖かくなるらしい。Hot & Coldを聴きながら、すっかり葉を落としたイチョウ並木を歩いて帰る。`, class: ["large-space-2"]},
        {type: "skipbutton", id: "3", label: "10月15日 木曜日", mobile_label: "3"},
        {type: "h1", text: `8月4日 火曜日 晴れのち曇り`, class: ["large-space-1"]},
        {type: "p", text: `最高気温30℃。窓を開けるとぬるい風が侵入してきて、平成の夏みたいだと思う。弟が「この暑さ懐かしくね？」と言いながら、素早く朝食を済ませる。平成の夏が本当にこのくらいだったかは正直覚えてないけど、30℃で涼しいと感じる身体に改造されてしまったのはたしかだ。冷蔵庫にあったシャインマスカットを一粒もぎって噛んだら、冷たい果汁がわっと飛び出してきて歯茎が終わった。「後悔の連鎖、運命への絶望、病の不安、死の恐怖」。電車広告の文字列に慄く。`},
        {type: "p", text: `そういえば最近setlogを始めたけど、私の投稿が本当につまんなくて。きっかけはすこし前に大学の同期が開いてくれた慰労会。ちょっとお酒も飲もうかなと“ベリールージュ”の文字を指差した。「ほかに誰か飲む？」「ボラボラってやつも気になるね」「ピザとパスタは食べたいよねー」「あと適当にサラダとか頼む？」「ここって瀧くんのバイト先らしいよ」「瀧くんって『君の名は。』の？」「確かに内装こんな感じだった気がする」「意外と店員さん元気な声出すんだね」`},
        {type: "p", text: `みんな真面目に更新していて、お祭りや展示、フェス、インド！？！？！？の絶景が流れてきたりと楽しい。私は一週間に1、2回更新するかどうかの頻度で、基本その日の気候を載せるのみ。「あつい」「無理な湿度」「今日は気持ちいい♪」といった温度感覚ベースのテキストと、空と街並みを2秒映しただけの見応えのないvlog。`},
        {type: "p", text: `これは全然違う日の、友人とTシャツを作った話なんだけど。元々プリントされている赤いハートの形が気に入らなくて、その上から黒いハートを刷ったり、公園にある馬の遊具をPhotoshopで加工してTシャツのボディいっぱいに配置してみたり、“ALONE”という文字を入れたりした。こういうのをsetlogに載せればいいのかな。今年の夏は、いまのところそんな感じ。`, class: ["large-space-2"]},
        {type: "h2", text: `バックナンバー`},
        {type: "a", text: `こぼれちゃうよ (2026-04-13)`, class: ["link-list"], link: "../blog/#005"},
        {type: "a", text: `こぼれちゃうよ (2026-05-11)`, class: ["link-list"], link: "../blog/#009"},
        {type: "a", text: `こぼれちゃうよ (2026-06-15)`, class: ["link-list"], link: "../blog/#014"},
        {type: "a", text: `こぼれちゃうよ (2026-07-13)`, class: ["link-list"], link: "../blog/#018"},
        {type: "a", text: `こぼれちゃうよ (2026-08-24)`, class: ["link-list","large-space-1"], link: "../blog/#024"},
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
      { word: "ボストン", href: "https://share.google/qFlSpAk4sJLEVaZjN" },
      { word: "オーバル", href: "https://higuchiyuko.tokyo/products/3168800032267?srsltid=AfmBOorQ82Hy6ijewVCy4tKRMVcpFHc7hB-WUuOlU6Vqrtj9HHJ7BX2O" },
      { word: "乱視", href: "https://www.reddit.com/r/findapath/comments/16jcy39/astigmatism_question_for_reddit_warriors/?tl=ja" },
      { word: "朦朧", href: "https://gendai.media/articles/-/170712?page=2" },
      { word: "入手", href: "https://gunpla-beginning.com/%E4%BC%9D%E8%AA%AC%E3%83%BB%E5%B9%BB%E3%81%AE%E3%83%9D%E3%82%B1%E3%83%A2%E3%83%B3%E5%85%A5%E6%89%8B%E6%96%B9%E6%B3%95%E3%81%BE%E3%81%A8%E3%82%81-%E6%94%BB%E7%95%A5%E6%83%85%E5%A0%B1-%E3%83%9D%E3%82%B1/" },
      { word: "twililight", href: "https://www.instagram.com/twililight_/" },
      { word: "have a good MARKET!!!", href: "https://haveagood.market/" },
      { word: "Hot & Cold", href: "https://youtu.be/lOX73kBRyWs?si=t905cfCxMIh2IeqO" },
      { word: "平成の夏", href: "https://youtu.be/l0GN40EL1VU?si=P21RugMHTn1A8ChS" },
      { word: "シャインマスカット", href: "https://www.naro.go.jp/laboratory/nifts/shine-muscat/about.html" },
      { word: "慄く", href: "https://gendai.media/articles/-/158990?page=2" },
      { word: "setlog", href: "https://apps.apple.com/jp/app/setlog/id6587576438" },
      { word: "バイト先", href: "https://share.google/eWxKg4DVd6ibTolbJ" },
      { word: "君の名は。", href: "https://share.google/aimode/3Ee8id2cSjc0anKCp" },
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: [],
  };
