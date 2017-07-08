(ns problem002.core)

(defn fib
  ([] (fib 10))
  ([lim] (fib lim [1 2]))
  ([lim, arr]
    (if (> (last arr) lim)
      (drop-last arr)
      (fib lim (conj arr (reduce + (take-last 2 arr)))))))

(defn problem002
  [lim]
  (reduce + (filter even? (fib lim))))

(defn -main
  [lim]
  (println (problem002 (read-string lim))))
