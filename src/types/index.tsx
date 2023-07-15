export interface GalleryItem {
    id: number;
    title:string;
    imageURL: string;
  }
  
  export interface GalleryTab {
    year: number;
    isActive: boolean;
  }
  
  export interface GalleryState {
    tabs: GalleryTab[];
    activeTab: number;
    items: GalleryItem[];
  }
  