export const KD_shortcuts = {
	na: [
		{
			id: "desert-tenko",
			title: "Desert Tenko",
			description: "Jump through the wall at the beginning of the track",
			steps: [
				{
					title: "Align yourself with the image. Look for the sand pattern highlighted\n" +
					"Tip: From the beginning back up 2.1 seconds, do 3 fully charged left hops and reverse and you should end up next to the pattern",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/KD/KD-pattern.png`,
						`${process.env.PUBLIC_URL}/assets/images/KD/KD-pattern-mark.png`
					]
				},
				{
					title: "Place your left tire on the right sand patch of the pattern",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/KD/KD-pattern-tire-mark.png`,
						`${process.env.PUBLIC_URL}/assets/images/KD/KD-final-setup.png`,
					]
				},
				{
					title: "hold A + B and shroom. When you reach the top of the hill hold Left and press R",
					snipClips: [
                        `${process.env.PUBLIC_URL}/assets/videos/KD/KD-jump.mp4`
                    ],
				}
			]
		},
	],
};
