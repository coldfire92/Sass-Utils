module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({	
		sass: {
	        options: {
	            sourceMap: true
	        },
	        dist: {
	            files: {
	                'css/utils.css': 'sass/utils.scss'
	            }
	        }
	    }
	});

	 grunt.loadNpmTasks('grunt-sass');
	grunt.registerTask('default', ['sass']);
	
}