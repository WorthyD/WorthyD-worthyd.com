REM remove any lingering minified or combined files
del ..\Scripts\js\*.min.js
del ..\Scripts\js\*.combined.js

REM combine scripts from all pages folders
copy /b /Y ..\Scripts\Pages\Account\*.js ..\Scripts\js\account.combined.js
copy /b /Y ..\Scripts\Pages\Checkout\*.js ..\Scripts\js\Checkout.combined.js
copy /b /Y ..\Scripts\Pages\Coaches\*.js ..\Scripts\js\coaches.combined.js
copy /b /Y ..\Scripts\Pages\Content\*.js ..\Scripts\js\content.combined.js
copy /b /Y ..\Scripts\Pages\Contest\*.js ..\Scripts\js\contest.combined.js
copy /b /Y ..\Scripts\Pages\FilmRoom\*.js ..\Scripts\js\filmroom.combined.js
copy /b /Y ..\Scripts\Pages\Home\*.js ..\Scripts\js\home.combined.js
copy /b /Y ..\Scripts\Pages\Master\*.js ..\Scripts\js\master.combined.js
copy /b /Y ..\Scripts\Pages\MostViewed\*.js ..\Scripts\js\mostviewed.combined.js
copy /b /Y ..\Scripts\Pages\Profile\*.js ..\Scripts\js\profile.combined.js
copy /b /Y ..\Scripts\Pages\ProfileAlbums\*.js ..\Scripts\js\profilealbums.combined.js
copy /b /Y ..\Scripts\Pages\ProfilePhotos\*.js ..\Scripts\js\profilephotos.combined.js
copy /b /Y ..\Scripts\Pages\ProfileStatistics\*.js ..\Scripts\js\profilestatistics.combined.js
copy /b /Y ..\Scripts\Pages\ProfileVideos\*.js ..\Scripts\js\profilevideos.combined.js
copy /b /Y ..\Scripts\Pages\Stream\*.js ..\Scripts\js\stream.combined.js
copy /b /Y ..\Scripts\Pages\Team\*.js ..\Scripts\js\team.combined.js

REM combine all directory files into a single file and minify
copy /b /Y ..\Scripts\js\*.combined.js ..\Scripts\js\pages.combined.js
..\Tools\packer -o ..\Scripts\js\pages.min.js -m jsmin ..\Scripts\js\pages.combined.js

REM remove combined files
del ..\Scripts\js\*.combined.js

REM combine scripts from pnl folder and minify
copy /b /Y ..\Scripts\pnl\*.js ..\Scripts\js\pnl.combined.js
..\Tools\packer -o ..\Scripts\js\pnl.min.js -m jsmin ..\Scripts\js\pnl.combined.js

REM remove combined files
del ..\Scripts\js\*.combined.js

REM combine scripts from search folder
copy /b /Y ..\Scripts\Pages\Search\*.js ..\Scripts\js\search.combined.js

REM minify search
..\Tools\packer -o ..\Scripts\js\search.min.js -m jsmin ..\Scripts\js\search.combined.js

REM remove combined files
del ..\Scripts\js\*.combined.js

REM clear screen
cls