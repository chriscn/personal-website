import Image from "next/image";
import Link from "next/link";

type Project = {
	name: string;
	description: string;
	url: string;
};

const projects: Project[] = [
	{
		name: "University of York's Week Numbers",
		description:
			"iCalendar (RFC 5545) format of the University of York's week numbers; now with semester support!",
		url: "https://github.com/chriscn/uoy-week-calendar",
	},
	{
		name: "Dispixel",
		description:
			"A Discord Hypixel Bot to query a player's statistics using the Hypixel API",
		url: "https://github.com/chriscn/Dispixel",
	},
];

export default function IndexPage() {
	return (
		<main className="h-svh flex flex-col items-center justify-center font-serif dark:bg-slate-800 dark:text-slate-100">
			<div className="space-y-4 max-w-screen-sm w-full p-4">
				<section className="flex flex-row space-x-4 items-center">
					<Image
						src="/profile.png"
						width="100"
						height="100"
						className="rounded-xl"
						alt="Christopher Nethercott profile picture"
					/>
					<div className="text-slate-800 dark:text-slate-50">
						<h1 className="text-2xl font-bold">Christopher Nethercott</h1>
						<p>Infrastructure stuff at a University</p>
					</div>
				</section>
				<section className="flex flex-col sm:flex-row justify-between">
					<div className="w-full">
						<h1 className="text-xl">projects:</h1>
						<ul>
							{projects.map((project) => (
								<li key={project.name}>
									<Link
										href={project.url}
										className="hover:underline text-blue-500"
									>
										{project.name}
									</Link>
									<p className="text-balance">{project.description}</p>
								</li>
							))}
						</ul>
					</div>
				</section>
			</div>
		</main>
	);
}
