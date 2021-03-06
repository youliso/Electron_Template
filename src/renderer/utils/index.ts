/**
 * 发送ipc消息
 * @param key
 * @param value
 */
export function ipcSend(key: string, value?: unknown) {
  window.ipcFun.send(key, value);
}

/**
 * 日志(info)
 * @param args
 */
export function logInfo(...args: any) {
  window.ipcFun.send('log-info', args);
}

/**
 * 日志(error)
 * @param args
 */
export function logError(...args: any) {
  window.ipcFun.send('log-error', args);
}

/**
 * 设置全局参数
 * @param key 键
 * @param value 值
 */
export function sendGlobal(key: string, value: unknown) {
  return window.ipcFun.sendSync('global-sharedObject-set', {
    key,
    value
  });
}

/**
 * 获取全局参数
 * @param key 键
 */
export function getGlobal(key: string) {
  return window.ipcFun.sendSync('global-sharedObject-get', key);
}

/**
 * 获取内部依赖文件路径(！文件必须都存放在lib/inside 针对打包后内部依赖文件路径问题)
 * @param path lib/inside为起点的相对路径
 * */
export function getInsidePath(path: string): string {
  return window.ipcFun.sendSync('global-insidePath-get', path);
}

/**
 * 获取外部依赖文件路径(！文件必须都存放在lib/extern下 针对打包后外部依赖文件路径问题)
 * @param path lib/extern为起点的相对路径
 * */
export function getExternPath(path: string): string {
  return window.ipcFun.sendSync('global-externPath-get', path);
}

/**
 * app常用获取路径
 */
export function getAppPath(key: string) {
  return window.ipcFun.sendSync('app-path-get', { key });
}

/**
 * app打开url
 */
export function openUrl(url: string) {
  window.ipcFun.send('app-open-url', { url });
}