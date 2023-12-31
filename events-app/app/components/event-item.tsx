import Image from 'next/image';
import Link from 'next/link';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import { EventItem } from '../types';

interface EventItemProps {
  event: EventItem;
}

export function EventItem({ event }: EventItemProps) {
  return (
    <div className='m-auto flex w-full flex-col overflow-hidden rounded-lg bg-zinc-800 pb-6 md:w-4/5 xl:w-1/2'>
      <div className='relative mb-2 aspect-[3/2] w-full overflow-hidden'>
        <Image src={event.image} objectFit='cover' fill alt='Event Image' />
      </div>
      <div className='px-4'>
        <h1 className='text-2xl font-bold'>{event.title}</h1>
        <div className='mb-2 text-sm font-semibold text-neutral-400'>
          <h2 className='mb-1 flex gap-1'>
            <div className='flex items-center text-lg'>
              <FiCalendar />
            </div>
            {new Date(event.date).toLocaleDateString('en-UK', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })}
            ,
          </h2>
          <h2 className='flex gap-1'>
            <div className='flex items-center text-lg'>
              <FiMapPin />
            </div>
            {event.location}
          </h2>
        </div>
        <p className='mb-3 font-semibold'>{event.description}</p>
        <Link
          role='button'
          href={`events/${event.id}`}
          className='w-fit rounded-md bg-neutral-300 px-4 py-2 text-sm font-semibold text-black active:scale-90'
        >
          View Event
        </Link>
      </div>
    </div>
  );
}
