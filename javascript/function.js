var statusToggleTagId = false;
function toggleShowTag(tagId) {
	if (statusToggleTagId == false) {
		statusToggleTagId = true;
    	document.getElementById(tagId).style.display = "block";
	}
	else{
		statusToggleTagId = false;
    	document.getElementById(tagId).style.display = "none";
	}
}
function changeBlogImage(imgId){
	var slides = document.getElementsByClassName("slide");
	var slideList = document.getElementsByClassName("image-list");

	var i
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	for (i = 0; i < slideList.length; i++) {
		slideList[i].getElementsByTagName('div')[0].getElementsByTagName('span')[0].className = "";
	}

	slides[imgId-1].style.display = "block";
	slideList[imgId-1].getElementsByTagName('div')[0].getElementsByTagName('span')[0].className = "active";
}
function startLargeImage(imgUrl){
	$("#large-img").attr("src", imgUrl);
}