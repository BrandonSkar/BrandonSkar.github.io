// TODO: Make tutorial on the quick flap

export const CM_shortcuts = {
	na: [
		{
			id: "hill-climb",
			title: "Hill Climb",
			description: "Spam R up a hill and tumble to the other side of the track",
			steps: [
				{
					title: "A bit after the tunnel near the end of the straight road drive up the hill and spam R",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/CM/cm-map.png`,
						`${process.env.PUBLIC_URL}/assets/images/CM/hill-climb-markings.png`,
					],
					snipClips: [
						`${process.env.PUBLIC_URL}/assets/videos/CM/hill-climb.mp4`
					]
				}
			]
		},
		{
			id: "hill-jump",
			title: "Hill Jump",
			description: "Jump over a big hill to cut out a good portion of the track",
			steps: [
				{
					title: "On the hill just after the straight road, run into the wall just as you are beginning to go up the hill and press R when you hit the wall\n" +
					"TIP: Going neutral on the joystick and pressing R + left at the same time makes the jump easier to land",
					snipClips: [
						`${process.env.PUBLIC_URL}/assets/videos/CM/hill-jump.mp4`
					]
				}
			]
		},
		{
			id: "upper-path-jump",
			title: "Upper Path Jump",
			description: "When you reach the stone wall on the road just before the boulders you can jump up the hill to the upper road",
			steps: []
		},
		{
			id: "weathertenko",
			title: "Weathertenko",
			description: "Weathertenko, at the beginning of the track you can trick the game to thinking you did a full lap\n" +
			"by doing a precise jump up the wall\n" +
			"There's a lot of ways to do the trick but still really hard to land. It takes a lot of time, practice and tumbles\n" +
			"I'll describe my way of doing it which is slower but easier in my opinion",
			steps: [
				{
					title: "From the beginning turn left so you're facing a little left of the finish line"
				},
				{
					title: "Reverse slowly down the wall until your right tire is on the right side of the finish line or the angle in the image",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/CM/tire-angle.png`
					]
				},
				{
					title: "While still reversing, hold down-left for a short time to aim right a little bit more and angle yourself to be\n" +
					"almost parallel or facing just to the right of the finish line",
					snipClips: [
						`${process.env.PUBLIC_URL}/assets/videos/CM/slight-right-wt.mp4`
					]
				},
				{
					title: "You want to aim to shroom somewhere around the red line in the image\n" +
					"I go farther down the hill than most other videos (which is why it's a bit slower) but try other strategies and find what works best for you",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/CM/wt-shroom-spot.png`
					]
				},
				{
					title: "Still reversing (holding down + B), do an AB spin for about 0.1 - 0.2 seconds (holding down and both A + B), release the joystick and B at the same time\n" +
					"And finally hold left for a very short amount of time and shroom and release left\n" +
					"On the frame when you hit the wall you want to hold left and press R at the same time",
				}
			],
			resources: [
				{
					label: "Brandon Skar WT YouTube",
					link: "https://www.youtube.com/watch?v=RpfS20eAVP8"
				},
				{
					label: "Brandon Skar WT Inputs",
					link: "https://www.youtube.com/watch?v=sCYuQUK-aKg"
				}
			]
		},
	],
};
