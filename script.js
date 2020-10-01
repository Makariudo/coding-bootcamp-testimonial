app = {

John : {
    comment :  `If you want to lay the best foundation possible I’d recommend taking this course. 
    The depth the instructors go into is incredible. I now feel so confident about 
    starting up as a professional developer.`,
    name : "John Tarkpor",
    title: "Junior Front-end Developer",
    photo: "./images/image-john.jpg"
  },

  Tanya : {
    comment : `I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future.`,
    name : "Tanya Sinclair",
    title : "UX Engineer",
    photo: "./images/image-tanya.jpg"

  },

  previousButton : document.getElementById('preview'),
  nextButton:  document.getElementById('next'),
  comment: document.querySelector('.comment'),
  legendNom: document.querySelector('.legend__nom'),
  legendTitle: document.querySelector('.legend__title'),
  portrait: document.getElementById('portrait'),



  start() {
    console.log('coucou de start');
    app.fillQuotes(app.Tanya);
    app.previousButton.addEventListener('click', app.previousFill);
    app.nextButton.addEventListener('click', app.previousFill);
    document.addEventListener('keyup', app.handlePress);
  },

  previousFill() {
    if (app.legendNom.textContent === app.Tanya.name){
      app.fillQuotes(app.John);
    } else {
      app.fillQuotes(app.Tanya);
    }
  },

  handlePress(event) {
    let touche = event.keyCode;
    if (touche == 37 || touche ==39) {
      app.previousFill();
    }

  },



  fillQuotes(client) {
    app.comment.textContent = client.comment;
    app.legendNom.textContent = client.name;
    app.legendTitle.textContent = client.title;
    app.portrait.setAttribute("src", client.photo)
  }



}


document.addEventListener('DOMContentLoaded', app.start);

