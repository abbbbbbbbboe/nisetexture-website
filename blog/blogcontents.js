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
      id: "002",
      category: "特集",
      title: '合宿の価値は、合宿の後に確定する——エクストリームVJ合宿 5回を終えて',
      writer:"shima",
      date: "2026-02-21",
      tag: ["EVC", "news"],
      samune:"../blog_img/002/image_01.webp",
      imageExtraSpace: "600",
      images: [
        { src: "../blog_img/002/image_01.webp", caption: "エクストリームVJ合宿", id: 1 },
        { src: "../blog_img/002/image_02.webp", caption: "レイマーチングの説明を行うshima", id: 2 },
        { src: "../blog_img/002/image_03.webp", caption: "エクストリームVJ合宿修了証", id: 3 },
        { src: "../blog_img/002/image_04.webp", caption: "合宿中の講義の様子", id: 4 },
        { src: "../blog_img/002/image_05.webp", caption: "合宿中の制作の様子", id: 5 },
        { src: "../blog_img/002/image_06.webp", caption: "最終発表の様子", id: 6 },
        { src: "../blog_img/002/promotional_photo.webp", caption: "プロフィール写真", id: 7 },
      ],
      textBlocks: [
        { type: "img-button", targetId: 1, label: "エクストリームVJ合宿" },
        { type: "skipbutton", id: "skip0", label: "特集にあたって", mobile_label: "0", text: "section 0"  },
        { type: "h1", text: `特集にあたって`},
        { type: "p", text: `何かを続けるのはかなり難しい。しかし、続けることで改善や変化をすることができる。他の人がどのように続けながら活動をしているのか知りたい。それが私たちなりの方法を模索する助けになると思うからだ。`, class: ["large-space-1"] },
        { type: "p", text: `今回は、2024年から行なっている「エクストリームVJ合宿」について、主催しているshimaさんに合宿の運営を積み重ねながら変化したことや考えていることをまとめてもらった。`, class: ["large-space-1"] },
        { type: "p", text: `ニセテクスチャ（メディア・チーム）`, class: ["large-space-2", "i"] },

        { type: "divider" },


        { type: "p", text: `エクストリームVJ合宿は、私の修士研究の一部として設計・実施し始めた試みだ。次回で6回目を迎える。5回の実施を経て、当初の設計と実際の景色がどう変わっていったのか。その変遷と言語化されていない価値についてまとめておきたい。`, class: ["large-space-2"] },

        { type: "skipbutton", id: "skip1", label: "数学を手段にする", mobile_label: "1", text: "section 1"  },
        { type: "h1", text: `数学を手段にする——設計の出発点`},

        { type: "p", text: `合宿は当初から、レイマーチングを取り上げ、Shaderの実装を扱い、最終的にVJパフォーマンスの制作に挑戦するワークショップとして設計していた。ここでいうShaderはGPU処理のプログラムを指す。
        `, class: ["large-space-1"] },

        { type: "p", text: `
        Shaderは実務で利用される割には扱える人が少ない。活用するためにはベクトルや行列といった線形代数の知識を前提とする場面が多く、他のプログラミング言語よりも習得のハードルが高い。一方で、大学に入学してすぐに習う線形代数も、何に使えるのかが分からないまま学習内容に置いていかれることがある。
        `, class: ["large-space-1"] },

        { type: "p", text: `
        そこで、Shaderという「使いたい道具」が先にある状態を作れば、数学は目的ではなく手段になり、抵抗なく触れられるのではないか。Shaderを扱うために数学にもっと触れよう、という流れが自然に起きるのではないか。そういう仮説から出発した。
        `, class: ["large-space-2"] },

        { type: "skipbutton", id: "skip2", label: "テーマパークと三箇条", mobile_label: "2", text: "section 2"  },
        { type: "h1", text: `テーマパークと三箇条——場の空気をどう作るか`},
        { type: "p", text: `この仮説に沿って、合宿は仕組みを学ぶ場というよりも、楽しい実践のための道具の使い方を教える場というスタンスで設計した。そこを空気づくりで支える方法をまとめてみる。`, class: ["large-space-1"] },
        { type: "img-button", targetId: 2, label: "レイマーチングの説明を行うshima" },

        { type: "p", text: `テーマパーク風の演出を採用し、事前に決めてきてもらった「エクストリームネーム」（合宿期間中だけ名乗る仮の活動名）を、配布した名札に書いて身につけてもらう。これで“普段の自分”から“一時的なキャラクター”へ切り替わり、呼びかけがスムーズになる。なるべくコミカルな物言いで全体を進め、自己紹介で、自然体でお互いのことを話しやすいように空気を作る。学びの場というよりも、制作と発表まで走り切るための場を先に整える感覚に近い。`, class: ["large-space-1"] },
        { type: "p", text: `運営についても、私はずっと先生というより別の役割だと考えている。運営は世界観の担い手であり、進行と安全の担い手でもある。知識を上から渡すのではなく、参加者が主役でいられる空気とルールを整える。参加者のほうが詳しい場面も普通に起きるし、そのときは詳しい人がその場の先生になる。運営と参加者は、同じ過酷な合宿を乗り切る仲間でいたい。役割はあるが、上下関係を固定する意図ではない。`, class: ["large-space-2"] },

        { type: "img-button", targetId: 3, label: "エクストリームVJ合宿修了証" },
        
        
        { type: "h2", text: `三箇条という合意形成` },
        { type: "p", text: `導入で、自己紹介、合宿三箇条の唱和を行い、その後に序盤の流れを行っている。` , class: ["large-space-1"] },
        { type: "p", text: `合宿三箇条は次の通りだ。`, class: ["large-space-1"]},
        { type: "p", text: `⚫︎わからないことはわからないと言う`, class: ["large-space-1"] },
        { type: "p", text: `⚫︎皆で助け合って生き延びる`, class: ["large-space-1"] },
        { type: "p", text: `⚫︎シェーダーは体で理解する`, class: ["large-space-2"] },
        { type: "p", text: `合宿の最初にこれを皆で読み上げる。私が読み、全員が復唱する“号令”の形式にしている。空気感としては厳粛というより、少し緊張感を煽りつつも、復唱のタイミングで小さく笑いが起きる。`, class: ["large-space-1"] },
        { type: "p", text: `これは標語というより合意形成で、「分からないと言っていい、助けを求めていい、失敗しても守る」という前提を、空気ではなく言葉として場に立てるためのものだ。ガチ勢が来た場合も「皆で助け合って生き延びる」に接続して、教える側に回ってもらうことを想定している。`, class: ["large-space-2"] },


       
        { type: "h2", text: `「シェーダーは体で理解する」`},
        { type: "p", text: `三箇条の中でも、これは合宿の核に近い。レイマーチングを体験として先に通し、その体験をコードと対応づけて説明する。「光線（レイ）」になりきって、障害物の有無を判断するアナログなゲームだ。参加者に探検隊の隊員という役割を与え、ルールに従って障害物を探索する。体験を通じてレイマーチングの進行と障害物検出の仕組みを掴み、後でコードに戻る、という流れだ。`, class: ["large-space-2"] },
        { type: "p", text: `また、合宿が単発で終わらないように、合宿後も継続できる環境を置く意図も当初からあった。オンラインの場（Discord）を設けて、情報共有や質問対応、活動報告ができるようにしている。`, class: ["large-space-2"] },

        { type: "img-button", targetId: 4, label: "合宿中の講義の様子" },

        { type: "skipbutton", id: "skip3", label: "合宿の「後」に価値が確定する", mobile_label: "3", text: "section 3"},
        { type: "h1", text: `合宿の「後」に価値が確定する`},
        { type: "p", text: `ここからが実施して変わった部分だ。`, class: ["large-space-1"] },
        { type: "p", text: `実施前の私は、価値の中心を「参加することでできるようになること」に置いていた。ややこしい数学もShaderの面白さと一緒に学べば理解が進むはずで、そこに参加価値がある、という気持ちが強かった。`, class: ["large-space-1"] },
        { type: "p", text: `5回やってみて、同じくらい、もしくはそれ以上に大きく見えてきたのはコミュニティの側だった。年齢や職業、専門が違う人たちが、ShaderやVJへの興味という共通部分だけで集まる。両方を完成させている人は多くないので、だいたいの参加者は同じ入口に立って合宿が始まる。分かるところまでをお互いにシェアし合いながら制作を進め、最後の発表でそれぞれの成果を讃え一気に盛り上がる。ここで起きる盛り上がりは、完成されたライブとしての熱狂というより、さっきまで隣で詰まっていた参加者がど緊張しながらも絵を出し切るその瞬間を、みんなで見届けて沸く、という種類の熱だ。`, class: ["large-space-1"] },
        { type: "p", text: `そして決定的だったのは、合宿の後に起きた出来事だった。`, class: ["large-space-2"] },

        
        { type: "h2", text: `「次から手伝うよ」——その場限りの講座からコミュニティへ`},
        { type: "p", text: `初回のあと、参加者だったそばやさんが「次から手伝うよ」と言ってくれた。たしかDiscordでのやりとりだったと思う。この時点で、合宿がその場限りの“講座”ではなく、次回を前提に人が関わり続ける“場”になった感触があった。`, class: ["large-space-2"] },
        { type: "h2", text: `オンラインが現地に変わった日`},
        { type: "p", text: `私が外部イベント（Scratch&Build）の告知をDiscordに貼ったとき、合宿参加者が実際に現場に来てくれた。オンライン上では私が紹介したところでパフォーマンスをしたという話も共有されていたが、現地で見ることで、よりリアルな出来事に変換された。合宿が学ぶ場で終わらず、外の現場に接続した瞬間だった。`, class: ["large-space-2"] },
        { type: "h2", text: `回をまたいで顔が出る`},
        { type: "p", text: `第3回をFabCafe Nagoyaで行った際、過去参加者が発表イベントに観覧として来てくれた。回をまたいで顔が出るようになって、合宿が単発イベントではなく、続く場になっていくのが見えた。`, class: ["large-space-2"] },
        { type: "h2", text: `合宿の外で動き始める人たち`},
        { type: "p", text: `エクストリームVJ合宿で知り合った人のイベントを見に行く、という動きも出てきた。合宿の中だけで閉じていた関係が、外の現場に自然と広がっていく。さらに、これをきっかけにパフォーマンス活動を始めた人もいる。合宿は2日間で終わるが、そこで得たものを持ち帰って、自分の活動として動かし始める人が出てきたということだ。`, class: ["large-space-2"] },

        { type: "divider" },
        { type: "p", text: `最近は、これまでの参加者の口コミ経由で参加してきた人も出てきている。派手な一発ではなく、回を重ねた積み重ねが、次の参加者を連れてくる循環になり始めている。`, class: ["large-space-1"] },
        { type: "p", text: `こういう出来事が起きたとき、参加者は「参加してよかった」私は「開催してよかった」が遅れて確定する感覚がある。コミュニティの成果とは、合宿が終わった後に行動の変容が起きることだ、と思うようになった。`, class: ["large-space-1"] },


        { type: "skipbutton", id: "skip4", label: "つなぐための設計を磨く", mobile_label: "4", text: "section 4"  },
        { type: "h1", text: `つなぐための設計を磨く`},
        { type: "p", text: `この合宿は、なるべく地方都市で開催しようという意図を持って運営している。東京では勉強会やコミュニティの選択肢が多いが、距離の問題があって地方の人は行きづらい。さらに勉強会は詳しい人が主役で、その話を皆で聞くスタイルになりやすい。私はそれより、参加者が主役でいてほしい。`, class: ["large-space-1"] },
        { type: "p", text: `エクストリームVJ合宿は、講義で正解を渡すより、参加者全員が同じ場に立って、過酷さと共通体験を抱えながら制作と発表まで走り切ることを重視している。運営は世界観と進行と安全を担うが、参加者を観客にはしない。既存の勉強会が「詳しい人の話を聞く場」だとすれば、こちらは「全員が当事者として走る場」だ。`, class: ["large-space-1"] },
        { type: "p", text: `この方向に舵が切れてきたことで、つながり方の改善が増えていった。`, class: ["large-space-1"] },
        { type: "img-button", targetId: 5, label: "合宿中の制作の様子" },

        { type: "h2", text: `自己紹介を場のノリに任せない`},
        { type: "p", text: `象徴的なのが自己紹介だ。第2回の実施で自己紹介の粒度が気になった。大学での実施だったため参加者同士がお互いを知っており、自己紹介が薄くなった。参加者間はそれで成立するが、運営が把握するには情報が少ない。場を回すうえでは、技術の輪郭だけでなく、何に反応するかが分からないとつなぐ設計ができない。`, class: ["large-space-1"] },
        { type: "p", text: `そこで第3回から、自己紹介を場のノリに任せないことにした。自己紹介用の質問事項を出しつつ、1分ほどと時間も固めることで、情報の下限を上げた。質問内容の具体例としては、VJについて思うことや名古屋について思うこと、といったものを入れている。結果として、初対面の各人に対する理解度をある一定以上に担保できるようになった。運営側も、どれくらいできる人なのかを測れるので、サポートの基準として分かりやすい。`, class: ["large-space-1"] },
        { type: "p", text: `いまの私にとって自己紹介は、会話のきっかけであると同時に、運営が支援を成立させるための初期測定でもある。`, class: ["large-space-1"] },

        { type: "h2", text: `参加者から運営へ`},
        { type: "p", text: `ここまでの改善のかなりの部分は、前述したそばやさんの存在なしには成立しなかった。そばやさんは初回の参加者で、それ以降は実施のたびに運営を手伝ってくれている。自己紹介の設計、資料の改善、Discordサーバーの提案、文章の整理はどれも合宿の質を一段上げた改善のアドバイスだった。参加者が運営に変わり、運営が次の参加者の体験を良くする。この循環が自然に起きたことが、コミュニティとしての合宿の現在地を象徴していると思う。`, class: ["large-space-2"] },


        { type: "skipbutton", id: "skip5", label: "入口は固定し、深掘りは手放す", mobile_label: "5", text: "section 5"  },
        { type: "h1", text: `入口は固定し、深掘りは手放す`},
        { type: "p", text: `最近の私は、交流と継続を最大化するために、全員に求める学習内容は入口として固定し、理解の深掘りは必須にしない、と割り切っている。サポートの責任範囲は「ShaderでVJ発表ができるところまで」で、全員に原理の理解を完了させることをゴールにしていない。`, class: ["large-space-1"] },
        { type: "p", text: `もちろん、これはあくまで「最低ライン」の話だ。質問が出れば時間の許す限りどこまでも深く解説するし、マニアックな実装の話も歓迎する。上限は設けていない。ただ、全員がそこまで到達しなくても、発表ができればそれで良しとするスタンスだ。`, class: ["large-space-1"] },
        { type: "p", text: `これは当初からの仮説——イベント内で理解を完了させるのではなく、理解したいという欲求を引き起こす——と地続きだと思っている。大枠は変えず、回をまたいだ参加者の共通体験として、合宿三箇条とレイマーチング体験を守っていく。`, class: ["large-space-1"] },
        { type: "p", text: `その先で、心理的安全性が担保された発表空間をどう広げられるか。合宿の外側で起きる行動変容をどう増やせるか。そういう関心へ、エクストリームVJ合宿は少しずつ重心を移してきた。`, class: ["large-space-2"] },

        { type: "img-button", targetId: 6, label: "最終発表の様子" },
        { type: "skipbutton", id: "skip6", label: "続けるための課題——お金と持続性", mobile_label: "6", text: "section 6"  },
        { type: "h1", text: `続けるための課題——お金と持続性`},
        { type: "p", text: `一方で、ここまで来ると綺麗事では済まない課題も見えている。`, class: ["large-space-1"] },
        { type: "p", text: `合宿は来れば誰でも仲間になれる入口として機能させたいという思想があり、参加費を大きく上げにくい。その一方で、会場費など参加人数に関係なく先に発生する固定費があり、売上は参加者数に連動して変動する。結果として損益分岐点付近で採算が揺れやすく、黒字になっても余剰が薄い状態が続いている。そのため、DJやそばやさんなどサポートメンバーへの謝金を十分に確保できていない。`, class: ["large-space-1"] },
        { type: "p", text: `そこで次回は、運営の継続性のために価格設計を見直した。ただし、謝礼を参加費に上乗せして解決し続けるのは本筋ではないと感じている。エクストリームVJ合宿は気持ち一つで行ける入口であってほしいからだ。今後は協賛・支援など参加費以外の原資を整備し、参加費を抑える方向で成立させたい。`, class: ["large-space-1"] },
        { type: "p", text: `今年のエクストリームは、この方向性をもう一段だけはっきりさせる。合宿の中で完結させる完成度より、合宿の外で続く動きを増やす。そのために、入口は狭めず、場の共通体験は守り、運営が継続できる形をちゃんと作る。今はそこが課題で、次の伸びしろだと思っている。`, class: ["large-space-2"] },

        { type: "divider" },

        { type: "skipbutton", id: "skip7", label: "これまでの開催情報", mobile_label: "7", text: "section 7"  },
        { type: "h1", text: `これまでの開催情報`},
        { type: "p", text: `第1回`},
        { type: "p", text: `⚫︎2024年10月19日〜20日`},
        { type: "p", text: `⚫︎エクストリームVJ合宿`},
        { type: "p", text: `⚫︎ソフトピアジャパンセンター　ワークショップ24（岐阜県）`, class: ["large-space-1"] },
        { type: "p", text: `第2回`},
        { type: "p", text: `⚫︎2025年5月31日〜6月1日`},
        { type: "p", text: `⚫︎エクストリームVJ合宿`},
        { type: "p", text: `⚫︎名古屋文理大学　（愛知県）`},
        { type: "a", text: `詳細リンク`, link:"https://www.nagoya-bunri.ac.jp/news/post-27277/",class: ["large-space-1","textlink"] , prefix: "⚫︎"},
        { type: "p", text: `第3回`},
        { type: "p", text: `⚫︎2025年8月30日〜31日`},
        { type: "p", text: `⚫︎エクストリームVJ合宿 at FabCafe Nagoya`},
        { type: "p", text: `⚫︎<a href="https://fabcafe.com/jp/nagoya/" target="_blank" class="inline-link-post">FabCafe Nagoya</a>（愛知県）`},
        { type: "a", text: `詳細リンク`, link:"https://fabcafe.com/jp/events/nagoya/2025-exvjcamp001/",class: ["large-space-1","textlink"], prefix: "⚫︎"},
        { type: "p", text: `第4回`},
        { type: "p", text: `⚫︎2025年9月22日〜23日`},
        { type: "p", text: `⚫︎エクストリームVJ合宿`},
        { type: "p", text: `⚫︎大正大学（東京都）`, class: ["large-space-1"] },
        { type: "p", text: `第5回`},
        { type: "p", text: `⚫︎2025年10月11日〜12日`},
        { type: "p", text: `⚫︎"密回"エクストリームVJ合宿`},
        { type: "p", text: `⚫︎福井県大井町<br>（SEE SEA Parkでの開催が中止となり、急遽同県内に会場を変更して実施）`, class: ["large-space-1"] },
        


        { type: "skipbutton", id: "skip8", label: "第6回開催情報", mobile_label: "8", text: "section 8"  },
        { type: "h1", text: `第6回開催情報`},
        { type: "p", text: `エクストリームVJ合宿 at Creative Center Osaka`},
        { type: "p", text: `⚫︎日時：2026年2月28日（土）〜3月1日（日`},
        { type: "p", text: `⚫︎会場：クリエイティブセンター大阪（名村造船所跡地）`},
        { type: "p", text: `⚫︎参加費：15,000円`},
        { type: "a", text: `参加申込・詳細はこちら`, link:"https://www.notion.so/2e4a19d3cd3c80a89449fdc9acbd4b6b?pvs=21",class: ["large-space-1","textlink"] , prefix: "⚫︎"},
        { type: "p", text: `最終発表は同時開催のHOMEWORKS 2025 10th Anniversary内で行います。入場チケットをお持ちの方は観覧いただけます。`,class: ["large-space-1"] },
        { type: "p", text: `★エクストリームVJ合宿では、開催場所をご提供いただける企業・大学・施設を探しています。`, class: ["large-space-1"] },
        { type: "p", text: `本企画は、シェーダーやVJパフォーマンスをテーマに、2日間で制作と発表を行う合宿形式のワークショップです。クリエイター、エンジニア、学生など、多様な参加者が集まります。`, class: ["large-space-1"] },
        { type: "p", text: `公開型イベントとして場所をご提供いただく形のほか、社内向け・学内向けプログラムとして実施することも可能です。`, class: ["large-space-1"] },
        { type: "p", text: `開催について関心をお持ちいただける場合は、ご連絡ください。`, class: ["large-space-1"] },
        { type: "p", text: `エクストリームVJ合宿に関するお問い合わせはこちら`},
        { type: "a", text: `xアカウント`, link:"https://x.com/ExtremeVJCamp" ,class: ["textlink"], prefix: "→" },
        { type: "a", text: `Instagramアカウント`, link:"https://www.instagram.com/extremevjcamp/",class: ["large-space-2","textlink"], prefix: "→" },

        { type: "divider" },

        { type: "skipbutton", id: "skip9", label: "著者プロフィール", mobile_label: "9", text: "section 9"  },
        { type: "h1", text: `著者プロフィール`},
        { type: "img-button", targetId: 7, label: "プロフィール写真" },
        { type: "p", text: `shima`},
        { type: "p", text: `岐阜生まれ岐阜育ち。CG／Shaderを道具にライブやインスタレーションを制作。IAMAS修了。`, class: ["large-space-2"] },

        { type: "divider" },

        { type: "p", text: `本記事、本サイトについてのお問い合わせは以下にお願いします。` },
        { type: "p", text: `nise.texture[a]gmail.com` },
        { type: "p", text: `*[a]は@に変更してください。`, class: ["footnote", "large-space-1"] },

      ],

      postHyperlinks: [
        { word: "VJパフォーマンスの制作", href: "https://x.com/ch_an_mio_/status/1962679041573691483?s=20" },
        { word: "合宿三箇条の唱和", href: "https://x.com/NativePlastic/status/1976915743058149769" },
        { word: "「光線（レイ）」になりきって", href: "https://x.com/vj_sijimi/status/1961316006766256561?s=20" },
        { word: "そばやさん", href: "https://sobayaonjupiter.format.com/" },
        { word: "Scratch&Build", href: "https://youtu.be/F57NootcBjg?si=iDDK25F6Gh2yhTnT&t=13440" },
        { word: "発表イベント", href: "https://fabcafe.com/jp/events/nagoya/2025_extremer/" },
        { word: "HOMEWORKS 2025 10th Anniversary", href: "https://homeworks2025.peatix.com/" },
        { word: "ソフトピアジャパンセンター　ワークショップ24", href: "https://www.softopia.info/office/work/" },
        { word: "名古屋文理大学", href: "https://www.nagoya-bunri.ac.jp/" },
        { word: "FabCafe Nagoya", href: "https://fabcafe.com/jp/nagoya/" },
        { word: "大正大学", href: "https://www.tais.ac.jp/" },

      ],

      // ③ この投稿で使いたい global のセット
      hyperlinkGroups: ["basic"],
    },
    {
      id: "001",
      category: "特集",
      title: "私たちの活動について",
      writer:"ニセテクスチャ",
      date: "2025-12-25",
      tag: ["about", "news"],
      samune:"img/rogo.webp",
      imageExtraSpace: "510",
      images: [
        { src: "https://soundcloud.com/fcjjl5q21hqr/nisetexture_article-1223?si=04c01c1e486546849fbfb7cd0aaa02f5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", caption: "読み上げ音声", id: 1 },
        { src: "https://soundcloud.com/fcjjl5q21hqr/5c257989-e8ee-4e0a-a5a6-8563758ebe0f?si=ca87bca38de244dab530510726bb1646&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", caption: "説明音声", id: 2 }
      ],
      textBlocks: [
        { type: "skipbutton", id: "skip1", label: "読み上げ音声", mobile_label: "読" },
        { type: "img-button", targetId: 1, label: "読み上げ音声" },

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

        { type: "button", "targetId": 1, "label": "読み上げ音声" },

        { type: "divider" },
        { type: "p", text: `私たちは、飲み会だけでなくいかなる場面においてもハラスメントを許容しません。`, class: ["large-space-1"] },
        { type: "skipbutton", id: "skip6", label: "説明音声", mobile_label: "説" },
        { type: "img-button", targetId: 2, label: "説明音声" },

        { type: "skipbutton", id: "skip7", label: "link_list", mobile_label: "l" },
        { type: "h1", text: `【link_list】`},
        { type: "a", text: `酔うってどういうこと？|酔いの仕組みとアルコール代謝|サッポロホールディングス`, link: "https://www.sapporoholdings.jp/sustainability/alcohol/drunkenness-01.html", class: ["link-list"] },
        { type: "a", text: `アルコール｜厚生労働省`, link: "https://www.mhlw.go.jp/www1/topics/kenko21_11/b5.html", class: ["link-list"] },
        { type: "a", text: `ほんとうに「大丈夫」 | ことば（放送用語） - ことばウラ・オモテ | NHK放送文化研究所`, link: "https://www.nhk.or.jp/bunken/summary/kotoba/uraomote/101.html", class: ["link-list"] },
        { type: "a", text: `NAMIKIBASHI 日本の形「宴 」`, link: "https://youtu.be/LxFjc99HWRs?si=_J0dYEe8S0rGO1J9", class: ["link-list", "large-space-2"] },

        { type: "skipbutton", id: "skip8", label: "credit", mobile_label: "c" },
        { type: "h1", text: `【credit】`},
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
      writer:"ニセテクスチャ",
      date: "2025-11-22",
      tag: ["news"],
      images: [
        {},
      ],
      samune:"img/rogo.webp",
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
        { type: "h1", text: `1.掲載場所` },
        { type: "p", text: `PC : ページの右上のスクロールテキストエリア` },
        { type: "p", text: `モバイル : ページ上部のスクロールテキストエリア`, class: "large-space-2" },

        { type: "skipbutton", id: "skip2", label: "2.料金", mobile_label: "2" },
        { type: "h1", text: `2.料金`},
        { type: "p", text: `300円（税別）／月額`, class: "large-space-1" },
        { type: "p", text: `継続して掲載いただくとお得です！` },
        { type: "p", text: `1000円（税別）／6ヶ月` },
        { type: "p", text: `3000円（税別）／12ヶ月`, class: "large-space-2" },

        { type: "skipbutton", id: "skip3", label: "3.期間", mobile_label: "3" },
        { type: "h1", text: `3.期間`},
        { type: "p", text: `1ヶ月（30日間）〜`, class: "large-space-2" },

        { type: "skipbutton", id: "skip4", label: "4.形式", mobile_label: "4" },
        { type: "h1", text: `4.形式`},
        { type: "p", text: `形式 : テキスト` },
        { type: "p", text: `文字数<br>日本語 : 64文字丁度<br>英語 : 30単語丁度` },
        { type: "p", text: `*上記文字数、単語数ぴったりでお願いします。`, class: "footnote" },
        { type: "p", text: `*テキストにリンクをつけることも可能です。`, class: ["footnote", "large-space-2"] },

        { type: "skipbutton", id: "skip5", label: "5.掲載できないもの", mobile_label: "5" },
        { type: "h1", text: `5.掲載できないもの`},
        { type: "p", text: `公序良俗に反する内容<br>虚偽情報<br>差別的表現、差別を助長するもの<br>その他、不適切と判断した広告`, class: "large-space-1" },
        { type: "p", text: `掲載不可の内容についてはお申し込み時に判断いたします。`, class: "large-space-2" },

        { type: "skipbutton", id: "skip6", label: "6.申し込み方法", mobile_label: "6" },
        { type: "h1", text: `6.申し込み方法`},
        { type: "p", text: `下記メールアドレス宛にご連絡ください。` },
        { type: "p", text: `nise.texture[a]gmail.com` },
        { type: "p", text: `*[a]は@に変更してください。`, class: ["footnote", "large-space-1"] },
        { type: "p", text: `お問い合わせの際、以下の内容も合わせてお送りください。` },
        { type: "p", text: `必要情報<br>1.お名前、団体名<br>2.リンク先URL<br>3.掲載テキスト<br>4.希望掲載期間`, class: "large-space-2" },
        { type: "skipbutton", id: "skip7", label: "広告募集要項PDF", mobile_label: "詳" },
        { type: "h1", text: `【詳細】`},
        { type: "a", text: `ニセテクスチャwebサイト広告募集要項PDF↗︎`, link: "https://drive.google.com/file/d/1E56T4v7xRcFfwSXOOytGW9yCiwL64jKI/view?usp=sharing", class: ["link-list"] },

      ],
      // ③ この投稿で使いたい global のセット
      hyperlinkGroups: ["basic"],
    }
  ]
};
