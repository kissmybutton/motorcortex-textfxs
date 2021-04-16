export const SvgExplosionValidation = {
  text: {
    type: "string"
  },
  colors: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: "color"
    }
  },
  width: {
    type: "number"
  },
  height: { type: "number" },
  background: { optional: true, type: "color" },
  fontFamily: {
    type: "string"
  }
};

export const SvgLineValidation = {
  text: {
    type: "string"
  },
  colors: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: "color"
    }
  },
  width: {
    type: "number"
  },
  fontSize: {
    type: "number"
  },
  strokeWidth: {
    type: "number"
  },
  height: { type: "number" },
  background: { optional: true, type: "color" },
  fontFamily: {
    type: "string"
  },
  verticalAlign: {
    type: "string"
  }
};

export const ShadowValidation = {
  text: {
    type: "string"
  },
  colors: {
    optional: true,
    type: "array",
    min: 2,
    items: {
      optional: true,
      type: "color"
    }
  },
  width: {
    type: "number"
  },
  fontSize: {
    type: "number"
  },
  fontFamily: {
    type: "string"
  },
  textColor: {
    type: "string"
  },
  height: { type: "number" },
  background: { optional: true, type: "color" },
  reverse: { type: "boolean" }
};

export const FontWeightValidation = {
  text: {
    type: "string"
  },
  fontWeightList: { type: "array", items: { type: "number" } },
  repeats: { type: "number", min: 1 },
  width: {
    type: "number"
  },
  height: { type: "number" },
  fontSize: {
    type: "number"
  },
  fontFamily: {
    type: "string"
  },
  textColor: {
    type: "color"
  }
};
