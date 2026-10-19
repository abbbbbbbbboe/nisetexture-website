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
    id: "030",
    category: "日記",
    title: 'もらったカギで開ける',
    writer: "小林玲衣奈",
    date: "2026-10-19",
    tag: ["連載", "日記"],
    samune: "../blog_img/opening-with-a-given-key/thumbnail.webp",
    imageExtraSpace: "600",
    images: [
        { src: "../blog_img/opening-with-a-given-key/thumbnail.webp", caption: "　", id: 1 },
        { src: "../blog_img/opening-with-a-given-key/koba_prof.webp", caption: "プロフィール写真", id: 2},
    ],
    textBlocks: [
        {type: "img-button", label: "サムネイル", targetId: "1"},
        {type: "skipbutton", id: "1",label: "兎のような早さ、亀のような歩み", mobile_label: "1"},
        {type: "h1", text: `兎のような早さ、亀のような歩み`},
        {type: "p", text: `夏になると2、3年に1回ぐらいコンビニにあるパックの冷製ポタージュをストローで飲みたくなる。昼間に寄るセブンイレブンにはパックのポタージュが棚に用意されていて、それを見て飲みたい気持ちになって、夕方に家の最寄りのファミリーマートに行ったらパックタイプを見つけることはできなくて、仕方なくプラカップのコーンポタージュを買って帰った。`},
        {type: "p", text: `しばらくしたらセブンイレブンのつめた〜いコーナーから冷製のポタージュは姿を消していて、またしばらくしたら、温かそうなスープが並び始めた。`, class: ["large-space-1"]},
        {type: "p", text: `家の前の広めの公園を通り過ぎる時、富士山すべり台の上で明らかに寝転がっている人を見つける。公園の入り口にUberのリュックがついた自転車が停めてあった。`},
        {type: "p", text: `朝は歩きながらこの先の季節、スーツの上からコートを着ている想像をする。`, class: ["large-space-1"]},
        {type: "p", text: `どうしても塩パンが食べたい日があった。昼時に行くことができそうなパン屋を調べながら出勤して、近くの気になっていたパン屋に行く事に決めた。以前お店の前を通りかかった時お店の外にまでお客さんが並んでいたのを見て、きっと美味しいはずだと思っていた。`},
        {type: "p", text: `その日は12:00より少し早めにお店に着くことができた。お店に入るとパンとパスタの香りがした。キッチンが隣のレストランと繋がっていて、そちらは既にたくさんのお客さんで賑わっていた。`},
        {type: "p", text: `塩パンとミニクロワッサンをトレーにとった。他にも美味しそうなパンが並んでいたけど、そんなに取ってもお腹いっぱいになってしまうだけだなとか思って我慢した。レジ列に並んで、自分の会計の時にレジのお姉さんが「こちら焼き立てがありますが、交換しますか？」と声をかけてくれた。衝撃だった。`},
        {type: "p", text: `こういう時めんどくさがって「いや大丈夫です」というのが大抵なのだけど、今回はそれを言いかけて、「ありがとうございます。お願いします。」と言えた。`},
        {type: "p", text: `というか、パン屋さんってパンの見た目で焼き立てって分かるんだ。きっと見た目だけじゃなくて、匂いとか温かさとかからだろうか。もしかしたら、私が焼きたてでないパンが集まっているところから選ぶのを見ていて、かわいそうな気持ちになっていたかもしれない。`},
        {type: "p", text: `オフィスに戻ってデスクで塩パンを食べる。取り出す時にほのかに温かくてつい嬉しい。比べたわけじゃないけどやはり焼き立ての方が美味しいと思えた。`, class: ["large-space-2"]},
        {type: "h1", text: `バックナンバー`},
        {type: "a", text: `もらったカギで開ける　2026-09-20`, class: ["link-list"], link: "../blog/#027"},
        {type: "a", text: `もらったカギで開ける　2026-08-17`, class: ["link-list"], link: "../blog/#022"},
        {type: "a", text: `もらったカギで開ける　2026-07-20`, class: ["link-list"], link: "../blog/#019"},
        {type: "a", text: `もらったカギで開ける　2026-06-22`, class: ["link-list"], link: "../blog/#015"},
        {type: "a", text: `もらったカギで開ける　2026-05-18`, class: ["link-list"], link: "../blog/#010"},
        {type: "a", text: `もらったカギで開ける　2026-04-20`, class: ["link-list"], link: "../blog/#007"},
        {type: "divider"},
        {type: "skipbutton", id: "2", label: "筆者プロフィール", mobile_label: "2"},
        {type: "h1", text: `筆者プロフィール`},
        {type: "img-button", label: "プロフィール写真", targetId: "2"},
        {type: "p", text: `小林玲衣奈`},
        {type: "p", text: `ニセテクスチャメンバー`},
        {type: "p", text: `ここ2年ほど、10月になると紅白歌合戦の出演者を予想している。今年も予想する。`, class: ["large-space-1"]},
        {type: "p", text: `banner design: 新`, class: ["footnote","large-space-1"]},
        {type: "divider"},
        {type: "p", text: `本記事、本サイトについてのお問い合わせは以下にお願いします。`},
        {type: "p", text: `nise.texture[a]gmail.com`},
        {type: "p", text: `*[a]は@に変更してください。`, class: ["footnote","large-space-1"]},
    ],

    postHyperlinks: [
          { word: "つめた〜い", href: "https://dailyportalz.jp/b/2006/08/10/c/" },
          { word: "富士山すべり台", href: "https://soubee.hatenablog.com/entry/2021/02/26/213553" },
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups:  ["basic","owgk"],
  };
