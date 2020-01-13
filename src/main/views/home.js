'use strict';
const path = require('path');
module.exports = {
    lib: [],
    main: {
        data() {
            return {
                listData: []
            }
        },
        template: `<div class="subclass">
           <h4>demo</h4>
           <button @click="newWin" class="button">新窗口</button>
        </div>`,
        async created() {
        },
        beforeDestroy() {
            //卸载
        },
        activated() {
            //开启缓存后 切换加载
        },
        deactivated() {
            //开启缓存后 切换卸载
        },
        methods: {
            async newWin() {
                this.$util.ipcRenderer.send('newWin', {name: '测试', v: 'dialog-test', width: 400, height: 200})
            }
        }
    }
};