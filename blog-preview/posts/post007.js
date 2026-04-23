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
    id: "007",
    category: "ぬるい言葉マップ",
    title: '第1回　編集のまわりから',
    writer: "小林玲衣奈",
    date: "2026-04-25",
    tag: ["連載"],
    samune: "../blog_img/thinking-in-lukewarm-words/thumbnail2_tlw.webp",
    imageExtraSpace: "600",
    images: [
        { src: "../blog_img/thinking-in-lukewarm-words/tlw1_2.webp", caption: "マップ1:キーワードを配置", id: 1 },
        { src: "../blog_img/thinking-in-lukewarm-words/tlw1_3.webp", caption: "マップ2:マップに書き込みを入れる", id: 2 },
        { src: "../blog_img/opening-with-a-given-key/koba_prof.webp", caption: "プロフィール写真", id: 3 },
    ],
    textBlocks: [
        {type: "p", text: `ニセテクスチャの活動の一つとして、メンバーの関心に添った内容をwebサイト上で公開していく。どうなるか分からないところもあるが、考えていくための土壌を作っているみたいな感じだろうか。`},
        {type: "p", text: `私はこれといってピンポイントに関心ごとを絞れなかったのと、自分の中での関心ごとがもう少し具体的につながっていくことにも興味がある。`},
        {type: "p", text: `どうしてそう思えるのかはあまりよくわからないけど、それぞれがなんか近い気がするとか、組み合わせてみたら相性が良さそう、みたいな感覚はある。`},
        {type: "p", text: `単に近いキーワードが出てくるとか、学問として領域が近いといったことはあるかもしれないが、腑に落ちるという感覚でそれぞれのつながりをもう少し強くしてみたい。自分でも気づいていないつながりもあると思うので、改めて書くことでそういうものをみつけてみたい。`},
        {type: "p", text: `こういう作業ってデジタルでのデータビジュアライズ表現と相性が良いだろうとは頭では思うのだけど、ぽちぽちとアナログな感じで線を引いていく。マッピングをしている時点で既にビジュアライズなのはさておき。`, class: ["large-space-2"]},
        {type: "skipbutton", id: "1", label: "マップについて", mobile_label: "1"},
        {type: "h1", text: `マップについて`},
        {type: "p", text: `回ごとの進め方もはっきりとはまだ定めていないが大まかな進め方や設定は以下のイメージ。`},
        {type: "p", text: `・マップのキーワードに関連しそうな書籍や記事を読んだり、経験した出来事などを中心にまとめていく`, class: ["indent-1"]},
        {type: "p", text: `・マップ全体に対しての位置に規則は設けない（右に行くほど〇〇のような規則はない）`, class: ["indent-1"]},
        {type: "p", text: `・関連度に基づいてそれぞれのキーワードを配置しているが遠いからといって関連の度合いが完全にないわけではない`, class: ["indent-1"]},
        {type: "p", text: `・キーワードは増えていく`, class: ["indent-1"]},
        {type: "p", text: `・黒文字はキーワード、青文字はキーワードにまつわるメモ書き`, class: ["indent-1"]},
        {type: "p", text: `・配置換えもある`, class: ["indent-1"]},
        { type: "a", text: `マップ1`, link: "https://drive.google.com/file/d/1m33cd03H7yuPXtkl5ztq2vf6YWHeS48D/view?usp=sharing", class: ["link-list"] },
        {type: "p", text: `高解像度版`, class: ["footnote","large-space-1"]},
        {type: "img-button", targetId: "1", class: ["large-space-2"]},
        {type: "skipbutton", id: "2", label: "取り上げるキーワード", mobile_label: "2"},
        {type: "h1", text: `取り上げるキーワード`},
        {type: "p", text: `最近は「編集」ということに興味がある。マップでいうところの黄色い部分を中心に考えてみたい。`},
        {type: "p", text: `自身の作品でもインタビューを文字起こしし、その後編集をしていくのだけども、その時にはとても悩む。言い淀みみたいな時間もインタビューの一部であると思うし、かといって編集を全く行わないと伝わらないものもある。`},
        {type: "p", text: `人が話す言葉そのものに美しさを感じれば感じるほど、編集することの中にあるパワーについて複雑な気持ちになる。もう少しこのことについてじっくり考えてみてもいいかもしれない。二セテ通信をはじめた序盤のあたりでも編集ということで漠然と悩んでいた。`},
        {type: "p", text: `こんなことを言いながらも、散歩していて街の面白い瞬間を写真に撮れたりすると嬉しい。編集と切り取りはまた少し違って、脇道にそれているかもしれないが。`},
        {type: "p", text: `いい編集を知りたい！ということではなく、編集というキーワードからつながっていくものがあるかもしれない？という期待と、意図的になることへの解像度がもう少し欲しいという感じだろうか。もちろんいい編集ができるようになることは素晴らしいことだけど。`},
        {type: "p", text: `最近「編集を巡る」というポッドキャストにハマっている。伊藤総研さんと内沼晋太郎さんが編集について喋る番組だ。尊敬する編集者の水島七恵さんが第二回のゲストに登場しているのをきっかけに聴き始めた。唐突な推し紹介だけどもぜひ聞いてみてほしい。水島さんが番組内で、編集をする際、序盤の方には相手のことをよく聞くことがあると話していた。`},
        {type: "p", text: `確かに編集をするためには編集をする対象が必要だ。そのための手法の一つとして傾聴や観察があるということか。`},
        {type: "p", text: `色々みていると組み合わせて新しい見方を提示するものが編集と言われていることもあるようで、私が考えている切り取ることも同じ意味のような感じもするのだけれども、自分にはその積極的な価値を持ち上げるぞ！みたいな気持ちはないからどうも腑に落ちない。`},
        {type: "p", text: `岸政彦「生活史の方法」の中でも編集について記載があって、こちらはデータとしての編集だからちょっと違うところはあるけども、語られたことを余すことなく記述するのが前提としつつも、その全てを書き切ることは不可能としている。さらに、その語りが文字となってひとつにまとまってそっと本棚に置かれていることで良いとしている。`},
        {type: "p", text: `考えていくと、編集という言葉を巡って、自分の中でこんがらがっていることがわかった。`},
        {type: "p", text: `ちなみに、編集の語源はばらばらな資料をまとめることだったり、英語のeditだと、ラテン語の「外に出す」という言葉からきているようで、そこには出版の意味合いもありそう。`, class: ["large-space-2"]},
        {type: "skipbutton", id: "3", label: "次回について", mobile_label: "3"},
        {type: "h1", text: `次回について`},
        {type: "p", text: `まずは津野海太郎「編集の明暗」と岸政彦「生活史の方法」を手がかりに整理していきたい。`},
        {type: "p", text: `また、読んでいる中で鶴見俊輔の提唱した「マチガイ主義」について発見した。面白そうなので、そこもゆるく調べてみたい。どう繋がっていくかは後から考える…`},
        {type: "p", text: `どうもうまくまとまらない感じになってしまったが、即効性を求めて今ピッタリと腑に落ちるものを探していくよりも、後になって振り返った時に繋がっているように感じられたらいいと思っている。`},
        {type: "p", text: `離れているように見えるだけで実際は繋がっているのかもしれないが、今遠いポジションにあるキーワードとを一緒に考えたりしてみたい。`},
        { type: "a", text: `マップ2`, link: "https://drive.google.com/file/d/10LGnQHvAFNio1xV3ctcp6MAHv04Xy7Dd/view?usp=sharing", class: ["link-list"] },
        {type: "p", text: `高解像度版`, class: ["footnote","large-space-1"]},
        {type: "img-button", label: "マップ2:マップに書き込みを入れる", targetId: "2", class: ["large-space-2"]},
        {type: "skipbutton", id: "4", label: "参考文献", mobile_label: "4"},
        {type: "h1", text: `参考文献`},
        {type: "p", text: `伊藤総研・内沼晋太郎.編集を巡る。:【水島七恵／紹介編】編集とは事象を抽象化する仕事である。.2026. Spotify,2026(ポッドキャスト)`},
        {type: "p", text: `岸政彦, 2025,『生活史の方法』筑摩新書.`},
        {type: "p", text: `津野海太郎・宮田文久編,2025『編集の明暗』黒鳥社.`, class: ["large-space-1"]},
        { type: "divider" },
        {type: "skipbutton", id: "5", label: "次回について", mobile_label: "5"},
        {type: "h1", text: `筆者プロフィール`},
        {type: "img-button", label: "プロフィール写真", targetId: "3"},
        {type: "p", text: `小林玲衣奈`},
        // { type: "a", text: `webサイト`, link: "https://kobayashireina.com", class: ["link-list"] },
        {type: "p", text: `ニセテクスチャメンバー`},
        { type: "divider" },
        { type: "p", text: `本記事、本サイトについてのお問い合わせは以下にお願いします。` },
        { type: "p", text: `nise.texture[a]gmail.com` },
        { type: "p", text: `*[a]は@に変更してください。`, class: ["footnote", "large-space-1"] },
    ],

    postHyperlinks: [
      { word: "編集を巡る", href: "https://open.spotify.com/show/4to89FfnJ7CktkO6JHCMmo?si=49b5a8e62c344352" },
      { word: "伊藤総研", href: "https://www.itskn.jp/" },
      { word: "内沼晋太郎", href: "https://uchinuma.com/" },
      { word: "水島七恵", href: "https://mninm.com/" },
      { word: "「生活史の方法」", href: "https://www.chikumashobo.co.jp/product/9784480077134/" },
      { word: "「編集の明暗」", href: "https://blkswn.tokyo/works/1858/" },
    ],

    // ③ この投稿で使いたい global のセット
    hyperlinkGroups: [

    ],
  };
