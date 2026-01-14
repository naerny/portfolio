import Image from "next/image";

// Helper function to normalize tech names to match SVG filenames
function normalizeTechName(name: string): string {
    return name
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace(/\.js/g, 'js')
        .replace(/[^a-z0-9]/g, '');
}

export default function TechStack({ technologies, skills }: { technologies: string[]; skills?: string[] }) {
    const sortedTechnologies = [...technologies].sort((a, b) => a.localeCompare(b));
    const sortedSkills = [...(skills || [])].sort((a, b) => a.localeCompare(b));

    return (
        <div className="w-full max-w-4xl flex flex-col gap-4">
            <h2 className="h2 reveal-left">Stack du projet et compétences</h2>
            <div>
                {sortedSkills.length > 0 && (
                    <>
                        <h3 className="h4 reveal-left">Compétences</h3>
                        <div className="flex flex-wrap gap-4 py-2 md:py-0">
                            {sortedSkills.map((skill) => {
                                const iconName = normalizeTechName(skill);

                                return (
                                    <div key={`skill-${skill}`} className="reveal-left-delay flex items-center gap-2 border border-dashed border-(--lightgray) bg-amber-500/10 py-2 px-4 rounded-3xl inset-shadow-sm inset-(--gray)">
                                        <div className="bg-(--gray) w-2 h-2 rounded-lg"></div>
                                        <span className="">{skill}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </>
                )}
            </div>
            <div>
                <h3 className="h4 reveal-left">Technologies</h3>
                <div className="flex flex-wrap gap-4 py-2 md:py-0">
                    {sortedTechnologies.map((tech) => {
                        const iconName = normalizeTechName(tech);

                        return (
                            <div key={tech} className="reveal-left-delay flex items-center gap-2 border border-dashed border-(--lightgray) bg-(--lightgray)/20 py-2 px-4 rounded-3xl inset-shadow-sm inset-(--gray)">
                                {/* <Image
                                aria-hidden
                                src={`/tech/nextjs.svg`}
                                alt={`${tech} icon`}
                                width={32}
                                height={32}
                            /> */}
                                <div className="bg-(--gray) w-2 h-2 rounded-lg"></div>
                                <span className="">
                                    {tech}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}