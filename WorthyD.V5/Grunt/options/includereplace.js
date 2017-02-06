var settings = require('../settings');
module.exports = {
    dist: {
        options: {
            // Task-specific options go here.
            //includesDir: 'templates/'
            prefix: '<!-- @@',
            suffix: ' -->',
        },
        /*
        files:[
            {src: '/*.html', dest: 'dest/', expand:true,  cwd:'templates/'}
        ]
        */
        //
        // Files to perform replacements and includes with
        expand: true,
        cwd: 'src/templates/',

        src: '**/*.html',
        dest: 'dest/'
    }
}