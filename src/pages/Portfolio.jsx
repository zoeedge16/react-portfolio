export default function Portfolio() {
    return (
        // change the items in here!
        <section class="border">
            <h2 id="work">Work</h2>
            <div class="work-items">
                {/* fix the src here */}
                <a href="https://zoeedge16.github.io/weather-webpage/" class="work-item featured">
                    <figcaption class="caption">Weather Webpage</figcaption>
                    <figure class="photo">
                        <img class="fluid-img" src="" alt="Weaather Webpage" />
                    </figure>
                </a>
                <a href="https://zoeedge16.github.io/password-generator/" class="work-item">
                        <figcaption class="caption">Password Generator</figcaption>
                        <figure class="photo">
                            <img class="fluid-img" src="" alt="Password Generator" />
                        </figure>    
                </a>
                <a href="https://safe-shelf-80683-3dfb2eba4d8a.herokuapp.com/notes" class="work-item">
                        <figcaption class="caption">Note Taker</figcaption>
                        <figure class="photo">
                            <img class="fluid-img" src="" alt="Note Taker" />
                        </figure>
                </a>
                <a href="https://frozen-tor-00446-d883d20dd32e.herokuapp.com/" class="work-item">
                    <figcaption class="caption">Granular Garden</figcaption>
                    <figure class="photo">
                        <img class="fluid-img" src="" alt="Granular Garden" />
                    </figure>
            </a>
            </div>
        </section>
    )
};