import Link from "next/link";

export default function Portfolio() {
	const projects = [
		{
			projectName: "test1",
			projectID: 1,
		},
		{
			projectName: "test2",
			projectID: 2,
		},
		{
			projectName: "test3",
			projectID: 3,
		},
	];

	return (
		<div>
			<h1 className='text-4xl font-bold'>Portfolio</h1>
			<div role='list' className='flex flex-col'>
				{projects.map(
					({
						projectName,
						projectID,
					}: {
						projectName: string;
						projectID: number;
					}) => (
						<Link href={`portfolio/${projectName}?id=${projectID}`}>
							{projectName}
						</Link>
					)
				)}
			</div>
		</div>
	);
}
