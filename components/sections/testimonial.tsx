export function Testimonial() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-xl border border-border bg-card/50 p-8 backdrop-blur-sm sm:p-12">
          <div className="border-l-2 border-accent pl-6 sm:pl-8">
            <blockquote className="text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
              &ldquo;Crystal Edge helped us migrate to AWS and cut our
              infrastructure costs by 40%. Their team moved fast and kept us in
              the loop every step of the way.&rdquo;
            </blockquote>
            <div className="mt-6">
              <p className="font-semibold text-foreground">Sarah Chen</p>
              <p className="text-sm text-muted-foreground">
                CTO, Scaleway Solutions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
