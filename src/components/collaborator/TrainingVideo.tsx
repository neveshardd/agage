import type { PublicVideo } from "@/lib/backoffice";

interface TrainingVideoProps {
  video: PublicVideo | null;
  labels: { heading: string; unavailable: string; unsupported: string };
}

/**
 * Player nativo: a API autoriza e redireciona para o R2, que atende Range; o navegador baixa
 * apenas o trecho necessário (`preload="metadata"`).
 */
export function TrainingVideo({ video, labels }: TrainingVideoProps) {
  return (
    <section
      aria-labelledby="video-heading"
      className="mx-auto w-full max-w-screen-2xl px-6 lg:px-10"
    >
      <h2
        id="video-heading"
        className="text-2xl font-bold text-balance text-brand-navy sm:text-3xl lg:text-4xl"
      >
        {labels.heading}
      </h2>
      <div className="mt-8 aspect-video w-full overflow-hidden rounded-xl bg-brand-navy sm:rounded-2xl">
        {video ? (
          // biome-ignore lint/a11y/useMediaCaption: legendas ainda não disponíveis; o conteúdo do vídeo está transcrito nesta página.
          <video
            className="h-full w-full"
            controls
            playsInline
            preload="metadata"
            aria-label={video.title}
          >
            <source src={video.url} type={video.mimeType} />
            {labels.unsupported}
          </video>
        ) : (
          <p className="flex h-full items-center justify-center p-6 text-center text-white/80">
            {labels.unavailable}
          </p>
        )}
      </div>
    </section>
  );
}
