import '../styles/home.css'

export { home };

const home = () => {
    const bodyDiv = document.createElement("div");
    bodyDiv.id="header";
    bodyDiv.innerHTML=`
    <section class="slider-block wp-block  slider-style-full-height slider-align-default">
    <div class="slider-block-swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <span>
                   <video class="slider-block__video" src="https://gmlzjxsypdgmyloaxoze.supabase.co/storage/v1/object/public/video/Yu-Gi-Oh!%20Card%20Game%2025th%20Anniversary%20-%20The%20Celebrations%20Begin!.mp4?t=2023-10-23T21%3A30%3A47.066Z" autoplay  muted loop playsinline></video>
                </span>
            </div>
        </div>
    </div>
    </section>
    <section class="title-block wp-block">
      <div class="title-block__content">
        <div class="mx-auto max-w-4xl">
          <h1 class="title-block__heading"> ¡Bienvenidos, Duelistas! </h1>
          <p class="title-block__description"> ¡Es Hora del Duelo! </p>
        </div>
      </div>
    </section>
    <div>
      <a href="#/interfaz" class="botonPlay">BATTLE YU GI OH!!!!!!!!!!</a>
    </div>
    




`;
    return bodyDiv;
}
