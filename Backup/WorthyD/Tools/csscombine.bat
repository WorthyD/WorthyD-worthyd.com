REM remove any lingering minified files
del ..\Content\Styles\*.min.css

REM combine stylesheets and minify
..\Tools\packer -o ..\Content\site.min.css -m cssmin ..\Content\site.css 

REM clear screen
cls