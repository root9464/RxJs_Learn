// группировка по идентификатору
/* 
import {groupBy, mergeMap, of, reduce} from 'rxjs';

of(
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'Parcel' },
  { id: 2, name: 'webpack' },
  { id: 1, name: 'TypeScript' },
  { id: 3, name: 'TSLint' }
).pipe(
  groupBy(p => p.id),
  mergeMap(group$ => group$.pipe(reduce((acc: { id: number; name: string; }[], cur) => [...acc, cur], [] as { id: number; name: string; }[])))
)
.subscribe(p => console.table(p));
 */




// преобразование в массив их значений
/*
 const source$ = new Observable<{ id: string; value: string; }>((observer) => {
  observer.next({ id: '1', value: 'Hello' })
  observer.next({ id: '2', value: 'World' })
  observer.next({ id: '3', value: '' }) 
  observer.complete()
});


source$
.pipe(
    filter((obj) => obj.value!== ''), 
    map((obj) => ({...obj })),
  )
  .subscribe({
    next(x) {
      const arr = [...x.id, x.value]
      console.log(arr);
      
    },
    complete: () => console.log('complete')
});
 */



// преобразование потоков в массив
/* 
const array = [
  {id: '1', value: 'Hello'},
  {id: '2', value: 'World'},
  {id: '3', value: 'ffff'},
]

const source$ = of(array)
source$.pipe(
  toArray()
).subscribe((x) => console.table(x)) 
*/


