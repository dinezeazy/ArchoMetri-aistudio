
export interface VideoProject {
  id: string;
  title: string;
  category: 'Architecture' | 'Industrial';
  description: string;
  thumbnail: string;
  videoUrl: string; // This would be the Bunny.net stream URL
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
}
