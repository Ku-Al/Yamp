function openw(){
  console.log("work");
	chrome.tabs.create({url: 'http://ya.ru'});
    console.log("end");
}

//var q = console;
//window.close();
//q.log("work level 0");
console.log("start");
openw();
console.log("end work");
//window.open('http://ya.ru');
