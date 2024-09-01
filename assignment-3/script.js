
function showAllBoxes() {
    document.querySelectorAll('.label-box').forEach(box => {
        box.style.display = 'block';
    });
}

function adjustCanvasSize() {
    const turbineImage = document.getElementById('turbine-image');
    const canvas = document.getElementById('canvas-overlay');
    const scaleFactorX = turbineImage.clientWidth / 1600;
    const scaleFactorY = turbineImage.clientHeight / 800;

    canvas.width = turbineImage.clientWidth;
    canvas.height = turbineImage.clientHeight;

    adjustLabelPositions(scaleFactorX, scaleFactorY); // Adjust label positions
    drawShapes(); // Redraw shapes on the canvas after resizing
}

function adjustLabelPositions(scaleX, scaleY) {
    const labels = [
        { id: 'hydraulic-unit', x: 1360, y: 650 },
        { id: 'hub-pitch', x: 1360, y: 304 },
        { id: 'generator', x: 1040, y: 20 },
        { id: 'converter', x: 20, y: 400 },
        { id: 'wind-sensors', x: 320, y: 120 },
        { id: 'nacelle', x: 848, y: 660 }
    ];

    labels.forEach(label => {
        const element = document.getElementById(label.id);
        element.style.left = `${label.x * scaleX}px`;
        element.style.top = `${label.y * scaleY}px`;
    });
}

function drawGenerator(ctx, scaleX, scaleY) {
    ctx.fillStyle = 'rgba(130, 185, 180, 0.5)';
    ctx.beginPath();
    ctx.moveTo(798 * scaleX, 218 * scaleY);
    ctx.lineTo(1064 * scaleX, 181 * scaleY);
    ctx.lineTo(1084 * scaleX, 261 * scaleY);
    ctx.lineTo(1103 * scaleX, 392 * scaleY);
    ctx.lineTo(1118 * scaleX, 564 * scaleY);
    ctx.lineTo(1122 * scaleX, 602 * scaleY);
    ctx.lineTo(1126 * scaleX, 652 * scaleY);
    ctx.lineTo(861 * scaleX, 689 * scaleY);
    ctx.closePath();
    ctx.fill();
}

function drawWindSensors(ctx, scaleX, scaleY) {
    ctx.fillStyle = 'rgba(205, 92, 92, 0.5)';
    ctx.beginPath();
    ctx.moveTo(609 * scaleX, 244 * scaleY);
    ctx.lineTo(602 * scaleX, 239 * scaleY);
    ctx.lineTo(602 * scaleX, 221 * scaleY);
    ctx.lineTo(612 * scaleX, 221 * scaleY);
    ctx.lineTo(612 * scaleX, 207 * scaleY);
    ctx.lineTo(593 * scaleX, 202 * scaleY);
    ctx.lineTo(599 * scaleX, 195 * scaleY);
    ctx.lineTo(598 * scaleX, 184 * scaleY);
    ctx.lineTo(596 * scaleX, 184 * scaleY);
    ctx.lineTo(595 * scaleX, 181 * scaleY);
    ctx.lineTo(591 * scaleX, 180 * scaleY);
    ctx.lineTo(591 * scaleX, 174 * scaleY);
    ctx.lineTo(594 * scaleX, 174 * scaleY);
    ctx.lineTo(595 * scaleX, 171 * scaleY);
    ctx.lineTo(623 * scaleX, 168 * scaleY);
    ctx.lineTo(623 * scaleX, 148 * scaleY);
    ctx.lineTo(611 * scaleX, 148 * scaleY);
    ctx.lineTo(610 * scaleX, 141 * scaleY);
    ctx.lineTo(600 * scaleX, 138 * scaleY);
    ctx.lineTo(596 * scaleX, 58 * scaleY);
    ctx.lineTo(603 * scaleX, 50 * scaleY);
    ctx.lineTo(609 * scaleX, 55 * scaleY);
    ctx.lineTo(614 * scaleX, 79 * scaleY);
    ctx.lineTo(612 * scaleX, 123 * scaleY);
    ctx.lineTo(624 * scaleX, 122 * scaleY);
    ctx.lineTo(622 * scaleX, 97 * scaleY);
    ctx.lineTo(614 * scaleX, 96 * scaleY);
    ctx.lineTo(615 * scaleX, 89 * scaleY);
    ctx.lineTo(624 * scaleX, 77 * scaleY);
    ctx.lineTo(629 * scaleX, 78 * scaleY);
    ctx.lineTo(630 * scaleX, 90 * scaleY);
    ctx.lineTo(638 * scaleX, 90 * scaleY);
    ctx.lineTo(639 * scaleX, 97 * scaleY);
    ctx.lineTo(647 * scaleX, 97 * scaleY);
    ctx.lineTo(647 * scaleX, 104 * scaleY);
    ctx.lineTo(640 * scaleX, 110 * scaleY);
    ctx.lineTo(639 * scaleX, 156 * scaleY);
    ctx.lineTo(645 * scaleX, 157 * scaleY);
    ctx.lineTo(646 * scaleX, 151 * scaleY);
    ctx.lineTo(650 * scaleX, 150 * scaleY);
    ctx.lineTo(650 * scaleX, 169 * scaleY);
    ctx.lineTo(665 * scaleX, 180 * scaleY);
    ctx.lineTo(666 * scaleX, 194 * scaleY);
    ctx.lineTo(662 * scaleX, 194 * scaleY);
    ctx.lineTo(663 * scaleX, 203 * scaleY);
    ctx.lineTo(665 * scaleX, 204 * scaleY);
    ctx.lineTo(655 * scaleX, 216 * scaleY);
    ctx.lineTo(649 * scaleX, 217 * scaleY);
    ctx.lineTo(663 * scaleX, 224 * scaleY);
    ctx.lineTo(663 * scaleX, 232 * scaleY);
    ctx.closePath();
    ctx.fill();
}

function drawConverter(ctx, scaleX, scaleY) {
    ctx.fillStyle = 'rgba(165, 4, 123, 0.5)';
    ctx.beginPath();
    ctx.moveTo(316 * scaleX, 554 * scaleY);
    ctx.lineTo(328 * scaleX, 483 * scaleY);
    ctx.lineTo(331 * scaleX, 431 * scaleY);
    ctx.lineTo(340 * scaleX, 430 * scaleY);
    ctx.lineTo(339 * scaleX, 437 * scaleY);
    ctx.lineTo(371 * scaleX, 436 * scaleY);
    ctx.lineTo(369 * scaleX, 419 * scaleY);
    ctx.lineTo(407 * scaleX, 417 * scaleY);
    ctx.lineTo(408 * scaleX, 436 * scaleY);
    ctx.lineTo(427 * scaleX, 432 * scaleY);
    ctx.lineTo(426 * scaleX, 484 * scaleY);
    ctx.lineTo(445 * scaleX, 483 * scaleY);
    ctx.lineTo(442 * scaleX, 553 * scaleY);
    ctx.closePath();
    ctx.fill();
}

function drawShapes() {
    const canvas = document.getElementById('canvas-overlay');
    const ctx = canvas.getContext('2d');

    const scaleX = canvas.width / 1600;
    const scaleY = canvas.height / 800;

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous drawings

    drawGenerator(ctx, scaleX, scaleY);
    drawWindSensors(ctx, scaleX, scaleY);
    drawConverter(ctx, scaleX, scaleY);
}

// Debounced resize event to avoid excessive calls
function debounce(func, wait) {
    let timeout;
    return function () {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, arguments), wait);
    };
}

// To ensure the image is fully loaded before attaching the event listener
document.addEventListener('DOMContentLoaded', function () {
    const turbineImage = document.getElementById('turbine-image');

    turbineImage.addEventListener('load', function () {
        try {
            adjustCanvasSize(); // Initial adjustment when image is loaded
            turbineImage.addEventListener('click', showAllBoxes); // Show all boxes on image click
        } catch (error) {
            console.error("An error occurred while initializing the image:", error);
        }
    });

    // Adjust canvas size on window resize with debounce
    window.addEventListener('resize', debounce(adjustCanvasSize, 250));

    // Trigger the load event if the image is already loaded
    if (turbineImage.complete) {
        turbineImage.dispatchEvent(new Event('load'));
    }
});
