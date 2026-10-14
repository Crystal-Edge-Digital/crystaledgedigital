"use client"

import { Maximize2, X } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

type DiagramViewerProps = {
  src: string
  alt: string
  width: number
  height: number
  caption: string
}

/**
 * A diagram that opens in an enlarged, scrollable viewer over a blurred page.
 * Built on the native <dialog>: focus is trapped, Escape closes it, and focus returns to the diagram afterwards.
 * Clicking outside the panel, or the Close button, also closes it.
 */
export function DiagramViewer({
  src,
  alt,
  width,
  height,
  caption,
}: DiagramViewerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)

  function open() {
    dialogRef.current?.showModal()
    document.body.style.overflow = "hidden"
    scrollRef.current?.scrollTo({ left: 0, top: 0 })
  }

  function close() {
    dialogRef.current?.close()
    document.body.style.overflow = ""
  }

  return (
    <figure>
      <button
        type="button"
        onClick={open}
        aria-haspopup="dialog"
        aria-label={`${caption} Open the enlarged diagram.`}
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-2xl border border-border bg-white p-3 text-left shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:p-5"
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          unoptimized
          sizes="(max-width: 1280px) 100vw, 1200px"
          className="h-auto w-full"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/95 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm"
        >
          <Maximize2 className="size-3.5" />
          Enlarge
        </span>
      </button>
      <figcaption className="mt-3 text-sm text-muted-foreground">
        {caption}
      </figcaption>

      <dialog
        ref={dialogRef}
        aria-label={caption}
        onClose={() => {
          document.body.style.overflow = ""
        }}
        onClick={(event) => {
          // A click on the dialog element itself is a click on the backdrop.
          if (event.target === event.currentTarget) close()
        }}
        className="m-auto max-h-[92vh] w-[min(96vw,1700px)] overflow-hidden rounded-2xl border border-border bg-white p-0 text-foreground shadow-2xl backdrop:bg-foreground/25 backdrop:backdrop-blur-md"
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3">
          <p className="text-sm font-semibold">{caption}</p>
          <button
            type="button"
            onClick={close}
            className="inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-full border border-border px-4 text-sm font-semibold text-primary hover:bg-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <X className="size-4" aria-hidden="true" />
            Close
          </button>
        </div>
        <div
          ref={scrollRef}
          className="max-h-[calc(92vh-4.5rem)] overflow-auto"
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            unoptimized
            sizes="1800px"
            className="h-auto w-[1800px] max-w-none"
          />
        </div>
      </dialog>
    </figure>
  )
}
