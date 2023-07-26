// --------------About me section for the click on the skills, eduction, internships &training -------------------
var tab_links = document.getElementsByClassName('about_me_nav');
var Skills = document.getElementsByClassName('about_me_detail');
var Internships = document.getElementsByClassName('Internships');
var Education = document.getElementsByClassName('Education  ');
function openthis(aboutme){
    for(tab_link of tab_links){
        tab_link.classList.remove("current");
    }
    for(tab_content1 of Skills){
        tab_content1.classList.remove("my");
    }
    event.currentTarget.classList.add("current");
    document.getElementById(aboutme).classList.add("my");
}

//  ------------ For making the responsive Website "it's help to show the sidebar menu ----------
var sidemenu = document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}

// ---------------- For writting the different words in Home section --------------
var typed = new Typed(".writing",{
    strings:["Frontend Developer", "YouTuber", "Web Developer", "Programmer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


