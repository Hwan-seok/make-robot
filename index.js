const robot = require("robotjs");
const child = require("child_process").execFile;
const executablePath = "D:\\Program Files\\Nox\\bin\\Nox.exe";
const equal = require("deep-equal");
let prevPos = { x: 0, y: 0 };

const logColor = () => {
    return setInterval(() => {
        console.log(robot.getPixelColor(770, 600));
    }, 1000);
};

const executeApp = () => {
    child(executablePath, (err, data) => {
        console.log(err);
        console.log(data);
    });
};

const logMousePos = () => {
    return setInterval(() => {
        const curPos = robot.getMousePos();
        if (!equal(prevPos, curPos)) {
            console.log(curPos);
        }
        prevPos = curPos;
    }, 1000);
};

const waitFor = (time, cb) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            cb();
            resolve();
        }, time);
    });
};

const main = async () => {
    const colorLogging = logColor();
    const mousePosLogging = logMousePos();
    executeApp();
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
    clearInterval(colorLogging);
    clearInterval(mousePosLogging);
};

main();
