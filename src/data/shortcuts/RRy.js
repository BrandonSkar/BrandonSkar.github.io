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
					title: "At the end of the big ramp slide off the ramp to the left at the correct angle as close to the railing as possible",
					snipClips: [
						`${process.env.PUBLIC_URL}/assets/videos/RRy/ramp-jump.mp4`,
					]
				}
			],
		},
		{
			id: "flw-ramp-jump",
			title: "Finish Line Warp (FLW)",
			description: "Doing the Ramp Jump just a certain way will trick Lakitu into putting you down on the finish line and immediately trigger the lap\n" +
			"NOTE: This really only saves time on the last lap since Lakitu puts you down facing backwards and you'll have to spend time turning around to get going again",
			steps: [
				{
					title: "At the end of the big ramp slide off the ramp to the left at the correct angle a little bit away from the railing\n" +
					"You want to be as far away from the road as possible when you land but still trigger the warp from the Ramp Jump shortcut",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/RRy/flw-ramp-jump.png`,
					],
				}
			],
		},
		{
			id: "wall-jump",
			title: "Wall Jump",
			description: "Just after the first turn you can jump on to of the red/white wall and have Lakitu put you down on the big ramp\n" +
			"NOTE: YOU HAVE TO DO River Jump for it to work but doing the Ramp Jump/FLW shortcut breaks this shortcut",
			steps: [
				{
					title: "Do the River Jump to get the shortcut to start working",
				},
				{
					title: "After the finish line at the first turn don't go into the grass too early, wait until you are at the bridge shadow at least",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/RRy/bridge-shadow.png`,
					],
				},
				{
					title: "Go a little bit past the first turn and turn right, align yourself with the image\n" +
					"TIP: If you're using the ghost, It's hard to see but you should see a line going up and right, you want to hit near the left part of the line\n" +
					"Look for a small amount of the white square to the right of the item box\n" +
					"Many alignments work, it doesn't have to be perfect",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/RRy/wall-jump-alignment.png`,
						`${process.env.PUBLIC_URL}/assets/images/RRy/wall-jump-alignment-markings.png`,
					],
				},
				{
					title: "Shroom and press R about half way across the road, you want to land in the grass just past the road",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/RRy/wall-jump-landing.png`,
					],
				},
				{
					title: "When you land it should bounce you back up in the air. Then right as you're landing again Press R\n" +
					"NOTE: You only need to press R once on the road and again when you're about to hit the wall\n" +
					"But it's ok to just spam R as well",
					snipClips: [
						`${process.env.PUBLIC_URL}/assets/videos/RRy/wall-jump.mp4`,
					]
				}
			],
			resources: [
				{
					label: "Wall Jump Setup Ghost",
					link: "https://discord.com/channels/692171166034427916/1117106342784671784/1270116173610225695"
				},
				{
					label: "Converter for EverDrive / DexDrive",
					link: "https://beckabney.com/mk64/mempak.php"
				}
			]
		},
	],
};
