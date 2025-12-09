import Image from "next/image"
import { div } from "three/tsl"

export default function Other() {
    return (
        <section className="flex flex-col gap-4 max-w-4xl">
            <h2 className="h2">D'autres projets sur lesquels j'ai travaillé</h2>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="rounded-2xl overflow-auto  flex-1">
                    <Image
                        className="md:object-cover w-full h-full aspect-square object-top"
                        src={'/img/others/ophtalmique_small.jpg'}
                        alt={''}
                        quality={100}
                        width={100}
                        height={100}
                        sizes="(max-width: 768px) 100vw, 1200px"
                        loading="lazy"
                    />
                </div>
                <div className="rounded-2xl overflow-auto flex-1">
                    <Image
                        className="md:object-cover w-full h-full aspect-square object-top"
                        src={'/img/others/slitscan.gif'}
                        alt={''}
                        quality={100}
                        width={100}
                        height={100}
                        sizes="(max-width: 768px) 100vw, 1200px"
                        loading="lazy"
                    />
                </div>

            </div>
            <div className="flex gap-4">
                <div className="rounded-2xl overflow-auto aspect-square flex-1 max-h-94">
                    <Image
                        className="md:object-cover w-full h-full"
                        src={'/img/others/transition-comp.gif'}
                        alt={''}
                        quality={100}
                        width={100}
                        height={100}
                        sizes="(max-width: 768px) 100vw, 1200px"
                        loading="lazy"
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="rounded-2xl overflow-auto aspect-square flex-1">
                    <Image
                        className="md:object-cover w-full h-full aspect-square object-top"
                        src={'/img/others/vr-comp.gif'}
                        alt={''}
                        quality={100}
                        width={100}
                        height={100}
                        sizes="(max-width: 768px) 100vw, 1200px"
                        loading="lazy"
                    />
                </div>
                <div className="rounded-2xl overflow-auto aspect-square flex-1">
                    <Image
                        className="md:object-cover w-full h-full aspect-square object-top object-top"
                        src={'/img/others/tournoi_small.jpg'}
                        alt={''}
                        quality={100}
                        width={100}
                        height={100}
                        sizes="(max-width: 768px) 100vw, 1200px"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    )
}