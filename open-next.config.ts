import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import kvIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/kv-incremental-cache";
import doQueue from "@opennextjs/cloudflare/overrides/queue/do-queue";

/**
 * ISR no Cloudflare: as páginas (e o fetch dos textos/imagens do backoffice) são regeneradas a
 * cada 60 s. O cache fica no KV e a fila de revalidação num Durable Object (ver wrangler.jsonc).
 */
export default defineCloudflareConfig({
  incrementalCache: kvIncrementalCache,
  queue: doQueue,
});
