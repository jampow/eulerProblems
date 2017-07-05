(ns problem002.core)

(defn fib
  [lim, arr]
  (if (not arr) (def arr [1, 2]))
  (if (not lim) (def arr [1, 2]))
  (take-last 1 arr))

(defn -main
  [lim]
  (println (fib (read-string lim) [])))
