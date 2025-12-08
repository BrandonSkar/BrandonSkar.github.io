export const FS_shortcuts = {
	na: [
		{
			id: "bridge-shortcut",
			title: "Bridge Shortcut",
			description: "Simple out of bounds shortcut",
			steps: [
				{
					title: "Turn around and drive to the bridge",
				},
				{
					title: "Jump over the main road at the corner of the bridge into the snow",
					images: [
                        `${process.env.PUBLIC_URL}/assets/images/FS/bridge-cut.png`
                    ]
				},
				{
					title: "Drive just past the tree near the finish line and drive out of bounds"
				},
				{
					title: "You'll be placed on back on the bridge with full lap credit.\n" +
					"Do steps 2 - 4 until the race is finished",
				},
			]
		},
		{
			id: "quick-3lap",
			title: "Quick OOB 3lap",
			description: "There is a very specific location out of bounds that will trigger full lap credit if you jump out of bounds at the right place\n" +
			"NOTE: If you're able to download ghosts download the FS_SC_3Lap_SetupGhost.n64 from resources",
			steps: [
				{
					title: "Do the bridge shortcut like normal",
				},
				{
					title: "After Lakitu puts you down, shroom jump out of bounds to the right in the precise location\n" +
					"NOTE: Either create a ghost yourself by watching another video or download a ghost to help land it",
				},
				{
					title: "Lakitu will put you much closer to the finish line this time. Go right and jump out of bounds again in the same spot",
					links: [
                        {
                            label: "Brandon Skar Twitch",
                            link: "https://www.twitch.tv/videos/2181911293",
                        }
                    ]
				}
			],
			resources: [
				{
					label: "FS 3lap Setup Ghost",
					link: "https://discord.com/channels/692171166034427916/1117106342784671784/1245078618665652305"
				},
				{
					label: "Converter for EverDrive / DexDrive",
					link: "https://beckabney.com/mk64/mempak.php"
				}
			]
		},
		{
			id: "flap-ghost",
			title: "Quick Setup flap",
			description: "NOTE: Download the ghost FS_SC_FLAP_NEW_SETUP_VAJ.n64 from Resources\n" +
			"Or make your own by watching a video",
			steps: [
				{
					title: "Do the bridge shortcut like normal",
				},
				{
					title: "Drive close to out of bounds near the tree by the finish line and align your character with the image or ghost",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/FS/flap-setup.png`
					]
				},
				{
					title: "Fully charge right, hold A + B + Z on the same frame and jump about .1 seconds later just before going out of bounds",
					snipClips: [
                        `${process.env.PUBLIC_URL}/assets/videos/FS/quick-flap.mp4`
                    ],
				},
				{
					title: "When Lakitu puts you down you need to shroom on the frame he puts you down\n" +
					"TIP: Spamming C-Down is easier than spamming Z",
					snipClips: [
                        `${process.env.PUBLIC_URL}/assets/videos/FS/quick-flap.mp4`
                    ],
				},
			],
			resources: [
				{
					label: "FS flap Setup Ghost",
					link: "https://discord.com/channels/692171166034427916/1117106342784671784/1245078618665652305"
				},
				{
					label: "Converter for EverDrive / DexDrive",
					link: "https://beckabney.com/mk64/mempak.php"
				}
			]
		},
		{
			id: "bowser-flap",
			title: "Bowser Setup flap",
			description: "Do a pretty tough setup that will place you in a perfect spot for a pretty easy flap if you get the setup right",
			steps: [
				{
					title: "Pick Bowser"
				},
				{
					title: "Do the bridge shortcut like normal",
				},
				{
					title: "Drive close to the finish line and drive into the snow to the left where the image shows",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/FS/bowser-oob.png`
					]
				},
				{
					title: "Lakitu should drop you in the same spot as the image. If not then go out of bounds again",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/FS/Lakitu-drop.png`
					]
				},
				{
					title: "Do 8 fully charged right hops"
				},
				{
					title: "1 single frame backup"
				},
				{
					title: "14 fully charged right hops"
				},
				{
					title: "3 single frame backups"
				},
				{
					title: "6 fully charged right hops"
				},
				{
					title: "Now the hard part... fully charge right on the joystick\n" +
					"hold A and when you reach the snow bank where the main road meets the snow\," +
					"swap from holding A to holding B on the same frame\n" +
					"TIP: Use 2 hands, your right thumb holds A and then your left thumb holds B so you can let go of A and start holding B on the same frame\n" +
					"Look for the ' in the time to be just right of the finish line like in the image",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/FS/after-ab-swap.png`,
						`${process.env.PUBLIC_URL}/assets/images/FS/after-ab-swap-markings.png`
					],
					snipClips: [
                        `${process.env.PUBLIC_URL}/assets/videos/FS/AB-swap.mp4`
                    ],
				},
				{
					title: "Do 1 fully charged right hop"
				},
				{
					title: "Back up for about 6.5 seconds. This is adjustable so you don't have to back up perfectly\n" +
					"You should align yourself with the image",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/FS/after-backup.png`,
					],
				},
				{
					title: "Do 2 fully charged left hops to test if you're in the correct position\n" +
					"You should see the black dot in the snow",
					images: [
						`${process.env.PUBLIC_URL}/assets/images/FS/backup-test.png`
					]
				},
				{
					title: "Do 1 single frame backup"
				},
				{
					title: "Do 9 fully charged right hops"
				},
				{
					title: "Fully charge right, press Z and jump about .1 seconds later just before going out of bounds\n" +
					"When Lakitu puts you down you need to shroom on the frame he puts you down\n" +
					"TIP: Spamming C-Down is easier than spamming Z",
				},

			],
			resources: [
				{
					label: "FS flap Setup Ghost",
					link: "https://discord.com/channels/692171166034427916/1117106342784671784/1245078618665652305"
				},
				{
					label: "Converter for EverDrive / DexDrive",
					link: "https://beckabney.com/mk64/mempak.php"
				}
			]
		}
	],
};

