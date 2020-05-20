'use strict';
//取得したファイルから日時とタイトルと記事を取得

//取得した情報をHOME画面に表示

//ログイン機能

//ファイルの書き出し

//ファイルの読み込み

//SPA風の表示
  const menuItems = document.querySelectorAll('#menu li a');
  const contents = document.querySelectorAll('.content');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e =>{
      e.preventDefault();
      menuItems.forEach( item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      contents.forEach( contents => {
        contents.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });
