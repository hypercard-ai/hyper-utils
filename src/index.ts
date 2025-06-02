// VECTOR STORE

export interface VectorStoreChunkMetadata {
  id: string;
  mimetype: string;
  filename: string;
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

export type CustomEvent = StreamAudioEvent | PageJumpEvent | LoadingEvent;