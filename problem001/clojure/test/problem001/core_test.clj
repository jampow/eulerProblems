(ns problem001.core-test
  (:require [clojure.test :refer :all]
            [problem001.core :refer :all]))

(deftest multiple
  (testing "when pass 3 should return true"
    (is (= (ismult 3) true)))

  (testing "when pass 9 should return true"
    (is (= (ismult 9) true)))

  (testing "when pass 5 should return true"
    (is (= (ismult 5) true)))

  (testing "when pass 10 should return true"
    (is (= (ismult 10) true)))

  (testing "when pass 4 should return false"
    (is (= (ismult 4) false))))

(deftest sums
  (testing "testing the problem sample"
    (is (= (magicSum 10) 23))))
