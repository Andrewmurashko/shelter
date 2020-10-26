const data = [
    {
        id: 1,
        name: "Jennifer",
        img: "../pets/assets/img/our-friends/pets-jennifer.png",
        type: "Dog",
        breed: "Labrador",
        description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
        age: "2 months",
        inoculations: ["none"],
        diseases: ["none"],
        parasites: ["none"],
        button: '.button__bordered'
    },
    {
        id: 2,
        name: "Sophia",
        img: "../pets/assets/img/our-friends/pets-sophia.png",
        type: "Dog",
        breed: "Shih tzu",
        description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        age: "1 month",
        inoculations: ["parvovirus"],
        diseases: ["none"],
        parasites: ["none"],
        button: '.button__bordered'
    },
    {
        id: 3,
        name: "Woody",
        img: "../pets/assets/img/our-friends/pets-woody.png",
        type: "Dog",
        breed: "Golden Retriever",
        description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        age: "3 years 6 months",
        inoculations: ["adenovirus", "distemper"],
        diseases: ["right back leg mobility reduced"],
        parasites: ["none"],
        button: '.button__bordered'
    },
    {
        id: 4,
        name: "Scarlett",
        img: "../pets/assets/img/our-friends/pets-scarlett.png",
        type: "Dog",
        breed: "Jack Russell Terrier",
        description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        age: "3 months",
        inoculations: ["parainfluenza"],
        diseases: ["none"],
        parasites: ["none"],
        button: '.button__bordered'
    },
    {
        id: 5,
        name: "Katrine",
        img: "../pets/assets/img/our-friends/pets-katrine.png",
        type: "Cat",
        breed: "British Shorthair",
        description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        age: "6 months",
        inoculations: ["panleukopenia"],
        diseases: ["none"],
        parasites: ["none"],
        button: '.button__bordered'
    },
    {
        id: 6,
        name: "Timmy",
        img: "../pets/assets/img/our-friends/pets-timmy.png",
        type: "Cat",
        breed: "British Shorthair",
        description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        age: "2 years 3 months",
        inoculations: ["calicivirus", "viral rhinotracheitis"],
        diseases: ["kidney stones"],
        parasites: ["none"],
        button: '.button__bordered'
    },
    {
        id: 7,
        name: "Freddie",
        img: "../pets/assets/img/our-friends/pets-freddie.png",
        type: "Cat",
        breed: "British Shorthair",
        description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        age: "2 months",
        inoculations: ["rabies"],
        diseases: ["none"],
        parasites: ["none"],
        button: '.button__bordered'
    },
    {
        id: 8,
        name: "Charly",
        img: "../pets/assets/img/our-friends/pets-charly.png",
        type: "Dog",
        breed: "Jack Russell Terrier",
        description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        age: "8 years",
        inoculations: ["bordetella bronchiseptica", "leptospirosis"],
        diseases: ["deafness", "blindness"],
        parasites: ["lice", "fleas"],
        button: '.button__bordered'
    }
]

window.onload = () => {
    console.log('123');
    //Generate Base Modal from Modal Class
    addToolsClickHandler();
}
// Render slider list
class Slides {
    constructor({ id, img, name, button }) {
        this.id = id;
        this.img = img;
        this.name = name;
        this.button = button;
    }
    //Slide Generator
    generateSlide() {
        let template = '';
        let slide = document.createElement('slide');
        slide.className = 'slide';
        slide.setAttribute('data-id', this.id);
        if (this.img && this.name) {
            template += `<img class="slide__img" src=${this.img} alt=${this.name}>`
        }
        if (this.name) {
            template += `<span class="slide__name">${this.name}</span>`;
            template += `<button class='button button__bordered'>Learn more</button>`
        }
        slide.innerHTML = template;
        return slide
    }
}
const getSliderList = () => {
    let sliderListContainer = document.querySelector('.slider__list');
    sliderListContainer.innerHTML = '';
    return sliderListContainer
}
const generateSlides = (data) => {
    let slides = [];
    data.forEach(slide => {
        slides.push(new Slides(slide))
    });
    return slides;
}
const getClickedData = (id) => {
    return data.find(slide => slide.id == id)
}
const renderSlideModalWindow = (slide) => {
    let modal = new SlideModal('slide-modal', slide);
    modal.renderModal();
}
const addSliderClickHandler = () => {
    document.querySelector('.our-friends__wrapper').addEventListener('click', (e) => {
        if (e.target.closest('.slide .button')) {
            let clickedSlideId = e.target.closest('.slide').getAttribute('data-id');
            let clickedSlideData = getClickedData(clickedSlideId);
            renderSlideModalWindow(clickedSlideData);
        }
    })
}
const renderSlidesToDom = () => {
    let SliderList = getSliderList();
    generateSlides(data).forEach(slide => {
        SliderList.append(slide.generateSlide())
    });

    addSliderClickHandler();
}
if (data) {
    renderSlidesToDom();
}



//MODAL
class Modal {
    constructor(classes) {
        this.classes = classes;
        this.modal = '';
        this.modalContent = '';
        this.modalCloseBtn = '';
        this.overlay = '';
    }
    buildModal(content) {
        //Overlay
        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay', 'overlay__modal');
        //Modal
        this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);
        //Modal content
        this.modalContent = this.createDomNode(this.ModalContent, 'div', 'modal__content');
        //Close Button
        this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'span', 'modal__close-icon');
        this.modalCloseBtn.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.42618 6.00003L11.7046 1.72158C12.0985 1.32775 12.0985 0.689213 11.7046 0.295433C11.3108 -0.0984027 10.6723 -0.0984027 10.2785 0.295433L5.99998 4.57394L1.72148 0.295377C1.32765 -0.098459 0.68917 -0.098459 0.295334 0.295377C-0.0984448 0.689213 -0.0984448 1.32775 0.295334 1.72153L4.57383 5.99997L0.295334 10.2785C-0.0984448 10.6723 -0.0984448 11.3108 0.295334 11.7046C0.68917 12.0985 1.32765 12.0985 1.72148 11.7046L5.99998 7.42612L10.2785 11.7046C10.6723 12.0985 11.3108 12.0985 11.7046 11.7046C12.0985 11.3108 12.0985 10.6723 11.7046 10.2785L7.42618 6.00003Z" fill="#292929"/></svg>';
        this.setContent(content);
        this.appendModalElements(); //сложить все части в одно
        console.log(this.modal);
        //Bind Events 
        this.bindEvents();
        //Open Modal
        this.openModal();
    }
    createDomNode(node, element, ...classes) {
        node = document.createElement(element);
        node.classList.add(...classes);
        return node
    }
    setContent(content) {
        if (typeof content === 'string') {
            this.modalContent.innerHTML = content;
        } else {
            this.modalContent.innerHTML = '';
            this.modalContent.appendChild(content);
        }
    }
    appendModalElements() {
        this.modal.append(this.modalCloseBtn);
        this.modal.append(this.modalContent);
        this.overlay.append(this.modal);
    }
    bindEvents() {
        this.modalCloseBtn.addEventListener('click', this.closeModal);
        this.overlay.addEventListener('click', this.closeModal);
    }
    closeModal(e) {
        let classes = e.target.classList;
        if (classes.contains('overlay') || classes.contains('modal__close-icon')) {
            document.querySelector('.overlay').remove();
        }
    }
    openModal() {
        document.body.append(this.overlay);
    }
    
}
const addToolsClickHandler = () => {
    document.querySelector('').addEventListener('click', () => {
        generateToolsModal();
    })
}
const generateToolsModal = () => {
    renderModalWindow('Test content for Tools Modal');
}
const renderModalWindow = (content) => {
    let modal = new Modal('tools-modal');
    modal.buildModal(content);
}


  class SlideModal extends Modal {
      constructor (classes, {id,name,img,type,breed,description,age,inoculations,diseases,parasites}) {
          super(classes);
          this.id = id;
          this.name = name;
          this.img = img;
          this.type = type;
          this.breed = breed;
          this.description = description
          this.age = age;
          this.inoculations = inoculations;
          this.diseases = diseases;
          this.parasites = parasites;
      }
      //Content generator
      generateContent() {
        let template = '';
        let content = document.createElement('div');
        content.className = 'slide-modal__content';
        if (this.img && this.name) {
            template += `<img class="slide-modal__img" src=${this.img} alt=${this.name}>`
            template += `<div class="slide__text">`
            template += `<h3>${this.name}</h3>`
            template += `<h4>${this.type} - ${this.breed}</h4>`
            template += `<h5>${this.description}</h5>`
            template += `<ul>`
            template += `<li class="h5-modal-window">Age: ${this.age}</li>`
            template += `<li class="h5-modal-window">Inoculations: ${this.inoculations}</li>`
            template += `<li class="h5-modal-window">Diseases: ${this.diseases}</li>`
            template += `<li class="h5-modal-window">Parasites: ${this.parasites}</li>`
            template += `</ul>`
            template += `</div>`
        }
        content.innerHTML = template;
        return content
    }
      

      renderModal() {
          let content = this.generateContent();
          super.buildModal(content);
      }
  }
 



const linkLocation = document.querySelectorAll('[data-active-link]');

linkLocation.forEach((el, index)=>{
    console.log(el, index);
    el.addEventListener('click',()=>{
    location.href = '../pets';
})})

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });