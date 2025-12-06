export const LR_shortcuts = {
    na: [
        {
            id: "wall-jump",
            title: "Wall Jump Shortcut",
            description: "Jump over the left wall just after the tunnel",
            steps: [
                {
                    title: "Shroom before you get to the wall and jump when you hit the wall",
                    images: [
                        `${process.env.PUBLIC_URL}/assets/images/LR/LR-walljump.png`
                    ],
                    snipClips: [
                        `${process.env.PUBLIC_URL}/assets/videos/LR/LR-walljump.mp4`
                    ],
                    links: [
                        "https://www.youtube.com/watch?v=mJGdfnKtkqs"
                    ],
                }
            ]
        },
        {
            id: "myle-style",
            title: "Myle Style Shortcut",
            description: "Harder than Wall Jump but faster.\nJump over the wall from the sand immediately after the tunnel",
            steps: [
                {
                    title: "Jump right when you hit the sand and then again when you hit the sand a second time",
                    images: [],
                    snipClips: [
                        `${process.env.PUBLIC_URL}/assets/videos/LR/LR-myle-style.mp4`
                    ],
                    links: [
                        "https://youtu.be/q9yVdb9Jl-A?si=rMm99Pbyk6S-j7_k&t=96"
                    ],
                }
            ]
        },
    ],
    jp: [
        {
            id: "wall-bounce",
            title: "3lap and flap Wall Bounce",
            description: "Being at some very precise distances from the wall\nand hitting it just right will allow you to skip the whole track",
            steps: [
                {
                    title: "Line up with tires just behind the road and your right tire around the yellow area of the finish line",
                    images: [
                        `${process.env.PUBLIC_URL}/assets/images/LR/JP-LR-wall-bounce.png`
                    ],
                },
                {
                    title: "Face towards the finish line pole or just to the right of it\nyou'll start getting the feel of it the more you land it",
                    snipClips: [
                        `${process.env.PUBLIC_URL}/assets/videos/LR/JP-LR-wallbounce.mp4`
                    ],
                    links: [
                        "https://clips.twitch.tv/InexpensivePricklyWolverineDxAbomb-YQmVdYgsPvEaZOtt"
                    ]
                }
            ]
        },
        {
            id: "LR01",
            title: "LR 0.1 / 0.2 Shortcut",
            description: "A flap of 0.01 or 0.02 seconds\nThis shortcut requires 'Cruise Control' (CC)\n" +
            "Where you very slightly hold up and left and press L + R + Start to reset the neutral position of the joystick\n" +
            "So that the neutral position is very slightly down and right",
            steps: []
        },
    ],
};
