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