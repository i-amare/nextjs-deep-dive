export default function BlogPosts({ params }: { params: any }) {
	return (
		<div>
			<h1 className='font-2xl font-bold'>Catch All Test</h1>
			<div className='flex gap-4'>
				<p>Slugs: </p>
				{params.slug.map((s: string) => (
					<p key={`${s}-${Math.random()}`}>{s}</p>
				))}
			</div>
		</div>
	);
}
