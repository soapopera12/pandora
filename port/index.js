
window.onload = function() {

const mtech = document.getElementById("experience-accordion-mtech");
const btech = document.getElementById("experience-accordion-btech");
const enkinlab = document.getElementById("experience-accordion-enkinlab");
const school = document.getElementById("experience-accordion-school");

const contetmtech = document.getElementById("experience-accordion-content-mtech");
const contettbtech = document.getElementById("experience-accordion-content-btech");
const contetenkinlab = document.getElementById("experience-accordion-content-enkinlab");
const contetschool = document.getElementById("experience-accordion-content-school");


mtech.addEventListener("click", function() {
    contetmtech.style.display = "block";
    contettbtech.style.display = "none";
    contetenkinlab.style.display = "none";
    contetschool.style.display = "none";
    mtech.style.color = "dodgerblue";
    btech.style.color = "whitesmoke";
    enkinlab.style.color = "whitesmoke";
    school.style.color = "whitesmoke";
});

btech.addEventListener("click", function() {
    contettbtech.style.display = "block";
    contetmtech.style.display = "none";
    contetenkinlab.style.display = "none";
    contetschool.style.display = "none";
    mtech.style.color = "whitesmoke";
    btech.style.color = "dodgerblue";
    enkinlab.style.color = "whitesmoke";
    school.style.color = "whitesmoke";
});

enkinlab.addEventListener("click", function() {
    contetenkinlab.style.display = "block";
    contettbtech.style.display = "none";
    contetmtech.style.display = "none";
    contetschool.style.display = "none";
    mtech.style.color = "whitesmoke";
    btech.style.color = "whitesmoke";
    enkinlab.style.color = "dodgerblue";
    school.style.color = "whitesmoke";
});

school.addEventListener("click", function() {
    contetschool.style.display = "block";
    contettbtech.style.display = "none";
    contetenkinlab.style.display = "none";
    contetmtech.style.display = "none";
    mtech.style.color = "whitesmoke";
    btech.style.color = "whitesmoke";
    enkinlab.style.color = "whitesmoke";
    school.style.color = "dodgerblue";
});

};
