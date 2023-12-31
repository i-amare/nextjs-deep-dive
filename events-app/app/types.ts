import { StaticImageData } from "next/image";

export type EventItem = {
	id: string;
	title: String;
	description: string;
	location: string;
	date: string;
	image: StaticImageData;
	isFeatured: boolean;
};
