//steps
//1.create req var issue req the http req by creating an insance of
//xml http req
//2.open a connection
//3.send the request.
//4.load the response once its ready.

//1.create req

var request=new XMLHttpRequest();

//2.open connection
//insde open(method,url,true if error occurs should not affect rest of code for that true )
 request.open('GET','https://restcountries.eu/rest/v2/all','true')

//3.send thr req
request.send();
//4.response callback fun is used
request.onload=function(){

var data =JSON.parse(this.response);

console.log(data)

for(i=0;i<data.length;i++)
{
    console.log(data[i].flag)
}





}


