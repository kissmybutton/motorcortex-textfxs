const MotorCortex = require("@kissmybutton/motorcortex");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);
const { fontFamilyHelper } = require("./helpers");
class Shadow extends MotorCortex.HTMLClip {

  
  get fonts(){
    const font =[
      {
          type: `google-font`,
          src: `https://fonts.googleapis.com/css2?family=${fontFamilyHelper(this.attrs.fontFamily,this.attrs.fontWeight)}&display=swap`
        },
    ]
    return font
  }
  

  get html() {
    this.speed = this.attrs.speed ? this.attrs.speed : 1;
    return `
      <div class="wrapper">
        <div class="container">
          <div class="text">${this.attrs.text}</div>
        </div>
      </div>
    `;
  }

  get css() {
    function hexToRGB(h) {
      let r = 0,
        g = 0,
        b = 0;

      // 3 digits
      if (h.length === 4) {
        r = "0x" + h[1] + h[1];
        g = "0x" + h[2] + h[2];
        b = "0x" + h[3] + h[3];

        // 6 digits
      } else if (h.length === 7) {
        r = "0x" + h[1] + h[2];
        g = "0x" + h[3] + h[4];
        b = "0x" + h[5] + h[6];
      }

      return `${+r},${+g},${+b}`;
    }
    this.colorsRGB = this.attrs.colors.map(c => {
      return hexToRGB(c);
    });

    return `

    .wrapper{
      width: 100%;
      height: 100%;
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
    }
  
    .container {
      width: ${this.attrs.width}px;
      height: ${this.attrs.height}px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      color: ${this.attrs.textColor};
      
    }
    .text{
      font-size: 15rem;
      text-align: center;
      width: 100%;
      color: ${this.attrs.textColor};
      background: ${this.attrs.background};
      font-family: ${this.attrs.fontFamily}, cursive;
      font-weight: 700;
      text-shadow: 5px 5px 0px rgba(${this.colorsRGB[0]},1), 
        10px 10px 0px rgba(${this.colorsRGB[1]}, 0), 
        15px 15px 0px rgba(${this.colorsRGB[2]}, 0), 
        20px 20px 0px rgba(${this.colorsRGB[3]}, 0), 
        25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
        30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
        35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
        40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
        45px 45px 0px rgba(${this.colorsRGB[5]}, 0);
  `;
  }

  buildTree() {
    const textSadow1 = new Anime.Anime(
      {
        animatedAttrs: {
          textShadow: ` 5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        },
        initialValues: {
          textShadow: `5px 5px 0px rgba(${this.colorsRGB[0]},0), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        }
      },
      {
        duration: 500 * this.speed,
        selector: `.text`
      }
    );

    const textSadow2 = new Anime.Anime(
      {
        animatedAttrs: {
          textShadow: ` 5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        },
        initialValues: {
          textShadow: `5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        }
      },
      {
        duration: 500 * this.speed,
        selector: `.text`
      }
    );
    const textSadow3 = new Anime.Anime(
      {
        animatedAttrs: {
          textShadow: ` 5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        },
        initialValues: {
          textShadow: `5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        }
      },
      {
        duration: 500 * this.speed,
        selector: `.text`
      }
    );

    const textSadow4 = new Anime.Anime(
      {
        animatedAttrs: {
          textShadow: ` 5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        },
        initialValues: {
          textShadow: `5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        }
      },
      {
        duration: 500 * this.speed,
        selector: `.text`
      }
    );

    const textSadow5 = new Anime.Anime(
      {
        animatedAttrs: {
          textShadow: ` 5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        },
        initialValues: {
          textShadow: `5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        }
      },
      {
        duration: 500 * this.speed,
        selector: `.text`
      }
    );

    const textSadow6 = new Anime.Anime(
      {
        animatedAttrs: {
          textShadow: ` 5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 1), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 1), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 1), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 1)`
        },
        initialValues: {
          textShadow: `5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        }
      },
      {
        duration: 500 * this.speed,
        selector: `.text`
      }
    );

    ///REVERSE
    const textSadow1r = new Anime.Anime(
      {
        animatedAttrs: {
          textShadow: `5px 5px 0px rgba(${this.colorsRGB[0]},0), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        },
        initialValues: {
          textShadow: ` 5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        }
      },
      {
        duration: 500 * this.speed,
        selector: `.text`
      }
    );

    const textSadow2r = new Anime.Anime(
      {
        animatedAttrs: {
          textShadow: `5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 0), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        },
        initialValues: {
          textShadow: ` 5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        }
      },
      {
        duration: 500 * this.speed,
        selector: `.text`
      }
    );
    const textSadow3r = new Anime.Anime(
      {
        animatedAttrs: {
          textShadow: `5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 0), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        },
        initialValues: {
          textShadow: ` 5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        }
      },
      {
        duration: 500 * this.speed,
        selector: `.text`
      }
    );

    const textSadow4r = new Anime.Anime(
      {
        animatedAttrs: {
          textShadow: `5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 0), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        },
        initialValues: {
          textShadow: ` 5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        }
      },
      {
        duration: 500 * this.speed,
        selector: `.text`
      }
    );

    const textSadow5r = new Anime.Anime(
      {
        animatedAttrs: {
          textShadow: `5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 0), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        },
        initialValues: {
          textShadow: ` 5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        }
      },
      {
        duration: 500 * this.speed,
        selector: `.text`
      }
    );

    const textSadow6r = new Anime.Anime(
      {
        animatedAttrs: {
          textShadow: `5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 0), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 0), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 0), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 0)`
        },
        initialValues: {
          textShadow: ` 5px 5px 0px rgba(${this.colorsRGB[0]},1), 
          10px 10px 0px rgba(${this.colorsRGB[1]}, 1), 
          15px 15px 0px rgba(${this.colorsRGB[2]}, 1), 
          20px 20px 0px rgba(${this.colorsRGB[3]}, 1), 
          25px 25px 0px rgba(${this.colorsRGB[4]}, 1), 
          30px 30px 0px rgba(${this.colorsRGB[5]}, 1), 
          35px 35px 0px rgba(${this.colorsRGB[5]}, 1), 
          40px 40px 0px rgba(${this.colorsRGB[5]}, 1), 
          45px 45px 0px rgba(${this.colorsRGB[5]}, 1)`
        }
      },
      {
        duration: 500 * this.speed,
        selector: `.text`
      }
    );

    this.addIncident(textSadow1, 0);
    this.addIncident(textSadow2, 500 * this.speed);
    this.addIncident(textSadow3, 1000 * this.speed);
    this.addIncident(textSadow4, 1500 * this.speed);
    this.addIncident(textSadow5, 2000 * this.speed);
    this.addIncident(textSadow6, 2500 * this.speed);
    if (this.attrs.reverce) {
      this.addIncident(textSadow6r, 3000 * this.speed);
      this.addIncident(textSadow5r, 3500 * this.speed);
      this.addIncident(textSadow4r, 4000 * this.speed);
      this.addIncident(textSadow3r, 4500 * this.speed);
      this.addIncident(textSadow2r, 5000 * this.speed);
      this.addIncident(textSadow1r, 5500 * this.speed);
    }
  }
}

module.exports = Shadow;
