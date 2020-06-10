export const SvgExposionValidation = {
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
  speed: {
    type: "number",
    optional: true
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
  speed: {
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
  reverce: { type: "boolean" }
};
