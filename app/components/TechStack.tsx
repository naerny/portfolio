import Image from "next/image";

// Helper function to normalize tech names to match SVG filenames
function normalizeTechName(name: string): string {
    return name
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace(/\.js/g, 'js')
        .replace(/[^a-z0-9]/g, '');
}

export default function TechStack({ technologies }: { technologies: string[] }) {
     const sortedTechnologies = [...technologies].sort((a, b) => a.localeCompare(b));

    return (
        <div className="w-full max-w-4xl flex flex-col">
            <h2 className="h2">Stack du projet et compétences</h2>
            <div className="flex flex-wrap gap-4 py-2 md:py-4">
                {sortedTechnologies.map((tech) => {
                    const iconName = normalizeTechName(tech);

                    return (
                        <div key={tech} className="flex items-center gap-2 border border-dashed border-(--gray) p-2 rounded-xl">
                            {/* <Image
                                aria-hidden
                                src={`/tech/nextjs.svg`}
                                alt={`${tech} icon`}
                                width={32}
                                height={32}
                            /> */}
                            <div className="bg-(--gray) w-3 h-3 rounded-lg"></div>
                            <span className="">
                                {tech}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}