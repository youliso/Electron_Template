import Vue from './apis/vue.esm.browser.min.js';

const fs = require('fs');
const {remote, ipcRenderer} = require('electron');
const pages = () => {
    fs.readdirSync(__dirname + '/views').forEach((view) => {
        let v = require(__dirname + '/views/' + view);
        if (v.main) Vue.component(v.main.data().only, v.main);
    });
};
pages();

new Vue({
    el: '#app',
    data: {
        componentName: 'home',
        util: require('./apis/util'),
        remote: remote,
        seenHead: true
    },
    created() {
        console.log('init');
    },
    methods: {
        system(channel) {
            ipcRenderer.send(channel);
        }
    }
});