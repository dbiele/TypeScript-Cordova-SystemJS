System.config({
  baseURL: "./scripts",
  defaultJSExtensions: true,
  transpiler: "none",
  paths: {
    "github:*": "jspm_packages/github/*"
  },

  map: {
    "jquery": "github:components/jquery@2.1.4"
  }
});
