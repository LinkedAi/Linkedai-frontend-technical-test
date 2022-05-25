var house = document.createElement("img");
house.src = "./src/images/home.png";

var tree = document.createElement("img");
tree.src = "./src/images/tree.png";

var trees = document.createElement("img");
trees.src = "./src/images/trees.png";

var principal = document.createElement("img");
principal.src = "./src/images/principal.png";

//WIDTH: 515px, HEIGHT:800PX
const colorCarretera = '#656567'
const colorCesped = '#84E116'



let line = { x: 301, y: -800 }
let houseobj = { x: 45, y: -205 }
let tree1 = { x: 55, y: -300 }
let tree2 = { x: 55, y: 0 }
let treesobj = { x: 45, y: -800 }
let guardrail = { y: -800 }
let enemy = { x: 301, y: 0, type: 'red' }
let car = { x: 301, y: 701 }
let speed = 10
let left = false
let right = false



window.onload = function() {
    initializate()
  };


document.addEventListener("keydown", (e) => {
    const key = e.key;
    if (key === "ArrowLeft") {
        left = true
    }
    if (key === "ArrowRight") {
        right = true
    }
    if (key === "ArrowUp") {
        up = true
    }
})

document.addEventListener("keyup", (e) => {
    const key = e.key;
    if (key === "ArrowLeft") {
        left = false
    }
    if (key === "ArrowRight") {
        right = false
    }
    if (key === "ArrowUp") {
        up = false
    }

})

let canvas, ctx, width, height, carCanvas, ctxCar

function initializate() {
    canvas = document.getElementById("maincanvas")
    ctx = canvas.getContext('2d');
    carCanvas = document.getElementById("carcanvas")
    ctxCar = canvas.getContext('2d');
    width = canvas.width
    height = canvas.height
    gameLoop()


}

function gameLoop() {
    setTimeout(function () {
        const number = window.requestAnimationFrame(gameLoop);
        update(number);
    }, 1000 / 60)
}

function update(number) {
    ctx.clearRect(0, 0, width, height)
    drawLayout()
    drawLines(number)
    drawCar()
    drawHouse()
    drawEnemy()
}

function drawLayout() {
    //RECORRIDO EN PISTA
    ctx.fillStyle = colorCarretera
    ctx.fillRect(0, 0, 28, height)
    //PARTE IZQUIERDA
    ctx.fillStyle = colorCesped
    ctx.fillRect(28, 0, 138, height)
    drawGuardrail()
    //DIBUJAR CARRETERA
    ctx.fillStyle = colorCarretera
    ctx.fillRect(166, 0, 270, height)
    ctx.beginPath()
    ctx.setLineDash([])
    ctx.moveTo(168, 0)
    ctx.lineTo(168, 800)
    ctx.lineWidth = 3
    ctx.stroke()
    //DIBUJAR PARTE DERECHA
    ctx.fillStyle = colorCesped
    ctx.fillRect(436, 0, 110, height)

}

function drawLines(number) {
    ctx.beginPath()
    ctx.setLineDash([]);
    ctx.moveTo(line.x, line.y);
    ctx.lineTo(301, 800);
    ctx.setLineDash([70, 100]);
    ctx.lineWidth = 9;
    ctx.strokeStyle = "#fff"
    ctx.stroke();
    line.y = line.y + 40 >= 40 ? -800 : line.y + 40;
}

function drawCar() {
    if (left) {
        car.x = car.x - speed
    }
    if (right) {
        car.x = car.x + speed
    }
    ctxCar.drawImage(principal, car.x, car.y)
}

function drawHouse() {
    const speed = 60
    ctx.drawImage(trees, treesobj.x, treesobj.y)

    ctx.drawImage(tree, tree1.x, tree1.y, 99, 58); //129*88
    ctx.drawImage(house, houseobj.x, houseobj.y, 90, 180);
    ctx.drawImage(tree, tree2.x, tree2.y, 99, 58);

    if (treesobj.y < 800) {
        treesobj.y = treesobj.y + speed
        tree1.y = tree1.y + speed
        houseobj.y = houseobj.y + speed
        tree2.y = tree2.y + speed
    } else {
        treesobj.y = -800
        tree1.y = -300
        houseobj.y = -205
        tree2.y = 0
    }
}

function drawGuardrail() {
    const speed = 105
    ctx.beginPath()
    ctx.setLineDash([])
    ctx.moveTo(160, 0)
    ctx.lineTo(160, 800)
    ctx.lineWidth = 4
    ctx.strokeStyle = "#fff"
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(156, guardrail.y)
    ctx.lineTo(156, 800)
    ctx.setLineDash([8, 20])
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(164, guardrail.y)
    ctx.lineTo(164, 800)
    ctx.setLineDash([8, 20])
    ctx.strokeStyle = "#000"
    ctx.stroke()

    guardrail.y = guardrail.y + speed >= speed ? -800 : guardrail.y + speed;

}

function drawEnemy() {
    const speed = 10
    ctx.fillStyle = "#000"
    ctx.fillRect(enemy.x, enemy.y, 10, 10)
    enemy.y = enemy.y + speed >= 800 ? -150 : enemy.y + speed

}

function getCarPosition(){
    return car
}