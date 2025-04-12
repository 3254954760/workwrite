export function format(val: number | string, replacer?: string, decimals?: number) {
    let num = +val;
    // return Number.isNaN(num) ? replacer || '0' : num.toLocaleString();
    if (Number.isNaN(num)) {
        return replacer || '0'
    }
    if (typeof decimals === 'number' && decimals >= 0) {
        return num.toLocaleString(undefined, {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals
        });
    }
    return num.toLocaleString();
}
export const formatDollar = (val: string, decimals?: number) => {
    // 提取数字部分
    const numberMatch = val.match(/[-+]?\d*\.?\d+/);
    if (!numberMatch) {
        return val;
    }
    const numStr = numberMatch[0];
    const num = parseFloat(numStr);
    if (Number.isNaN(num)) {
        return val;
    }
    let formattedNum = format(num, '', decimals);
    return val.replace(numStr, formattedNum);
};
// format\([\s\S]*?toFixed\(2\)\)
// 只是价格需要保留两位
console.log(formatDollar('-6586.75%$',3))
console.log(formatDollar('$#S6586$',2))
