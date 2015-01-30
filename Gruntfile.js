module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		
		compass: {
			 dist: {                   
			      options: {        
			        sassDir: 'sass',
			        cssDir: 'css',
			        environment: 'production'
			      }
    	      }

    	}

	});

	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.registerTask('default', ['compass']);
	
}