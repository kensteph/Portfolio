//  Array storing all the projects
const projects = [
  {
    name: 'Tonic',
    description:
        ' A daily selection of privately personalized reads; no accounts or sign-ups required.',
    image: './assets/tonic-nature.png',
    technologies: ['html', 'css', 'javascript'],
    tags: ['CANOPY', 'Bac End Dev', '2015'],
    link_live: 'https://kensteph.github.io/Portfolio/',
    link_source: 'https://github.com/kensteph/Portfolio',
    long_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    name: 'Multi-Post Stories',
    description:
        ' Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    image: './assets/multi-post-stories-2.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    tags: ['CANOPY', 'Bac End Dev', '2015'],
    link_live: 'https://kensteph.github.io/Portfolio/',
    link_source: 'https://github.com/kensteph/Portfolio',
    long_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    name: 'Facebook 360',
    description:
        "Exploring the future of media in Facebook's first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.",
    image: './assets/tonic.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    tags: ['FACEBOOK', 'Full Stack Dev', '2015'],
    link_live: 'https://kensteph.github.io/Portfolio/',
    link_source: 'https://github.com/kensteph/Portfolio',
    long_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
  {
    name: 'Uber Navigation',
    description:
        'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    image: './assets/multi-post-stories.png',
    technologies: ['html', 'Ruby on rails', 'css', 'javascript'],
    tags: ['Uber', 'Lead Developer', '2015'],
    link_live: 'https://kensteph.github.io/Portfolio/',
    link_source: 'https://github.com/kensteph/Portfolio',
    long_description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
  },
];

// Create li children
const createLiChildren = (ul, project, section) => {
  if (section === 'tag') {
    project.tags.forEach((tag, i) => {
      if (i === 1 || i === 2) {
        // Create li
        const li = document.createElement('li');
        li.innerHTML = "<div class='bullet'></div>";
        // Add li to ul
        ul.appendChild(li);
      }
      // Create li
      const li = document.createElement('li');
      li.textContent = tag;
      // Add li to ul
      ul.appendChild(li);
    });
  } else {
    project.technologies.forEach((tag) => {
      // Create li
      const li = document.createElement('li');
      li.textContent = tag;
      // Add li to ul
      ul.appendChild(li);
    });
  }

  return ul;
};
  //  Get the works section
const workSection = document.querySelector('#works');

//  Dynamically create the cards
projects.forEach((project, projectPos) => {
  // Create a new div
  const divCard = document.createElement('div');
  // Add class
  divCard.className = 'card-works';

  // Create a div for the image
  const divImage = document.createElement('div');
  // Add a class for the div
  divImage.className = 'img-container';

  // Create an img
  const img = document.createElement('img');
  img.className = 'project-screenshot';
  img.src = project.image;
  img.alt = `${project.name} image`;

  // Add the image into the divImage
  divImage.appendChild(img);

  // Create a new div
  const divProjectDesc = document.createElement('div');
  // Add class to the div
  divProjectDesc.className = 'project-desc';

  // Create a H2
  const h2 = document.createElement('h2');
  h2.textContent = project.name;
  // Add H2 to divProjectDesc
  divProjectDesc.appendChild(h2);

  // Create ul tags
  let ul = document.createElement('ul');
  ul.className = 's-desc';
  ul = createLiChildren(ul, project, 'tag');
  // Add ul to divProjectDesc
  divProjectDesc.appendChild(ul);

  // Create a p
  const p = document.createElement('p');
  p.className = 'desc-text';
  p.textContent = project.description;
  // Add H2 to divProjectDesc
  divProjectDesc.appendChild(p);

  // Create ul technologies
  let ultech = document.createElement('ul');
  ultech.className = 'categories';
  ultech = createLiChildren(ultech, project, 'techs');
  // Add ultech to divProjectDesc
  divProjectDesc.appendChild(ultech);

  // Create button
  const seeBtn = document.createElement('button');
  seeBtn.className = 'see-project-btn';
  seeBtn.id = projectPos;
  seeBtn.type = 'button';
  seeBtn.textContent = 'See Project';
  // Add H2 to divProjectDesc
  divProjectDesc.appendChild(seeBtn);

  // Add divImage intultecho divCard
  divCard.appendChild(divImage);
  // Add divProjectDesc into divCard
  divCard.appendChild(divProjectDesc);

  // Add the card
  workSection.appendChild(divCard);
});

// Traget the elements
const seeProjectBtns = document.querySelectorAll('.see-project-btn');
const popUp = document.querySelector('#details-modal');

// Functions
const hidePopUp = () => {
  popUp.style.display = 'none';
  // Enable body scrolling
  const body = document.querySelector('body');
  body.classList.toggle('stop-scrolling');
};

// ADD the content for popup window
const popUpContent = `<div class="details-content">
    <div class="popup-header">
      <h2 id="project-name"></h2>
      <img
        id="close-popup"
        src="./assets/close-popup.png"
        alt="Close pupup button icon"
      />
    </div>
    
    <ul class="s-desc" id="popup-ul-tags">
    </ul>
    
      <img
        id="popup-screenshot"
        class="screenshot"
        alt="project image"
      />
    <div class="popup-desc">
      <p class="popup-text-desc" id="popup-desc"></p>
      <div class="popup-footer">
        <ul class="categories fs"  id="popup-ul-techs">
        </ul>
        <hr class="line">
        <div class="links-popup">
          <a class="btn-popup" href="#" target="_blank" rel="noopenner" id="see-live">See Live <img class="btn-icon" src="./assets/see-live.png" alt="Github blue icon" ></a>
          <a class="btn-popup" href="#" target="_blank" rel="noopenner" id="project-source">See Source <img class="btn-icon" src="./assets/github-blue.png" alt="See Live blue icon" ></a>
        </div>
      </div>
    </div>
  </div>`;

popUp.innerHTML = popUpContent;

// POPUP ELEMENTS
const projectName = document.querySelector('#project-name');
let projectUlTags = document.querySelector('#popup-ul-tags');
let projectUlTechs = document.querySelector('#popup-ul-techs');
const projectDescription = document.querySelector('#popup-desc');
const projectScreenshot = document.querySelector('#popup-screenshot');
const projectLive = document.querySelector('#see-live');
const projectSource = document.querySelector('#project-source');
const closePopUp = document.querySelector('#close-popup');
closePopUp.addEventListener('click', hidePopUp);

const displayPopUp = (projectId) => {
  const project = projects[projectId];
  projectName.textContent = project.name;
  projectScreenshot.src = project.image;
  projectLive.href = project.link_live;
  projectSource.href = project.link_source;
  projectDescription.textContent = project.long_description;
  projectUlTags.innerHTML = '';
  projectUlTags = createLiChildren(projectUlTags, project, 'tag');
  projectUlTechs.innerHTML = '';
  projectUlTechs = createLiChildren(projectUlTechs, project, 'tech');
  popUp.style.display = 'flex';
  // Disable body scrolling
  const body = document.querySelector('body');
  body.classList.toggle('stop-scrolling');
};

//  Add event on the button
seeProjectBtns.forEach((seeProjectBtn) => {
  seeProjectBtn.addEventListener('click', () => displayPopUp(seeProjectBtn.id));
});
