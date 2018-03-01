"use strict";
const Facebook = require("./src/sources/Facebook");
const LunchBot = require("./src/Lunchbot");
const config = require('config');

const sources = [
    new Facebook('flag-ar', 'Argentiina Restoran', 'ArgentiinaRestoran'),
    new Facebook('unicorn_face', 'Pegasus', "RestoranPegasus"),
    new Facebook('bike', 'Rataskaevu 16', 'Rataskaevu16'),
    new Facebook('hole', 'Väike Rataskaevu 16', 'VaikeRataskaevu16'),
    new Facebook('leaves', 'Rahva Toit', 'rahvatoitttu'),
    new URL("http://rahvatoit.ee/menuu/rahva-toit-roosikrantsi/")
  // new Facebook('elephant', 'Restoran Elevant', 'restoran.elevant'),
];

const lunchbot = new LunchBot({
    token: config.get('slack.api'),
    name: config.get('slack.name') || "Lunchbot",
    usesReactionVoting: config.get('slack.usesReactionVoting')
}, sources);

lunchbot.run();
