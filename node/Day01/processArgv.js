// processArgv.js
// 2020-10-19

process.argv.forEach(function(val, index, array){
    console.log(index + ': '+ val);
});

// node processArgv.js one two three

// 0: C:\Program Files\nodejs\node.exe
// 1: D:\OneDrive\Mets HIT\private\dev\node\Day01\processArgv.js
// 2: one
// 3: two
// 4: three


// 대화형 인터프리터 실행

// D:\OneDrive\Mets HIT\private\dev\node\Day01>node
// Welcome to Node.js v12.19.0.
// Type ".help" for more information.
// > console.log("REPL을 실행한 화면입니다.");
// REPL을 실행한 화면입니다.
// undefined
// > process.exit();