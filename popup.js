function openw(){
  console.log("work");
	chrome.tabs.create({url: 'http://ya.ru'});
}

var q = console;
window.close();
q.log("work level 0");
openw;
window.open('http://ya.ru');
