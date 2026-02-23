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
	id: number;
	type: "file" | "web" | "db" | "api";
	title: string;
	content: string;
	fileId?: string; // ID in DB
	page?: number;
	pageJump?: number;
	mimetype?: string;
	path?: string; // Url for web, filename for file
	score?: number;
}

export type ModelProvider = 'anthropic' | 'google' | 'groq' | 'open-ai'

// HYPER AGENT GRAPH CONFIG

export interface BotJsonConfig {
	// agent
	model_provider?: ModelProvider;
	model_id?: string;
	temperature?: number;
	first_message?: string;

	// vector
	vector_search_count?: number;
	vector_rerank_count?: number;

	// search
	vector_search_allowed?: boolean;
	web_search_allowed?: boolean;
	api_search_allowed?: boolean;

	// stt
	stt_allowed?: boolean;
	stt_model_provider?: string;
	stt_model_id?: string;

	// tts
	tts_allowed?: boolean;
	tts_model_provider?: string;
	tts_model_id?: string;

	// node-specific prompt/model overrides
	query_rewriter_prompt?: string;
	query_rewriter_model?: string;
	rag_answer_prompt?: string;
	rag_answer_model?: string;
	direct_answer_prompt?: string;
	direct_answer_model?: string;
	voice_answer_prompt?: string;
	voice_answer_model?: string;
}

export interface BotRuntimeConfig extends BotJsonConfig {
	// bot
	bot_id: string;
	bot_name: string;
	bot_slug: string;
	bot_description?: string;

	// search UI settings
	vector_search_enabled?: boolean;
	web_search_enabled?: boolean;
	api_search_enabled?: boolean;

	// stt/tss UI settings
	stt_enabled?: boolean;
	tts_enabled?: boolean;

	// user
	user_id?: string;
	user_name?: string;
	user_email?: string;
	user_phone?: string;

	// company
	company_id?: string;
	company_name?: string;
}
