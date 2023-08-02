import { Component, OnInit } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  faq: any = [
    { title: 'Is it safe to play real money games on FunBust?', desc: "Is it safe to play real money games on FunBust?Is it safe to play real money games on FunBust?Is it safe to play real money games on FunBust?" },
    { title: 'Can I withdraw cash from money winning apps?', desc: 'How do online money games in India work?How do online money games in India work?' },
    { title: 'Is it safe to add money to the online games wallet?', desc: 'How do online money games in India work?How do online money games in India work?' },
    { title: 'How do online money games in India work?', desc: 'How do online money games in India work?How do online money games in India work?' },

  ]

  ngOnInit(): void {
  }

  games: any = [
    { name: 'Ludo Fun', img: 'assets/img/1.png' },
    { name: 'Knife Fun', img: 'assets/img/2.png' },
    { name: 'Candy Bust', img: 'assets/img/3.png' },
    { name: 'Archery Fun', img: 'assets/img/4.png' },
    { name: 'Snake Fun', img: 'assets/img/5.png' },
    { name: 'Bottle Bust', img: 'assets/img/6.png' }
  ]

  reviews: any = [
    { name: 'Sharman Joshi',amount:18000,img:"Shahrukh-sadiq", desc: "Funbust has completely revolutionized my gaming experience! This app is a game-changer in every sense. The wide range of games available ensures there's never a shortage of fun activities to indulge in. The controls are smooth and responsive, allowing for seamless gameplay. I'm particularly impressed by the attention to detail in each game, from the captivating sound effects to the intricate level designs. The developers have truly crafted an immersive environment that keeps me hooked for hours on end. Funbust is a must-have for any gaming enthusiast looking for an unparalleled gaming experience. " },
    { name: "Shahruk Sadiq",amount:25000,img:"Sharman-joshi", desc: "Funbust has become my new favorite gaming app, and for a good reason! The gameplay is addictive, and I find myself spending hours exploring the various games it offers. The app provides a refreshing mix of genres, from puzzles to action-packed adventures, ensuring there's never a dull moment. The graphics and animations are top-notch, providing a visually appealing experience. I also appreciate the social features, allowing me to connect with friends and challenge them to beat my high scores. Funbust has truly nailed the perfect balance between entertainment and engagement." },
    { name: "Mahima Sharma",amount:37000, img:"mahima", desc: "Funbust is an absolute blast! As a gaming enthusiast, I'm always on the lookout for new and exciting games, and Funbust exceeded my expectations. The app offers a wide variety of games that cater to different preferences, ensuring there's something for everyone. The graphics are stunning, and the controls are intuitive, making it easy to dive right into the action. The developers have done an excellent job of creating a seamless and immersive gaming experience. With regular updates and new game additions, Funbust keeps me hooked and entertained. I highly recommend this gaming app to all fellow gamers out there!" }
  ]

}
