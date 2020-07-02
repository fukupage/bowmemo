'use strict';

//予め必要な定数や変数を宣言しておく
//--------------------------------------------------------------------------------------------
//日時に関するもの
let now = new Date();
let KEY;
let YY;
let MM;
let DD;
let HOUR;
let MIN;
let SEC;
let TITLE;
let TEXT;


//記事に関するもの
let postItem;
let PMTitle;
let PMText;
let postTime;
let tlTemp;
let postTemp;

//ファイル操作に関するもの

const menuItems = document.querySelectorAll('#menu li a');
const contents = document.querySelectorAll('.content');
let postArea = document.getElementById('inner');


//ファイルの読み込み（json形式のログファイルを読み込みます(logディレクトリに格納)）
//--------------------------------------------------------------------------------------------
const importmemo = () => {

  //ログインしてない場合はごめんなさいページを表示(iframeで別デザインを読み込む？)


}




//とりあえず、LocalStorageを利用する。
//--------------------------------------------------------------------------------------------
const database = () => {

}

//取得したファイルから日時とタイトルと記事を取得(fullyear - month - date /hour(24) /min /sec )
//--------------------------------------------------------------------------------------------
const timestamp = () => {

  let Year = now.getFullYear();
  let Month = now.getMonth() + 1;
  let Date = now.getDate();
  let Hour = now.getHours();
  let Min = now.getMinutes();
  let Sec = now.getSeconds();

  postTime = `today:${Year}/${Month}/${Date}  ${Hour}:${Min}:${Sec}`;

  return postTime;
}


//取得した情報をHOME画面に表示
//--------------------------------------------------------------------------------------------
const timeline = () => {
  //格納されたjsonファイルを読み込む
  let req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      postItem = JSON.parse(req.responseText);
    }
  };
  req.open("GET", "log/log.json", false);
  req.send(null);
  //読み込んだjsonをhtmlとして吐き出す
  KEY = postItem.length;

  for (let i = 0; i < postItem.length; i++) {
    if (postItem[i] != null) {

      YY = postItem[i].year;
      MM = postItem[i].month;
      DD = postItem[i].date;
      HOUR = postItem[i].hour;
      MIN = postItem[i].min;
      SEC = postItem[i].sec;
      TITLE = postItem[i].title;
      TEXT = postItem[i].text;

      const tlTemp = `
      <section>
      <h2>${TITLE}</h2>
      <span>${YY} / ${MM} / ${DD} -- ${HOUR}:${MIN}:${SEC}</span>
      <p>${TEXT}</p>
      <p>${KEY}</p>
      </section>
      `;
      return tlTemp;
    }
  }
}

//ログイン機能(ここではGoogleのアカウントなんかでログインができる仕様にします)。
//--------------------------------------------------------------------------------------------
const login = () => {


}

//記事の投稿（イベントリスナーで投稿ボタンを監視して、クリックされたらタイトルと記事をJson形式で保持）
//--------------------------------------------------------------------------------------------
const postmemo = (postTemp) => {
  const memoTitle = document.memo_form.memo_title;
  const memoText = document.memo_form.memo_text;
  const memoSubmit = document.getElementById('memo_submit').addEventListener('click', function () {
    e.preventDefault();

    PMTitle = memoTitle.value;
    PMText = memoText.value;

  });
  YY = now.getFullYear();
  MM = now.getMonth() + 1;
  DD = now.getDate();
  HOUR = now.getMinutes();
  MIN = now.getMinutes();
  SEC = now.getSeconds();
  TITLE = PMTitle;
  TEXT = PMText;

  postTemp = `
        <section>
        <p>aaa-------------------------------------</p>
        <h2>${TITLE}</h2>
        <span>${YY} / ${MM} / ${DD} -- ${HOUR}:${MIN}:${SEC}</span>
        <p>${TEXT}</p>
        </section>
        `;
  return postTemp;


  //ログインしてない場合はごめんなさいページを表示


  //ログインしている場合は記事の投稿フォームを表示


  //投稿ボタンが押された際は一旦確認する


  //問題ない場合はjson形式で格納（一旦投稿順にソートする）

}

//ファイルの書き出し（json形式のログファイルを吐き出します）。
//--------------------------------------------------------------------------------------------
const getmemo = () => {

  //ログインしてない場合はごめんなさいページを表示(iframeで別デザインを読み込む？)


  //ログインしている書き出しページを表示



}




(function () {


  //SPA風の表示
  //見た目のみSPAの動きですが、実際はHTMLの一部だけを表示するというギミック
  //--------------------------------------------------------------------------------------------

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();
      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      contents.forEach(contents => {
        contents.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
  postArea.innerHTML += postmemo;
  postArea.innerHTML += timeline;

})();
