(()=>{var e={159:e=>{e.exports='const f = require("fs");\nconst parser = require("tle-parser").parser;\n// Using ES6 imports\n\nvar cat = "../data/catalog.txt";\nconst datArr = f.readFileSync(cat).toString().split(/\\n/);\nconst newDatArr = [];\n//Make array of tles\nfor (let i = 0; i < datArr.length; i += 3) {\n  if (datArr[i].includes("DEB") || datArr[i].includes("R/B")) {\n    newDatArr.push(datArr[i] + "\\n" + datArr[i + 1] + "\\n" + datArr[i + 2]);\n  }\n}\nconsole.log(newDatArr);\n// const sats = []\n// let count = 0\n// for(sat in newDatArr){\n//         if(sat != null || sat != undefined){\n//                 try{\n//                         sats.push(parser(newDatArr[count]));\n//                         count++;\n//                 }catch{\n//                         continue;\n//                 }\n//         }\n// }\n// console.log(sats);\n\n// console.log("Length" + newDatArr.length)\n// console.log("Length" + newDatArr[0])\n\n// for(sat in newDatArr){\n//         sats.push(sat.parser);\n// }\n\n// console.log(sat.name);\n// console.log(sat.classification_type);\n\n// for(let i = 0;i<newDatArr.length;i+=2){\n//     finDat.push(newDatArr[i] +"\\n" +newDatArr[i+1]);\n// }\n\n// Sample TLE\n'},685:e=>{e.exports=function(e){function n(e){"undefined"!=typeof console&&(console.error||console.log)("[Script Loader]",e)}try{"undefined"!=typeof execScript&&"undefined"!=typeof attachEvent&&"undefined"==typeof addEventListener?execScript(e):"undefined"!=typeof eval?eval.call(null,e):n("EvalError: No eval function available")}catch(e){n(e)}}},403:(e,n,t)=>{t(685)(t(159))}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={exports:{}};return e[o](i,i.exports,t),i.exports}(()=>{"use strict";var e=t(403);console.log(e.newDatArr);const n=new Cesium.Viewer("cesiumContainer",{imageryProvider:new Cesium.TileMapServiceImageryProvider({url:Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII")}),baseLayerPicker:!1,geocoder:!1,homeButton:!1,infoBox:!1,navigationHelpButton:!1,sceneModePicker:!1});for(const n of e.newDatArr)o(n);function o(e){const t=e,o=satellite.twoline2satrec(t.split("\n")[1].trim(),t.split("\n")[2].trim()),r=Cesium.JulianDate.fromDate(new Date),i=Cesium.JulianDate.addSeconds(r,21600,new Cesium.JulianDate);n.clock.startTime=r.clone(),n.clock.stopTime=i.clone(),n.clock.currentTime=r.clone(),n.timeline.zoomTo(r,i),n.clock.multiplier=40,n.clock.clockRange=Cesium.ClockRange.LOOP_STOP;const a=new Cesium.SampledPositionProperty;for(let e=0;e<21600;e+=10){const n=Cesium.JulianDate.addSeconds(r,e,new Cesium.JulianDate),t=Cesium.JulianDate.toDate(n),i=satellite.propagate(o,t),s=satellite.gstime(t),l=satellite.eciToGeodetic(i.position,s),c=Cesium.Cartesian3.fromRadians(l.longitude,l.latitude,1e3*l.height);a.addSample(n,c)}}const r=n.entities.add({position:positionsOverTime,point:{pixelSize:5,color:Cesium.Color.RED}});n.trackedEntity=r;let i=!1;n.scene.globe.tileLoadProgressEvent.addEventListener((()=>{i||!0!==n.scene.globe.tilesLoaded||(n.clock.shouldAnimate=!0,i=!0,n.scene.camera.zoomOut(7e6),document.querySelector("#loading").classList.toggle("disappear",!0))}))})()})();