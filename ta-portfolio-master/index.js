var links = document.getElementsByClassName("goer");
for (var i = 0; i < links.length; ++i) {
  links[i].addEventListener("click", go);
}
function go() {
  if (window.innerWidth < 600) {
    document.getElementById("header-links-ul").classList.add("adder");
    document.getElementById("ham").className = "fas fa-bars";
    document.body.style.overflow = "scroll";
  }
}
document.getElementById("ham").addEventListener("click", () => {
  document.getElementById("header-links-ul").classList.remove("adder");
  document.getElementById("check").checked = false;
  if (document.getElementById("ham").className == "fa-solid fa-xmark") {
    document.getElementById("ham").className = "fas fa-bars";
    document.getElementById("header-links-ul").classList.add("adder");
    document.body.style.overflow = "scroll";
  } else {
    document.getElementById("ham").className = "fa-solid fa-xmark";
    document.body.style.overflow = "hidden";
    document.getElementById("header-links-ul").style.overflowY = "scroll";
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth >= 601) {
    document.getElementById("header-links-ul").classList.remove("adder");
    document.getElementById("ham").className = "fas fa-bars";
  } else if (window.innerWidth < 600) {
    document.getElementById("header-links-ul").classList.add("adder");
  }
});

function changeColorUsingClass(arr) {
  for (let i = 0; i < arr.length; ++i) {
    var items = document.getElementsByClassName(arr[i]);
    for (let j = 0; j < items.length; ++j) {
      items[j].classList.toggle("blackColor");
    }
  }
}

function changeColorUsingId(theId) {
  document.getElementById(theId).classList.toggle("blackColor");
}

document.getElementById("darkmode").addEventListener("click", () => {
  document.getElementsByTagName("body")[0].classList.toggle("bodyBlack");
  document.getElementsByTagName("header")[0].classList.toggle("bodyBlack");

  const arr = [
    "goer",
    "whyme",
    "lorem",
    "flexAlign",
    "resume-heading",
    "resume-course",
    "resume-uni-desc",
    "forBlack",
    "pricing-course",
    "footer-para",
    "education",
    "pricing-for-black",
    "forSome",
    "fas fa-bars",
  ];

  changeColorUsingClass(arr);
  changeColorUsingId("firstsmall");

  var items = document.getElementsByClassName("blacking");
  for (let i = 0; i < items.length; ++i) {
    items[i].classList.toggle("formBlack");
  }
  document.getElementsByTagName("input");

  // document.getElementById('darkmode').id = 'lighmode'
  if (document.getElementById("darkIcon").className === "fa-solid fa-sun fa-beat") {
    document.getElementById("darkIcon").className = "fa-solid fa-moon fa-beat";
  } else {
    document.getElementById("darkIcon").className = "fa-solid fa-sun fa-beat";
  }
});

// var i = 0;
// var txt = 'Creative Designer';

// function typeWriterPlus() {
//     if (i < txt.length) {
//         document.getElementById("para").innerHTML += txt.charAt(i);
//         i++;
//         setTimeout(typeWriterPlus, 80);
//         i-1;
//     }
// }
// function typeWriterMinus() {
//     clearTimeout()
//     if (i >= 0) {
//         let new_text = txt.substring(0, i)
//         document.getElementById("para").innerHTML = new_text;
//         i--;
//         setTimeout(typeWriterMinus, 80);
//     }
//     else if(i == txt.length) {
//         typeWriterPlus()
//     }
// }

// setInterval(() => {
//     setTimeout(() => {
//         typeWriterPlus()
//     }, 1000);
//     clearTimeout()
//     setTimeout(() => {
//         typeWriterMinus()
//     }, 3000);
// }, 4000);
