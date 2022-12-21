//  Array storing all the projects
const projects = [
    {
      name: "Tonic",
      description:
        " A daily selection of privately personalized reads; no accounts or sign-ups required.",
      image: "./assets/tonic-nature.png",
      technologies: ["html", "css", "javascript"],
      tags: ["CANOPY", "Bac End Dev", "2015"],
      link_live: "https://kensteph.github.io/Portfolio/",
      link_source: "https://github.com/kensteph/Portfolio",
    },
    {
      name: "Multi-Post Stories",
      description:
        " Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.",
      image: "./assets/multi-post-stories-2.png",
      technologies: ["html", "Ruby on rails", "css", "javascript"],
      tags: ["CANOPY", "Bac End Dev", "2015"],
      link_live: "https://kensteph.github.io/Portfolio/",
      link_source: "https://github.com/kensteph/Portfolio",
    },
    {
      name: "Facebook 360",
      description:
        "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
      image: "./assets/tonic.png",
      technologies: ["html", "Ruby on rails", "css", "javascript"],
      tags: ["FACEBOOK", "Full Stack Dev", "2015"],
      link_live: "https://kensteph.github.io/Portfolio/",
      link_source: "https://github.com/kensteph/Portfolio",
    },
    {
      name: "Uber Navigation",
      description:
        "A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.",
      image: "./assets/multi-post-stories.png",
      technologies: ["html", "Ruby on rails", "css", "javascript"],
      tags: ["Uber", "Lead Developer", "2015"],
      link_live: "https://kensteph.github.io/Portfolio/",
      link_source: "https://github.com/kensteph/Portfolio",
    },
  ];
  
  //Create li children
  const createLiChildren = (ul, project,section) => {
    if (section === "tag") {
      project.tags.forEach((tag, i) => {
        if (i == 1 || i == 2) {
          //Create li
          let li = document.createElement("li");
          li.innerHTML = "<div class='bullet'></div>";
          //Add li to ul
          ul.appendChild(li);
        }
        //Create li
        let li = document.createElement("li");
        li.textContent = tag;
        //Add li to ul
        ul.appendChild(li);
      });
    } else {
      project.technologies.forEach((tag) => {
        //Create li
        let li = document.createElement("li");
        li.textContent = tag;
        //Add li to ul
        ul.appendChild(li);
      });
    }
  
    return ul;
  };
  //  Get the works section
  const workSection = document.querySelector("#works");
  
  //  Dynamicly create the cards
  projects.forEach((project, projectPos) => {
    //console.log(project);
  
    //Create a new div
    let divCard = document.createElement("div");
    // Add class
    divCard.className = "card-works";
  
    //Create a div for the image
    let divImage = document.createElement("div");
    // Add a class for the div
    divImage.className = "img-container";
  
    //Create an img
    let img = document.createElement("img");
    img.className = "project-screenshot";
    img.src = project.image;
    img.alt = `${project.name} image`;
  
    // Add the image into the divImage
    divImage.appendChild(img);
  
    //Create a new div
    let divProjectDesc = document.createElement("div");
    //Add class to the div
    divProjectDesc.className = "project-desc";
  
    //Create a H2
    let h2 = document.createElement("h2");
    h2.textContent = project.name;
    //Add H2 to divProjectDesc
    divProjectDesc.appendChild(h2);
  
    //Create ul tags
    let ul = document.createElement("ul");
    ul.className = "s-desc";
    ul = createLiChildren(ul, project,"tag");
    //Add ul to divProjectDesc
    divProjectDesc.appendChild(ul);
  
    //Create a p
    let p = document.createElement("p");
    p.className = "desc-text";
    p.textContent = project.description;
    //Add H2 to divProjectDesc
    divProjectDesc.appendChild(p);
  
    //Create ul technologies
    let ultech = document.createElement("ul");
    ultech.className = "categories";
    ultech=createLiChildren(ultech, project,"techs");
    //Add ultech to divProjectDesc
    divProjectDesc.appendChild(ultech);
  
    //Create button
    let seeBtn = document.createElement("button");
    seeBtn.className = "see-project-btn";
    seeBtn.id = projectPos;
    seeBtn.type = "button";
    seeBtn.textContent = "See Project";
    //Add H2 to divProjectDesc
    divProjectDesc.appendChild(seeBtn);
  
    //Add divImage intultecho divCard
    divCard.appendChild(divImage);
    //Add divProjectDesc into divCard
    divCard.appendChild(divProjectDesc);
  
    // Add the card
    workSection.appendChild(divCard);
  });

  // Traget the elements
const seeProjectBtns = document.querySelectorAll(".see-project-btn");
const popUp = document.querySelector("#details-modal");
const closePopUp = document.querySelector("#close-popup");

//POPUP ELEMENTS
const projectName = document.querySelector("#project-name");
let projectUlTags = document.querySelector("#popup-ul-tags");
let projectUlTechs = document.querySelector("#popup-ul-techs");
const projectScreenshot = document.querySelector("#popup-screenshot");
const projectDesc = document.querySelector("#popup-desc");
const projectLive = document.querySelector("#see-live");
const projectSource = document.querySelector("#project-source");

// Functions
const displayPopUp = (projectId) => {
  let project = projects[projectId];
  projectName.textContent = project.name;
  projectScreenshot.src = project.image;
  projectLive.href = project.link_live;
  projectSource.href = project.link_source;
  projectUlTags.innerHTML='';
  projectUlTags = createLiChildren(projectUlTags, project,"tag");
  projectUlTechs.innerHTML='';
  projectUlTechs = createLiChildren(projectUlTechs, project,"tech");
  popUp.style.display = "flex";
};

const hidePopUp = () => {
  popUp.style.display = "none";
};

//  Add event on the button
seeProjectBtns.forEach((seeProjectBtn) => {
  seeProjectBtn.addEventListener("click", () => displayPopUp(seeProjectBtn.id));
});
closePopUp.addEventListener("click", hidePopUp);
