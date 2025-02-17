const url = 'https://example.com/path?name=John&age=30&city=New%20York';
export const parseUrlParams = (url) => {
    let reg = /([^?&=]+)=([^&=]+)/g;
    let arr = url.match(reg) || [];
    let obj = {};
    arr.forEach(item => {
        let res = item.split('=');
        obj[res[0]] = decodeURIComponent(res[1]);
    });
    console.log(obj);
};
parseUrlParams(url);
