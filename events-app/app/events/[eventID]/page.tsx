import { getEventById } from '@/data';
import Image from 'next/image';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

export default function Event({ params }: { params: { eventID: string } }) {
  const event = getEventById(params.eventID);

  return (
    <main className='flex min-h-screen flex-col items-center px-4 xl:px-24'>
      {event ? (
        <>
          <div className='flex h-[125px] w-full items-center justify-center rounded-lg bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-green-300 via-blue-500 to-purple-600 xl:w-2/3'>
            <h1 className='text-center text-3xl font-bold xl:text-5xl'>
              {event.title}
            </h1>
          </div>
          <div className='relative aspect-[3/2] w-4/5 -translate-y-[25px] overflow-hidden rounded-md xl:w-1/2'>
            <Image src={event.image} fill objectFit='cover' alt={event.title} />
          </div>
          <div className='mb-6 w-4/5 text-sm font-semibold text-emerald-200 xl:w-3/5'>
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
          <p className='w-4/5 text-center font-semibold xl:w-2/3'>
            {event.description}
          </p>
        </>
      ) : (
        <h1 className='text-6xl font-bold'>Event not found</h1>
      )}
    </main>
  );
}
