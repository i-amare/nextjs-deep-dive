import { getFeaturedEvents } from "@/data";
import { EventItem } from "./components/event-item";

export default function Home() {
	const featuredEvents = getFeaturedEvents();

	return (
		<main className='flex min-h-screen flex-col items-center lg:p-24 p-4'>
			<ul className='w-full flex flex-col gap-8'>
				{featuredEvents.map((value, index) => (
					<EventItem event={value} key={`${value.title}-${Math.random()}`} />
				))}
			</ul>
		</main>
	);
}
