//http server
var http = require('http');
var fs = require('fs');
//creating a server
server = http.createServer(function (request, response){
  console.log('Request', request.url,'');
  //main pages
  if(request.url === '/cars'){
    fs.readFile('views/cars.html', 'utf8', function (errors, contents){
      response.write(contents); 
      response.end();
    });
  }  
  else if(request.url === '/cats'){
    fs.readFile('views/cats.html', 'utf8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  } 
  else if(request.url === '/cars/new'){
    fs.readFile('views/new.html', 'utf8', function (errors, contents){
      response.write(contents);
      response.end();
    });
  } 
  //css // NOT WORKING YET
  else if(request.url === '/styles/style.css'){
    fs.readFile('./styles/style.css', 'utf8' , function(errors, contents){
      response.write(contents);
      response.end();
    })
  }
  //images
  else if(request.url === '/images/car1.jpg'){
    fs.readFile('./images/car1.jpg', function (errors, contents){
     response.write(contents);
     response.end();
    });
  }  
  else if(request.url === '/images/car2.jpg'){
    fs.readFile('./images/car2.jpg', function (errors, contents){
     response.write(contents);
     response.end();
    });
  } 
  else if(request.url === '/images/car3.jpg'){
    fs.readFile('./images/car3.jpg', function (errors, contents){
     response.write(contents);
     response.end();
    });
  } 
  else if(request.url ==='/images/cat1.jpg'){
    fs.readFile('./images/cat1.jpg', function (errors, contents){
      response.write(contents);
      response.end();
    });
  }
  else if(request.url ==='/images/cat2.jpg'){
    fs.readFile('./images/cat2.jpg', function (errors, contents){
      response.write(contents);
      response.end();
    });
  }
  else if(request.url ==='/images/cat3.jpg'){
    fs.readFile('./images/cat3.jpg', function (errors, contents){
      response.write(contents);
      response.end();
    });
  }
  //incorrect url
  else {
    response.end('File not found!!!');
  }
});
server.listen(7077);
console.log("Running in localhost at port 7077");