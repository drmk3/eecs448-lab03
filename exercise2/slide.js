var slides = ["https://i.redd.it/sf00nvt1o1y21.jpg",
  "https://i.insider.com/5c76f28a2628984f0f399865?width=1024&format=jpeg",
  "https://wallpaperplay.com/walls/full/b/d/e/250561.jpg",
  "https://www.math.utah.edu/~alfeld/math/mandelbrot/bay.gif",
  "https://miro.medium.com/max/1024/1*MP5Cn-jTviNjZQuF21o_Og.png",
  "https://i.stack.imgur.com/wgm0H.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Power_8_mandelbulb_fractal_overview.jpg/1136px-Power_8_mandelbulb_fractal_overview.jpg"
  ]
function next() {
  let panel = document.getElementById("panel");
  let cind = slides.indexOf(panel.src);
  cind += 1;
  if (cind >= slides.length) {
    cind = 0;
  }
  panel.src = slides[cind];
}

function previous() {
  let panel = document.getElementById("panel");
  let cind = slides.indexOf(panel.src);
  cind -= 1;
  if (cind < 0) {
    cind = slides.length - 1;
  }
  panel.src = slides[cind];
}
