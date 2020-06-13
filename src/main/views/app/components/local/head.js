'use strict';
module.exports = {
    lib: [],
    main: {
        data() {
            return {
                d_settings: null,
                d_exitprompt: null
            }
        },
        template: `<div class="head">
        <div>
        <span>{{$util.remote.app.name}} {{$util.remote.app.getVersion()}}</span>
        </div>
        <div>
        <i @click="settings" class="iconfont iconSettingscontrol no-drag cursor-pointer"></i>
        <i @click="system('mini')" class="iconfont iconMinus no-drag cursor-pointer"></i>
        <i @click="system('closed')" class="iconfont iconCancelcontrol no-drag cursor-pointer"></i>
        </div>
    </div>`,
        created() {
            console.log('创建', this.$parent.$parent.IComponent.name);
        },
        beforeDestroy() {
            console.log('销毁', this.$parent.$parent.IComponent.name);
        },
        activated() {
            //开启缓存后 切换加载
            console.log('加载[缓存]', this.$parent.$parent.IComponent.name);
        },
        deactivated() {
            //开启缓存后 切换卸载
            console.log('卸载[缓存]', this.$parent.$parent.IComponent.name);
        },
        methods: {
            async settings() {
                this.$parent.$parent.dialogInit(
                    {
                        name: '设置',
                        v: 'settings',
                        r: this.$parent.$parent.IComponent.name + '.head.d_settings'
                    }
                );
            },
            async system(channel) {
                if (channel !== 'closed') this.$util.ipcRenderer.send(channel);
                else {
                    this.$parent.$parent.dialogInit(
                        {
                            name: '提示',
                            v: 'exitprompt',
                            r: this.$parent.$parent.IComponent.name + '.head.d_exitprompt'
                        }
                    );
                }
            }
        },
        watch: {
            d_settings(v) {
                console.log(v.test);
            }
        }
    }
};