
# motorcortex-textfxs

## Demo
[Check it out here](https://kissmybutton.github.io/motorcortex-textfxs/demo/index.html)

## Installation

```bash
$ npm install --save @kissmybutton/motorcortex-textfxs
# OR
$ yarn add @kissmybutton/motorcortex-textfxs
```

## Loading

```javascript
const MotorCortex = require("@kissmybutton/motorcortex/");
const textfx = require("@kissmybutton/motorcortex-textfxs");
const Clip = MotorCortex.loadPlugin(textfx);
```

# Create incident

## SvgLines

```javascript
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
```

### SvgLines Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| text     |  text  | string |
| width   |  total width of clip container | all positive numbers |
| height |  total height of clip container   |  all positive numbers |
| background |  the color of background |  hex values or RGB(A) or text ("blue", "red", etc)  |
| colors |  the list colors of svg elementes |  hex values or RGB(A) or text ("blue", "red", etc)  |
| speed |  animation speed. Defaults to 1  |  num, min:0 |
| fontFamily |  font family  |  string |
| fontSize |  size of the font  |  number |


## SvgExposion

```javascript
const SvgExposion = new Clip.SvgExposion(
  {
    text: "SvgExposion",
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
    speed: 0.75
  },
  {
    selector: ".container1"
  }
);
```

### SvgExposion Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| text     |  text  | string |
| width   |  total width of clip container | all positive numbers |
| height |  total height of clip container   |  all positive numbers |
| background |  the color of background |  hex values or RGB(A) or text ("blue", "red", etc)  |
| colors |  list of colors for leter |  hex values or RGB(A) or text ("blue", "red", etc)  |
| fontFamily |  font family  |  string |
| fontSize |  size of the font  |  number |


## Shadow

```javascript
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
    reverce: false
  },
  {
    selector: ".container2"
  }
);
```

### Shadow Attrs

| Name        | Are           | Values  |
| ------------- |:-------------:| -----:|
| text     |  text  | string |
| width   |  total width of clip container | all positive numbers |
| height |  total height of clip container   |  all positive numbers |
| background |  the color of background |  hex values or RGB(A) or text ("blue", "red", etc)  |
| colors |  the list colors of svg elementes |  hex values  |
| speed |  animation speed. Defaults to 1  |  num, min:0 |
| textColor |  the main color of text |  hex values or RGB(A) or text ("blue", "red", etc) |
| fontFamily |  font family  |  string |
| fontSize |  size of the font  |  number |
| reverce |  reverse tha animation after finish  |  boolean |


# Just add your incident to any clip

```javascript
anyClip.addIncident(SvgLines, 0);

```


## License
[MIT License](https://opensource.org/licenses/MIT)


  
  
[![Kiss My Button](https://presskit.kissmybutton.gr/logos/kissmybutton-logo-small.png)](https://kissmybutton.gr)