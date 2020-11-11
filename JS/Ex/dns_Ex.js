const dns = require('dns');

dns.lookup('example.org', (err, address, family) => {
    console.log('example.org address: %j family: IPv%s', address, family);
});

dns.lookup('naver.com', (err, address, family) => {
    console.log('naver.com address: %j family: IPv%s', address, family);
});
console.log();

dns.resolve4('archive.org', (err, addresses) => {
    if (err) throw err;
    console.log(`archive.org addresses: ${JSON.stringify(addresses)}`);
});
console.log();

dns.resolve4('naver.com', (err, addresses) => {
    if (err) throw err;
    console.log(`naver.com addresses: ${JSON.stringify(addresses)}`);
});

dns.lookupService('127.0.0.1', 22, (err, hostname, service) => {
    console.log(hostname, service);
    // Prints: localhost ssh
});