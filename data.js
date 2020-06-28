var APP_DATA = {
  "scenes": [
    {
      "id": "0-centro",
      "name": "centro",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.14938007755152505,
          "pitch": 0.04527870104063325,
          "rotation": 0,
          "target": "2-cocina"
        },
        {
          "yaw": 2.033770602679815,
          "pitch": 0.18871871550083164,
          "rotation": 0,
          "target": "1-dormitorio"
        },
        {
          "yaw": -3.1046069863263153,
          "pitch": 0.3798766060070822,
          "rotation": 0,
          "target": "3-ventana"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-dormitorio",
      "name": "dormitorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.19601390060858748,
        "pitch": 0.1284111726933741,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.6779400421091495,
          "pitch": 0.26480295371603724,
          "rotation": 0,
          "target": "0-centro"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.19601390060858748,
          "pitch": 0.1284111726933741,
          "title": "Vestidor",
          "text": ""
        },
        {
          "yaw": 2.970724914763121,
          "pitch": -0.08003462962134833,
          "title": "Aberturas DVH",
          "text": ""
        }
      ]
    },
    {
      "id": "2-cocina",
      "name": "cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5509346405172089,
          "pitch": 0.26989885388157653,
          "rotation": 0,
          "target": "3-ventana"
        },
        {
          "yaw": -2.065964839895683,
          "pitch": 0.12484960738642314,
          "rotation": 0,
          "target": "1-dormitorio"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9734662531663112,
          "pitch": -0.19845518962943132,
          "title": "Amoblamiento de MDF",
          "text": "Color Blanco"
        }
      ]
    },
    {
      "id": "3-ventana",
      "name": "ventana",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.42671674231764456,
          "pitch": 0.5113680403604981,
          "rotation": 0,
          "target": "0-centro"
        },
        {
          "yaw": -0.45635451994965237,
          "pitch": 0.07001973474075207,
          "rotation": 0,
          "target": "2-cocina"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5987200330486591,
          "pitch": 0.08887004999184178,
          "title": "Baño",
          "text": "Zonificado"
        },
        {
          "yaw": -0.023902583405744693,
          "pitch": 0.09506395772477916,
          "title": "Acceso",
          "text": "."
        },
        {
          "yaw": 2.8415186319471317,
          "pitch": 0.5475529086756374,
          "title": "Balcon",
          "text": "3.00x3.00"
        }
      ]
    }
  ],
  "name": "departamento 9C",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
