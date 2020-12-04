const MotorCortex = require("@kissmybutton/motorcortex");
const Player = require("@kissmybutton/motorcortex-player");
const textfxs = require("../src/index");
const Clip = MotorCortex.loadPlugin(textfxs);

const css = `
body { 
  background-color : white; 
}              
.container,.container2,.container3,.container4 {
  width: 1728px;
  height: 300px;
  overflow: hidden;
  display: flex;
  justify-content: center;
}
.wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: gainsboro;
}
  `;
const html = ` 
<div class="wrapper">
  <div class="container container1">
  </div>
  <div class="container container2">
  </div>
  <div class="container container3">
  </div>
  <div class="container container4">
  </div>
</div> 
  `;

const host = document.getElementById("clip");

const containerParams = {
  width: "100%",
  height: "100%"
};

const clip = new MotorCortex.HTMLClip({
  css,
  html,
  host,
  // fonts: [
  //   {
  //     type: `google-font`,
  //     src: `https://fonts.googleapis.com/css2?family=Pacifico&display=swap`
  //   },
  //   // {
  //   //   type: `google-font`,
  //   //   src: `https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap`
  //   // },
  //   // {
  //   //   type: `google-font`,
  //   //   src: `https://fonts.googleapis.com/css2?family=Rubik+Mono+One&display=swap`
  //   // },
  //   {
  //     type: "google-font",
  //     src:
  //       "https://fonts.googleapis.com/css2?family=Commissioner:wght@100;200;300;400;500;600;700;800;900&display=swap"
  //   }
  // ],
  containerParams,
  id: "root"
});

const SvgExplosion = new Clip.SvgExplosion(
  {
    text: "SvgExplosion",
    width: 1728,
    height: 300,
    background: "#22292C",
    colors: [
      "#FBDB4A",
      "#F3934A",
      "#EB547D",
      "#9F6AA7",
      "#5476B3",
      "#2BB19B",
      "#70B984"
    ],
    fontFamily: "Rubik Mono One",
    fontWeight:400,
    speed: 5
  },
  {
    selector: ".container1"
  }
);

const SvgLines = new Clip.SvgLines(
  {
    text: "SvgLines",
    width: 1728,
    height: 300,
    background: "#22292C",
    colors: ["#64d3ce", "#2a92ce82", "#ff003c", "#2a92ce2e", "#2a92ce1c"],
    strokeWidth: 3,
    fontSize: 250,
    fontFamily: "Rubik Mono One",
    speed: 0.75
  },
  {
    selector: ".container3"
  }
);

const Shadow = new Clip.Shadow(
  {
    text: "Shadow",
    width: 1728,
    height: 300,
    background: "#d52e3f",
    colors: ["#e942f5", "#efa032", "#46b59b", "#017e7f", "#052939", "#c11a2b"],
    fontSize: 250,
    speed: 0.75,
    textColor: "#fcedd8",
    fontFamily: "Pacifico",
    reverce: true
  },
  {
    selector: ".container2"
  }
);

const FontWeight = new Clip.FontWeight(
  {
    width: 1728,
    height: 300,
    text: "FontWeight Animation",
    color: "#ff0000",
    rows: 10,
    fontSize: 20,
    fontFamily: "Commissioner",
    repeats: 8,
    fontWeightList:[100,200,300,400,500,600,700,800,900]
  },
  {
    selector: ".container4"
  }
);

clip.addIncident(Shadow, 0);
clip.addIncident(SvgLines, 0);
clip.addIncident(SvgExplosion, 0);
clip.addIncident(FontWeight, 0);
window.clip = clip

new Player({ clip, timeFormat: "ms" });
