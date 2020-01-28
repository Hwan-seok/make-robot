const robot = require("robotjs");
const child = require("child_process").execFile;
const executablePath = "D:\\Program Files\\Nox\\bin\\Nox.exe";
const equal = require("deep-equal");

// setInterval(() => {
//     console.log(robot.getPixelColor(770, 600));
// }, 1000);

child(executablePath, (err, data) => {
    console.log(err);
    console.log(data);
});

// let temp;
// while (true) {
//     const cur = robot.getMousePos();
//     if (!equal(temp, cur)) {
//         console.log(cur);
//     }
//     temp = cur;
// }
const waitFor = (time, cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(async () => {
            await cb();
            resolve();
        }, time);
    });
};

const main = async () => {
    await waitFor(30000, () => {
        robot.moveMouse(460, 520);
        robot.mouseClick();
    });

    await waitFor(30000, () => {
        robot.moveMouse(780, 770);
        robot.mouseClick();
    });

    await waitFor(10000, () => {
        robot.moveMouse(780, 700);
        robot.mouseClick();
    });

    await waitFor(5000, () => {
        robot.moveMouse(770, 870);
        robot.mouseToggle("down");
        robot.dragMouse(770, 800);
    });

    await waitFor(5000, () => {
        robot.mouseToggle("up");
        robot.moveMouse(770, 800);
        robot.mouseClick();
    });

    await waitFor(7000, () => {
        robot.moveMouse(770, 870);
        robot.mouseToggle("down");
        robot.dragMouse(770, 800);
    });

    await waitFor(3000, () => {
        robot.mouseToggle("up");
        robot.moveMouse(770, 870);
        robot.mouseToggle("down");
        robot.dragMouse(770, 800);
    });
};

main();
// setTimeout(() => {
//     robot.moveMouse(460, 520);
//     robot.mouseClick();
//     setTimeout(() => {
//         robot.moveMouse(780, 770);
//         robot.mouseClick();
//         setTimeout(() => {
//             robot.moveMouse(780, 700);
//             robot.mouseClick();
//             robot.moveMouse(770, 870);
//             robot.mouseToggle("down");
//             robot.dragMouse(770, 800);
//             setTimeout(() => {
//                 robot.mouseToggle("up");
//                 robot.moveMouse(770, 800);
//                 robot.mouseClick();
//                 setTimeout(() => {
//                     robot.moveMouse(770, 870);
//                     robot.mouseToggle("down");
//                     robot.dragMouse(770, 800);
//                     setTimeout(() => {
//                         robot.mouseToggle("up");
//                         setTimeout(() => {
//                             robot.moveMouse(770, 870);
//                             robot.mouseToggle("down");
//                             robot.dragMouse(770, 800);
//                         }, 3000);
//                     }, 3000);
//                 }, 7000);
//             }, 5000);
//         }, 10000);
//     }, 20000);
// }, 30000);
/*551b0c
360 520 클릭 20초 대기
780 770 클릭
770 690 클릭
770 870
770 900 까지 드래그
770 800 시작 5초 대기
770 870
770 900 까지 드래그 5초
5초 쉬었다가.
770 870
770 900 까지 드래그

픽셀 확인해서 빨갱이면
770 870 클릭

*/
