---
noteId: "5d04b24035d011ea833875cc10720036"
tags: []

---

## Tasks

* Watch - Compile only changed files from source
* Build - Build all files from source
* Version - Output version number
* Install - Run Installer to Set-up Paths

## How to use

These tasks can be imported into your own gulpfile allowing you to avoid using Semantic's build tools

```javascript
var
  watch = require('path/to/semantic/tasks/watch')
;
gulp.task('watch ui', watch);
```
