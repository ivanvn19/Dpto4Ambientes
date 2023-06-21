var APP_DATA = {
  "scenes": [
    {
      "id": "0-ingreso",
      "name": "Ingreso",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.10766148014241139,
        "pitch": 0.11386109404487676,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.05478317900731966,
          "pitch": 0.148335357836757,
          "rotation": 0,
          "target": "1-ingreso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-ingreso",
      "name": "Ingreso",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.07301887686914732,
        "pitch": 0.11057977776093253,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 1.4949949906959494,
          "pitch": 0.09231946857513762,
          "rotation": 0,
          "target": "5-pasillo"
        },
        {
          "yaw": -0.8812319910087183,
          "pitch": 0.18841939770573468,
          "rotation": 0,
          "target": "2-living--comedor"
        },
        {
          "yaw": 2.8218934309495936,
          "pitch": 0.20635258536243128,
          "rotation": 0,
          "target": "0-ingreso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living--comedor",
      "name": "Living- comedor",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.891334814021004,
          "pitch": 0.08611634623361653,
          "rotation": 0,
          "target": "3-cocina"
        },
        {
          "yaw": -2.3056439204487518,
          "pitch": 0.18337654276390047,
          "rotation": 0,
          "target": "1-ingreso"
        },
        {
          "yaw": -0.017586243547802027,
          "pitch": 0.11307737925577044,
          "rotation": 0,
          "target": "4-balcn"
        },
        {
          "yaw": 2.9866103128409023,
          "pitch": 0.23309656555687042,
          "rotation": 0,
          "target": "11-cuarto"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-cocina",
      "name": "Cocina",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.2866166836002719,
        "pitch": 0.40386136538867135,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 3.065469126124686,
          "pitch": 0.12316499388297686,
          "rotation": 0,
          "target": "2-living--comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-balcn",
      "name": "Balcón",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.1187641355442324,
        "pitch": 0.05163435903713953,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 0.4456756196136631,
          "pitch": 0.2504996279727081,
          "rotation": 0,
          "target": "2-living--comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-pasillo",
      "name": "Pasillo",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0553323308152436,
          "pitch": 0.12970982296167577,
          "rotation": 0,
          "target": "1-ingreso"
        },
        {
          "yaw": -2.499359060366105,
          "pitch": 0.0201504686841254,
          "rotation": 1.5707963267948966,
          "target": "11-cuarto"
        },
        {
          "yaw": -1.7018567093967434,
          "pitch": -0.011906452999429717,
          "rotation": 0,
          "target": "10-bao-principal"
        },
        {
          "yaw": -0.05462096179372722,
          "pitch": 0.12852484396179165,
          "rotation": 0,
          "target": "6-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-pasillo",
      "name": "Pasillo",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1826847722936886,
          "pitch": 0.027561280757852913,
          "rotation": 0,
          "target": "7-cuarto-principal-"
        },
        {
          "yaw": 1.2233816792826673,
          "pitch": 0.09543555644519586,
          "rotation": 0,
          "target": "9-cuarto"
        },
        {
          "yaw": -3.114592017847759,
          "pitch": 0.10694548203753129,
          "rotation": 0,
          "target": "1-ingreso"
        },
        {
          "yaw": -2.8435668481737597,
          "pitch": 0.19928422133273038,
          "rotation": 1.5707963267948966,
          "target": "10-bao-principal"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-cuarto-principal-",
      "name": "Cuarto principal ",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.43052361268556183,
          "pitch": 0.1983989761006324,
          "rotation": 0,
          "target": "6-pasillo"
        },
        {
          "yaw": 0.3911446220035817,
          "pitch": 9.448317683791174e-10,
          "rotation": 4.71238898038469,
          "target": "8-bao-en-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-bao-en-suite",
      "name": "Baño en suite",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.6114337716507858,
        "pitch": 0.32007764702440866,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.4078600209415217,
          "pitch": 0.11467590163402797,
          "rotation": 0,
          "target": "7-cuarto-principal-"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-cuarto",
      "name": "Cuarto",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.34694422335576647,
        "pitch": 0.17244770226899853,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 3.052878151568591,
          "pitch": 0.14231362142555604,
          "rotation": 0,
          "target": "6-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bao-principal",
      "name": "Baño principal",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.1285185550673571,
        "pitch": 0.967859576202633,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": -2.688455588573037,
          "pitch": 0.1235784190783793,
          "rotation": 0,
          "target": "5-pasillo"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-cuarto",
      "name": "Cuarto",
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
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.3027636033071932,
        "pitch": 0.11811930806282511,
        "fov": 1.3108730938557924
      },
      "linkHotspots": [
        {
          "yaw": 2.836352428730013,
          "pitch": 0.1356129108087032,
          "rotation": 0,
          "target": "5-pasillo"
        },
        {
          "yaw": -1.2868166601930628,
          "pitch": 0.0707847571599185,
          "rotation": 0,
          "target": "2-living--comedor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Depto 4 ambientes Perón y Güemes ",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
