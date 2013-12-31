REM remove any lingering minified or combined files
del ..\Scripts\js\*.min.js
del ..\Scripts\js\*.combined.js

REM combine scripts from all pages folders
copy /b /Y ..\Scripts\Pages\Home\*.js ..\Scripts\js\home.combined.js


REM combine all directory files into a single file and minify
copy /b /Y ..\Scripts\js\*.combined.js ..\Scripts\js\pages.combined.js
..\Tools\packer -o ..\Scripts\js\pages.min.js -m jsmin ..\Scripts\js\pages.combined.js

REM remove combined files
del ..\Scripts\js\*.combined.js

REM combine scripts from pnl folder and minify
copy /b /Y ..\Scripts\Global\*.js ..\Scripts\js\global.combined.js
..\Tools\packer -o ..\Scripts\js\global.min.js -m jsmin ..\Scripts\js\global.combined.js

REM remove combined files
del ..\Scripts\js\*.combined.js


REM remove combined files
del ..\Scripts\js\*.combined.js

REM clear screen
cls