var fs = require('fs');
var i=0;

module.exports=function(request,response){
	console.log(request.url);

	//style files
	if(request.url.match(/\/styles\/.*/)) {
  	  fs.readFile('./private'+request.url, 'utf8' , function(errors, contents){
  	    response.write(contents);
  	    response.end();
  	  });
  	}

  	//image files
	else if(request.url.match(/\/images\/.*/)) {
  	  fs.readFile('./private'+request.url, function(errors, contents){
  	    response.write(contents);
  	    response.end();
  	  });
  	}

	//handle favicon
	else if(request.url==='/favicon.ico'){}

	//view files
	else {
  		fs.readFile('./views/'+request.url+'.html', 'utf8', function (errors, contents){  			
  			// handle error if file not found
  			if (errors!=undefined && errors.code=='ENOENT'){
  				response.end('File not found!!!')
  			}
  			else{
  				response.write(contents); 
  				response.end();}  				
  			}
  		);
	} 
}