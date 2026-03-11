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
      id: "000",
      category: "告知",
      title: "広告募集",
      writer: "ニセテクスチャ",
      date: "2025-11-22",
      tag: ["news"],
      images: [
        {},
      ],
      samune: "",
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
        { type: "h1", text: `2.料金` },
        { type: "p", text: `300円（税別）／月額`, class: "large-space-1" },
        { type: "p", text: `継続して掲載いただくとお得です！` },
        { type: "p", text: `1000円（税別）／6ヶ月` },
        { type: "p", text: `3000円（税別）／12ヶ月`, class: "large-space-2" },

        { type: "skipbutton", id: "skip3", label: "3.期間", mobile_label: "3" },
        { type: "h1", text: `3.期間` },
        { type: "p", text: `1ヶ月（30日間）〜`, class: "large-space-2" },

        { type: "skipbutton", id: "skip4", label: "4.形式", mobile_label: "4" },
        { type: "h1", text: `4.形式` },
        { type: "p", text: `形式 : テキスト` },
        { type: "p", text: `文字数<br>日本語 : 64文字丁度<br>英語 : 30単語丁度` },
        { type: "p", text: `*上記文字数、単語数ぴったりでお願いします。`, class: "footnote" },
        { type: "p", text: `*テキストにリンクをつけることも可能です。`, class: ["footnote", "large-space-2"] },

        { type: "skipbutton", id: "skip5", label: "5.掲載できないもの", mobile_label: "5" },
        { type: "h1", text: `5.掲載できないもの` },
        { type: "p", text: `公序良俗に反する内容<br>虚偽情報<br>差別的表現、差別を助長するもの<br>その他、不適切と判断した広告`, class: "large-space-1" },
        { type: "p", text: `掲載不可の内容についてはお申し込み時に判断いたします。`, class: "large-space-2" },

        { type: "skipbutton", id: "skip6", label: "6.申し込み方法", mobile_label: "6" },
        { type: "h1", text: `6.申し込み方法` },
        { type: "p", text: `下記メールアドレス宛にご連絡ください。` },
        { type: "p", text: `nise.texture[a]gmail.com` },
        { type: "p", text: `*[a]は@に変更してください。`, class: ["footnote", "large-space-1"] },
        { type: "p", text: `お問い合わせの際、以下の内容も合わせてお送りください。` },
        { type: "p", text: `必要情報<br>1.お名前、団体名<br>2.リンク先URL<br>3.掲載テキスト<br>4.希望掲載期間`, class: "large-space-2" },
        { type: "skipbutton", id: "skip7", label: "広告募集要項PDF", mobile_label: "詳" },
        { type: "h1", text: `【詳細】` },
        { type: "a", text: `ニセテクスチャwebサイト広告募集要項PDF↗︎`, link: "https://drive.google.com/file/d/1E56T4v7xRcFfwSXOOytGW9yCiwL64jKI/view?usp=sharing", class: ["link-list"] },

      ],
      // ③ この投稿で使いたい global のセット
      hyperlinkGroups: ["basic"],
    };
