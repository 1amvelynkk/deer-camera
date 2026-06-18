export interface VideoTemplate {
  id: string;
  title: string;
  style: string;
  image: string;
  stats: string;
  tags: string[];
  description: string;
  durationSec: number;
  isNew?: boolean;
  isLandscape?: boolean;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  content: string;
  hasLoader?: boolean;
  proposalData?: {
    theme: string;
    suitability: string;
    proposal1: string;
    proposal2: string;
    tags: string[];
  };
}

export type AppTab = "template" | "create" | "mine" | "keyframes";

export interface ExportItem {
  id: string;
  title: string;
  resolution: string;
  fileSize: string;
  date: string;
  image?: string;
}

export interface AppState {
  currentTab: AppTab;
  selectedRatio: "9:16" | "16:9";
  selectedDuration: "10-20s" | "1-15s" | "自动";
  attachedTemplate: VideoTemplate | null;
  uploadedMaterials: string[]; // List of base64 or source img links
  generationResult: {
    theme: string;
    suitability: string;
    proposal1: string;
    proposal2: string;
    tags: string[];
  } | null;
}
