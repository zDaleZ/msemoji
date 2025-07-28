#!/usr/bin/env node

const regex = require('./regex').default;
const sequences = require('@unicode/unicode-15.1.0/Sequence_Property/Emoji_Test/index.js');

console.log("Below is the emojis that seems can't match correctly:");

function verify(emoji) {
    const matched = [...emoji.matchAll(regex)];
    if (matched.length != 1) console.log(`${emoji}, matched as ${matched.length}`);
}

sequences.forEach(verify);