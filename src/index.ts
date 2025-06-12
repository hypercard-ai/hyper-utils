// VECTOR STORE

export interface VectorStoreChunkMetadata {
  id: string;
  mimetype: string;
  filename: string;
  url: string
  page: number;
  pageIndex: number;
  score?: number;
  h1?: string;
  h2?: string;
  h3?: string;
  chunkNumber?: number;
  totalChunks?: number;
}

// HYPER AGENT CUSTOM EVENTS

export interface StreamAudioEvent {
	kind: "audio";
	chunk: string;
}

export interface PageJumpEvent {
	kind: "page_jump";
	page: number;
	id: string;
	filename: string;
}

export interface LoadingEvent {
	kind: "loading";
	message: string;
}

export interface GenerateReportEvent {
	kind: "generate_report";
	content: string;
}

export type CustomEvent = StreamAudioEvent | PageJumpEvent | LoadingEvent | GenerateReportEvent;

// Citations

export interface PageCitation {
  pageIndex: number
  pageNumber: number
}

export interface FileCitation { 
  id: string;
  filename: string; 
  url: string
  pages: PageCitation[]
}