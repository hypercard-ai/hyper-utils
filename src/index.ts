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

export interface Citation { 
  id: string;
  type: 'file' | 'web'
  name: string; 
  url: string
  pages?: PageCitation[]
}

// HYPER AGENT GRAPH CONFIG

export interface ConfigurableInput {
	// bot (required + optional)
	bot_id: string;
	bot_name: string;
	bot_slug: string;
	bot_description?: string;

	// node-specific prompt/model overrides (optional)
	query_rewriter_prompt?: string;
	query_rewriter_model?: string;
	rag_answer_prompt?: string;
	rag_answer_model?: string;
	direct_answer_prompt?: string;
	direct_answer_model?: string;
	voice_answer_prompt?: string;
	voice_answer_model?: string;

	// agent (required + defaults)
	llm: string;
	temperature?: number;
	first_message?: string;

	// vector (defaults)
	vector_search_count?: number;
	vector_rerank_count?: number;
	vector_page_offset?: number;

	// stt/tts (defaults)
	stt_enabled?: boolean;
	stt_model?: string;
	tts_enabled?: boolean;
	tts_model?: string;

	// search (defaults)
	vector_search_enabled?: boolean;
	web_search_enabled?: boolean;
	api_search_enabled?: boolean;

	// user (optional)
	user_id?: string;
	user_name?: string;
	user_email?: string;
	user_phone?: string;

	// company (optional)
	company_id?: string;
	company_name?: string;
}
