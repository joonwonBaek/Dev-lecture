// '?name=baek&position=defender'
// 1. &로 쪼갠다
// 2. key=value의 조합을 object의 형태로 만든다
// 3. 만들어진거 리턴한다

export const parse = (querystring) => 
querystring.split('&').reduce((acc, keyAndValue) => {
    const [key, value] = keyAndValue.split('=');

    if(key && value) {
        acc[key] = value;
        console.log(acc, key, value);
    }
    return acc;
}, {})