const rpc = require("discord-rpc");
const client = new rpc.Client({ transport: "ipc" });
var options = require("./options.json");

var consolePrefix = "[RPC]";
console.log(consolePrefix, "Starting...");

console.log(consolePrefix, "App ID:", options.applicationID);
console.log(consolePrefix, "Large image:", options.largeImage);
console.log(consolePrefix, "Large text:", options.largeText);
console.log(consolePrefix, "details:", options.details);
console.log(consolePrefix, "state:", options.state)
console.log(consolePrefix, "button 1:", options.button1);
console.log(consolePrefix, "url 1:", options.url1);
console.log(consolePrefix, "button 2:", options.button2);
console.log(consolePrefix, "url 2:", options.url2);

console.log(consolePrefix, "Connecting...");
client.on("ready", () => {
    console.log(consolePrefix, "Ready");
    client.request("SET_ACTIVITY", {
        pid: process.pid,
        activity: {
            details: options.details,
            state: options.state,
            assets: {
                large_image: options.largeImage,
                large_text: options.largeText
            },
            buttons: [{
                label: options.button1,
                url: options.url1
            }, {
                label: options.button2,
                url: options.url2
            }]
        }
    })
});
client.login({ clientId: options.applicationID });