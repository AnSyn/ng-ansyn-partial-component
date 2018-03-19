	{
	"casesConfig": {
		"baseUrl": "http://ansyn.io:8081/api/store",
		"paginationLimit": 16,
		"defaultCase": {
			"id": "1234-5678",
			"name": "Default case",
			"state": {
				"maps": {
					"layout": "layout1",
					"activeMapId": "defaultImagery1",
					"data": [
						{
							"id": "defaultImagery1",
							"mapType": "openLayersMap",
							"data": {
								"position": {
									"projectedState": {
										"projection": {
											"code": "EPSG:3857"
										},
										"rotation": 0,
										"center": [
											-8246112.2430192325,
											4970248.751006249
										],
										"zoom": 4
									},
									"extentPolygon": {
										"type": "Polygon",
										"coordinates": [
											[
												[
													-105.59192365470776,
													22.10145785600497
												],
												[
													-42.56024959467796,
													22.10145785600497
												],
												[
													-42.56024959467796,
													55.28198275564807
												],
												[
													-105.59192365470776,
													55.28198275564807
												],
												[
													-105.59192365470776,
													22.10145785600497
												]
											]
										]
									}
								}
							},
							"flags": {}
						}
					]
				},
				"region": {
					"type": "Polygon",
					"coordinates": [
						[
							[
								-74.09214019775389,
								40.73386046245138
							],
							[
								-74.10080909729004,
								40.69573721839922
							],
							[
								-74.05600547790527,
								40.694956309550584
							],
							[
								-74.05540466308594,
								40.73405557647634
							],
							[
								-74.09214019775389,
								40.73386046245138
							]
						]
					]
				},
				"time": null,
				"facets": {
					"filters": [
						{
							"fieldName": "isGeoRegistered",
							"type": "Boolean",
							"metadata": {
								"displayTrue": true,
								"displayFalse": false
							}
						}
					],
					"showOnlyFavorites": false
				},
				"geoFilter": "Pin-Point",
				"timeFilter": "Start - End",
				"orientation": "Align North",
				"favoriteOverlays": [],
				"layers": {
					"annotationsLayer": {
						"type": "FeatureCollection",
						"features": []
					},
					"displayAnnotationsLayer": true
				}
			}
		},
		"casesQueryParamsKeys": [
			"facets",
			"time",
			"maps",
			"region",
			"overlaysManualProcessArgs",
			"orientation"
		],
		"updateCaseDebounceTime": 700,
		"useHash": true
	},
	"layersManagerConfig": {
		"layersByCaseIdUrl": "http://ansyn.io:8081/api/store"
	},
	"overlaysConfig": {
		"limit": 500
	},
	"imageryConfig": {
		"geoMapsInitialMapSource": [
			{
				"mapType": "openLayersMap",
				"mapSource": "ESRI_4326",
				"mapSourceMetadata": {
				}
			},
			{
				"mapType": "cesiumMap",
				"mapSource": "OSM",
				"mapSourceMetadata": null
			},
			{
				"mapType": "disabledOpenLayersMap",
				"mapSource": "ESRI_4326",
				"mapSourceMetadata": {
				}
			}
		]
	},
	"mapFacadeConfig": {
		"overlayCoverage": 0.1,
		"sensorTypeShortcuts": {
			"Panchromatic": "P",
			"8-band (Coastal, Blue, Green, Yellow, Red, Red-edge, NIR1, NIR2) Multispectral": "8B",
			"4-band (Blue, Green, Red, NIR) Multispectral": "4B"
		},
		"contextMenu": {
			"filterField": "sensorType"
		}
	},
	"filtersConfig": {
		"filters": [
			{
				"modelName": "sensorType",
				"displayName": "Sensor Type",
				"type": "Enum"
			},
			{
				"modelName": "sensorName",
				"displayName": "Sensor Name",
				"type": "Enum"
			},
			{
				"modelName": "sourceType",
				"displayName": "Source Type",
				"type": "Enum"
			},
			{
				"modelName": "isGeoRegistered",
				"displayName": "Geo Registration",
				"type": "Boolean",
				"customData": {
					"displayTrueName": "Geo registered",
					"displayFalseName": "Not Geo registered"
				}
			},
			{
				"modelName": "bestResolution",
				"displayName": "Resolution",
				"type": "Slider"
			}
		]
	},
	"contextConfig": {
		"elastic": {
			"uri": "localhost:9200",
			"bucket": "context",
			"auth": "elastic:changeme"
		},
		"proxy": {
			"uri": "http://localhost:9001/api/v1/",
			"bucket": "contexts",
			"apiObject": "Http"
		}
	},
	"toolsConfig": {
		"GoTo": {
			"from": {
				"datum": "wgs84",
				"projection": "geo"
			},
			"to": {
				"datum": "ed50",
				"projection": "utm"
			}
		},
		"Proj4": {
			"ed50": "+proj=utm +datum=ed50 +zone=${zone} +ellps=intl +units=m + no_defs",
			"ed50Customized": ""
		},
		"ImageProcParams": [
			{
				"name": "Sharpness",
				"defaultValue": 0,
				"min": 0,
				"max": 100
			},
			{
				"name": "Contrast",
				"defaultValue": 0,
				"min": -100,
				"max": 100
			},
			{
				"name": "Brightness",
				"defaultValue": 0,
				"min": -100,
				"max": 100
			},
			{
				"name": "Gamma",
				"defaultValue": 100,
				"min": 1,
				"max": 200
			},
			{
				"name": "Saturation",
				"defaultValue": 100,
				"min": 1,
				"max": 100
			}
		]
	},
	"loggerConfig": {
		"env": "DEV",
		"active": false
	},
	"statusBarConfig": {
		"toolTips": {
			"orientation": "Overlay orientation",
			"geoFilter": "Geo filter",
			"geoFilterEdit": "Edit Geo filter",
			"geoFilterShow": "Show/hide Geo filter",
			"timeFilter": "Time filter",
			"timeFilterEdit": "Edit time filter",
			"screenNumber": "Screen number",
			"imageCount": "Image count",
			"backwards": "Previous overlay",
			"forward": "Next overlay",
			"reset": "Reset timeline (according to the time filter)",
			"enlarge": "Expand timeline"
		}
	},
	"coreConfig": {
		"errors": {
			"noGeoRegistration": "This Image Has No Geo-Registration",
			"overlayIsNotPartOfCase": "This Overlay Is Not a Part of the Case",
			"imageIsOutOfBounds": "Image is out of bounds"
		},
		"windowLayout" : {
			"menu": true,
			"statusBar": true,
			"timeLine": true,
			"contextSun": true
		},
		"bootStarpOptions": {
			"router": true
		}
	},
	"menuConfig": {
		"path": "/assets/logo.svg",
		"background": "red",
		"color": "white",
		"mode": "debug"
	},
	"loginConfig": {
		"baseUrl": "http://ansyn.io:9001/api/v1/login",
		"active": true,
		"authorizedPath": "/"
	},
	"visualizersConfig": {
		"FrameVisualizer": {
			"colors": {
				"active": "#27b2cf",
				"inactive": "#d393e1"
			}
		},
		"FootprintPolylineVisualizer": {
			"colors": {
				"active": "#27b2cf",
				"inactive": "#d393e1",
				"display": "#9524ad",
				"favorite": "yellow"
			}
		},
		"exampleFootprintHeatmapVisualizer": {
			"initial": {
				"fill": {
					"color": "red"
				},
				"stroke": {
					"color": "green",
					"width": 3
				}
			},
			"hover": {
				"fill": {
					"color": "green"
				},
				"stroke": {
					"color": "yellow",
					"width": 3
				}
			},
			"entities": {
				"yellow": {
					"initial": {
						"fill": {
							"color": "yellow"
						}
					}
				},
				"blue": {
					"initial": {
						"fill": {
							"color": "blue"
						}
					}
				}
			}
		}
	},
	"multipleOverlaysSource": {
		"IDAHO": {
			"whitelist": [
				{
					"name": "Entire Earth",
					"dates": [
						{
							"start": null,
							"end": null
						}
					],
					"sensorNames": [
						null
					],
					"coverage": [
						[
							[
								[
									-180,
									-90
								],
								[
									-180,
									90
								],
								[
									180,
									90
								],
								[
									180,
									-90
								],
								[
									-180,
									-90
								]
							]
						]
					]
				}
			],
			"blacklist": []
		},
		"IDAHO": {
			"whitelist": [
				{
					"name": "Entire Earth",
					"dates": [
						{
							"start": null,
							"end": null
						}
					],
					"sensorNames": [
						null
					],
					"coverage": [
						[
							[
								[
									-180,
									-90
								],
								[
									-180,
									90
								],
								[
									180,
									90
								],
								[
									180,
									-90
								],
								[
									-180,
									-90
								]
							]
						]
					]
				}
			],
			"blacklist": []
		},
		"IDAHO2": {
			"whitelist": [
				{
					"name": "Entire Earth",
					"dates": [
						{
							"start": null,
							"end": null
						}
					],
					"sensorNames": [
						null
					],
					"coverage": [
						[
							[
								[
									-74.06810760498047,
									40.8028950718582
								],
								[
									-74.09557342529297,
									40.75453936473234
								],
								[
									-74.07463073730469,
									40.74543623770158
								],
								[
									-74.11308288574219,
									40.70536767492135
								],
								[
									-74.06330108642578,
									40.66918118282895
								],
								[
									-74.01283264160156,
									40.73347023268492
								],
								[
									-74.01111602783203,
									40.77768170250654
								],
								[
									-74.06810760498047,
									40.8028950718582
								]
							]
						]
					]
				}
			],
			"blacklist": []
		}
	},
	"idahoOverlaysSourceConfig": {
		"defaultApi": "overlays",
		"baseUrl": "http://ansyn.io:9001/api/v1/",
		"overlaysByTimeAndPolygon": "overlays/find"
	}
}
