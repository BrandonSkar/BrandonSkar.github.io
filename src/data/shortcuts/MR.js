export const MR_shortcuts = {
	na: [
		{
			id: "wall-jump",
			title: "Wall Jump",
			description: "Jump over the brick wall before the mushroom turn",
			steps: [
				{
					title: "Just before the mushroom turn turn right and jump at the edge of the road to jump over the brick wall\n" +
					"TIP: Touching the grass to the left of the road makes the jump easier",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/MR/wall-jump-marking.png`
					],
					snipClips: [
                        `${process.env.PUBLIC_URL}/assets/videos/MR/wall-jump.mp4`
                    ],
				}
			]
		},
		{
			id: "wall-clip",
			title: "Wall Clip",
			description: "Drive into the brick wall in a very specific spot to pass right through it",
			steps: [
				{
					title: "After the 2nd turn drive through the grass towards a specific spot of the brick wall"
				},
				{
					title: "Shroom before you get to the wall and jump right as you run into the wall\n" +
					"If you're lucky you'll go right through the wall",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/MR/wall-clip.png`
					],
					snipClips: [
						`${process.env.PUBLIC_URL}/assets/videos/MR/wall-clip.mp4`
					]
				}
			]
		}
	],
};
