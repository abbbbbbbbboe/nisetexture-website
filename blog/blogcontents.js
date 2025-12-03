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


export const blogContents = {
  posts: [
     {
      id: "AboutOurActivities",
      category: "diary",
      title: "私たちの活動について",
      date: "2025-11-26",
      images: [
        { src: "https://soundcloud.com/fcjjl5q21hqr/test1?si=5f6dc2b65f91467797d1287c6b4450f5&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", caption: "読み上げ音声", id: 1 },
        { src: "https://soundcloud.com/tofubeats/throw-your-laptop-on-the-fire-2025-mix?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing", caption: "説明音声", id: 2 }
      ],
      textBlocks: [
         { "type": "button", "targetId":1, "label": "読み上げ音声" },

        { type: "p", text: `こんにちは<a href="../index.html" target="_blank">ニセテクスチャ</a>です。webサイトを立ち上げて、初回のニセテ通信ということで、今回は私たちニセテクスチャの主な活動である飲み会について紹介していきます。`, class: ["large-space-2" ]},
       

        {type: "skipbutton",id: "skip1",label: "section 1",mobile_label: "1", text:"section 1" },
        
        { type: "p", text: `私たちの飲み会ではつまらなさを全面的に受け入れ、だらだらと長時間行うことを信条としています。飲み会を開くことを目的としていますが、たまに飲みながら打ち合わせをして、活動の相談をはじめ、最近あったことを話したり、悪口をこぼしたりします。打ち合わせのために飲み会をしているのか、飲み会のために打ち合わせをしているのか、ジョッキとジョッキを持つ手との境目くらい分からなくなります。`, class: ["large-space-1"]},

        { type: "p", text: `酔うとは「血液に溶け込んで脳に運ばれたアルコールによって脳が麻痺する状態」を指し、飲酒をすることで脳の機能が鈍り、陽気になったりします。陽気のまま終わればいいのですが、大抵の場合、クラクラ、キンキン、ゲロゲロが順番に襲って何のために集まったのかも分からなくなって自然と頬に涙も…。`, class: ["large-space-1"] },

        { type: "p", text: `泣くだけでは解決にならないので、何のために集まったか分からなくなった飲み会のために、だらだらとする飲み会は繰り返されます。そんな不毛で必要な我々の活動の骨組みと言っても過言ではない飲み会の精神（スピリット）がいかなるものか泣きながら書き記していこうと思います。`, class: ["large-space-1"] },
       

        {type: "skipbutton",id: "skip2",label: "section 2",mobile_label: "2", text:"section 2"},

        { type: "p", text: `やはり大切なのはとことん飲み、酔うことです。` },
        { type: "p", text: `ここでのとことんとは、単にたくさん飲むということだけでなく、臓という臓にアルコールの魂を染み込ませることです。守る立場や理屈などは基本的にないのですが、飲み会の後のことをあまり考えない方がよく染み込みます。` },
        { type: "p", text: `かと言って、私たちの飲み会酔いどれ武勇伝を披露するつもりは毛頭なく、私たちの活動のより本質的な、例えるならば炭酸で割る前のウイスキー、蒸留した後の焼酎のような精神（スピリッツ）を伝えたいのです。`, class: ["large-space-1"] },

        { type: "p", text: `飲み会には一連の流れがあり、解散という形で立ち現れた場は消えてゆきます。` },
        { type: "p", text: `「いまここ」という特性ゆえに、解散後は掴みどころのなく、夢も現もピントの合わない視界に訳がわからなくなります。同じ時間にあることを言うなら、したい話は何回してもいいし、相手の話しにも興味半分でも、それ以下でも良いのです。`, class: ["large-space-1"] },

        { type: "p", text: `そして、飲み会で起こったことを忘れることも忘れないでください。` },
        { type: "p", text: `忘れてしまったという事実を認識することは、そこでの内容は覚えていなくとも、事実が存在していたという、その輪郭だけになった線を手離さずにいるようなもので、離さなければそのまま、また続きの線に繋げることもできると思うのです。`, class: ["large-space-1"] },

        { type: "p", text: `まさに張子のように空洞化した飲み会は、確かにあの居酒屋のカウンターや半個室で訳の分からない言葉で罵り合ったり、絶品だった料理があった可能性も常に内包したメディアになりうるのです`, class: ["large-space-1"] },
        
        { type: "p", text: `何事も経験に基づいて型を決めると悩むことが減り、手順に沿って淡々と進めれば、求めているものが手に入ることに気がつきます。` },
        { type: "p", text: `しかしながら、型を事前に決めてしまうことは、その内容を突き詰める時には有効ですが、方法以前の他の可能性を無かったことにすることにもなるのです`, class: ["large-space-1"] },


        {type: "skipbutton",id: "skip3",label: "section 3",mobile_label: "3", text:"section 3" },

        { type: "p", text: `他の可能性を横目に、飲み会を突き詰めたい私たちは、瓶ビールがあれば頼み、人数分のグラスを注文します。すいませ〜ん！注文いいですか？瓶ビールと青菜炒め、チャーハン、チャーシューもお願いします！それとグラスは二つで！えーっとキリンで！お願いしまーす。瓶ビールのラベルを上にして、両手で丁寧に相手のグラスに注ぎます。おしぼりを瓶の下に添えるとなおgoodです`, class: ["large-space-1"] },

        { type: "p", text: `注ぐ時や注がれる時って、なんか言葉にもなってないような音が口からこぼれませんか？` },
        { type: "p", text: `まだ、未経験の皆さんは一度実践してみましょう！何事においても実践と思考の循環こそが一番重要なことです。`, class: ["large-space-1"] },

        { type: "p", text: `出会ったことがないぐらい、コテコテなフィクションを実践してみている足元には、どんな物事も取り上げることで、ノンフィクションな物語もフィクションになってしまうという事実があります。` },
        { type: "p", text: `注文した青菜炒めがなかなかやって来なくても大丈夫、暖房の風が直接当たって唇が乾いても大丈夫、ジョッキに結露してできた水滴が膝に落ちて跡を作っても大丈夫、話すことが無くなって互いに黙り込んでも大丈夫、相手がトイレ行ってる間はスマホみても大丈夫、だんだん言ってることがちぐはぐになっても大丈夫、流れてるしょうもないテレビに逐一悪口行っても大丈夫、大丈夫、大丈夫。`, class: ["large-space-1"] },

        { type: "p", text: `飲み会がつまらなければつまらないほど、そうなっていきます。`, class: ["large-space-1"] },

        { type: "p", text: `そして、このつまらなさこそ飲み会が作り出すフィクションであり、私たちの肝臓にとってのノンフィクションなのです。`, class: ["large-space-1"] },

        { type: "p", text: `やがてアルコールは分解され、いつかは集まった人間も散っていきますが、飲み会がただそのものとして存在しているのではなく、日常の一連の流れの中にあり、はたまた、厚生労働省が「節度ある適度な飲酒」を進めるように、肝臓は日頃から大切にしなければいけないようです。`, class: ["large-space-1"] },

        { type: "p", text: `しかしながら、飲み会においてそんなことは二の次で、露悪的な“ノミュニケーション”を行う没入と、翌朝の俯瞰を繰り返すことが大切なのかもしれません。` },
        { type: "p", text: `翌朝はあくまでも俯瞰という冷静さを保ち、罵ったことや泣いてしまったことを決して反省しないほうが良いでしょう。飲み会において反省性は集団としての地盤を固めるものではなく、むしろ酩酊した足場を切り崩す可能性を孕みます`, class: ["large-space-1"] },

        { type: "p", text: `つまり、中身のない混乱した状態をつくることで秩序が反転するのです。`, class: ["large-space-1"] },


        {type: "skipbutton",id: "skip4",label: "section 4",mobile_label: "4", text:"section 4" },

        { type: "p", text: `ところで、飲み会の終わり頃ってどうしても話し足りなくて、寂しくなったりして、この時間が永遠に続けばいいのになって思ってしまった時は、粘って粘って、始発まで飲んだり歩いたりする訳です。電車が動き出すまで、その街にあるものや人、生き物とかをじろじろみて歩き回ります。秋や春先に朝まで歩く際は、ぜひ上着を忘れずにしてください。`, class: ["large-space-1"] },

        { type: "p", text: `元々空洞のような時間ですから、話し足りなさや寂しさと言った感情はあるようでないもので、朝まで歩いたからといって「朝だな」以上の感動や達成した成果などがあるわけではなく、ただひたすらにだらだらと飲み歩いたに過ぎないのです。そうこれは、結局のところ宴、祭りといった架空の儀式、<a href="https://www.uta-net.com/song/54556/" target="_blank"> 世迷言（よまいごと）</a>を吐き出すための箱、客観的な事実では無駄な時間でしかないのです`, class: ["large-space-1"] },

        { type: "p", text: `ここまででニセテクスチャの主な活動について知っていただけたことかと思いますので、お酒タバコは20歳から、適度にお水も飲みながら、読んだみなさまもぜひ飲み会にご参加ください(｀･ω･´)`, class: ["large-space-2"] },
       
         { "type": "button", "targetId":2, "label": "説明音声" },

        {type: "skipbutton",id: "skip5",label: "link_list", mobile_label: "l" },
       { type: "p", text: `【link_list】`,class: ["index"]  },
        { type: "a", text: `酔うってどういうこと？|酔いの仕組みとアルコール代謝|サッポロホールディングス`,link: "https://www.sapporoholdings.jp/sustainability/alcohol/drunkenness-01.html", class: ["link-list"] },
        { type: "a", text: `アルコール｜厚生労働省`,link: "https://www.mhlw.go.jp/www1/topics/kenko21_11/b5.html", class: ["link-list"] },
        { type: "a", text: `ほんとうに「大丈夫」 | ことば（放送用語） - ことばウラ・オモテ | NHK放送文化研究所`,link: "https://www.nhk.or.jp/bunken/summary/kotoba/uraomote/101.html", class: ["link-list", "large-space-2"] },

        {type: "skipbutton",id: "skip6",label: "credit", mobile_label: "c" },
         { type: "p", text: `【credit】`,class: ["index"]  },
        { type: "p", text: `声：朗読順`, class: ["credit"] },
        { type: "p", text: `・吉月ひさたか`, class: ["credit" ]},
        { type: "p", text: `・WAKO 西村多和子`, class: ["credit"] },
        { type: "p", text: `・`, class: ["credit"] },
        { type: "p", text: `・平岡せいこ`, class: ["credit"] },
        { type: "p", text: `・難波優太`, class: ["credit", "large-space-2"] },
        
      ]
    },
    {
      id: "AboutOurActivities2",
      category: "diary",
      title: "test",
      date: "2025-11-22",
      images: [
        { src: "img/background8.png", caption: "写真1", id: 1 },
        { src: "https://youtu.be/ciqWFm4FjbQ?si=rLsYED3PpLmLdTTU", caption: "写真2", id: 2 },
        { src: "img/background8.png", caption: "写真1", id: 3 },
        { src: "https://youtu.be/ciqWFm4FjbQ?si=rLsYED3PpLmLdTTU", caption: "写真2", id: 4 },
        { src: "img/5.png", caption: "写真1", id: 5 },
        { src: "https://youtu.be/ciqWFm4FjbQ?si=rLsYED3PpLmLdTTU", caption: "写真2", id: 6 },
        { src: "img/background8.png", caption: "写真1", id: 7 },
        { src: "https://youtu.be/ciqWFm4FjbQ?si=rLsYED3PpLmLdTTU", caption: "写真2", id: 8 }
      ],
      textBlocks: [
        { type: "p", text: `こんにちは<a href="../index.html" target="_blank">ニセテクスチャ</a>です。webサイトを立ち上げて、初回のニセテ通信ということで、今回は私たちニセテクスチャの主な活動である飲み会について紹介していきます。`, class: "large-space-2" },
        { "type": "button", "targetId": 6, },

        { type: "p", text: `私たちの飲み会ではつまらなさを全面的に受け入れ、だらだらと長時間行うことを信条としています。飲み会を開くことを目的としていますが、たまに飲みながら打ち合わせをして、活動の相談をはじめ、最近あったことを話したり、悪口をこぼしたりします。打ち合わせのために飲み会をしているのか、飲み会のために打ち合わせをしているのか、ジョッキとジョッキを持つ手との境目くらい分からなくなります。`, class: ["large-space-1"]},

          { "type": "button", "targetId": 5, "label": "写真3" },
           { "type": "button", "targetId": 5, },
         

        { type: "p", text: `酔うとは「血液に溶け込んで脳に運ばれたアルコールによって脳が麻痺する状態」を指し、飲酒をすることで脳の機能が鈍り、陽気になったりします。陽気のまま終わればいいのですが、大抵の場合、クラクラ、キンキン、ゲロゲロが順番に襲って何のために集まったのかも分からなくなって自然と頬に涙も…。`, class: ["large-space-1"] },
{
  type: "skipbutton",
  id: "skip1",
  label: "section 1",
    mobile_label: "1"  
},
        { type: "p", text: `泣くだけでは解決にならないので、何のために集まったか分からなくなった飲み会のために、だらだらとする飲み会は繰り返されます。そんな不毛で必要な我々の活動の骨組みと言っても過言ではない飲み会の精神（スピリット）がいかなるものか泣きながら書き記していこうと思います。`, class: ["large-space-1"] },
       
        { type: "p", text: `やはり大切なのはとことん飲み、酔うことです。` },
        { type: "p", text: `ここでのとことんとは、単にたくさん飲むということだけでなく、臓という臓にアルコールの魂を染み込ませることです。守る立場や理屈などは基本的にないのですが、飲み会の後のことをあまり考えない方がよく染み込みます。` },
        { type: "p", text: `かと言って、私たちの飲み会酔いどれ武勇伝を披露するつもりは毛頭なく、私たちの活動のより本質的な、例えるならば炭酸で割る前のウイスキー、蒸留した後の焼酎のような精神（スピリッツ）を伝えたいのです。`, class: ["large-space-1"] },

        { type: "p", text: `飲み会には一連の流れがあり、解散という形で立ち現れた場は消えてゆきます。` },
        { type: "p", text: `「いまここ」という特性ゆえに、解散後は掴みどころのなく、夢も現もピントの合わない視界に訳がわからなくなります。同じ時間にあることを言うなら、したい話は何回してもいいし、相手の話しにも興味半分でも、それ以下でも良いのです。`, class: ["large-space-1"] },

        { type: "p", text: `そして、飲み会で起こったことを忘れることも忘れないでください。` },
        { type: "p", text: `忘れてしまったという事実を認識することは、そこでの内容は覚えていなくとも、事実が存在していたという、その輪郭だけになった線を手離さずにいるようなもので、離さなければそのまま、また続きの線に繋げることもできると思うのです。`, class: ["large-space-1"] },

        { type: "p", text: `まさに張子のように空洞化した飲み会は、確かにあの居酒屋のカウンターや半個室で訳の分からない言葉で罵り合ったり、絶品だった料理があった可能性も常に内包したメディアになりうるのです`, class: ["large-space-1"] },
        
        { type: "p", text: `何事も経験に基づいて型を決めると悩むことが減り、手順に沿って淡々と進めれば、求めているものが手に入ることに気がつきます。` },
        { type: "p", text: `しかしながら、型を事前に決めてしまうことは、その内容を突き詰める時には有効ですが、方法以前の他の可能性を無かったことにすることにもなるのです`, class: ["large-space-1"] },

        { type: "p", text: `他の可能性を横目に、飲み会を突き詰めたい私たちは、瓶ビールがあれば頼み、人数分のグラスを注文します。すいませ〜ん！注文いいですか？瓶ビールと青菜炒め、チャーハン、チャーシューもお願いします！それとグラスは二つで！えーっとキリンで！お願いしまーす。瓶ビールのラベルを上にして、両手で丁寧に相手のグラスに注ぎます。おしぼりを瓶の下に添えるとなおgoodです`, class: ["large-space-1"] },

        { type: "p", text: `注ぐ時や注がれる時って、なんか言葉にもなってないような音が口からこぼれませんか？` },
        { type: "p", text: `まだ、未経験の皆さんは一度実践してみましょう！何事においても実践と思考の循環こそが一番重要なことです。`, class: ["large-space-1"] },
      ]
    },
    {
      id: "post3",
      category: "diary",
      title: "初めての投稿",
      date: "2025-11-26",
      images: [
        { src: "img/background8.png", caption: "写真1", id: 1 },
        { src: "https://youtu.be/ciqWFm4FjbQ?si=rLsYED3PpLmLdTTU", caption: "写真2", id: 2 }
      ],
      textBlocks: [
        { type: "p", text: "これは最初の段落です。" },
        { type: "p", text: "ここは大きく開けたい段落。", class: ["large-space-1"] },
        { type: "divider" },
        { type: "p", text: "区切り線の後の段落です。" }
      ]
    },
    {
      id: "post2",
      category: "work",
      title: "作品紹介",
      date: "2025-11-25",
      textBlocks: [
        { type: "p", text: "作品の説明テキストです。" }
      ],
      images: [
        { src: "img/post2-1.jpg", caption: "", id: 1 }
      ]
    }
  ]
};
