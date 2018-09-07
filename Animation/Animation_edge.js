/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'IMG-20180810-WA0001',
                            type: 'image',
                            rect: ['64px', '0px', '433px', '400px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"IMG-20180810-WA0001.jpg",'0px','0px']
                        },
                        {
                            id: 'Background_Crowd',
                            type: 'image',
                            rect: ['0px', '400px', '588px', '328px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Background%20Crowd.png",'0px','0px'],
                            filter: [0, 0, 0.79452054794521, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Couple',
                            type: 'image',
                            rect: ['-33px', '179px', '209px', '221px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Couple.png",'0px','0px']
                        },
                        {
                            id: 'Laughing_guy',
                            type: 'image',
                            rect: ['557px', '179px', '112px', '221px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Laughing%20guy.png",'0px','0px']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '550px', '400px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 3670,
                    autoPlay: true,
                    data: [
                        [
                            "eid33",
                            "top",
                            1000,
                            500,
                            "linear",
                            "${Background_Crowd}",
                            '400px',
                            '90px'
                        ],
                        [
                            "eid74",
                            "top",
                            2750,
                            0,
                            "linear",
                            "${Background_Crowd}",
                            '90px',
                            '90px'
                        ],
                        [
                            "eid78",
                            "top",
                            3105,
                            395,
                            "linear",
                            "${Background_Crowd}",
                            '90px',
                            '78px'
                        ],
                        [
                            "eid80",
                            "top",
                            3500,
                            170,
                            "linear",
                            "${Background_Crowd}",
                            '78px',
                            '72px'
                        ],
                        [
                            "eid2",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${IMG-20180810-WA0001}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${IMG-20180810-WA0001}",
                            '1',
                            '0'
                        ],
                        [
                            "eid38",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${Couple}",
                            '-209px',
                            '0px'
                        ],
                        [
                            "eid45",
                            "left",
                            1500,
                            815,
                            "linear",
                            "${Couple}",
                            '0px',
                            '9px'
                        ],
                        [
                            "eid46",
                            "left",
                            2315,
                            240,
                            "linear",
                            "${Couple}",
                            '9px',
                            '-33px'
                        ],
                        [
                            "eid50",
                            "left",
                            2555,
                            195,
                            "linear",
                            "${Couple}",
                            '-33px',
                            '-233px'
                        ],
                        [
                            "eid41",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${Laughing_guy}",
                            '557px',
                            '438px'
                        ],
                        [
                            "eid42",
                            "left",
                            1500,
                            155,
                            "linear",
                            "${Laughing_guy}",
                            '438px',
                            '430px'
                        ],
                        [
                            "eid43",
                            "left",
                            1655,
                            345,
                            "linear",
                            "${Laughing_guy}",
                            '430px',
                            '438px'
                        ],
                        [
                            "eid44",
                            "left",
                            2000,
                            375,
                            "linear",
                            "${Laughing_guy}",
                            '438px',
                            '558px'
                        ],
                        [
                            "eid34",
                            "left",
                            1000,
                            500,
                            "linear",
                            "${Background_Crowd}",
                            '0px',
                            '-14px'
                        ],
                        [
                            "eid76",
                            "left",
                            2750,
                            355,
                            "linear",
                            "${Background_Crowd}",
                            '-14px',
                            '7px'
                        ],
                        [
                            "eid77",
                            "left",
                            3105,
                            395,
                            "linear",
                            "${Background_Crowd}",
                            '7px',
                            '226px'
                        ],
                        [
                            "eid79",
                            "left",
                            3500,
                            170,
                            "linear",
                            "${Background_Crowd}",
                            '226px',
                            '581px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Animation_edgeActions.js");
})("EDGE-1249164601");
