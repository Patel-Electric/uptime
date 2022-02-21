var ping = require('ping');


async function myvalue (hosts){
    return new Promise( (resolve,reject)=>{
        ping.sys.probe(hosts, function(isAlive){
            let msg = isAlive ? 'host ' + hosts + ' is alive' : 'host ' + hosts + ' is dead';
            resolve(msg);
            
        });
    
    } );

    
}


// myvalue('www.shubhamworks.com')
module.exports = myvalue;




