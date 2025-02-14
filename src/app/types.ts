/**
 * a color
 */
 export class Color {
   name: string;
   hex: string;
 }

 /**
  * a scene
  */
 export class Scene {
   name: string;
   images: SceneImage[];
   hidden: boolean;
 }

 /**
  * an image in a scene
  */
 export class SceneImage {
   name: string;
   base64data: string;
   canvasData: string;
   hidden: boolean;
   hotspots: Hotspot[];

   constructor(name, base64data, canvasData = null, hidden = false, hotspots = Array<Hotspot>()) {
    this.name = name;
    this.base64data = base64data;
    this.canvasData = canvasData;
    this.hidden = hidden;
    this.hotspots = hotspots;
  }
 }

 export class Hotspot {
   name: string;
   svgPointArray: number[]; // Each point is in percentage
   strokeColor: string;
   base64sound: string;
   typeSound: string;
   strokeWidth: number
 }

export class Configuration {
  'DWELL_TIME_ENABLED': boolean;
  'DWELL_TIME_TIMEOUT_VALUE': number;
  'SPEECH_SPEAKER_ENABLE': boolean;
  'LANGUAGE_CHOICE': string;
}
