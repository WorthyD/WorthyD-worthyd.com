REM remove any lingering minified files
del ..\Content\Styles\*.min.css

REM combine stylesheets and minify
..\Tools\packer -o ..\Content\Styles\site.min.css -m cssmin ..\Content\site.css 
..\Tools\packer -o ..\Content\Styles\iphone.min.css -m cssmin ..\Content\iphone.css
..\Tools\packer -o ..\Content\Styles\ie7.min.css -m cssmin ..\Content\ie7.css

REM clear screen
cls