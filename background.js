// Global accessor that the popup uses.
var coordinates = {};
var selectedCoordinates = null;
var selectedId = null;

function updateCoordinates(tabId) {
    chrome.tabs.sendRequest(tabId, {}, function(coordinates_pair) {
        coordinates[tabId] = coordinates_pair;
        if (!coordinates_pair) {
            chrome.pageAction.hide(tabId);
        } else {
            chrome.pageAction.show(tabId);
            if (selectedId == tabId) {
                updateSelected(tabId);
            }
        }
    });
}

chrome.tabs.onUpdated.addListener(function(tabId,info,tab) { // обновление вкладки
	console.log(info.url);
	if(info.url)
    	if(/maps.yandex./.test(info.url)){
      		chrome.pageAction.show(tabId);
			if (change.status == "complete") {
				updateCoordinates(tabId);				// обновляем координаты
			}
		}	
	
}); 

//chrome.tabs.onUpdated.addListener(function(tabId, change, tab) { // Всякий раз, когда вкладка обновляется
//    if (change.status == "complete") {
//        updateCoordinates(tabId);				// обновляем координаты
//    }
//});


// Ensure the current selected tab is set up.
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    updateCoordinates(tabs[0].id);
});