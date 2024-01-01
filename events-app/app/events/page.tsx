import { getAllEvents } from '@/data';
import { EventItem } from '../components/event-item';

export default function AllEvents() {
  const allEvents = getAllEvents();

  return (
    <main className='flex min-h-screen flex-col items-center px-4 lg:px-24'>
      <ul className='flex w-full flex-col gap-8'>
        {allEvents.map((value, index) => (
          <EventItem event={value} key={`${value.title}-${Math.random()}`} />
        ))}
      </ul>
    </main>
  );
}
