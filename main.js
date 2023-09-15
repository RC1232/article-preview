const share= document.getElementById("share");

const profile= document.getElementById("profile");

const activeBar= document.getElementById("active");

share.addEventListener("mouseover", (e) => {e.preventDefault()
profile.style.display ="none";

share.style.top= "3rem";

activeBar.style.display= "block";
});








