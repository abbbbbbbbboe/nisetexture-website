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
    id: "017",
    category: "sleep soundly 安心して眠る",
    title: '#4　馬魂碑',
    writer: "オオタソラ",
    date: "2026-07-11",
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
        {type: "p", text: `都営下馬二丁目アパート第３集会所の敷地の一角に石碑がある。馬魂碑。馬のための石碑。戦争に関わった馬のための石碑。私はこの石碑の近所に住んでいる。`, class: ["large-space-1"]},
        {type: "p", text: `馬魂碑について書いてみる。`},
        {type: "p", text: `この場所には五つの石碑が並んでいて、そのうちの二つに馬魂碑、他は、馬頭観音菩薩・軍馬梨山号・馬頭観音と書かれている。集会所の砂利がひかれた少し寂しい空間の端に、土台はコンクリートで四角く固められていて、そこに埋め込むようにこの五つの石碑が並んでいる。コンクリートと石碑の間から少しだけ草が突き出している。その周りを忙しなく少し大きなアリが行ったり来たりしている。`, class: ["large-space-1"]},
        {type: "p", text: `私はその足で下馬図書館に向かう。`},
        {type: "p", text: `図書館のカウンターで別の図書館から取り寄せてもらった「グラフせたがや 第31号～第41号」を借りる。「グラフせたがや」は「1978 年（昭和 53 年）創刊号から 1996 年（平成８年）第 51 号まで世田谷区より発行されていた広報誌」*1だ。この雑誌では、奥付けのページに「碑文散歩」という企画が連載されている。この企画が成立するほど世田谷区には碑文がたくさんある。`, class: ["large-space-1"]},
        {type: "p", text: `グラフせたがや「碑文散歩」の「馬魂碑」の回は第34号に掲載されている。碑文の内容は以下のように書かれている。実際の馬魂碑からは解読しづらい部分もあったので、テキストになっていて助かった。`, class: ["large-space-1"]},
        {type: "p", text: `ーー`},
        {type: "p", text: `我部隊保管ノ軍馬ハ我隊将士ト生死ヲ倶ニスヘキ戦友ニシテ平戦両時孜々黙々内ニ外ニ多大ノ功績ヲ残セシモノ枚挙ニ遑アラス 其ノ間不幸或ハ敵弾ニ斃レ或ハ不慮ノ危害ヲ蒙リ或ハ又病魔ニ冒サレ遂ニ死ニ至レル其ノ最後ニ想ヒ到レハ憐憫ノ情ニ堪ヘス`},
        {type: "p", text: `茲ニ犠牲馬ノ霊ヲ祀リ其ノ冥福ヲ祈リ将来保管馬愛護ノ精神的自覚ヲ促サントシテ此ノ碑ヲ建ツ`, class: ["large-space-1"]},
        {type: "p", text: `昭和十四年十二月`},
        {type: "p", text: `野砲兵第一聯隊留守隊長 陸軍砲兵中佐（正六位勲四等）原 捷吉`, class: ["large-space-1"]},
        {type: "p", text: `ーー`, class: ["large-space-2"]},
        {type: "p", text: `以下、ChatGPTで現代語訳した。`, class: ["large-space-1"]},
        {type: "p", text: `ーー`},
        {type: "p", text: `「我が部隊で飼育・管理してきた軍馬は、部隊の将兵と生死をともにする戦友であり、戦時・平時を問わず、黙々と職務に励み、内地でも戦地でも数えきれないほど多くの功績を残した。`},
        {type: "p", text: `しかし、その中には不幸にも敵弾に倒れたもの、不慮の事故によって命を落としたもの、あるいは病に侵され、ついには死に至ったものも少なくない。その最期を思うと、深い哀れみの念を禁じ得ない。`},
        {type: "p", text: `ここに、犠牲となった軍馬の霊をまつり、その冥福を祈るとともに、将来にわたって軍馬を大切にする精神を育み、その自覚を促すため、この碑を建立する。`, class: ["large-space-1"]},
        {type: "p", text: `昭和14年（1939年）12月`},
        {type: "p", text: `野砲兵第一連隊 留守隊長 陸軍砲兵中佐（正六位 勲四等）原 捷吉（はら しょうきち）」`, class: ["large-space-1"]},
        {type: "p", text: `ーー`, class: ["large-space-2"]},
        {type: "p", text: `「碑文散歩」に書かれた解説には、この石碑がある場所は元々雑木林で、明治ごろから陸軍の施設ができ、昭和二十五年から輜重兵大隊・近衛輜重兵大隊が設けられたこと。`},
        {type: "p", text: `明治三十一年には、野砲兵第一旅団司令部・近衛野砲兵聯隊・野砲兵第一聯隊、広大な駒沢練兵場ができたこと。`},
        {type: "p", text: `掲載当時には、公園や病院・学校に生まれ変わっていること。`},
        {type: "p", text: `『しもうま』（昭和四十五年発行、下馬史跡保存会刊）という書籍に記された「馬魂碑」についての内容が書かれている。`, class: ["large-space-1"]},
        {type: "p", text: `この場所で飼育されていた馬は、軍馬だ。軍隊のための馬で、兵隊が乗って戦う馬だけでなく戦場で食料や物質を運んだり、大砲を運んだりするための馬だった。この連載の2回目の松ぼっくりが詰められた大砲もまさにここの馬たちが運ぶように作られていた。`, class: ["large-space-1"]},
        {type: "p", text: `「碑文散歩」で記載されている住所は、下馬二-三八だ。ここは現在、学校になっていて、今石碑があるのは下馬二-三三-三三になっている。まだ今の場所になる前の映像を見つけた。`},
        {type: "a", text: `「馬魂碑 都営下馬住宅の公園内」yuta kato　youtube`, class: ["link-list","large-space-1"], link: "https://youtu.be/R7QdMtoZ7NI?si=rZZJ-n2NJ2mHutZU"},
        {type: "p", text: `9年前の映像だ。今のようにコンクリートにならされた場所に等間隔に並べられているわけではなく、敷地の角にバラバラに設置されている。雑然としているが、涼しそうな場所だと思った。移動されつつも石碑として記憶が残る。残そうとした人たちのことも想像する。`, class: ["large-space-2"]},
        {type: "p", text: `車の助手席に座っている。運転する友人の横顔をみる。目的も目的地もなくただのドライブ。免許がないから聞いてみる。「車を運転するのは翼が生えて飛んでるみたいな感覚？それとも、足が早くなった感覚？」うーんと悩む。「どっちかというと翼かもね。」と返ってくる。私は実感が持てない。よくわからない。`, class: ["large-space-1"]},
        {type: "p", text: `自分の想像以上の力を操ることを怖いと思うことがある。自転車に乗るのも時々怖い。電動工具もいやになる。よそ見して取り返せない失敗をした自分を想像する。車の運転だけはこのままできずに生きていきたい。だけれど、この動力をきちんと操れるようになったら私はもっと自由になれるのかもとも思う。まさに翼で、ここからいつでもすぐに逃げ出すことも、駆けつけることも、会いに行くこともできる。その力は強く、私を自由にする。`, class: ["large-space-1"]},
        {type: "p", text: `馬だったらどうか？馬は動力だった。汽車や自動車ができる前には当たり前に街の中にいて人や物を運んでいた。しかし、馬は動物で、体調も機嫌も悪くなれば特定の人にだけ懐いたりもする。好物もそれぞれ違って、鬣の色も違う。単なるエンジンやパワーではなく友になり、愛情を向ける対象になるのだ。一方的にコントロールする対象ではなく、伴走する相手になって「怖さ」以上のことを引き受けながら共に生きることもできるかもしれない。`, class: ["large-space-2"]},
        {type: "a", text: `世田谷区立図書館 パスファインダー 第１号『世田谷区の「道の歴史」を調べる』2016年10月`, class: ["textlink", "large-space-1"], link: "https://libweb.city.setagaya.tokyo.jp/images/upload/pathfinder_no120241125105552.pdf", prefix: "※1. "},
        {type: "skipbutton", id: "2", label: "参考リンク", mobile_label: "2"},
        {type: "h1", text: `参考リンク`},
        {type: "a", text: `移築整備された野砲兵第一聯隊の馬魂碑（世田谷）`, class: ["link-list"], link: "https://senseki-kikou.net/?p=43515"},
        {type: "a", text: `桜花の絆 東京都世田谷区 馬魂碑`, class: ["link-list"], link: "http://oukanokizuna.web.fc2.com/cyukonhi/tokyo/setagaya-simoma-bakon.html"},
        {type: "a", text: `武蔵野・多摩MTB散歩 Pottering w/Musashino Tama Bike , Copyright 2001-2026 nobish 馬魂碑`, class: ["link-list"], link: "http://nobish2025.cloudfree.jp/2534bakon.html"},
        {type: "a", text: `東京街歩き 三軒茶屋の戦跡と珍景・絶景を巡る`, class: ["link-list", "large-space-1"], link: "https://www.youtube.com/watch?v=qRsAoXJNWKc&t=262s"},
        {type: "h1", text: `バックナンバー`},
        {type: "a", text: `#1 安心して眠る方法`, class: ["link-list"], link: "../blog/#004"},
        {type: "a", text: `#2 マツボックリ イン タイホウ`, class: ["link-list"], link: "../blog/#008"},
        {type: "a", text: `#3 あなたの馬`, class: ["link-list", "large-space-1"], link: "../blog/#013"},
        {type: "divider"},
        {type: "skipbutton", id: "3", label: "筆者プロフィール", mobile_label: "3"},
        {type: "h1", text: `筆者プロフィール`},
        {type: "img-button", label: "プロフィール写真", targetId: "2"},
        {type: "p", text: `オオタソラ`},
        {type: "a", text: `webサイト`, class: ["link-list"], link: "https://otasora.website/"},
        {type: "p", text: `梅雨が長く洗濯物が干せない。コインランドリーに行くようになった。三百円で30分、まるまる乾燥する。`, class: ["large-space-1"]},
        {type: "p", text: `banner design: オオタソラ`, class: ["footnote","large-space-1"]},
        {type: "divider"},
        {type: "p", text: `本記事、本サイトについてのお問い合わせは以下にお願いします。`},
        {type: "p", text: `nise.texture[a]gmail.com`},
        {type: "p", text: `*[a]は@に変更してください。`, class: ["footnote","large-space-1"]},
    ],

    postHyperlinks: [
        { word: "都営下馬二丁目アパート第３集会所の敷地の一角", href: "https://maps.app.goo.gl/azgmWyEqdiitxfgk7" },
        { word: "馬頭観音", href: "https://www.butuzou-world.com/dictionary/bosatsu/batoukannon/" },
        { word: "下馬図書館", href: "https://libweb.city.setagaya.tokyo.jp/contents?1&pid=55" },
        { word: "近衛輜重兵大隊", href: "https://adeac.jp/tamashin/iiif/mp2020e041w004-200010/041W-004/uv#?c=0&m=0&cv=0&r=0&xywh=-343%2C24%2C2348%2C1017" },
        { word: "野砲兵第一聯隊", href: "https://ja.wikipedia.org/wiki/%E9%87%8E%E6%88%A6%E9%87%8D%E7%A0%B2%E5%85%B5%E7%AC%AC1%E9%80%A3%E9%9A%8A" },
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: [""],
  };
