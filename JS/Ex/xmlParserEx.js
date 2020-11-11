// npm install xml2js
var xml2js = require('xml2js');
var parser = new xml2js.Parser();
var fs = require('fs');
 
var xml = fs.readFileSync(__dirname + '/user.xml', 'utf-8');
 
parser.parseString(xml, function(err, result) {
  console.log(result);
  console.log(JSON.stringify(result));
  console.log(result.list.user[0].name, result.list.user[0].country);
  console.log('--------------------------------')
  for(i in result.list.user){
    console.log(result.list.user[i].name[0]);
    console.log(result.list.user[i].country[0]);
    console.log();
  }
});