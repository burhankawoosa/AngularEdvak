import { Component, OnInit, } from '@angular/core';
import { MoveDirection, ClickMode, HoverMode, OutMode, Engine,
  Container} from "tsparticles-engine";
import { loadFull } from "tsparticles";




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  slides = [
    { img: 'assets/brands/1.svg' },
    { img: 'assets/brands/2.svg' },
    { img: 'assets/brands/3.svg' },
    { img: 'assets/brands/4.svg' },
    { img: 'assets/brands/5.svg' },
    { img: 'assets/brands/6.svg' },
    { img: 'assets/brands/ummc.svg' },
    { img: 'assets/brands/8.svg' },
    { img: 'assets/brands/9.svg' },
    { img: 'assets/brands/10.svg' },
  ];
  slideConfig = {"slidesToShow": 5, "slidesToScroll": 1, "autoplay": true,"autoplaySpeed":2000,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]

};

  constructor() {
     


   }

  ngOnInit(): void {
    
    
  }
  // jumpto(section:any){
  //   setTimeout(()=>{
  //     document.?getElementById(section).scrollIntoView({behavior:"smooth"});
  //   })
   
  // }
  id = "tsparticles";

  /* Starting from 1.19.0 you can use a remote url (AJAX request) to a JSON with the configuration */
  particlesUrl = "http://foo.bar/particles.json";

  /* or the classic JavaScript object */
  particlesOptions = {
    background: {
      color: {
        value: "#0d47a1"
      }
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: ClickMode.push
        },
        onHover: {
          enable: true,
          mode: HoverMode.repulse
        },
        resize: true
      },
      modes: {
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: "#ffffff"
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce
        },
        random: false,
        speed: 6,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: "circle"
      },
      size: {
        value: {min: 1, max: 5 },
      }
    },
    detectRetina: true
  };

  particlesLoaded(container: Container): void {
    console.log(container);
  }

  async particlesInit(engine: Engine): Promise<void> {
    console.log(engine);

    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }
}
