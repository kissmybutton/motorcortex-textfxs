const MotorCortex = require("@kissmybutton/motorcortex");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class Rainbow extends MotorCortex.API.Clip {
  get html() {
    this.speed = this.attrs.speed ? this.attrs.speed : 1;
    return `
    <div class="wrapper">
      <div class="container">
        <ul class="c-rainbow">
          <li class="c-rainbow__layer c-rainbow__layer--0">RAINBOW</li>
          <li class="c-rainbow__layer c-rainbow__layer--1">RAINBOW</li>
          <li class="c-rainbow__layer c-rainbow__layer--2">RAINBOW</li>
          <li class="c-rainbow__layer c-rainbow__layer--3">RAINBOW</li>
          <li class="c-rainbow__layer c-rainbow__layer--4">RAINBOW</li>
          <li class="c-rainbow__layer c-rainbow__layer--5">RAINBOW</li>
          <li class="c-rainbow__layer c-rainbow__layer--6">RAINBOW</li>
        </ul>
      </div>
    </div>
    `;
  }

  get css() {
    return `
    
    .container{
      width: ${this.attrs.width}px;
      height: ${this.attrs.height}px;
      overflow: hidden;
      background: ${this.attrs.background};
      display: flex;
      align-content: center;
      align-items: center;
      position: relative;
      z-index: -80
    }
    .wrapper{
      width: 100%;
      height: 100%;
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
    }
    .c-rainbow {
      counter-reset: rainbow;
      position: relative;
      display: block;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    .c-rainbow__layer {
      --text-color: var(--color-foreground);
      counter-increment: rainbow;
      font-size: ${this.attrs.fontSize}px;
      color: var(--text-color);
      text-shadow: -1px -1px 0 #000, 1px -1px 0 #000,
        -1px 1px 0 #000, 1px 1px 0 #000,
        4px 4px 0 rgba(0, 0, 0, 0.2);

    }
    
    .c-rainbow__layer:not(:first-child) {
      position: absolute;
      top: 0;
    }
    .c-rainbow__layer--0 {
      --text-color: ${this.attrs.colors[0]};
      z-index: -10
    }
    .c-rainbow__layer--1 {
      --text-color: ${this.attrs.colors[1]};
      z-index: -20;
    }
    .c-rainbow__layer--2 {
      --text-color: ${this.attrs.colors[2]};
      z-index: -30;
    }
    .c-rainbow__layer--3 {
      --text-color: ${this.attrs.colors[3]};
      z-index: -40
    }
    .c-rainbow__layer--4 {
      --text-color: ${this.attrs.colors[4]};
      z-index: -50
    }
    .c-rainbow__layer--5 {
      --text-color: ${this.attrs.colors[5]};
      z-index: -60;
    }
    .c-rainbow__layer--6 {
      --text-color: ${this.attrs.colors[6]};
      z-index: -70;
    }

  `;
  }

  buildTree() {
    for (let i = 0; i < 7; i++) {
      const textSadow1 = new Anime.Anime(
        {
          animatedAttrs: {
            transform: {
              translateY: "100px"
            }
          },
          initialValues: {
            transform: {
              translateY: "0px"
            }
          }
        },
        {
          duration: 2000 * this.speed,
          selector: `.c-rainbow__layer--${i}`,
          easing: "easeInOutCubic"
        }
      );
      this.addIncident(textSadow1, 0 + 100 * i);

      const textSadowback = new Anime.Anime(
        {
          animatedAttrs: {
            transform: {
              translateY: "0px"
            }
          },
          initialValues: {
            transform: {
              translateY: "100px"
            }
          }
        },
        {
          duration: 2000 * this.speed,
          selector: `.c-rainbow__layer--${i}`,
          easing: "easeInOutCubic"
        }
      );
      this.addIncident(textSadowback, 0 + 100 * i + 2000 * this.speed);
    }
    // const textSadow1 = new Anime.Anime(
    //   {
    //     animatedAttrs: {
    //       transform: {
    //         translateY: "100px"
    //       }
    //     },
    //     initialValues: {
    //       transform: {
    //         translateY: "0px"
    //       }
    //     }
    //   },
    //   {
    //     duration: 2000 * this.speed,
    //     selector: `.c-rainbow__layer--${1}`
    //   }
    // );
    // this.addIncident(textSadow1, this.calculatedDuration + 100);
  }
}

module.exports = Rainbow;
