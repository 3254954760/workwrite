export const transformPath = (path) => {
    if (path.startsWith('~')) {
        path = path.replace('~', '/home/users/demo');
    }
    let result = [];
    let parts = path.split('/');
    for (let part of parts) {
        if (part === '.') {
            continue;
        }
        else if (part === '..') {
            result.pop();
        }
        else if (part) {
            result.push(part);
        }
    }
    return '/' + path.join('/');
};
