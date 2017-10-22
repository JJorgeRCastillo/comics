import { Injectable } from '@angular/core';

@Injectable()
export class ComicService {

   personaje: Personaje[] = [
      {
         name: "The Flash",
         title: "The Fastest O",
         complexity: "O(1)",
         description: "The fastes O, for any algorithm.",
         details: "The holy grail – O(1) algorithms always complete in a fixed time irrespective of the size of the input.",
         code: "get_first_item(array haystack) {\nif(haystack.size > 0) {\nreturn haystack[0];\n}\n}",
         example: "Return the head of a list, insert a node into a linked list, pushing/popping a stack, inserting/removing from a queue…",
         img: "assets/img/flash.png"
      },
      {
         name: "Shrinking Violet",
         title: "Divide and Conquer",
         complexity: "O(log(n))",
         description: "A common way to shrink inputs quickly by discarting halves.",
         details: "These algorithms never have to look at all the input. They often halve inputs at each stage and thus have inverse the performance of exponentiation (see the Power-Sisters to contrast).",
         code: "binary_jump_search(item needle, array sortedhaystack) {\nn = sortedhaystack.size;\n jump = n/2;\npos = 0;\n while(jump > 0) {\nwhile(pos+jump < n && sortedhaystack[pos+jump] <= needle)\n{\npos += jump;\n}\njump = jump/2;\n}\nif(sortedhaystack[pos] == needle)\n{\nreturn pos;\n}\n}",
         example: "Looking up a number in a phone book, looking up a word in a dictionary, doing a binary search, find element in a binary search tree, deleting from a doubly-linked list…",
         img: "assets/img/violet.png"
      },
      {
         name: "Groot",
         title: "The Rare O",
         complexity: "O(sqrt(n))",
         description: "A straight gut looking at each input leads to linea scale.",
         details: "If we notice that sqrt(n) = (n/sqrt(n)) in some sense,  is in the 'middle' of . This type of an algorithm is not very commonly found.",
         code: "",
         example: "Grover’s algorithm, The Square Root Trick",
         img: "assets/img/groot.png"
      },
      {
         name: "Clark Kent",
         title: "A Common O",
         complexity: "O(n)",
         description: "A straight guy looking at each input leads to linea scale.",
         details: "This is a linear algorithm which scales directly proportional to the input. This is commonly the case because we often have to access an item at least once.",
         code: "find_in_unsorted(item needle, array haystack) {\nfor(item in haystack)\n{\n if(item == needle)\n{\nreturn item;\n}\n}\n}",
         example: "Finding the maximum/minimum of a collection, finding the max sequential sum, traversing a linked list, deleting from a singly-linked list,…",
         img: "assets/img/clark-kent.png"
      },
      {
         name: "Hisoka The Card Magician",
         title: "A Sorting O",
         complexity: "O(n*log(n))",
         description: "Often reflects a sort",
         details: "Efficient general sorting algorithms work in O(n*log(n)) time, and many algorithms that use sorting as a subroutine also have this time complexity. It can be shown that algorithms that need to compare elements cannot sort faster than this (Algorithms like counting sort and radix sort use other information and can be faster).",
         code: "",
         example: "Merge Sort, Quick Sort, Heap Sort",
         img: "assets/img/hisoka.png"
      },
      {
         name: "The Power Sisters",
         title: "The Power O's",
         complexity: "O(n^x)",
         description: "Growing exponentially – We can usually see 'x' nested loops in the algorithm.",
         details: "These algorithms grow as an polynomial of the input. O(n^2) are known as Quadratic and O(n^3) are known as Cubic algorithms. Higher powers are just known as bad algorithms 🙂 . The powers usually reflect the number of nested loops in the system.Note that whenever there are multiple Big-O’s in an algorithm, the biggest class wins out because it usually dominates the scaling. We can see this in the example below which has both O(n^2) (two nested loops) and O(n^3) (three nested loops) but it’s overall Big-O is We can see this by noticing the time that smaller classes like O(n^2) take in comparison with larger classes like O(n^3).",
         code: "",
         example: "O(n^2): multiplying two n-digit numbers by a simple algorithm, adding two n×n matrices, bubble sort, insertion sort, number of handshakes in a room…\nO(n^3): multiplying two n×n matrices by a naive algorithm…",
         img: "assets/img/power-sisters.png"
      },
      {
         name: "Wonder Woman",
         title: "Combination O",
         complexity: "O(2^n)",
         description: "Combination Loops – looking at various subsets in the input.",
         details: "",
         code: "",
         example: "Tower of Hanoi, Naive Finonacci Calculation, …",
         img: "assets/img/wonder-woman.png"
      },
      {
         name: "Link the Traveler",
         title: "Permutation O",
         complexity: "O(n!)",
         description: "All possible permutations of the inputs.",
         details: "This algorithm iterates over all possible combinations of the inputs.",
         code: "",
         example: "The traveling salesman problem.",
         img: "assets/img/link.png"
      },
      {
         name: "The Blackest Panther",
         title: "The Slowest O",
         complexity: "O(n^n)",
         description: "The worst scaling!",
         details: "This is just included for fun… Such an algorithm will not scale in any useful way.",
         code: "",
         example: "Please don’t find any…",
         img: "assets/img/black-panther.png"
      }
   ];

   constructor() {

   }

   getPersonajes() {
      return this.personaje;
   }

   getPersonaje(texto: string) {
      for (let p of this.personaje) {
         if(texto === p.complexity || texto.toUpperCase() === p.name.toUpperCase()) {
             return p;
         }
      }
   }
}

export interface Personaje {
   name: string;
   title: string;
   complexity: string;
   description: string;
   details: string;
   code: string;
   example: string;
   img: string;
}