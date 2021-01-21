// square.js
// 2020-10-19

module.exports = function(width){       // 현재 js 파일을 모듈화시키는 거임?
    return {                            // 현재 js 모듈은 반환 역할인데
        area: function() {              // area 값을 반환하고
            return width * width;       // area는 width X width 이다
        }
    };
};