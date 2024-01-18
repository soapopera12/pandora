
window.onload = function() {

const mtechta = document.getElementById("experience-accordion-mtechta");
const mtech = document.getElementById("experience-accordion-mtech");
const btech = document.getElementById("experience-accordion-btech");
const enkinlab = document.getElementById("experience-accordion-enkinlab");
const school = document.getElementById("experience-accordion-school");

const contentmtechta = document.getElementById("experience-accordion-content-mtechta");
const contetmtech = document.getElementById("experience-accordion-content-mtech");
const contettbtech = document.getElementById("experience-accordion-content-btech");
const contetenkinlab = document.getElementById("experience-accordion-content-enkinlab");
const contetschool = document.getElementById("experience-accordion-content-school");


mtechta.addEventListener("click", function() {
    contentmtechta.style.display = "block";
    contetmtech.style.display = "none";
    contettbtech.style.display = "none";
    contetenkinlab.style.display = "none";
    contetschool.style.display = "none";
    mtechta.style.color = "dodgerblue";
    mtech.style.color = "whitesmoke";
    btech.style.color = "whitesmoke";
    enkinlab.style.color = "whitesmoke";
    school.style.color = "whitesmoke";
});

mtech.addEventListener("click", function() {
    contentmtechta.style.display = "none";
    contetmtech.style.display = "block";
    contettbtech.style.display = "none";
    contetenkinlab.style.display = "none";
    contetschool.style.display = "none";
    mtechta.style.color = "whitesmoke";
    mtech.style.color = "dodgerblue";
    btech.style.color = "whitesmoke";
    enkinlab.style.color = "whitesmoke";
    school.style.color = "whitesmoke";
});

btech.addEventListener("click", function() {
    contentmtechta.style.display = "none";
    contettbtech.style.display = "block";
    contetmtech.style.display = "none";
    contetenkinlab.style.display = "none";
    contetschool.style.display = "none";
    mtechta.style.color = "whitesmoke";
    mtech.style.color = "whitesmoke";
    btech.style.color = "dodgerblue";
    enkinlab.style.color = "whitesmoke";
    school.style.color = "whitesmoke";
});

enkinlab.addEventListener("click", function() {
    contentmtechta.style.display = "none";
    contetenkinlab.style.display = "block";
    contettbtech.style.display = "none";
    contetmtech.style.display = "none";
    contetschool.style.display = "none";
    mtechta.style.color = "whitesmoke";
    mtech.style.color = "whitesmoke";
    btech.style.color = "whitesmoke";
    enkinlab.style.color = "dodgerblue";
    school.style.color = "whitesmoke";
});

school.addEventListener("click", function() {
    contentmtechta.style.display = "none";
    contetschool.style.display = "block";
    contettbtech.style.display = "none";
    contetenkinlab.style.display = "none";
    contetmtech.style.display = "none";
    mtechta.style.color = "whitesmoke";
    mtech.style.color = "whitesmoke";
    btech.style.color = "whitesmoke";
    enkinlab.style.color = "whitesmoke";
    school.style.color = "dodgerblue";
});

document.getElementById("checkout").addEventListener("click", function() {
    // Redirect to the desired site
    window.location.href = "https://github.com/soapopera12";
});

};


