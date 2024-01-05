'use client';

import { getAllEvents, getFilteredEvents } from '@/data';
import { EventItem } from '../components/event-item';

export default function AllEvents({
  searchParams,
}: {
  searchParams: { year: string; month: string };
}) {
  const events =
    searchParams.month && searchParams.year
      ? getFilteredEvents(
          parseInt(searchParams.year),
          parseInt(searchParams.month),
        )
      : getAllEvents();

  return (
    <main className='flex min-h-screen flex-col items-center px-4 lg:px-24'>
      <ul className='flex w-full flex-col gap-8'>
        {events.map((value, index) => (
          <EventItem event={value} key={`${value.title}-${Math.random()}`} />
        ))}
      </ul>
    </main>
  );
}
