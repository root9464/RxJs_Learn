// объединение двух потоков в один и преобразование в массив их значений
/* 
const s1$ = of([1, 2, 3]);
const s2$ = of([4, 5, 6]);

forkJoin([s1$, s2$])
  .pipe(
    map(([s1, s2]) => [...s1, ...s2])
  )
.subscribe(console.log);

 */



//разделения 1 потока на 2
/* const observableValues: Observable<number[]> = of([1, 2, 3, 4, 5, 6,7,8,9]);

observableValues.pipe(
  map((arr) => [
    arr.slice(0, Math.ceil(arr.length / 2)),
    arr.slice(Math.ceil(arr.length / 2)),
  ])
).subscribe(([firstHalf, secondHalf]) => {
  console.log('поток1:', firstHalf);
  console.log('поток2:', secondHalf);
});
 */


//синхронная конкатенация двух потоков
/* 
const s1$ = of([1, 2, 3]);
const s2$ = of([4, 5, 6]);

const observable$ = concat(s1$, s2$);

observable$.subscribe((value) => console.log(value)); */


//асинхронная конкатенация двух потоков 
/* 
const s1$ = of([1, 2, 3]);
const s2$ = of([4, 5, 6]);
merge(s1$,s2$).subscribe(console.log) 
*/