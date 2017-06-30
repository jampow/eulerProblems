(ns problem001.core)

(defn ismult
  [n]
  (or (= (rem n 3) 0)
      (= (rem n 5) 0)))

(defn magicSum
  [tot]
  (reduce + (filter ismult (range tot))))

(defn -main
  [x]
  (println (magicSum (read-string x))))
