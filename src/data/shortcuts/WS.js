// TODO: Make tutorial on the quick flap

export const WS_shortcuts = {
	na: [
		{
			id: "3lap-wall-jump",
			title: "3lap Wall Jump",
			description: "jump over 2 walls to cut out 99% of this big track\n" +
			"TIP: Flicking left and jumping at the same time makes jumping over walls easier but harder to aim",
			steps: [
				{
					title: "At the very beginning at the top of any of the 4 hills drive into the wall and press R"
				},
				{
					title: "Turn around and face the finish line. Line yourself up so that when you jump over the wall you end up on the other side behind the finish line"
				},
				{
					title: "Drive into the wall and Press R"
				}
			]
		},
		{
			id: "flap-wall-jump",
			title: "flap Wall Jump",
			description: "A set up for a quick flap time",
			steps: [
				{
					title: "TIP: Bowser isn't required but makes it much easier"
				},
				{
					title: "Do the 3lap Wall Jump but don't cross the finish line"
				},
				{
					title: "Line up just before the finish line facing the wall\n" +
					"The goal is to cross the finish line as you jump over the wall",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/WS/wall-jump-flap.png`
					],
					snipClips: [
                        `${process.env.PUBLIC_URL}/assets/videos/WS/wall-jump-flap.mp4`
                    ],
				},
				{
					title: "Triple tap B while in the air to stop fast, turn around with AB spin or jumping"
				},
				{
					title: "Shroom into the wall, hit the wall once to get bounced back and then jump when you hit the wall again\n" +
					"TIP: If you try to jump over while your shroom is active you will most likely tumble",
				}
			]
		},
	],
};
