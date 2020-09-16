/* 사용자 정의함수 
function 함수이름(인수) { 
window.open("열고싶은엡문서파일이름", "웹문서명", "크기")   } */

function partpopup(){
	window.open("popup.html", "", "width=800, height=300");
	window.close();
}
function info() {
  alert("저의 베이커리는 미금역 사거리에 있어요\n많이 이용해 주세요");//alert는 경고창
}
// 내장함수 (예제1: 방문후 얼마안되서 자동으로 뜨는 팝업 만들기)
//(예제2: 경고창으로 정보알리기)
// setTimeout(함수,밀리초); 밀리초=1/1000초
setTimeout(function () {
	info();
}, 3000);
// setTimeout()은 반복되는 팝업 함수이다.
/*setInterval(function () {
	partpopup();
}, 3000);*/
