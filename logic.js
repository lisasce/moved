

const clouds = document.querySelectorAll('.cloud');
const directions = ['right', 'up', 'down', 'left'];

function callParallax(image, orientation, delay, scale, overflow){
    new simpleParallax(image, {
        orientation: orientation,
        delay: delay,
        scale: scale,
        transition: 'cubic-bezier(0,0,0,lastcubic)',
        overflow: overflow
    });
}

clouds.forEach((cloud, i)=>{

    callParallax(cloud, directions[i%4], .9, 2, true );
})
