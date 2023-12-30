"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

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

	const router = useRouter();
	console.log(router);

	function loadProject(id: number) {
		const project = projects.find(
			({ projectName, projectID }) => projectID === id
		);

		if (project)
			router.push(`portfolio/${project.projectName}?id=${project.projectID}`);
	}

	return (
		<div>
			<h1 className='text-4xl font-bold'>Portfolio</h1>
			<div role='list' className='flex gap-2 flex-col'>
				{projects.map(
					({
						projectName,
						projectID,
					}: {
						projectName: string;
						projectID: number;
					}) => (
						<div
							key={`${projectID}-${projectName}`}
							className='flex flex-col text-center'
						>
							<Link href={`portfolio/${projectName}?id=${projectID}`}>
								{projectName}
							</Link>
							<button
								onClick={() => loadProject(projectID)}
								className='px-2 py-1 rounded-sm bg-slate-400 text-black font-semibold'
							>
								Load Project
							</button>
						</div>
					)
				)}
			</div>
		</div>
	);
}
