var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Indicedevegetation_2025_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Indice de vegetation_2025<br />\
    <img src="styles/legend/Indicedevegetation_2025_1_0.png" /> <= 0,3747<br />\
    <img src="styles/legend/Indicedevegetation_2025_1_1.png" /> 0,3747 - 0,4917<br />\
    <img src="styles/legend/Indicedevegetation_2025_1_2.png" /> 0,4917 - 0,6086<br />\
    <img src="styles/legend/Indicedevegetation_2025_1_3.png" /> 0,6086 - 0,7256<br />\
    <img src="styles/legend/Indicedevegetation_2025_1_4.png" /> > 0,7256<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Indicedevegetation_2025_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-783810.000000, 830335.538173, -727380.000000, 885551.497598]
        })
    });
var lyr_Indicedevegetation_1995_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Indice de vegetation_1995<br />\
    <img src="styles/legend/Indicedevegetation_1995_2_0.png" /> <= 0,0500<br />\
    <img src="styles/legend/Indicedevegetation_1995_2_1.png" /> 0,2<br />\
    <img src="styles/legend/Indicedevegetation_1995_2_2.png" /> 0,3<br />\
    <img src="styles/legend/Indicedevegetation_1995_2_3.png" /> > 0,3<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Indicedevegetation_1995_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-783831.920556, 830135.780926, -727235.507354, 885651.589549]
        })
    });
var lyr_Prediction_3 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Prediction<br />\
    <img src="styles/legend/Prediction_3_0.png" /> Eau <br />\
    <img src="styles/legend/Prediction_3_1.png" /> Habitat/sol nu<br />\
    <img src="styles/legend/Prediction_3_2.png" /> Culture perennes<br />\
    <img src="styles/legend/Prediction_3_3.png" /> Culture vivriere<br />\
    <img src="styles/legend/Prediction_3_4.png" /> Savane<br />\
    <img src="styles/legend/Prediction_3_5.png" /> Foret<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/Prediction_3.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-783831.920556, 830135.780926, -727235.507354, 885651.589549]
        })
    });
var lyr_classification_2025_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'classification_2025<br />\
    <img src="styles/legend/classification_2025_4_0.png" /> Eau <br />\
    <img src="styles/legend/classification_2025_4_1.png" /> Habitat/sol nu<br />\
    <img src="styles/legend/classification_2025_4_2.png" /> Culture perennes<br />\
    <img src="styles/legend/classification_2025_4_3.png" /> Culture vivriere<br />\
    <img src="styles/legend/classification_2025_4_4.png" /> Savane<br />\
    <img src="styles/legend/classification_2025_4_5.png" /> Foret<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/classification_2025_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-783831.920556, 830135.780926, -727235.507354, 885651.589549]
        })
    });
var lyr_classiffication_2015_5 = new ol.layer.Image({
        opacity: 1,
        
    title: 'classiffication_2015<br />\
    <img src="styles/legend/classiffication_2015_5_0.png" /> Eau <br />\
    <img src="styles/legend/classiffication_2015_5_1.png" /> Habitat/sol nu<br />\
    <img src="styles/legend/classiffication_2015_5_2.png" /> Culture perennes<br />\
    <img src="styles/legend/classiffication_2015_5_3.png" /> Culture vivriere<br />\
    <img src="styles/legend/classiffication_2015_5_4.png" /> Savane<br />\
    <img src="styles/legend/classiffication_2015_5_5.png" /> Foret<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/classiffication_2015_5.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-783831.920556, 830135.780926, -727235.507354, 885651.589549]
        })
    });
var lyr_classification_1995_6 = new ol.layer.Image({
        opacity: 1,
        
    title: 'classification_1995<br />\
    <img src="styles/legend/classification_1995_6_0.png" /> Eau <br />\
    <img src="styles/legend/classification_1995_6_1.png" /> Habitat/sol nu<br />\
    <img src="styles/legend/classification_1995_6_2.png" /> Culture perennes<br />\
    <img src="styles/legend/classification_1995_6_3.png" /> Culture vivriere<br />\
    <img src="styles/legend/classification_1995_6_4.png" /> Savane<br />\
    <img src="styles/legend/classification_1995_6_5.png" /> Foret<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/classification_1995_6.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-783831.920556, 830135.780926, -727235.507354, 885651.589549]
        })
    });
var format_zonedetude_7 = new ol.format.GeoJSON();
var features_zonedetude_7 = format_zonedetude_7.readFeatures(json_zonedetude_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zonedetude_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zonedetude_7.addFeatures(features_zonedetude_7);
var lyr_zonedetude_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zonedetude_7, 
                style: style_zonedetude_7,
                popuplayertitle: 'zone d\'etude',
                interactive: true,
                title: '<img src="styles/legend/zonedetude_7.png" /> zone d\'etude'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Indicedevegetation_2025_1.setVisible(true);lyr_Indicedevegetation_1995_2.setVisible(true);lyr_Prediction_3.setVisible(true);lyr_classification_2025_4.setVisible(true);lyr_classiffication_2015_5.setVisible(true);lyr_classification_1995_6.setVisible(true);lyr_zonedetude_7.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Indicedevegetation_2025_1,lyr_Indicedevegetation_1995_2,lyr_Prediction_3,lyr_classification_2025_4,lyr_classiffication_2015_5,lyr_classification_1995_6,lyr_zonedetude_7];
lyr_zonedetude_7.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Clamped': 'Clamped', 'Extruded': 'Extruded', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_zonedetude_7.set('fieldImages', {'OID_': 'TextEdit', 'Name': 'TextEdit', 'FolderPath': 'TextEdit', 'SymbolID': 'TextEdit', 'AltMode': 'Range', 'Base': 'TextEdit', 'Clamped': 'Range', 'Extruded': 'Range', 'Snippet': 'TextEdit', 'PopupInfo': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_zonedetude_7.set('fieldLabels', {'OID_': 'no label', 'Name': 'inline label - visible with data', 'FolderPath': 'no label', 'SymbolID': 'no label', 'AltMode': 'no label', 'Base': 'no label', 'Clamped': 'no label', 'Extruded': 'no label', 'Snippet': 'no label', 'PopupInfo': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_zonedetude_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});