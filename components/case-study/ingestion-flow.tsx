"use client"

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react"

import styles from "./ingestion-flow.module.css"

const rentals = [
  "Unit 103 · 1 bed · $2,795",
  "Unit 206 · 2 bed · $3,350",
  "Unit 209 · Studio · $2,250",
]
const steps = ["Read", "Embed", "Store"]
const itemStyle = (index: number): CSSProperties =>
  ({ "--i": index }) as CSSProperties

export function IngestionFlow() {
  const figureRef = useRef<HTMLElement>(null)
  const documentRef = useRef<HTMLDivElement>(null)
  const laneRef = useRef<HTMLDivElement>(null)
  const indexRef = useRef<HTMLDivElement>(null)
  const hasStarted = useRef(false)
  const [state, setState] = useState<"waiting" | "playing" | "complete">(
    "waiting"
  )
  const [replay, setReplay] = useState(0)

  useLayoutEffect(() => {
    const lane = laneRef.current
    const source = documentRef.current
    const searchIndex = indexRef.current
    const figure = figureRef.current
    if (!lane || !source || !searchIndex || !figure) return

    const measure = () => {
      const origin = lane.getBoundingClientRect()
      const sourceOrigin = source.offsetParent!.getBoundingClientRect()
      const sourceStyle = getComputedStyle(source)
      const sourceInsetX =
        parseFloat(sourceStyle.paddingLeft) +
        parseFloat(sourceStyle.borderLeftWidth)
      const sourceInsetY =
        parseFloat(sourceStyle.paddingTop) +
        parseFloat(sourceStyle.borderTopWidth)
      const stacked = window.matchMedia("(max-width: 639px)").matches

      Array.from(lane.children).forEach((child, index) => {
        const chunk = child as HTMLElement
        const bar = searchIndex.children[index].getBoundingClientRect()
        // Measure the layout boxes, independent of animated transforms.
        chunk.style.setProperty(
          "--source-x",
          `${sourceOrigin.left + source.offsetLeft + sourceInsetX - origin.left}px`
        )
        chunk.style.setProperty(
          "--source-y",
          stacked
            ? `${sourceOrigin.top + source.offsetTop + sourceInsetY - origin.top}px`
            : "0px"
        )
        chunk.style.setProperty("--index-x", `${bar.left - origin.left}px`)
        chunk.style.setProperty(
          "--index-y",
          `${bar.top - origin.top - chunk.offsetTop}px`
        )
        chunk.style.setProperty(
          "--index-scale-x",
          `${bar.width / chunk.offsetWidth}`
        )
        chunk.style.setProperty(
          "--index-scale-y",
          `${bar.height / chunk.offsetHeight}`
        )
      })
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(figure)
    observer.observe(lane)
    observer.observe(source)
    observer.observe(searchIndex)
    window.addEventListener("resize", measure)
    return () => {
      observer.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [replay])

  useEffect(() => {
    const figure = figureRef.current
    if (!figure) return

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)")
    const finishForReducedMotion = (event: MediaQueryListEvent) => {
      if (event.matches) {
        hasStarted.current = true
        setState("complete")
      }
    }
    const start = () => {
      if (hasStarted.current) return
      hasStarted.current = true
      setState(motion.matches ? "complete" : "playing")
    }
    motion.addEventListener("change", finishForReducedMotion)

    let observer: IntersectionObserver | undefined
    let frame: number | undefined
    if (typeof IntersectionObserver !== "undefined") {
      observer = new IntersectionObserver(
        (entries) => {
          if (
            entries.some(
              (entry) => entry.isIntersecting && entry.intersectionRatio >= 0.35
            )
          ) {
            start()
            observer?.disconnect()
          }
        },
        { threshold: 0.35 }
      )
      observer.observe(figure)
    } else {
      frame = window.requestAnimationFrame(start)
    }

    return () => {
      observer?.disconnect()
      if (frame !== undefined) window.cancelAnimationFrame(frame)
      motion.removeEventListener("change", finishForReducedMotion)
    }
  }, [])

  useEffect(() => {
    if (state !== "playing") return
    // The last answer finishes at seven seconds; replay resets this clock too.
    const timer = window.setTimeout(() => setState("complete"), 7000)
    return () => window.clearTimeout(timer)
  }, [state, replay])

  function restart() {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    hasStarted.current = true
    setReplay((value) => value + 1)
    setState("playing")
  }

  return (
    <figure ref={figureRef} className={styles.figure} data-state={state}>
      <div className="flex items-center justify-between gap-2">
        <span className="text-[0.6875rem] font-bold tracking-[0.12em] text-primary uppercase">
          From document to answer
        </span>
        <button
          type="button"
          className={`${styles.replay} cursor-pointer rounded-lg p-2 text-xs text-muted-foreground hover:text-primary-hover focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-primary`}
          onClick={restart}
        >
          Replay
        </button>
      </div>

      <div key={replay} className={styles.scene}>
        <div className={`${styles.source} min-w-0`}>
          <p className={styles.label}>Source document</p>
          <div ref={documentRef} className={styles.document}>
            <svg
              className="h-8 w-7 text-primary"
              viewBox="0 0 32 38"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M5 1h15l10 10v24a2 2 0 0 1-2 2H5a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z M20 1v10h10"
                stroke="currentColor"
              />
              <text x="9" y="28" fill="currentColor" fontSize="17">
                W
              </text>
            </svg>
            <p className="my-3 text-xs font-semibold wrap-anywhere">
              available_rentals.docx
            </p>
            <div className="grid gap-2" aria-hidden="true">
              {[0, 1, 2].map((line) => (
                <span
                  key={line}
                  className="h-1 rounded-full bg-border opacity-55 last:w-2/3"
                />
              ))}
            </div>
          </div>
        </div>

        <div className={styles.workflow}>
          <p className={styles.label}>Ingestion workflow</p>
          <ol className={styles.steps}>
            {steps.map((step, index) => (
              <li
                key={step}
                style={itemStyle(index)}
                className="grid justify-items-center gap-2 text-[0.6875rem] text-muted-foreground"
              >
                <span
                  className={`${styles.marker} size-2.5 rounded-full bg-primary opacity-25`}
                  aria-hidden="true"
                />
                {step}
              </li>
            ))}
          </ol>
          <div ref={laneRef} className={styles.chunks}>
            {rentals.map((rental, index) => (
              <div
                key={rental}
                className={styles.chunk}
                style={itemStyle(index)}
              >
                <span className="min-w-0 truncate">{rental}</span>
                <span className="shrink-0 rounded-full bg-muted px-1.5 py-0.5 text-[0.625rem] text-primary">
                  public
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="min-w-0">
          <p className={styles.label}>Search index</p>
          <div ref={indexRef} className={styles.index} aria-hidden="true">
            {rentals.map((rental, index) => (
              <div key={rental} className="h-4 rounded-lg bg-muted p-1">
                <span
                  className={`${styles.stored} block h-full w-[70%] rounded-[inherit] bg-primary`}
                  style={itemStyle(index)}
                />
              </div>
            ))}
          </div>
          <div className="mt-4 grid justify-items-start gap-2.5 text-xs leading-relaxed">
            <p
              className={`${styles.question} [justify-self:end] rounded-2xl bg-muted px-3 py-2.5`}
            >
              Any 2-bedrooms?
            </p>
            <p
              className={`${styles.answer} rounded-2xl border border-border bg-background px-3 py-2.5 text-primary`}
            >
              Unit 206 · $3,350 · available Nov 15
            </p>
          </div>
        </div>
      </div>

      <figcaption className="mt-6 max-w-[65ch] text-xs leading-relaxed text-muted-foreground">
        A property-management assistant reads a Word document, embeds rental
        chunks labelled public for anyone to read, stores them in a search
        index, and answers a question about available two-bedroom units.
      </figcaption>
    </figure>
  )
}
