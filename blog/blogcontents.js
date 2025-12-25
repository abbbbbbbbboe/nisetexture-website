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


export const blogContents = {
  globalHyperlinks: {
    basic: [
      { word: "ニセ", href: "https://www.npa.go.jp/bureau/safetylife/sos47/new-topics/241218/02.html" },
      { word: "テクスチャ", href: "https://www.token.co.jp/estate/useful/archipedia/word.php?jid=00016&wid=00266&wdid=01" },
      { word: "通信", href: "https://www.soumu.go.jp/johotsusintokei/whitepaper/ja/s54/html/s54a01020202.html" },
      { word: "飲み会", href: "https://note.com/wakusei2nduno/n/nd8f850fbde4d" },
      { word: "つまらなさ", href: "https://x.com/haraajukku/status/1853686504809443769" },
      { word: "ジョッキ", href: "https://ja.wikipedia.org/wiki/%E3%83%93%E3%83%BC%E3%83%AB%E3%82%B8%E3%83%A7%E3%83%83%E3%82%AD#/media/%E3%83%95%E3%82%A1%E3%82%A4%E3%83%AB:BIER_IM_EG.jpg" },
      { word: "陽気", href: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1363737843" },
      { word: "涙", href: "https://ja.wikipedia.org/wiki/%E6%B6%99" },
      { word: "武勇伝", href: "https://sayapea.exblog.jp/439216/" },
      { word: "スピリッツ", href: "https://www.suntory.co.jp/wnb/guide/spirits/01/" },
      { word: "解散", href: "https://youtu.be/CrVR1YEQP2k?si=nIlH2v1rFqaTHuUM&t=98" },
      { word: "張子", href: "https://goodjobstore.jp/collections/%E3%81%AF%E3%82%8A%E3%81%93" },
      { word: "空洞", href: "https://youtu.be/mKUhq7SYouA?si=5MkAMTYIA7JC5-3i" },
      { word: "内包", href: "https://www.weblio.jp/content/%E5%86%85%E5%8C%85" },
      { word: "型", href: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q13247187703" },
      { word: "青菜炒め", href: "https://misenyaba.owst.jp/foods" },
      { word: "循環", href: "https://www.rd.ntt/se/media/article/0044.html" },
      { word: "フィクション", href: "https://youtu.be/kmT_aQh2TwQ?si=BBNZBBF82CqZy3TJ" },
      { word: "ノンフィクション", href: "http://www.insecam.org/" },
      { word: "露悪", href: "https://dic.nicovideo.jp/a/%E9%9C%B2%E6%82%AA" },
      { word: "俯瞰", href: "https://www.google.com/maps" },
      { word: "酩酊", href: "https://www.iwate.med.or.jp/hanamaki/P-9.html" },
      { word: "世迷言", href: "https://www.uta-net.com/song/54556/" },
      { word: "(｀･ω･´)", href: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q1357121248" },
      { word: "ハラスメント", href: "https://ja.wikipedia.org/wiki/%E5%AB%8C%E3%81%8C%E3%82%89%E3%81%9B" },
      { word: "暖房の風が直接当たって唇が乾いて", href: "https://www.yuskin.co.jp/skincare/skincare_03/" },
      { word: "テレビに逐一悪口", href: "https://detail.chiebukuro.yahoo.co.jp/qa/question_detail/q14168380004" },
      { word: "飲みュニケーション", href: "https://ja.wikipedia.org/wiki/%E9%A3%B2%E3%81%BF%E3%83%8B%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3" }
    ],
    musicLinks: [

    ]
  },
  posts: [
    {
      id: "001",
      category: "特集",
      title: "私たちの活動について",
      date: "2025-12-25",
      tag: ["about", "news"],
      images: [
        { src: "https://soundcloud.com/fcjjl5q21hqr/nisetexture_article-1223?si=04c01c1e486546849fbfb7cd0aaa02f5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", caption: "読み上げ音声", id: 1 },
        { src: "https://soundcloud.com/fcjjl5q21hqr/5c257989-e8ee-4e0a-a5a6-8563758ebe0f?si=ca87bca38de244dab530510726bb1646&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", caption: "説明音声", id: 2 }
      ],
      textBlocks: [
        { type: "skipbutton", id: "skip1", label: "読み上げ音声", mobile_label: "読" },
        { "type": "button", "targetId": 1, "label": "読み上げ音声" },

        { type: "p", text: `こんにちはニセテクスチャです。webサイトを立ち上げて、初回のニセテ通信ということで、今回は私たちニセテクスチャの主な活動である飲み会について紹介していきます。`, class: ["large-space-2"] },


        { type: "skipbutton", id: "skip2", label: "section 1", mobile_label: "1", text: "section 1" },

        { type: "p", text: `私たちの飲み会ではつまらなさを全面的に受け入れ、だらだらと長時間行うことを信条としています。飲み会を開くことを目的としていますが、たまに飲みながら打ち合わせをして、活動の相談をはじめ、最近あったことを話したり、悪口をこぼしたりします。打ち合わせのために飲み会をしているのか、飲み会のために打ち合わせをしているのか、ジョッキとジョッキを持つ手との境目くらい分からなくなります。`, class: ["large-space-1"] },

        { type: "p", text: `酔うとは「血液に溶け込んで脳に運ばれたアルコールによって脳が麻痺する状態」を指し、飲酒をすることで脳の機能が鈍り、陽気になったりします。陽気のまま終わればいいのですが、大抵の場合、クラクラ、キンキン、ゲロゲロが順番に襲って何のために集まったのかも分からなくなって自然と頬に涙も…。`, class: ["large-space-1"] },

        { type: "p", text: `泣くだけでは解決にならないので、何のために集まったか分からなくなった飲み会のために、だらだらとする飲み会は繰り返されます。そんな不毛で必要な我々の活動の骨組みと言っても過言ではない飲み会の精神（スピリット）がいかなるものか泣きながら書き記していこうと思います。`, class: ["large-space-2"] },


        { type: "skipbutton", id: "skip3", label: "section 2", mobile_label: "2", text: "section 2" },

        { type: "p", text: `やはり大切なのはとことん飲み、酔うことです。` },
        { type: "p", text: `ここでのとことんとは、単にたくさん飲むということだけでなく、臓という臓にアルコールの魂を染み込ませることです。守る立場や理屈などは基本的にないのですが、飲み会の後のことをあまり考えない方がよく染み込みます。` },
        { type: "p", text: `かと言って、私たちの飲み会酔いどれ武勇伝を披露するつもりは毛頭なく、私たちの活動のより本質的な、例えるならば炭酸で割る前のウイスキー、蒸留した後の焼酎のような精神（スピリッツ）を伝えたいのです。`, class: ["large-space-1"] },

        { type: "p", text: `飲み会には一連の流れがあり、解散という形で立ち現れた場は消えてゆきます。` },
        { type: "p", text: `「いまここ」という特性ゆえに、解散後は掴みどころのなく、夢も現もピントの合わない視界に訳がわからなくなります。同じ時間にあることを言うなら、したい話は何回してもいいし、相手の話しにも興味半分でも、それ以下でも良いのです。`, class: ["large-space-1"] },

        { type: "p", text: `そして、飲み会で起こったことを忘れることも忘れないでください。` },
        { type: "p", text: `忘れてしまったという事実を認識することは、そこでの内容は覚えていなくとも、事実が存在していたという、その輪郭だけになった線を手離さずにいるようなもので、離さなければそのまま、また続きの線に繋げることもできると思うのです。`, class: ["large-space-1"] },

        { type: "p", text: `まさに張子のように空洞化した飲み会は、確かにあの居酒屋のカウンターや半個室で訳の分からない言葉で罵り合ったり、絶品だった料理があった可能性も常に内包したメディアになりうるのです`, class: ["large-space-1"] },

        { type: "p", text: `何事も経験に基づいて型を決めると悩むことが減り、手順に沿って淡々と進めれば、求めているものが手に入ることに気がつきます。` },
        { type: "p", text: `しかしながら、型を事前に決めてしまうことは、その内容を突き詰める時には有効ですが、方法以前の他の可能性を無かったことにすることにもなるのです。`, class: ["large-space-2"] },


        { type: "skipbutton", id: "skip4", label: "section 3", mobile_label: "3", text: "section 3" },

        { type: "p", text: `他の可能性を横目に、飲み会を突き詰めたい私たちは、瓶ビールがあれば頼み、人数分のグラスを注文します。すいませ〜ん！注文いいですか？瓶ビールと青菜炒め、チャーハン、チャーシューもお願いします！それとグラスは二つで！えーっとキリンで！お願いしまーす。瓶ビールのラベルを上にして、両手で丁寧に相手のグラスに注ぎます。おしぼりを瓶の下に添えるとなおgoodです。`, class: ["large-space-1"] },

        { type: "p", text: `注ぐ時や注がれる時って、なんか言葉にもなってないような音が口からこぼれませんか？` },
        { type: "p", text: `まだ、未経験の皆さんは一度実践してみましょう！何事においても実践と思考の循環こそが一番重要なことです。`, class: ["large-space-1"] },

        { type: "p", text: `出会ったことがないぐらい、コテコテなフィクションを実践してみている足元には、どんな物事も取り上げることで、ノンフィクションな物語もフィクションになってしまうという事実があります。` },
        { type: "p", text: `注文した青菜炒めがなかなかやって来なくても大丈夫、暖房の風が直接当たって唇が乾いても大丈夫、ジョッキに結露してできた水滴が膝に落ちて跡を作っても大丈夫、話すことが無くなって互いに黙り込んでも大丈夫、相手がトイレ行ってる間はスマホみても大丈夫、だんだん言ってることがちぐはぐになっても大丈夫、流れてるしょうもないテレビに逐一悪口行っても大丈夫、大丈夫、大丈夫。`, class: ["large-space-1"] },

        { type: "p", text: `飲み会がつまらなければつまらないほど、そうなっていきます。`, class: ["large-space-1"] },

        { type: "p", text: `そして、このつまらなさこそ飲み会が作り出すフィクションであり、私たちの肝臓にとってのノンフィクションなのです。`, class: ["large-space-1"] },

        { type: "p", text: `やがてアルコールは分解され、いつかは集まった人間も散っていきますが、飲み会がただそのものとして存在しているのではなく、日常の一連の流れの中にあり、はたまた、厚生労働省が「節度ある適度な飲酒」を進めるように、肝臓は日頃から大切にしなければいけないようです。`, class: ["large-space-1"] },

        { type: "p", text: `しかしながら、飲み会においてそんなことは二の次で、露悪的な“飲みュニケーション”を行う没入と、翌朝の俯瞰を繰り返すことが大切なのかもしれません。` },
        { type: "p", text: `翌朝はあくまでも俯瞰という冷静さを保ち、罵ったことや泣いてしまったことを決して反省しないほうが良いでしょう。飲み会において反省性は集団としての地盤を固めるものではなく、むしろ酩酊した足場を切り崩す可能性を孕みます。`, class: ["large-space-1"] },

        { type: "p", text: `つまり、中身のない混乱した状態をつくることで秩序が反転するのです。`, class: ["large-space-2"] },


        { type: "skipbutton", id: "skip5", label: "section 4", mobile_label: "4", text: "section 4" },

        { type: "p", text: `ところで、飲み会の終わり頃ってどうしても話し足りなくて、寂しくなったりして、この時間が永遠に続けばいいのになって思ってしまった時は、粘って粘って、始発まで飲んだり歩いたりする訳です。電車が動き出すまで、その街にあるものや人、生き物とかをじろじろみて歩き回ります。秋や春先に朝まで歩く際は、ぜひ上着を忘れずにしてください。`, class: ["large-space-1"] },

        { type: "p", text: `元々空洞のような時間ですから、話し足りなさや寂しさと言った感情はあるようでないもので、朝まで歩いたからといって「朝だな」以上の感動や達成した成果などがあるわけではなく、ただひたすらにだらだらと飲み歩いたに過ぎないのです。そうこれは、結局のところ宴、祭りといった架空の儀式、世迷言（よまいごと）を吐き出すための箱、客観的な事実では無駄な時間でしかないのです。`, class: ["large-space-1"] },

        { type: "p", text: `ここまででニセテクスチャの主な活動について知っていただけたことかと思いますので、お酒タバコは20歳から、適度にお水も飲みながら、読んだみなさまもぜひ飲み会にご参加ください(｀･ω･´)`, class: ["large-space-2"] },

        { "type": "button", "targetId": 1, "label": "読み上げ音声" },

        { type: "divider" },
        { type: "p", text: `私たちは、飲み会だけでなくいかなる場面においてもハラスメントを許容しません。`, class: ["large-space-1"] },
        { type: "skipbutton", id: "skip6", label: "説明音声", mobile_label: "説" },
        { type: "button", "targetId": 2, "label": "説明音声" },

        { type: "skipbutton", id: "skip7", label: "link_list", mobile_label: "l" },
        { type: "p", text: `【link_list】`, class: ["index"] },
        { type: "a", text: `酔うってどういうこと？|酔いの仕組みとアルコール代謝|サッポロホールディングス`, link: "https://www.sapporoholdings.jp/sustainability/alcohol/drunkenness-01.html", class: ["link-list"] },
        { type: "a", text: `アルコール｜厚生労働省`, link: "https://www.mhlw.go.jp/www1/topics/kenko21_11/b5.html", class: ["link-list"] },
        { type: "a", text: `ほんとうに「大丈夫」 | ことば（放送用語） - ことばウラ・オモテ | NHK放送文化研究所`, link: "https://www.nhk.or.jp/bunken/summary/kotoba/uraomote/101.html", class: ["link-list"] },
        { type: "a", text: `NAMIKIBASHI 日本の形「宴 」`, link: "https://youtu.be/LxFjc99HWRs?si=_J0dYEe8S0rGO1J9", class: ["link-list", "large-space-2"] },

        { type: "skipbutton", id: "skip8", label: "credit", mobile_label: "c" },
        { type: "p", text: `【credit】`, class: ["index"] },
        { type: "p", text: `声（朗読順）`, class: ["credit"] },
        { type: "p", text: `1.吉月ひさたか`, class: ["credit"] },
        { type: "p", text: `2.WAKO 西村多和子`, class: ["credit"] },
        { type: "p", text: `3.non-credit`, class: ["credit"] },
        { type: "p", text: `4.平岡せいこ`, class: ["credit"] },
        { type: "p", text: `5.難波優太`, class: ["credit", "large-space-1"] },
        { type: "p", text: `説明音声：オスカル修平`, class: ["credit", "large-space-2"] },

      ],

      postHyperlinks: [
        { word: "血液に溶け込んで脳に運ばれたアルコールによって脳が麻痺する状態", href: "https://www.sapporoholdings.jp/sustainability/alcohol/drunkenness-01.html" },
        { word: "節度ある適度な飲酒", href: "https://www.mhlw.go.jp/www1/topics/kenko21_11/b5.html" },

      ],

      // ③ この投稿で使いたい global のセット
      hyperlinkGroups: ["basic"],
    },
    {
      id: "000",
      category: "告知",
      title: "広告募集",
      date: "2025-11-22",
      tag: ["news"],
      images: [
        {},
      ],
      textBlocks: [
        { type: "p", text: `ニセテクスチャのwebサイトに掲載する広告を募集します。` },
        { type: "p", text: `広告費は当サイトの運営費および当チームの活動費に使用いたします。`, class: "large-space-1" },

        {
          type: "p", text: `&#x2730;〜〜<br>
新幹線に乗っていると窓の向こうで高速に流れる景色とは違って、車内に設置された電光掲示板には64文字のキャッチーで簡素なテキストが緩やかに流れている。企業の環境への取り組みや管理職に向けたプロダクトの広告が誰がみているのかわからないまま淡々と横向きにスライドしていく。<br>
&#x2730;〜〜
` , class: "large-space-1"
        },

        { type: "p", text: `限られた文字数で、表示できる文字や記号のみで、淡々とメッセージを流すことをこのwebサイトでも行います。`, class: ["large-space-1"] },

        { type: "p", text: `このwebサイトはPVみたいな数字を持つことはできないかもしれませんが、64文字ぴったりであなたのテキストを掲載してみませんか？広告のみならず、誰かや自分に宛てたメモやメッセージも載せることが可能です。`, class: "large-space-2" },

        { type: "divider" },

        { type: "skipbutton", id: "skip1", label: "1.掲載場所", mobile_label: "1" },
        { type: "p", text: `1.掲載場所`, class: "index" },
        { type: "p", text: `PC : ページの右上のスクロールテキストエリア` },
        { type: "p", text: `モバイル : ページ上部のスクロールテキストエリア`, class: "large-space-2" },

        { type: "skipbutton", id: "skip2", label: "2.料金", mobile_label: "2" },
        { type: "p", text: `2.料金`, class: "index" },
        { type: "p", text: `300円（税別）／月額`, class: "large-space-1" },
        { type: "p", text: `継続して掲載いただくとお得です！` },
        { type: "p", text: `1000円（税別）／6ヶ月` },
        { type: "p", text: `3000円（税別）／12ヶ月`, class: "large-space-2" },

        { type: "skipbutton", id: "skip3", label: "3.期間", mobile_label: "3" },
        { type: "p", text: `3.期間`, class: "index" },
        { type: "p", text: `1ヶ月（30日間）〜`, class: "large-space-2" },

        { type: "skipbutton", id: "skip4", label: "4.形式", mobile_label: "4" },
        { type: "p", text: `4.形式`, class: "index" },
        { type: "p", text: `形式 : テキスト` },
        { type: "p", text: `文字数<br>日本語 : 64文字丁度<br>英語 : 30単語丁度` },
        { type: "p", text: `*上記文字数、単語数ぴったりでお願いします。`, class: "footnote" },
        { type: "p", text: `*テキストにリンクをつけることも可能です。`, class: ["footnote", "large-space-2"] },

        { type: "skipbutton", id: "skip5", label: "5.掲載できないもの", mobile_label: "5" },
        { type: "p", text: `5.掲載できないもの`, class: "index" },
        { type: "p", text: `公序良俗に反する内容<br>虚偽情報<br>差別的表現、差別を助長するもの<br>その他、不適切と判断した広告`, class: "large-space-1" },
        { type: "p", text: `掲載不可の内容についてはお申し込み時に判断いたします。`, class: "large-space-2" },

        { type: "skipbutton", id: "skip6", label: "6.申し込み方法", mobile_label: "6" },
        { type: "p", text: `6.申し込み方法`, class: "index" },
        { type: "p", text: `下記メールアドレス宛にご連絡ください。` },
        { type: "p", text: `nise.texture[a]gmail.com` },
        { type: "p", text: `*[a]は@に変更してください。`, class: ["footnote", "large-space-1"] },
        { type: "p", text: `お問い合わせの際、以下の内容も合わせてお送りください。` },
        { type: "p", text: `必要情報<br>1.お名前、団体名<br>2.リンク先URL<br>3.掲載テキスト<br>4.希望掲載期間`, class: "large-space-2" },
        { type: "skipbutton", id: "skip7", label: "広告募集要項PDF", mobile_label: "詳" },
        { type: "p", text: `【詳細】`, class: ["index"] },
        { type: "a", text: `ニセテクスチャwebサイト広告募集要項PDF↗︎`, link: "https://drive.google.com/file/d/1E56T4v7xRcFfwSXOOytGW9yCiwL64jKI/view?usp=sharing", class: ["link-list"] },

      ],

      // ③ この投稿で使いたい global のセット
      hyperlinkGroups: ["basic"],
    }
  ]
};
