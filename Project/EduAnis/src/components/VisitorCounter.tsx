import { useEffect, useState } from "react";

/**
 * Live unique-visitor counter.
 *
 * Storage: Abacus (https://abacus.jasoncameron.dev) — a free, no-auth hit counter.
 *  - First visit  -> /hit  (creates + increments the global count)
 *  - Return visit -> /get  (read-only, so a refresh never double-counts)
 *
 * "Unique" is tracked with a localStorage flag per browser. Fully graceful:
 * if the service is unreachable the component renders nothing.
 */

const COUNTER_BASE = "https://abacus.jasoncameron.dev";
const NAMESPACE = "eduanis-platform";
const KEY = "site-visits";
const VISIT_FLAG = "eduanis_visited";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const alreadyVisited = localStorage.getItem(VISIT_FLAG) === "true";
    const endpoint = alreadyVisited
      ? `${COUNTER_BASE}/get/${NAMESPACE}/${KEY}`
      : `${COUNTER_BASE}/hit/${NAMESPACE}/${KEY}`;

    fetch(endpoint, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("counter unavailable");
        return res.json();
      })
      .then((data) => {
        if (typeof data?.value === "number") {
          setCount(data.value);
          if (!alreadyVisited) localStorage.setItem(VISIT_FLAG, "true");
        } else {
          setFailed(true);
        }
      })
      .catch((err) => {
        if (err.name !== "AbortError") setFailed(true);
      });

    return () => controller.abort();
  }, []);

  if (failed) return null;

  return (
    <div className="inline-flex items-center gap-2.5 glass-card px-4 py-2 rounded-full text-sm font-medium text-slate-400 animate-fade-in-up">
      {/* Live pulse dot */}
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-400" />
      </span>
      <span className="text-slate-200 font-bold tabular-nums">
        {count === null ? "···" : count.toLocaleString()}
      </span>
      <span>visitors so far</span>
    </div>
  );
}
