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
    id: "015",
    category: "日記",
    title: 'もらったカギで開ける',
    writer: "小林玲衣奈",
    date: "2026-06-22",
    tag: ["連載", "日記"],
    samune: "../blog_img/thinking-in-lukewarm-words/thumbnail2_tlw.webp",
    imageExtraSpace: "600",
    images: [
        { src: "../blog_img/opening-with-a-given-key/thumbnail.webp", caption: "　", id: 1 },
        { src: "../blog_img/opening-with-a-given-key/owkg3/blog15_1.webp", caption: "伝票のタイ語", id: 2 },
        { src: "../blog_img/opening-with-a-given-key/owkg3/blog15_2.webp", caption: "解体中のアネックスビル", id: 3 },
        { src: "../blog_img/opening-with-a-given-key/owkg3/blog15_3.webp", caption: "作者は不明の「はぐくみ」", id: 4 },
        { src: "../blog_img/opening-with-a-given-key/koba_prof.webp", caption: "プロフィール写真", id: 5 },
    ],
    textBlocks: [
        {type: "img-button", label: "サムネイル", targetId: "1"},
        {type: "skipbutton", id: "1", label: "シティという自然", mobile_label: "1"},
        {type: "h1", text: `シティという自然`},
        {type: "p", text: `6月になると気分が前向きになってくる。雨が降るのか降らないのかはっきりしない薄曇りの日もあるけれど、朝晩は少しだけ肌寒さがあって心地がいい。`},
        {type: "p", text: `窓をあけて風を通す日が多くなり、ついにベランダに折りたたみのキャンプ用の椅子を置き始めた。キャンプ用なら濡れてもすぐに拭けるし、オフシーズンはたたんで仕舞えばいいので気が楽だ。`},
        {type: "p", text: `ベランダにいる時は、雲やまわりの建物を眺めたりする。道路の向こうにあるアパートの最上階は斜めにカットされたような形をしている。壁の色はくすんでいてイエローとクリーム色の間。`, class: ["large-space-2"]},
        {type: "p", text: `少し前に友達とタイ料理を食べて、久屋大通公園を散歩しながらおしゃべりした。タイ料理屋で話している間に、久屋大通公園の改装について文句ばかり出てきたので、実物を見て歩きながら話すことにしたのだった。`, class: ["large-space-1"]},
        {type: "img-button", label: "伝票のタイ語", targetId: "2"},
        {type: "p", text: `店を出たら日はすっかり落ちていて、スーツを着ていても涼しいと思うぐらいの風が通っていく。同じように散歩している人や早足ですれ違うサラリーマン、芝生の上で集まってわいわいと騒いでいる人たちなど各々の時間を公園で過ごしていた。`, class: ["large-space-1"]},
        {type: "p", text: `久屋大通公園は南北に長く作られていて、地下鉄の駅3駅分にまたがっている。名古屋の中心地のど真ん中を突っ切るというなかなか思い切っている公園である。木々も生い茂っていて気持ちがいいのだけど、縦に突っ切っているから東西の動きが取りずらい。私たちはこの公園とまわりの建物とが離れてしまっている感じについて強めの語気で話した。`},
        {type: "p", text: `市外には素敵な建築物が多いけど市内は本当に少ない。新栄にできたカフェはいい感じだという話もした。IGアリーナは割り箸だという話もした。`, class: ["large-space-2"]},
        {type: "img-button", label: "解体中のアネックスビル", targetId: "3"},
        {type: "p", text: `昔の方が多かった気がするが、久屋大通公園には彫刻や謎のオブジェが多く置かれている。南側の矢場町の方にはでかいオブジェもある。最近こいつにやたら目が止まるようになって、ついつい近くを通ってしまう。街の中にあるにしてはかなりでっかい。けどずっとこれまで、さらりと見逃していたのが結構ショックだった。このオブジェの手前だけ急に緩やかな大階段になっていて、日曜日の午後には、2、3人のグループが等間隔でたくさん座っていた。`, class: ["large-space-2"]},
        {type: "img-button", label: "作者は不明の「はぐくみ」", targetId: "4"},
        {type: "p", text: `仕事をしているオフィスは9階にある。新人の私は外に出かけることも少ないから事務所に缶詰状態だ。窓はあるけどブラインドが下げられていて、きっと何年も上げられたことがないのだろうなと思える感じが漂っている。`},
        {type: "p", text: `オフィスを出て、トイレの横にある扉を開けるとすぐに外の非常階段になっている。扉を開けてその隙間から自然光や風を感じる時、この建物が穴の開いたただの箱に感じる。`},
        {type: "p", text: `9階から街を見ることもあんまりないので、この景色にいつも新鮮さを感じている。仕事で息が詰まった時、席を立って、扉の向こうに誰もいないことに耳をすませてから扉を開ける。`},
        {type: "p", text: `隣のマンションのベランダには洗濯物が干されていたり、人工芝を敷いているベランダがあったり。9階よりも低いビルの屋上やそこにあるタンクを眺めたり、少し向こうにあるアパートの形を見たり。じっくり見る時間もないから、何回か息を大きく吸って吐いて、扉を閉めて自分のデスクに戻る。`, class: ["large-space-2"]},
        {type: "h1", text: `バックナンバー`},
        {type: "a", text: `もらったカギで開ける　2026-05-18`, class: ["link-list"], link: "https://nisetexture.com/blog/#010"},
        {type: "a", text: `もらったカギで開ける　2026-04-20`, class: ["link-list","large-space-1"], link: "https://nisetexture.com/blog/#006"},
        {type: "divider"},
        {type: "skipbutton", id: "1", label: "筆者プロフィール", mobile_label: "2"},
        {type: "h1", text: `筆者プロフィール`},
        {type: "img-button", label: "プロフィール写真", targetId: "5"},
        {type: "p", text: `小林玲衣奈`},
        { type: "a", text: `webサイト`, link: "https://kobayashireina.com", class: ["link-list"] },
        {type: "p", text: `ニセテクスチャメンバー`},
        {type: "p", text: `日記は続いた覚えがないが、毎月自分のためにApple Musicでプレイリストを作るのは2020年11月から続いている。年が下の人に「Apple Music使ってるって年代でますよね」って言われた時の衝撃をいまだに引きずっている。`, class: ["large-space-1"]},
        {type: "p", text: `banner design: 新`, class: ["footnote","large-space-1"]},
        {type: "divider"},
        {type: "p", text: `本記事、本サイトについてのお問い合わせは以下にお願いします。`},
        {type: "p", text: `nise.texture[a]gmail.com`},
        {type: "p", text: `*[a]は@に変更してください。`, class: ["footnote","large-space-1"]},
    ],

    postHyperlinks: [
        { word: "タイ料理", href: "http://charagourme.blog.fc2.com/blog-entry-3045.html" },
        { word: "久屋大通公演", href: "https://maps.app.goo.gl/gGhY9gwJjS9mw6kc6" },
        { word: "カフェ", href: "https://aoi-celestie.com/about/" },
        { word: "IGアリーナ", href: "https://waka77.jp/studium/17aichi/a7_ig-arena.htm" },
        { word: "彫刻や謎のオブジェ", href: "https://npoenbu.jpn.org/" },
        { word: "南側", href: "https://www.city.nagoya.jp/shisei/keikaku/1009818/1009881/1034204/1009894.html" },
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: ["basic","owgk"],
  };
