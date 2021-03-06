function makeRandomRecommendPrefix() {
	return '<h2>猜你喜欢：</h2>';
}

function makeRandomRecommendSuffix() {
	return '';
}


function showDisplayRandomRecommend() {
    var shouldDisplay = true;
    /*if (isSelfRefer() ) {
        shouldDisplay = isMobile();
    }*/
	return shouldDisplay;
}

var sDroidRandomRecommendClass = 'droid_random_recommend_class';


function isRandomRecommendInDebug() {
	return false;
}

function getRecommendBooks() {
    
    
	var commonData = makeCommonBookDataSource();
	var programData = makeProgramBookDataSource();
	var javaData = makeJavaBookData();
	var androidData = makeAndroidBookData();

	var target = {};
	$.extend(target, commonData, programData, javaData, androidData);
	target = shuffleJsonObject(target);
	target = splitJSONObject(target, 2);
	var recommendData = {};
	for (var key in target) {
		recommendData['[图书]' + key] = target[key];
	}
	//console.info(recommendData);
    return recommendData;
}


function appendRecommendBook(data) {
    if (isMobile()) {
        return data;
    }
    
    var book = getRecommendBooks();
    var target = {};
    $.extend(target, book, data);
    //console.info(target);
    return target;
}



function makeRecommendPost(bestPosts) {
    if (!showDisplayRandomRecommend()) {
    	return;
    }
	var randomTitles = [];
    for (var post in bestPosts) {
   		randomTitles.push(post);
    }
    
    var recommendPosts = {};
    var recommendLimitSize = 10;
    var currentUrl = window.location.href;
    var count = 0;
    while(count < recommendLimitSize) {
    	var randomTitle = randomTitles[Math.floor(Math.random() * randomTitles.length)];
        randomTitles.pop(randomTitle);
        randomUrl = bestPosts[randomTitle];
        if (currentUrl != randomUrl && !recommendPosts.hasOwnProperty(randomTitle)) {
        	recommendPosts[randomTitle] = appendRandomRecommendMark(randomUrl);
            count++;
        }
    }
    recommendPosts = addSpecialRecommendPosts(recommendPosts); 
   	//recommendPosts = appendRecommendBook(recommendPosts);
    
    return sortRecommendPosts(recommendPosts);
}

function addSpecialRecommendPosts(recommendPosts) {
    //if (!(+new Date()%2)) {
		recommendPosts['程序员必读的六本书'] = 'http://droidyue.com/blog/2015/07/04/six-books-every-programer-must-read/';
    //} else {
    	recommendPosts['Java程序员必读的9本书'] = 'http://droidyue.com/blog/2014/11/30/java-programmer-must-read-these-9-books/';

        recommendPosts['树莓派入手指南'] = 'http://droidyue.com/blog/2016/08/22/before-you-buy-raspberry-pi/';
    //}
    //recommendPosts['技术小黑屋内推，精选优质开发岗位'] = 'http://droidyue.com/neitui/index.html';
    recommendPosts['精选优质文章列表'] = 'http://droidyue.com/ninki/';
    
    //recommendPosts['[打赏]文章不错，有赏'] = 'http://droidyue.com/donate/';
    
    //deadline unknow
    if (isDesktop()) {
        //recommendPosts['技术小黑屋福利'] = 'http://droidyue.com/fuli/index.html';   
        //recommendPosts['[视频]Python入门到精通（附爬虫项目）'] = 'http://s.click.taobao.com/t?e=m%3D2%26s%3DYXWtB02Bm94cQipKwQzePOeEDrYVVa64LKpWJ%2Bin0XLjf2vlNIV67lI8XdvNddGdkfkm8XrrgBvM3gYQjCL89vSdxyvKgR5IYpon8UCVSYYI%2FK5eBMXcfMU30%2B%2FfgbRIQpkF8umHo30YTuNKTjRCu3EqY%2Bakgpmw&pvid=10_113.45.43.231_390_1457844435517';  
        //recommendPosts['我的Github小窝'] = 'https://github.com/androidyue';
           
    }
    
    
    
    return recommendPosts;
}


function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}

function appendRandomRecommendMark(url) {
    if (!endsWith(url, '/')) {
        url = url + '/'
    }
    //url = url + "?droid_refer=random_recommend"
    return url;
}

function sortRecommendPosts(recommendPosts) {
    var sortedPosts = {};
    var keys = Object.keys(recommendPosts);
    var sortedKeys = keys.sort(function(a, b){
  		return  getUTF8ByteLength(a) - getUTF8ByteLength(b); // ASC -> a - b; DESC -> b - a
	});
    for (var index in sortedKeys) {
        var key = sortedKeys[index];
        sortedPosts[key] = recommendPosts[key];
    }
    return sortedPosts;
}


function getUTF8ByteLength(s) {
    return unescape(encodeURIComponent(s)).length;
}







