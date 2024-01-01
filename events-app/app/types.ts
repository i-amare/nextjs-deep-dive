import { StaticImageData } from "next/image";

export type EventItem = {
	id: string;
	title: string;
	description: string;
	location: string;
	date: string;
	image: StaticImageData;
	isFeatured: boolean;
};
