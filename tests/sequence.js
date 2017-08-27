let assert = require('assert');
let exec = require('child_process').exec;
let fs = require('fs-extra');
let utils = require('./utils');

describe('diagrams sequence', function(){
    it('should create .svg from sequence files', function(cb) {

        let generatedSVGPath = `${utils.getTmpDir()}/simple.svg`;
        console.log(generatedSVGPath);
        console.log(`Current directory: ${process.cwd()}`);
        exec(`./bin/diagrams.js sequence tests/fixtures/sequence/simple.sequence ${generatedSVGPath}`, (err) => {
            if(err){
                return cb(err);
            }
            console.log(`Current directory: ${process.cwd()}`);

            fs.readFile(generatedSVGPath, (err, fileContent) => {
                if(err){
                    return cb(err);
                }
                assert(
                    fileContent.toString(),
                    `<svg height="260" version="1.1" width="485.2421875" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="overflow: hidden; position: relative;"><desc style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Created with RaphaÃ«l 2.1.4</desc><defs style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><path stroke-linecap="round" d="M5,0 0,2.5 5,5z" id="raphael-marker-block" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><marker id="raphael-marker-endblock55-obj21" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#raphael-marker-block" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="#000000" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker><marker id="raphael-marker-endblock55-obj27" markerHeight="5" markerWidth="5" orient="auto" refX="2.5" refY="2.5" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#raphael-marker-block" transform="rotate(180 2.5 2.5) scale(1,1)" stroke-width="1.0000" fill="#000000" stroke="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></use></marker></defs><rect x="10" y="20" width="68" height="38" rx="0" ry="0" fill="#ffffff" stroke="#000000" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><text x="20" y="39" text-anchor="start" font-family="Andale Mono, monospace" font-size="16px" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: start; font-family: 'Andale Mono', monospace; font-size: 16px;"><tspan dy="6" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Alice</tspan></text><rect x="10" y="202" width="68" height="38" rx="0" ry="0" fill="#ffffff" stroke="#000000" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><text x="20" y="221" text-anchor="start" font-family="Andale Mono, monospace" font-size="16px" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: start; font-family: 'Andale Mono', monospace; font-size: 16px;"><tspan dy="6" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Alice</tspan></text><path fill="none" stroke="#000000" d="M44,58L44,202" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><rect x="260.4296875" y="20" width="48.796875" height="38" rx="0" ry="0" fill="#ffffff" stroke="#000000" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><text x="270.421875" y="39" text-anchor="start" font-family="Andale Mono, monospace" font-size="16px" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: start; font-family: 'Andale Mono', monospace; font-size: 16px;"><tspan dy="6" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Bob</tspan></text><rect x="260.4296875" y="202" width="48.796875" height="38" rx="0" ry="0" fill="#ffffff" stroke="#000000" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><text x="270.421875" y="221" text-anchor="start" font-family="Andale Mono, monospace" font-size="16px" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: start; font-family: 'Andale Mono', monospace; font-size: 16px;"><tspan dy="6" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Bob</tspan></text><path fill="none" stroke="#000000" d="M284.828125,58L284.828125,202" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><text x="53.9921875" y="83" text-anchor="start" font-family="Andale Mono, monospace" font-size="16px" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: start; font-family: 'Andale Mono', monospace; font-size: 16px;"><tspan dy="6" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Hello Bob, how are you?</tspan></text><path fill="none" stroke="#000000" d="M44,96C44,96,245.32186852861196,96,279.82576298834965,96" stroke-width="2" marker-end="url(#raphael-marker-endblock55-obj21)" stroke-dasharray="none" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path><rect x="304.828125" y="116" width="106.015625" height="28" rx="0" ry="0" fill="#ffffff" stroke="#000000" stroke-width="2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></rect><text x="309.8203125" y="130" text-anchor="start" font-family="Andale Mono, monospace" font-size="16px" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: start; font-family: 'Andale Mono', monospace; font-size: 16px;"><tspan dy="6" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Bob thinks</tspan></text><text x="82.8046875" y="169" text-anchor="start" font-family="Andale Mono, monospace" font-size="16px" stroke="none" fill="#000000" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0); text-anchor: start; font-family: 'Andale Mono', monospace; font-size: 16px;"><tspan dy="6" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">I am good thanks!</tspan></text><path fill="none" stroke="#000000" d="M284.828125,182C284.828125,182,83.50625647138804,182,49.00236201165035,182" stroke-width="2" marker-end="url(#raphael-marker-endblock55-obj27)" stroke-dasharray="6,2" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"></path></svg>`
                )
                cb(null);
            });
        })
    });
});