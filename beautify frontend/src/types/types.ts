export interface Profile {
  id: number;
  name: string;
  description: string;
  images: { src: string; alt: string }[];
  uploadedFileName?: string;
}

export type WindowName = "ToTestList" | "ServerWindow" | "ThreeDModelWindow" | "SettingsWindow";
