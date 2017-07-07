(ns problem002.core-test
  (:require [clojure.test :refer :all]
            [problem002.core :refer :all]))

(deftest fib-test
  (testing "fib until 6"
    (is (= [1 2 3 5] (fib 6))))

  (testing "fib until 15"
    (is (= [1 2 3 5 8 13] (fib 15))))

  (testing "fib with no params"
    (is (= [1 2 3 5 8] (fib)))))

