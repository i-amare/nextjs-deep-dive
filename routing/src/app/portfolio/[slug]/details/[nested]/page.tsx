"use client";

export default function NestedRoute({
	params,
	searchParams,
}: {
	params: { slug: string; nested: string };
	searchParams: { id: number };
}) {
	console.log(params);

	return (
		<div>
			<h1 className='text-4xl font-bold'>
				Project {searchParams.id} Nested Details
			</h1>
			<h2>Slug: {params.slug}</h2>
			<h2>Nested: {params.nested}</h2>
			<h2>ID: {searchParams.id}</h2>
		</div>
	);
}
