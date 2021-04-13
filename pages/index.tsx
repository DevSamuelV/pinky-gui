import { Button } from "../ui/Button";

export default function Home() {
	return (
		<div className="flex flex-row justify-center">
			<h2 className="flex text-4xl font-black">
				Nextjs Typescript Boilerplate
			</h2>

			<Button text="hello" />
		</div>
	);
}
