import Image from "next/image";
import { Linkedin, Twitter, Mail } from "lucide-react";

export interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
    socials?: {
        linkedin?: string;
        twitter?: string;
        email?: string;
    };
}

interface TeamSectionProps {
    title?: string;
    heading?: string;
    description?: string;
    members: TeamMember[];
    background?: 'white' | 'slate';
}

export default function TeamSection({
    title = "Leadership",
    heading = "Meet Our Experts",
    description,
    members,
    background = 'white'
}: TeamSectionProps) {
    const bgClass = background === 'white'
        ? "bg-white dark:bg-slate-950"
        : "bg-slate-100 dark:bg-slate-900";

    return (
        <section className={`py-24 border-b border-gray-100 dark:border-white/5 ${bgClass}`}>
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">

                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <h2 className="text-sm font-bold uppercase tracking-[0.25em] text-primary dark:text-slate-400 mb-3 font-display">
                        {title}
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-normal text-slate-900 dark:text-white tracking-wide font-display mb-6">
                        {heading}
                    </h3>
                    {description && (
                        <p className="text-lg text-slate-500 dark:text-slate-400 font-light leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
                    {members.map((member, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center group">
                            <div className="relative w-48 h-48 md:w-56 md:h-56 mb-8 rounded-full overflow-hidden shadow-xl border-4 border-white dark:border-slate-800 transition-transform duration-500 group-hover:scale-105">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                                {member.name}
                            </h4>
                            <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                                {member.role}
                            </p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 font-light leading-relaxed mb-6">
                                {member.bio}
                            </p>

                            {member.socials && (
                                <div className="flex items-center gap-4 text-slate-400">
                                    {member.socials.linkedin && (
                                        <a href={member.socials.linkedin} className="hover:text-primary transition-colors">
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    )}
                                    {member.socials.twitter && (
                                        <a href={member.socials.twitter} className="hover:text-primary transition-colors">
                                            <Twitter className="w-5 h-5" />
                                        </a>
                                    )}
                                    {member.socials.email && (
                                        <a href={`mailto:${member.socials.email}`} className="hover:text-primary transition-colors">
                                            <Mail className="w-5 h-5" />
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
