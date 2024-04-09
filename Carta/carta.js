const zoomableImage = document.getElementById('zoomable-image');

zoomableImage.addEventListener('mousemove', (event) => {
    const { offsetX, offsetY } = event;
    const { offsetWidth, offsetHeight } = zoomableImage;

    const xPercentage = (offsetX / offsetWidth) * 100;
    const yPercentage = (offsetY / offsetHeight) * 100;

    zoomableImage.style.transformOrigin = `${xPercentage}% ${yPercentage}%`;
});
