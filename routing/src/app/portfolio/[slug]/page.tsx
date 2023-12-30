// "use client";

// import { useRouter, useSearchParams } from "next/navigation";

export default function Project({
	params,
	searchParams,
}: {
	params: { slug: string };
	searchParams: { id: number };
}) {
	// const router = useRouter();
	// const search = useSearchParams();
	// console.log(router);
	// console.log(search.get("id"));

	return (
		<div>
			<h1 className='text-4xl font-bold'>Project</h1>
			<h2>Path: {params.slug}</h2>
			<h2>ID: {searchParams.id}</h2>
		</div>
	);
}
