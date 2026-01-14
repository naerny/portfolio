import WordSlider from "./WordSlider";

export default function Hero() {
    return (
        <section className="md:max-w-[75%] lg:max-w-[50%] self-start">
            <h1 className="h1 reveal">
               Bonjour,<br></br> Je m'appelle Nicolas Aerny et je suis Ingénieur des médias.
            </h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 reveal-delay">
               <span>Avec un attrait particulier pour</span>
                <WordSlider />
            </div>
        </section>
    );
}