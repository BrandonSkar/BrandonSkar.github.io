// TODO: Add flap tutorial

export const RRd_shortcuts = {
	na: [
		{
			id: "RRd-long-jump",
			title: "Long Jump",
			description: "Long Jump",
			steps: [
				{
					title: "Just before going down the big hill at the beginning turn left and jump over the wall"
				}
			]
		},
		{
			id: "quick-3lap",
			title: "Quick 3lap",
			description: "Quick 3lap",
			steps: [
				{
					title: "At the beginning, back up against the right wall"
				},
				{
					title: "Line up on the star just behind the finish line like in the image",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/RRd/flap-first-alignment.png`,
					],
				},
				{
					title: "Face between the 4th and 5th star past the finish line",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/RRd/flap-second-alignment.png`,
					],
				},
				{
					title: "Hold left and shroom at the same time and jump over the wall",
				},
			]
		},
	],
};
