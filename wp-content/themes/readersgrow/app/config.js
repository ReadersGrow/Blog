System.config({
  baseURL: "/wp-content/themes/readersgrow/app",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime"
    ],
    "blacklist": []
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "babel": "npm:babel-core@5.8.22",
    "babel-runtime": "npm:babel-runtime@5.8.20",
    "bourbon": "npm:bourbon@4.2.4",
    "bourbon-neat": "npm:bourbon-neat@1.7.2",
    "core-js": "npm:core-js@0.9.18",
    "es6-translate": "npm:es6-translate@0.5.2",
    "jspm/nodelibs-assert": "github:jspm/nodelibs-assert@0.1.0",
    "jspm/nodelibs-os": "github:jspm/nodelibs-os@0.1.0",
    "jspm/nodelibs-util": "github:jspm/nodelibs-util@0.1.0",
    "react": "npm:react@0.14.0-beta3",
    "react-dom": "npm:react-dom@0.14.0-beta3",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.4.3"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.4"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.1": {
      "process": "npm:process@0.10.1"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "npm:acorn@1.2.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:ast-types@0.8.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-runtime@5.8.20": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:bourbon@4.2.4": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:brace-expansion@1.1.0": {
      "balanced-match": "npm:balanced-match@0.2.0",
      "concat-map": "npm:concat-map@0.0.1"
    },
    "npm:buffer@3.4.3": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:clone@0.1.19": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:css-modules-loader-core@0.0.10": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@4.1.16",
      "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@0.0.5",
      "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@0.0.9",
      "postcss-modules-scope": "npm:postcss-modules-scope@0.0.7"
    },
    "npm:css-selector-tokenizer@0.4.1": {
      "fastparse": "npm:fastparse@1.1.1"
    },
    "npm:css-selector-tokenizer@0.5.4": {
      "cssesc": "npm:cssesc@0.1.0",
      "fastparse": "npm:fastparse@1.1.1"
    },
    "npm:d@0.1.1": {
      "es5-ext": "npm:es5-ext@0.10.7"
    },
    "npm:detective@3.1.0": {
      "escodegen": "npm:escodegen@1.1.0",
      "esprima-fb": "npm:esprima-fb@3001.1.0-dev-harmony-fb"
    },
    "npm:domain-browser@1.1.4": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.8"
    },
    "npm:es3ify@0.1.4": {
      "esprima-fb": "npm:esprima-fb@3001.1.0-dev-harmony-fb",
      "jstransform": "npm:jstransform@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through": "npm:through@2.3.8"
    },
    "npm:es5-ext@0.10.7": {
      "es6-iterator": "npm:es6-iterator@0.1.3",
      "es6-symbol": "npm:es6-symbol@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:es6-iterator@0.1.3": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7",
      "es6-symbol": "npm:es6-symbol@2.0.1"
    },
    "npm:es6-map@0.1.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7",
      "es6-iterator": "npm:es6-iterator@0.1.3",
      "es6-set": "npm:es6-set@0.1.1",
      "es6-symbol": "npm:es6-symbol@0.1.1",
      "event-emitter": "npm:event-emitter@0.3.3"
    },
    "npm:es6-promise@2.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:es6-set@0.1.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7",
      "es6-iterator": "npm:es6-iterator@0.1.3",
      "es6-symbol": "npm:es6-symbol@0.1.1",
      "event-emitter": "npm:event-emitter@0.3.3"
    },
    "npm:es6-symbol@0.1.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7"
    },
    "npm:es6-symbol@2.0.1": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7"
    },
    "npm:es6-translate@0.5.2": {
      "detective": "npm:detective@3.1.0",
      "es3ify": "npm:es3ify@0.1.4",
      "es6-map": "npm:es6-map@0.1.1",
      "ismodule": "npm:ismodule@0.1.1",
      "lie": "npm:lie@2.9.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "resolve": "npm:resolve@0.7.4"
    },
    "npm:escodegen@1.1.0": {
      "esprima": "npm:esprima@1.0.4",
      "estraverse": "npm:estraverse@1.5.1",
      "esutils": "npm:esutils@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima-fb@15001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima-fb@3001.1.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:esprima@1.0.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:event-emitter@0.3.3": {
      "d": "npm:d@0.1.1",
      "es5-ext": "npm:es5-ext@0.10.7",
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:falafel@1.2.0": {
      "acorn": "npm:acorn@1.2.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "foreach": "npm:foreach@2.0.5",
      "isarray": "npm:isarray@0.0.1",
      "object-keys": "npm:object-keys@1.0.7"
    },
    "npm:fastparse@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:fbjs@0.1.0-alpha.4": {
      "core-js": "npm:core-js@1.0.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "promise": "npm:promise@7.0.4",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:glob@5.0.14": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inflight": "npm:inflight@1.0.4",
      "inherits": "npm:inherits@2.0.1",
      "minimatch": "npm:minimatch@2.0.10",
      "once": "npm:once@1.3.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "path-is-absolute": "npm:path-is-absolute@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:immediate@3.0.5": {
      "inline-process-browser": "npm:inline-process-browser@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "unreachable-branch-transform": "npm:unreachable-branch-transform@0.3.0"
    },
    "npm:inflight@1.0.4": {
      "once": "npm:once@1.3.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inline-process-browser@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "falafel": "npm:falafel@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "through2": "npm:through2@0.6.5"
    },
    "npm:ismodule@0.1.1": {
      "esprima": "github:vslinko-forks/esprima@harmony-export-default",
      "estraverse": "npm:estraverse@1.5.1"
    },
    "npm:js-base64@2.1.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:jspm-loader-css-modules@0.1.2": {
      "jspm-loader-css": "npm:jspm-loader-css@0.1.6"
    },
    "npm:jspm-loader-css@0.1.6": {
      "css-modules-loader-core": "npm:css-modules-loader-core@0.0.10",
      "path": "npm:path@0.11.14"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:jstransform@3.0.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@3001.1.0-dev-harmony-fb",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.1.31"
    },
    "npm:lie@2.9.1": {
      "immediate": "npm:immediate@3.0.5",
      "inline-process-browser": "npm:inline-process-browser@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "unreachable-branch-transform": "npm:unreachable-branch-transform@0.2.3"
    },
    "npm:minimatch@2.0.10": {
      "brace-expansion": "npm:brace-expansion@1.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:once@1.3.2": {
      "wrappy": "npm:wrappy@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path-is-absolute@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:path@0.11.14": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:postcss-browser-reporter@0.3.0": {
      "postcss": "npm:postcss@4.1.16"
    },
    "npm:postcss-import@6.2.0": {
      "clone": "npm:clone@0.1.19",
      "es6-promise": "npm:es6-promise@2.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "glob": "npm:glob@5.0.14",
      "object-assign": "npm:object-assign@3.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@4.1.16",
      "postcss-message-helpers": "npm:postcss-message-helpers@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "resolve": "npm:resolve@1.1.6"
    },
    "npm:postcss-modules-extract-imports@0.0.5": {
      "postcss": "npm:postcss@4.1.16",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss-modules-local-by-default@0.0.9": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.4.1",
      "postcss": "npm:postcss@4.1.16"
    },
    "npm:postcss-modules-scope@0.0.7": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.5.4",
      "postcss": "npm:postcss@4.1.16",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss-nested@0.3.2": {
      "postcss": "npm:postcss@4.1.16",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:postcss-simple-vars@0.3.0": {
      "postcss": "npm:postcss@4.1.16"
    },
    "npm:postcss@4.1.16": {
      "es6-promise": "npm:es6-promise@2.3.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-base64": "npm:js-base64@2.1.9",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.4.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:promise@7.0.4": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:react-dom@0.14.0-beta3": {
      "fbjs": "npm:fbjs@0.1.0-alpha.4",
      "react": "npm:react@0.14.0-beta3"
    },
    "npm:react@0.14.0-beta3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "envify": "npm:envify@3.4.0",
      "fbjs": "npm:fbjs@0.1.0-alpha.4",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:recast@0.10.32": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "ast-types": "npm:ast-types@0.8.11",
      "esprima-fb": "npm:esprima-fb@15001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "private": "npm:private@0.1.6",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "source-map": "npm:source-map@0.4.4"
    },
    "npm:resolve@0.7.4": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:resolve@1.1.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:source-map@0.4.4": {
      "amdefine": "npm:amdefine@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.0.33"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:tachyons@3.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:unreachable-branch-transform@0.2.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esmangle-evaluator": "npm:esmangle-evaluator@1.0.0",
      "recast": "npm:recast@0.10.32",
      "through2": "npm:through2@0.6.5"
    },
    "npm:unreachable-branch-transform@0.3.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esmangle-evaluator": "npm:esmangle-evaluator@1.0.0",
      "recast": "npm:recast@0.10.32",
      "through2": "npm:through2@0.6.5"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.1"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
