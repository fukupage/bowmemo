'use strict';

//予め必要な定数や変数を宣言しておく
//--------------------------------------------------------------------------------------------
//現在の日時の取得
let now = new Date();

//日時に関するもの（jsonからの読み出し）
let YY;
let MM;
let DD;
let HOUR;
let MIN;
let SEC;

//記事に関するもの（jsonからの読み出し）
let TITLE;
let TEXT;

//データのキー
let KEY;

//記事に関するもの（投稿した記事に関するもの）
let postItem;
let PMTitle;
let PMText;

//ファイル操作に関するもの



//とりあえず、LocalStorageを利用する。
//--------------------------------------------------------------------------------------------
function database() {
  let memoData = "";
  if(!localStorage.getItem('memoData')){
    memoData = "ローカルに保存されている記事はありません。";
  } else {
    memoData =localStorage.getItem('memoData');
  }
  console.log('memoData = ${memoData}');
}

//取得したファイルから日時とタイトルと記事を取得(fullyear - month - date /hour(24) /min /sec )
//--------------------------------------------------------------------------------------------
function timestamp() {

  let Year = now.getFullYear();
  let Month = now.getMonth() + 1;
  let Date = now.getDate();
  let Hour = now.getHours();
  let Min = now.getMinutes();
  let Sec = now.getSeconds();

  let postTime = console.log(`today:${Year}/${Month}/${Date}  ${Hour}:${Min}:${Sec}`);

  return postTime;


}


//取得した情報をHOME画面に表示
//--------------------------------------------------------------------------------------------
function timeline() {
  //格納されたjsonファイルを読み込む

  //読み込んだjsonをhtmlとして吐き出す
  let postArea = document.getElementById('inner');

  for (let i = 0; i < postItem.length; i++) {
    if(postItem[i] != null){

      KEY = postItem[i].key;
      YY = postItem[i].year;
      MM = postItem[i].month;
      DD = postItem[i].date;
      HOUR = postItem[i].hour;
      MIN = postItem[i].min;
      SEC = postItem[i].sec;
      TITLE = postItem[i].title;
      TEXT = postItem[i].text;

      //HOMEのHTMLテンプレート

      let tlTemp = `
      <section>
      <h2>${TITLE}</h2>
      <span>${YY} / ${MM} / ${DD} -- ${HOUR}:${MIN}:${SEC}</span>
      <p>${TEXT}</p>
      </section>
      `;

      postArea.innerHTML += tlTemp;
    }
  }
}

//ログイン機能(ここではGoogleのアカウントなんかでログインができる仕様にします)。
//--------------------------------------------------------------------------------------------
function login() {


}

//記事の投稿（イベントリスナーで投稿ボタンを監視して、クリックされたらタイトルと記事をJson形式で保持）
//--------------------------------------------------------------------------------------------
function postmemo() {
 const memoTitle = document.memo_form.memo_title;
 const memoText = document.memo_form.memo_text;
 const memoSubmit = document.getElementById('memo_submit').addEventListener('click', function(e){
   e.preventDefault();

   PMTitle = memoTitle.value;
   PMText = memoText.value;


   console.log(PMTitle);
   console.log(PMText);
  });


 //ログインしてない場合はごめんなさいページを表示


  //ログインしている場合は記事の投稿フォームを表示


  //投稿ボタンが押された際は一旦確認する


  //問題ない場合はjson形式で格納（一旦投稿順にソートする）

}

//ファイルの書き出し（json形式のログファイルを吐き出します）。
//--------------------------------------------------------------------------------------------
function getmemo() {

  //ログインしてない場合はごめんなさいページを表示(iframeで別デザインを読み込む？)


  //ログインしている書き出しページを表示



}

//ファイルの読み込み（json形式のログファイルを読み込みます(logディレクトリに格納)）
//--------------------------------------------------------------------------------------------
function importmemo() {

  //ログインしてない場合はごめんなさいページを表示(iframeで別デザインを読み込む？)


  //アップロードして読み込みデータを表示

  let req = new XMLHttpRequest();
  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      postItem = JSON.parse(req.responseText);
    }
  };
  req.open("GET", "log/log.json", false);
  req.send(null);
}


//SPA風の表示
//見た目のみSPAの動きですが、実際はHTMLの一部だけを表示するというギミック
//--------------------------------------------------------------------------------------------
function views() {

  const menuItems = document.querySelectorAll('#menu li a');
  const contents = document.querySelectorAll('.content');

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
}

database();
importmemo();
timeline();
postmemo();
timestamp();

views();
