import Image from "next/image";

export default function IndexPage() {
	return (
		<main className="h-screen flex flex-col items-center justify-center bg-slate-50 font-serif">
			<section className="m-4 space-y-4 max-w-xl">
				<div className="flex flex-row space-x-4 items-center text-slate-800">
					<Image
						src="/profile.png"
						width="100"
						height="100"
						className="rounded-xl"
						alt="Christopher Nethercott profile picture"
					/>
					<div className="w-full">
						<h1 className="text-2xl font-medium">Christopher Nethercott</h1>
						<p>Infrastructure stuff at a University</p>
						<p>
							<b>Education: </b> Univeristy of York Mathematics
						</p>
					</div>
				</div>
				<div className="flex flex-col sm:flex-row justify-between">
					<div className="w-full">
						<h1 className="text-xl">contact me:</h1>
						<p>email</p>
						<p>mastodon</p>
						<p>linkedin</p>
						<p>github</p>
					</div>
					<div className="w-full">
						<h1 className="text-xl">projects:</h1>
						<p>Univeristy of York's Week Numbers</p>
						<p>mastodon</p>
						<p>linkedin</p>
						<p>github</p>
					</div>
				</div>
			</section>
		</main>
	);
}
