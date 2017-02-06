var settings = require('../settings');
module.exports = {
    dist: {
        options: {
            // cssmin will minify later
            style: 'expanded'
        },
        files: {
            '<%= settings.css.dist%><%=settings.css.distfilename%>.css': '<%= settings.css.src %>'
        }
    }
}