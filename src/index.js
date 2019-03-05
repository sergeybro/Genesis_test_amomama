import "./scss/styles.scss";
import Glide from '@glidejs/glide';


const glideTop = new Glide('#top-slider', {
    gap: 20
});

const glideBottom = new Glide('#bottom-slider', {
    gap: 20
});

glideTop.mount();
glideBottom.mount();