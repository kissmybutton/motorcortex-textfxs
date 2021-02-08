import SvgExplosion from "./SvgExplosion"
import SvgLines from "./SvgLines"
import Shadow from "./Shadow"
import FontWeight from "./FontWeight"
import {ShadowValidation,SvgExplosionValidation,SvgLineValidation} from "./validation"


const pkg = require("../package.json");

export default {
  npm_name: pkg.name,
  version: pkg.version,
  incidents: [
    {
      exportable: SvgExplosion,
      name: "SvgExplosion",
      attributesValidationRules: SvgExplosionValidation
    },
    {
      exportable: SvgLines,
      name: "SvgLines",
      attributesValidationRules: SvgLineValidation
    },
    {
      exportable: Shadow,
      name: "Shadow",
      attributesValidationRules: ShadowValidation
    },
    {
      exportable: FontWeight,
      name: "FontWeight"
      // attributesValidationRules: attrs.ShadowValidation
    }
  ],
};
