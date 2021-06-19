import "./styles.css";

//まずは簡単な機能を作成して機能を細分化して実装していく。
//valueでinputに入力した文字列を取ってこれる。
//HTMLに全角スペースを入れないように！
const onClickAdd = () => {
  //テストボックスの値を習得し、初期化する。
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div 生成
  const div = document.createElement("div");
  div.className = "list-row"; //クラス名を追加

  // liタグ生成
  const li = document.createElement("li");
  li.innerText = inputText; //liタグのテキストに入力した内容を格納

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  console.log(completeButton);

  //divタグの子要素に各要素を設定
  div.appendChild(li);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
  console.log(div);
};

//documentを用いてDOMにアクセスする。
//HTMLを習得する。
//document.headでheadタグを取ってこれる。
//getElementById: idを基準にタグを取ってくる。
//addEventListener: イベント処理を行う。
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
