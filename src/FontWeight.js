const MotorCortex = require("@kissmybutton/motorcortex");
const AnimeDefinition = require("@kissmybutton/motorcortex-anime");
const Anime = MotorCortex.loadPlugin(AnimeDefinition);

class FontWeight extends MotorCortex.HTMLClip {
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
    const fontWeight = new MotorCortex.Combo(
      {
        incidents:[
          {
            incidentClass: Anime.Anime,
            attrs:{
              animatedAttrs: {
                fontWeight: "900"
              }
            },
            props:{
              duration:300,
            },
            position: 0
          },
          {
            incidentClass: Anime.Anime,
            attrs:{
              animatedAttrs: {
                fontWeight: "100"
              }
            },
            props:{
              duration:300,
             
            },
            position: 300
          }
        ]
      },
      {
        selector: `.text-item`,
        delay: `@stagger(0, 300)`
      }
    )
    this.addIncident(fontWeight,0)
  }
}

module.exports = FontWeight;
