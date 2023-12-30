export default function ProjectDetails({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { id: number };
}) {
	return (
		<div>
			<h1 className='text-4xl font-bold'>Project {searchParams.id} Details</h1>
			<h2>Path: {params.slug}</h2>
			<h2>ID: {searchParams.id}</h2>
		</div>
	);
}
