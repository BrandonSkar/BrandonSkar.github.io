export const TT_shortcuts = {
    na: [
        {
            id: "overpass-sc",
            title: "Overpass Jump",
            description: "Jump from the overpass down to the streen below to cut half the track\n" +
            "NOTE: Lakitu Effect - After Lakitu puts you down he will not pick you up again for about 1.6 seconds so you're able to drive out of bounds freely in that time",
            steps: [
                {
                    title: "Jump out of bounds a bit before you pass over the road below you",
                    images: [
                        `${process.env.PUBLIC_URL}/assets/images/TT/overpass-oob.png`
                    ]
                },
                {
                    title: "After Lakitu puts you down (Lakitu Effect) go right and jump out of bounds again down to the street below",
                    snipClips: [
                        `${process.env.PUBLIC_URL}/assets/videos/TT/overpass-jump.mp4`
                    ],
                },
                {
                    title: "Once you've done it once you can just jump out of bounds immediately after crossing the finish line\n" +
                    "and Lakitu will put you down in the street below you again",
                    snipClips: [
                        `${process.env.PUBLIC_URL}/assets/videos/TT/overpass-skip.mp4`
                    ],
                }
            ],
            resources: [
                {
                    label: "Lakitu Effect",
                    link: "https://discord.com/channels/692171166034427916/708732691020775424/775216219263467531"
                }
            ]
        },
        {
            id: "na-fence-clip",
            title: "NA / PAL Fence Clip",
            description: "Pick Bowser and do some precise driving and jumping to get a fast 3lap and flap",
            steps: [
                {
                    title: "Pick Bowser",
                },
                {
                    title: "Turn around at the beginning until you reach the first pull off section",
                },
                {
                    title: "Drive into the wall in the image",
                    images: [
                        `${process.env.PUBLIC_URL}/assets/images/TT/pull-off-position.png`
                    ]
                },
                {
                    title: "Do a very precise jump into the wall so that Bowser clips out of the wall back onto the road",
                    snipClips: [
                        `${process.env.PUBLIC_URL}/assets/videos/TT/na-wall-clip.mp4`
                    ],
                },
                {
                    title: "After that you can just jump out of bounds after you cross the finish line and repeat that for all the 3 laps",
                    links: [
                        {
                            label: "Travis Diwell YouTube",
                            link: "https://www.youtube.com/watch?v=PIs_00iXb7k",
                        }
                    ]
                }
            ]
        },
    ],
    jp: [
        {
            id: "fence-clip",
            title: "JP Fence Clip",
            description: "Jumping out of bounds and using Lakitu Effect to get 3lap and flap\n" +
            "There are many ways to do this trick so I'll explain my 3lap that I think is the easiest to do (Check Resources for Full Video)\n" +
            "NOTE: Lakitu Effect - After Lakitu puts you down he will not pick you up again for about 1.6 seconds so you're able to drive out of bounds freely in that time",
            steps: [
                {
                    title: "Turn around at the beginning to about the 5th white line behind the finish line and jump out of bounds"
                },
                {
                    title: "When Lakitu puts you down quickly turn right and shroom and jump over the fence\n" +
                    "The goal here is to jump as far away from the finish line as possible but hit the water just past the finish line"
                },
                {
                    title: "After Lakitu puts you down it should give you credit for all of lap 1 so when you drive forward past the finish line you are now on lap 2",
                    snipClips: [
                        `${process.env.PUBLIC_URL}/assets/videos/TT/lap-trigger.mp4`
                    ],
                },
                {
                    title: "Turn left past the finish line and align yourself from the middle white line to just left of the railing bar on the finish line\n" +
                    "Shroom and jump over the fence",
                    images: [
                        `${process.env.PUBLIC_URL}/assets/images/TT/fence-position.png`
                    ]
                },
                {
                    title: "After lakitu puts you down you should immediately get lap 3, do the same thing as before"
                }
            ],
            resources: [
                {
                    label: "Lakitu Effect",
                    link: "https://discord.com/channels/692171166034427916/708732691020775424/775216219263467531"
                },
                {
                    label: "Brandon Skar 30\"95 TT 3lap",
                    link: "https://www.youtube.com/watch?v=heFWb2fO2lI"
                }
            ]
        },
        {
            id: "tt-01",
            title: "TT 0.1 flap",
            description: "A flap of 0.01 or 0.02 seconds\nThis shortcut requires Luigi",
            steps: [
                {
                    title: "Pick Luigi",
                },
                {
                    title: "Turn around at the beginning until you reach the first pull off section",
                },
                {
                    title: "Drive into the wall in the image",
                    images: [
                        `${process.env.PUBLIC_URL}/assets/images/TT/luigi-pull-off-position.png`
                    ]
                },
                {
                    title: "Start driving forward towards the Toad billboard and jump out of bounds just past the light post near the billboard",
                    images: [
                        `${process.env.PUBLIC_URL}/assets/images/TT/lightpost-oob.png`
                    ]
                },
                {
                    title: "Drive to the finish line and align yourself to the image",
                    images: [
                        `${process.env.PUBLIC_URL}/assets/images/TT/oscilation-setup.png`
                    ]
                },
                {
                    title: "Hold B + A for about 1 second and release B, still holding A and jump out of bounds",
                },
                {
                    title: "After Lakitu puts you down reverse a bit and adjust your kart to the image",
                    images: [
                        `${process.env.PUBLIC_URL}/assets/images/TT/first-reverse-setup.png`
                    ]
                },
                {
                    title: "Fully charge right and do 4 hops"
                },
                {
                    title: "Fully charge right, shroom and jump out of bounds, this should give credit for lap 1",
                    snipClips: [
                        `${process.env.PUBLIC_URL}/assets/videos/TT/lap1-credit.mp4`
                    ],
                },
                {
                    title: "3 single frame backups"
                },
                {
                    title: "Align Luigi's head with the railing.\n" +
                    "Look for the 2 pixels sticking out of the post",
                    images: [
                        `${process.env.PUBLIC_URL}/assets/images/TT/post-alignment.png`
                    ]
                },
                {
                    title: "2 single frame backups"
                },
                {
                    title: "NOTE: Zoom in.\nTurn your kart around and align with the image\n" +
                    "Look for the star pattern at the top and top left of Luigi's hat should be at the end of the middle rail",
                    images: [
                        `${process.env.PUBLIC_URL}/assets/images/TT/final-alignment.png`,
                        `${process.env.PUBLIC_URL}/assets/images/TT/final-alignment-markings.png`
                    ]
                },
                {
                    title: "NOTE: Zoom out\nTest your alignment by doing a fully charged left hop\n" +
                    "Look for the solid white part of the finish line to be just like the one in the image",
                    images: [
                        `${process.env.PUBLIC_URL}/assets/images/TT/final-alignment-test.png`
                    ]
                },
                {
                    title: "Fully charge right and hop back, if it's correct move on to the next step or else slightly hop left and right to look for the star pattern again"
                },
                {
                    title: "A + shroom and turn right on the joystick just before you hit the wall"
                }
            ],
            resources: [
                {
                    label: "Shroom Timings",
                    link: `${process.env.PUBLIC_URL}/assets/images/TT/TT-shroom-timings.png`
                },
                {
                    label: "Organized Inputs",
                    link: `${process.env.PUBLIC_URL}/assets/images/TT/TT-inputs.png`
                }
            ]
        }
    ],
};
