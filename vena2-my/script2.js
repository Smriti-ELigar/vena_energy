const MAX_WIDTH_1 = 3400;
const MAX_WIDTH_2 = 20;

function updateProgressBar(barId, labelId, width, maxWidth) {
    const progressBar = document.getElementById(barId);
    const progressLabel = document.getElementById(labelId);
    
    const percentage = (width / maxWidth) * 100;
    progressBar.style.width = `${percentage}%`;
    progressBar.setAttribute('aria-valuenow', percentage);
    progressLabel.textContent = width;
}

updateProgressBar('progress-bar-1', 'progress-label-1', 240, MAX_WIDTH_1);
updateProgressBar('progress-bar-2', 'progress-label-2', 4, MAX_WIDTH_2);
updateProgressBar('progress-bar-3', 'progress-label-3', 376, MAX_WIDTH_1);
updateProgressBar('progress-bar-4', 'progress-label-4', 5.7, MAX_WIDTH_2);
updateProgressBar('progress-bar-5', 'progress-label-5', 478, MAX_WIDTH_1);
updateProgressBar('progress-bar-6', 'progress-label-6', 6, MAX_WIDTH_2);
updateProgressBar('progress-bar-2-1', 'progress-label-2-1', 632, MAX_WIDTH_1);
updateProgressBar('progress-bar-2-2', 'progress-label-2-2', 6.7, MAX_WIDTH_2);
updateProgressBar('progress-bar-2-3', 'progress-label-2-3', 761, MAX_WIDTH_1);
updateProgressBar('progress-bar-2-4', 'progress-label-2-4', 7.9, MAX_WIDTH_2);
updateProgressBar('progress-bar-3-1-1', 'progress-label-3-1-1', -22, MAX_WIDTH_1);
updateProgressBar('progress-bar-3-1-2', 'progress-label-3-1-2', 2.2, MAX_WIDTH_2);
updateProgressBar('progress-bar-3-2-1', 'progress-label-3-2-1', -18, MAX_WIDTH_1);
updateProgressBar('progress-bar-3-2-2', 'progress-label-3-2-2', 1.9, MAX_WIDTH_2);
updateProgressBar('progress-bar-3-3-1', 'progress-label-3-3-1', -19, MAX_WIDTH_1);
updateProgressBar('progress-bar-3-3-2', 'progress-label-3-3-2', 1.9, MAX_WIDTH_2);
updateProgressBar('progress-bar-3-4-1', 'progress-label-3-4-1', -21, MAX_WIDTH_1);
updateProgressBar('progress-bar-3-4-2', 'progress-label-3-4-2', 1.6, MAX_WIDTH_2);
updateProgressBar('progress-bar-3-5-1', 'progress-label-3-5-1', -22, MAX_WIDTH_1);
updateProgressBar('progress-bar-3-5-2', 'progress-label-3-5-2', 1.8, MAX_WIDTH_2);
updateProgressBar('progress-bar-3-6-1', 'progress-label-3-6-1', -21, MAX_WIDTH_1);
updateProgressBar('progress-bar-3-6-2', 'progress-label-3-6-2', 2.0, MAX_WIDTH_2);
updateProgressBar('progress-bar-3-7-1', 'progress-label-3-7-1', -18, MAX_WIDTH_1);
updateProgressBar('progress-bar-3-7-2', 'progress-label-3-7-2', 1.6, MAX_WIDTH_2);
updateProgressBar('progress-bar-3-8-1', 'progress-label-3-8-1', -22, MAX_WIDTH_1);
updateProgressBar('progress-bar-3-8-2', 'progress-label-3-8-2', 2.1, MAX_WIDTH_2);
updateProgressBar('progress-bar-3-9-1', 'progress-label-3-9-1', -20, MAX_WIDTH_1);
updateProgressBar('progress-bar-3-9-2', 'progress-label-3-9-2', 2.4, MAX_WIDTH_2);
updateProgressBar('progress-bar-3-10-1', 'progress-label-3-10-1',-17, MAX_WIDTH_1);
updateProgressBar('progress-bar-3-10-2', 'progress-label-3-10-2', 1.7, MAX_WIDTH_2);
updateProgressBar('progress-bar-3-11-1', 'progress-label-3-11-1', -22, MAX_WIDTH_1);
updateProgressBar('progress-bar-3-11-2', 'progress-label-3-11-2', 2.2, MAX_WIDTH_2);
updateProgressBar('progress-bar-3-12-1', 'progress-label-3-12-1', -22, MAX_WIDTH_1);
updateProgressBar('progress-bar-3-12-2', 'progress-label-3-12-2',1.9, MAX_WIDTH_2);
updateProgressBar('progress-bar-3-13-1', 'progress-label-3-13-1', -23, MAX_WIDTH_1);
updateProgressBar('progress-bar-3-13-2', 'progress-label-3-13-2',2.6, MAX_WIDTH_2);


//plf = [SUM of all trubine Generation of active power]/([Turbine Count]*3400)
const rei3400 = [240, 376, 478];
const amk3400 = [632, 761];
const wtg3400 = [-22, -18, -19, -21, -22, -21, -18, -22, -20, -17, -22, -22, -23];

function calculatePLF(generationArray, turbineCount) {
    const sumGeneration = generationArray.reduce((acc, val) => acc + val, 0);
    const plf = (sumGeneration / (turbineCount * 3400)) * 100;
    return plf.toFixed(2); // Return PLF as a percentage with 2 decimal places
}

// Calculate PLF for each location
const plfChitradurga = calculatePLF(rei3400, 3);
const plfHyderabad = calculatePLF(amk3400, 2);
const plfNewDelhi = calculatePLF(wtg3400, 13);

// Display PLF in HTML
document.getElementById("plf-chitradurga-value").innerHTML = `PLF=${plfChitradurga}%`;

document.getElementById("plf-hyderabad-value").innerHTML = `PLF=${plfHyderabad}%`;

document.getElementById("plf-newdelhi-value").innerHTML = `PLF=${plfNewDelhi}%`;
