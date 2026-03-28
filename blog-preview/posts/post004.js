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
    id: "004",
    category: "飲み会",
    title: '立春！飲み会の記録',
    writer: "ニセテクスチャ",
    date: "2026-03-07",
    tag: ["飲み会"],
    samune: "../blog_img/003/post003-samune.JPG",
    imageExtraSpace: "600",
    images: [

    ],
    textBlocks: [

      { type: "skipbutton", text: `小倉`, id: "indent-1", label: "小倉", mobile_label: "1" },
      { type: "p", text: `・忘年会も新年会も特になく2026年が始まってしまったので、ここらで飲み会が必要だ！と思った。` },
      { type: "p", text: `・参加したいワークショップのため京都に向かう用事があり、そのついでに九州まで足を伸ばすことにした。日程のやり取りをしながら、じゃあ別府でもいくかとなった。`, class: ["indent-1"] },
      { type: "p", text: `・この日は全国的に雪が降った日で、特に京都は街の中が真っ白だった。京都を離れる夕方にはさらに雪の降る方が強くなって、新幹線も結構遅れていた。`, class: ["indent-1"] },
      { type: "p", text: `・その場所場所で地形が違うなんてことは頭ではわかっていたが、雪の降り方の違いを見て本当にそうなんだなと確認する。`, class: ["indent-1"] },
      { type: "p", text: `・寒い日であることはこれでもかと分かっていたので、念の為に駅地下のスリーコインズでグレーのふわふわした手袋を買った。それと押し寿司とビール、せっかく関西に来たのでカールも買って新幹線に乗った。`, class: ["large-space-2", "indent-1"] },
    ],

    postHyperlinks: [
      { word: "資さんうどん", href: "https://www.sukesanudon.com/" },
      { word: "爺さん", href: "https://koichi68.hatenablog.com/entry/2023/04/06/154026" },
      { word: "発売されるシールのために並んでいる", href: "https://search.yahoo.co.jp/realtime/search?ei=UTF-8&rkf=1&ifr=tl_unit&p=%E3%83%8F%E3%83%B3%E3%82%BA%E3%83%9E%E3%83%B3%20%E6%95%B4%E7%90%86%E5%88%B8" },
      { word: "ゴミ袋を配布", href: "https://www.town.kanda.lg.jp/site/gomi/1916.html" },
      { word: "ぶり", href: "https://www.miryoku-zukan.com/info/report/673/" },
      { word: "関あじ", href: "https://www.pref.oita.jp/soshiki/10400/tokusanhin-sekiajisekisaba.html" },
      { word: "space Ⅱ", href: "https://alternative-state.com/ex2/" },
      { word: "ボンディア", href: "https://eshop.kikuya-oita.net/ic/cat-005?srsltid=AfmBOoq1oXMeFgpmpGfAkmrk8Ip8pN6Qqd_BI0ZH5OIETPiiNIVMsA_7" },
      { word: "ロイヤルブレンド", href: "https://fortnumandmason.co.jp/products/15" },
      { word: "2026", href: "https://www.benri.com/calendar/" },
      { word: "全国的に雪が降った日", href: "https://tenki.jp/forecaster/t_yoshida/2026/02/08/37738.html" },
      { word: "カール", href: "https://qa.meiji.co.jp/faq/show/4301?site_domain=default" },
      { word: "自転車", href: "https://youtu.be/LyLnE08WoFI?si=FknDpUTm1Z6XrTns" },
      { word: "石破", href: "https://www.fashion-tokyo.jp/autumn/ja-jp/to-visit/bestdresseraward-w.html" },
      { word: "九州のお酒", href: "https://www.saketime.jp/ranking/kyushu/" },
      { word: "レア", href: "https://www.hokeniryo.metro.tokyo.lg.jp/anzen/anzen/food_faq/chudoku/chudoku09" },
      { word: "中指", href: "https://lets-emoji.com/middle-finger-emoji/" },
      { word: "人差し指", href: "https://lets-emoji.com/index-pointing-up-emoji/" },
      { word: "ウェルカム", href: "https://autumnmeteorite.jp/yasa-ja/2025/hello_and_welcome" },
      { word: "柑橘を剥いている時の様子", href: "https://youtu.be/hcyaXTrQIiQ?si=RHqB2pd1ZHA7S0CT" },
      { word: "耳遠すぎて", href: "https://www.heartpage.jp/contents/magazine/08-00811" },
      { word: "ベンチ", href: "http://osoto.jp/howto/palais_royal.html" },
      { word: "ぷよぷよで連鎖", href: "https://ishikawapuyo.net/simu/pn.html?rw0qg0Ag3yA_G1e1G1i1i1__u06" },
      { word: "空港", href: "https://maps.app.goo.gl/5P3u89YbbkZdxByVA" },
      { word: "小さい盛り上がりの上を歩いたり", href: "https://taiikuhint.com/2022/02/21/enseki/" },
      { word: "太陽が昇って", href: "https://eco.mtk.nao.ac.jp/koyomi/dni/" },
      { word: "押しボタン式", href: "https://nt-diary.seesaa.net/article/2022-06-07.html" },
      { word: "うどんマップ", href: "https://www.tnc.co.jp/store/shop/archives/category/udonmap" },
      { word: "コンペ", href: "https://www.city.yukuhashi.fukuoka.jp/soshiki/40/19313.html" },
      { word: "独特な匂い", href: "https://www.tan-ken.com/ja/blog/3o4jj-6kc" },
      { word: "鬼のパンツ", href: "https://ameblo.jp/5342007/entry-12955572536.html" },
      { word: "ピータン", href: "http://www.ajiwai.com/otoko/make/pida_fr.htm" },
      { word: "お湯のない足湯", href: "https://yuru-to.net/detail.php?oid=48411" },
      { word: "車と猫", href: "https://committees.jsce.or.jp/kikaku/node/44" },
      { word: "ガーン", href: "https://soundeffect-lab.info/sound/anime/" },
      { word: "ひょうたん温泉", href: "https://www.hyotan-onsen.com/" },
      { word: "100kmウォーク", href: "https://yb100.jp/" },
      { word: "10分", href: "https://nifongo.style.coocan.jp/007.htm" },
      { word: "船を漕い", href: "https://www.uta-net.com/song/44398/" },
      { word: "サロンパス", href: "https://www.salonpas.jp/index.html" },
      { word: "とり天", href: "https://www.maff.go.jp/j/keikaku/syokubunka/k_ryouri/search_menu/menu/toriten_oita.html" },
      { word: "お土産屋", href: "https://www.ekimachi1.com/beppu/floor/beppumeihingura" },
      { word: "中崎透", href: "https://oita.keizai.biz/headline/2127/" },
      { word: "ハモ", href: "https://4travel.jp/dm_shisetsu_tips/10588054" },
      { word: "ジェラート", href: "https://co-trip.jp/search?hash_tag=%E3%82%B8%E3%82%A7%E3%83%A9%E3%83%BC%E3%83%88" },
      { word: "手湯", href: "https://map.yahoo.co.jp/v3/place/HhQhYftw7WU/review" },
      { word: "ワニ「3代目イチロウ」", href: "https://wanigame.exblog.jp/17291934/" },
      { word: "カニカキロード", href: "https://www.city.kitakyushu.lg.jp/contents/924_11004.html" },
      { word: "豚骨の匂い", href: "https://news.yahoo.co.jp/expert/articles/4aaa5e0e6bcdcd63f35d1fe10de04ba7e90cc7fc" },
      { word: "白ワイン", href: "https://note.com/koichitanabe/n/nb2605eee3d74#a5455a0c-1736-4106-befa-0ee3055ad75b" },
      { word: "グレーのふわふわした手袋", href: "https://www.palcloset.jp/display/item/2523-KF1-000000/?cl=61&b=3coins&ss=" },
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: ["basic"],
  };
