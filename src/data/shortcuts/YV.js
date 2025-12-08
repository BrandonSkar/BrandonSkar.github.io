// TODO: YV 01 tutorial

export const YV_shortcuts = {
	na: [
		{
			id: "3lap-fence-jump",
			title: "3lap Fence Jump",
			description: "Jump over the fence and hit the wall to trigger the lap",
			steps: [
				{
					title: "Do a boost start with AB and hold left just enough to get the right angle, shroom soon after starting"
				},
				{
					title: "When you reach the down hill press R and tap Left\n" +
					"You're aiming for the black area on the wall in the image\n" +
					"Your kart should shoot left after you hit the wall if you hit the right area",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/YV/3lap-fence-jump.png`,
					],
				},
				{
					title: "After Lakitu puts you down AB spin and shroom holding left, get the right angle and tap left and R again" +
					"NOTE: If it seems like you hit the wall in the right place but the lap didn't trigger\n" +
					"It's because you jumped too far away from the finish line, you should be left of this post when you cross the fence",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/YV/fence-post.png`,
					]
				}
			]
		},
		{
			id: "flap-fence-jump",
			title: "flap Fence Jump",
			description: "Jump over the fence at the end of the lap and hit the wall to trigger the lap",
			steps: [
				{
					title: "Go around the track but don't cross the finish line"
				},
				{
					title: "Follow the video to find the area you need to be",
					snipClips: [
						`${process.env.PUBLIC_URL}/assets/videos/YV/flap-position.mp4`,
					],
				},
				{
					title: "Align yourself with the image, it doesn't have to be perfect for it to work",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/YV/flap-alignment.png`,
					],
				},
				{
					title: "Drive with triple tap A and jump right when you hit the fence"
				}
			]
		},
	],
};
