const MotorCortex = require("@kissmybutton/motorcortex");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class FontWeight extends MotorCortex.API.Clip {
  get html() {
    const textList = [];
    for (let i = 1; i <= this.attrs.rows; i++) {
      textList.push(`<div class="text-item">${this.attrs.text}</div>`);
    }
    return `
    <div class="wrapper">
      <div class="text">
      ${textList.join("")}
      </div>
    </div>
    `;
  }

  get css() {
    return `

    .wrapper{
      width: ${this.attrs.width}px;
      height: ${this.attrs.height}px;
      display: flex;
      align-content: center;
      justify-content: center;
      align-items: center;
    }
    .text{
      font-size:${this.attrs.fontSize}px;
      color:${this.attrs.color};
      text-transform:uppercase;
      font-family: ${this.attrs.fontFamily};
      position: absolute;
      font-weight: 100;
    }
   
  `;
  }

  buildTree() {
    const fontWeight900 = new Anime.Anime(
      {
        animatedAttrs: {
          fontWeight: "900"
        }
      },
      {
        duration: 300,
        selector: `.text-item`,
        delay: `@stagger(0, 300)`
        // repeats: this.attrs.repeats
      }
    );

    this.addIncident(fontWeight900, 0);

    const fontWeight100 = new Anime.Anime(
      {
        animatedAttrs: {
          fontWeight: "100"
        }
      },
      {
        duration: 300,
        selector: `.text-item`,
        delay: `@stagger(0, 300)`
        // repeats: this.attrs.repeats
      }
    );

    this.addIncident(fontWeight100, 600);
  }
}

module.exports = FontWeight;
