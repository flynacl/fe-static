/**
 * 解析 .NET 返回对象包含的 DateTime 类型字符串。
 *
 * @param date DateTime 类型字符串，格式为："/Date(1554106680000)/"
 * @returns {null|Date} 正常解析返回对应 Date 对象，否则返回 null。
 */
function parseDate(date) {
    try {
        return new Date(parseInt(date.substring(6)));
    } catch (e) {
        return null;
    }
}