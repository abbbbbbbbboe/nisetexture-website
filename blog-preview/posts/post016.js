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
    id: "016",
    category: "ぬるい言葉マップ",
    title: '第3回　見えない・聞こえない・分からない',
    writer: "小林玲衣奈",
    date: "2026-06-27",
    tag: ["連載"],
    samune: "../blog_img/thinking-in-lukewarm-words/thumbnail2_tlw.webp",
    imageExtraSpace: "600",
    images: [
        { src: "../blog_img/thinking-in-lukewarm-words/tlw3.webp", caption: "マップ1:キーワードを配置", id: 1 },
        { src: "../blog_img/opening-with-a-given-key/koba_prof.webp", caption: "プロフィール写真", id: 2 },
    ],
    textBlocks: [
        {type: "p", text: `今回は自分の中ではぼんやりと関係しているようにみえることをいくつか取り上げてみる。マップのまとめ方ももっとなんとかならないかと考えてはいるがどうするのが良いか…。`},
        {type: "p", text: `まとまらないいくつかのことを、まとめないままにマップに放り投げてみることにした。`},
        {type: "a", text: `マップ（PDF）`,  class: ["link-list"], link: "https://drive.google.com/file/d/1kFpt8mZlRZp5t7fNZc2lFkzMgD6j942s/view?usp=drive_link"},
        {type: "img-button", label: "マップに書き込みを入れた", targetId: "1"},
        {type: "skipbutton", id: "1", label: "遠くの／音・声", mobile_label: "1"},
        {type: "h1", text: `遠くの／音・声`},
        {type: "p", text: `インタビュー、対話、会話、というところを考えていたけど、最近職場で電話応対が始まって、電話についてもぼんやりと考える。かかってくる電話の中には、絶対これAI代行サービスだろうというものがある。会話（のようなもの）は成り立つけど、本当に数秒だけテンポが悪くてとても奇妙な感じになる。`},
        {type: "p", text: `マイクとスピーカーの中だけのやり取りでも、現実的に私の体はオフィスにあって、電話をしている体がその場にもたらすものがあるので、「適当な返事をしてるんじゃねえ！」と受話器を投げ捨てることもできない。電話の中に環境が立ち上がるとするなら、そこには膨大なデータから算出される結果とその前に立っている私しかいない。どれだけ丁寧に話してもなんだか虚しくなるし、居心地が悪い。電話によって二重の私がただひとつに重なっているだけのような感覚になる。`},
        {type: "p", text: `これを単に快適にしてほしいと思っているわけではなくて、この居心地の悪さによって電話の中に居心地があったんだと思った。`, class: ["large-space-1"]},
        {type: "p", text: `唐突に「1.29 MIKAMI DOMMUNE!｜三上晴子（1961-2015）を照射する！」で、飴屋さんが三上さんに電話で、このまま電話線の中だけの関係でいないか？みたいなことを言ったというエピソードをふと思い出す。`, class: ["large-space-1"]},
        {type: "p", text: `電話が気になっているのは、以前に瀬戸市を散歩していたときに見つけた「テレフォン法話」が面白いと思ったというのもある。特定の番号にかけると、あらかじめ録音されていた法話が聞ける。法話は当番制で、毎月担当の住職が替わる。録音に電話番号でアクセスしておおよそ3分の説法を聞く。配信とかではなく、電話なのがなんだか面白い。わざわざその番号にかけるという一手間が引き立っているような気がしている。URLにアクセスするのと本当は変わらないのかもしれないけれど。`, class: ["large-space-2"]},
        {type: "skipbutton", id: "2", label: "関係性が立ち上げる", mobile_label: "2"},
        {type: "h1", text: `関係性が立ち上げる`},
        {type: "p", text: `奇妙な対話の関係というと、京セラ美術館でみた「中立点｜In-Between」も面白かった。建築物がアクターとなり言葉を使って話をしている。記憶が正しければだが、話の内容もなめらかなおしゃべりではなく、「なにゆうてんの？」な、ぎこちなさがあったような気がする。映像の中にも不自然そうにみえる会話があり、もう一方の映像とも重なるようなそうでないような独特な緊張感で繋がれていた。もちろんそのように設計されているのだけれども、不自然だからなにもないではないということ。わからないと思う私自身もその場においてひとつの関係性の内であること。`, class: ["large-space-1"]},
        {type: "p", text: `豊田市美術館で開催されていた、櫃田伸也「通り過ぎた風景」ではたくさんの発見があった。環境に潜む断片同士がくっつけられたり、繰り返されたりする中で櫃田の風景が立ち上がる。色々な違和感を持ちながらもそれは風景として存在している。環境の中にあるまなざしとそのまなざしも包括する風景。`},
        {type: "p", text: `少し脱線するのだが、発見のうちのひとつだったのは、風景は過去形であるということ。展覧会タイトルの「Scenes Passed By」を見て確かにそうだと思った。だからなにか、と言われると難しいが、自分の中で時間軸の存在がはっきり刺さったような衝撃だった。時間、過去について探ってみたいと思うし、前回触れた、自分の中の偏りや自分自身が価値付けてしまうことへの恐れについても現代思想などを参照して理論で補強してみたいと思う。知識からではなく実経験からゆっくり繋げていく。`, class: ["large-space-2"]},
        {type: "p", text: `図：小林玲衣奈`, class: ["footnote","large-space-1"]},
        {type: "h1", text: `バックナンバー`},
        {type: "a", text: `第2回　世界と時間を持っている`, class: ["link-list"], link: "https://nisetexture.com/blog/#011"},
        {type: "a", text: `第1回　編集のまわりから`, class: ["link-list"], link: "https://nisetexture.com/blog/#007"},
        {type: "divider"},
        {type: "skipbutton", id: "3", label: "筆者プロフィール", mobile_label: "3"},
        {type: "h1", text: `筆者プロフィール`},
        {type: "img-button", label: "プロフィール写真", targetId: "2"},
        {type: "p", text: `小林玲衣奈`},
        { type: "a", text: `webサイト`, link: "https://kobayashireina.com", class: ["link-list"] },
        {type: "p", text: `ニセテクスチャメンバー`, class: ["large-space-1"]},

        {type: "divider"},
        {type: "p", text: `本記事、本サイトについてのお問い合わせは以下にお願いします。`},
        {type: "p", text: `nise.texture[a]gmail.com`},
        {type: "p", text: `*[a]は@に変更してください。`, class: ["footnote","large-space-1"]},
    ],

    postHyperlinks: [
        { word: "1.29 MIKAMI DOMMUNE!｜三上晴子（1961-2015）を照射する！", href: "https://www.dommune.com/streamings/2026/012901/" },
        { word: "テレフォン法話", href: "https://dosenji.com/archives/309" },
        { word: "中立点｜In-Between", href: "https://kyotocity-kyocera.museum/exhibition/20260124-20260301" },
        { word: "通り過ぎた風景", href: "https://www.museum.toyota.aichi.jp/exhibition/hitsuda2026" },
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: [""],
  };
