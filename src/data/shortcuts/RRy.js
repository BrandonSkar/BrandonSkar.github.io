// TODO: Do wall jump

export const RRy_shortcuts = {
	na: [
		{
			id: "river-jump",
			title: "River Jump",
			description: "Jump over the river and hit a wall in a certain spot to have Lakitu drop you off farther ahead on the track",
			steps: [
				{
					title: "Just after the first hairpin turn jump over the river to the left and hit the wall in a specific spot to skip some of the track\n" +
					"Aim for the green area in the image",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/RRy/river-jump.png`,
						`${process.env.PUBLIC_URL}/assets/images/RRy/river-jump-markings.png`,
					],
					snipClips: [
						`${process.env.PUBLIC_URL}/assets/videos/RRy/river-jump.mp4`,
					]
				}
			],
			resources: [
				{
					label: "More River Jump Info From Abney",
					link: "https://beckabney.com/mk64/rrysc.html"
				}
			]
		},
		{
			id: "ramp-jump",
			title: "Ramp Jump",
			description: "At the end of the big ramp, jump off to the left to skip some of the track",
			steps: [
				{
					title: "At the end of the big ramp slide off the ramp to the left at the right angle as close to the railing as possible",
					snipClips: [
						`${process.env.PUBLIC_URL}/assets/videos/RRy/ramp-jump.mp4`,
					]
				}
			],
		},
	],
};
