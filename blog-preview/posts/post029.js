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
    id: "029",
    category: "日記",
    title: 'こぼれちゃうよ',
    writer: "新",
    date: "2026-10-12",
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
        {type: "skipbutton", id: "2", label: "6月20日 木曜", mobile_label: "2"},
        {type: "h1", text: `6月20日 木曜 曇り`, class: ["large-space-1"]},
        {type: "p", text: `Webデザインが難しくて身動きが取れなくなる。苦手だ。いますぐ逃げ出したい。でもこの案件の担当は私だから、私が、手を動かして進めないといけない（HELP！）。`},
        {type: "p", text: `印刷なら、画面を構成する要素の位置を最後は固定する。A4はいつまでも210×297mmだから。そう決まっているから。でもWebサイトはそういうわけにもいかない。横幅1920pxのモニターで画面いっぱいに表示することもあれば、画面の半分だけで開くこともある。1440pxでちょうどよかったものが1024pxでは窮屈になり、768pxあたりで耐えられなくなって、375pxでは縦にみちみちと並ぶようになる。さっきまで一行だった見出しの最後の一文字が次の行に落ちる。そのせいで見出しの高さが変わり、下にあったボタンも一緒に落ちる。ついさっきまで見えていた写真が見切れる。だからといって全部固定すると、今度は別の画面で破綻する。1px単位で可変する、それがWebサイト。ロゴは大体画面上部左上もしくはセンターで、メニューボタンは右上に。ウィンドウのサイズに応じていい感じにしないと。どんな画面でも破綻しない仕組みにしないと。実装しやすいものにしないと。更新されても崩れないようにしないと。ボタンはボタンらしく、押してもらえるようにしないと。スマートフォンなら指で押せる大きさにしないと。でも、どこに配置してもいいわけではないのに、その場所にずっといてくれるわけでもないんでしょ？レスポンシブという言葉が私を惑わせる（HELP！！）。こうやってひとつずつ考えているはずなのに、考えれば考えるほど、どれが自分で決めたことで、どれがWebの構造上仕方がないことなのか分からなくなってくる（HELP！！！）。`},
        {type: "p", text: `これでいいのかなと悩みながら作る。途中、作業画面を見てもらったら、「惰性で作っているように見える」と言われる。惰性。それ以外の言葉を何も覚えていない。帰るか。バスに乗ろうとしたら目の前で扉が閉まる。いつもならどうでもいいことなのに落ち込む。夜がまだ涼しくてよかった。`, class: ["large-space-2"]},
        {type: "skipbutton", id: "3", label: "8月7日 金曜", mobile_label: "3"},
        {type: "h1", text: `8月7日 金曜 晴れ`, class: ["large-space-1"]},
        {type: "p", text: `撮影の差し入れが余ったのでどうぞ、と小ぶりな缶ジュースをもらった。私は撮影に参加していないのだが。“KAGOME 100CAN Peach Blend”のクラシカルなタイポグラフィーに、半分に切られた林檎と瑞々しい桃。それを囲うように伸びる青い蔦と葉。桃にかかる偽物の光芒が憎い。`},
        {type: "p", text: `数日前からデザインチームの残業が続いており、「今日こそ早く帰りたいですね」と隣で作業している先輩と話していたら、外からドンッと大きな音がした。オフィスにいた皆が一斉にブラインドの隙間を覗く。今いる場所の窓からは見えない。身を乗り出し顔を左に向けてなんとか視認する。花火。「そういえば弟夫婦が長岡の花火大会に行ったみたいで、うん、フェニックス？がすごかったらしいです」と、誰かが話し始める。早速YouTubeで検索する。夜空を奪うありえない光量。小さな画面でも迫力を感じる、気絶しそうなほどの白。`},
        {type: "p", text: `盛岡に住んでいたとき、ピアノ教室へ向かう道中に『踊ろうサンダーバード』というラーメン屋があった。中学生の私は、当時所属していたバドミントン部の苦手なキャプテンがそこでラーメンを啜っているのを目撃する。その日を境に、店の前を通るたび、私は少し緊張していた。`},
        {type: "p", text: `同じ部活の友人ふたりとよくサボっていた。社会人になり、学生時代の部活の話になるといつも幽霊部員だったことから話し始める。「とにかく運動が苦手だったんですけど、どこかの部活には所属しないといけない学校で・・・」と続けて話す。実際、運動は苦手なのだが、それよりも恫喝じみた言葉をかけてくるキャプテンから逃げていただけだ。放課後はいつメン3人で校内を周回したり、校庭を走りながら（走っているようなフォームで歩いている）高校をどこにするか話したり、文化部の雑談に混ざったりしていた。今考えるとやりたい放題だ。3年の春、最後の大会に出るべきだと顧問に言われた。一度断ったものの、でも出なきゃだめでしょう。という理由のない理由一点で詰められ、3人で渋々承知した。後日、真面目に練習していた2年生が「なんで全然練習に来ない先輩が大会に出れるんですか」と顧問に抗議したらしく、今すぐ来いと体育館に呼ばれた。後輩の真っ当な主張を浴びながら、細い声で謝る。私は最後の大会に出る資格はないし後輩が出るべきです、とその場で顧問に伝えた気がする。結局、最後の大会は後輩が出ることになった。`},
        {type: "p", text: `気がつくと仕事の手が止まっていて、少し遠い場所から花火の思い出話が聞こえてくる。花火について語れるほどの思い出はない。どれくらい身体を動かせば踊ったことになるのかもわからない。ぬるくなった缶ジュースを飲み干す。`, class: ["large-space-2"]},
        {type: "h2", text: `バックナンバー`},
        {type: "a", text: `こぼれちゃうよ (2026-04-13)`, class: ["link-list"], link: "../blog/#005"},
        {type: "a", text: `こぼれちゃうよ (2026-05-11)`, class: ["link-list"], link: "../blog/#009"},
        {type: "a", text: `こぼれちゃうよ (2026-06-15)`, class: ["link-list"], link: "../blog/#014"},
        {type: "a", text: `こぼれちゃうよ (2026-07-13)`, class: ["link-list"], link: "../blog/#018"},
        {type: "a", text: `こぼれちゃうよ (2026-08-24)`, class: ["link-list"], link: "../blog/#024"},
        {type: "a", text: `こぼれちゃうよ (2026-09-14)`, class: ["link-list","large-space-1"], link: "../blog/#025"},
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
        { word: "いますぐ逃げ出したい", href: "https://youtu.be/7HdV0ahtryI?si=IKLJxrUTmy2uNmsB" },
        { word: "A4", href: "https://tak-shonai.cocolog-nifty.com/crack/2022/09/post-99f7a2.html" },
        { word: "実装", href: "https://wa3.i-3-i.info/word13746.html" },
        { word: "レスポンシブ", href: "https://www.unionnet.jp/blog/garmoshka/" },
        { word: "KAGOME 100CAN Peach Blend", href: "https://www.kagome.co.jp/products/gift/fruit-yasai-juice/" },
        { word: "フェニックス", href: "https://youtu.be/0aaYtL4XIlI?si=2nvGmrdStR11qPkd" },
        { word: "踊ろうサンダーバード", href: "https://maps.app.goo.gl/Pv5FRzr2nN8dceXXA" },
        { word: "幽霊部員", href: "https://kids.nifty.com/soudan/questions/01934937-ed7e-7e3b-b3ab-9b9e202adcc7" },
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: [""],
  };
