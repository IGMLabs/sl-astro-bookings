import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { fromEvent, map, tap, Observable, debounceTime, filter, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.control.html',
  styleUrls: ['./search.control.css'],
})
export class SearchControl implements OnInit {
  @ViewChild('searchInput', { static: true }) public searchInput!: ElementRef;
  @Output() search = new EventEmitter<string>();

  public searchInput$!: Observable<string>;

  constructor() {}

  ngOnInit(): void {
    const nativeSource$ = fromEvent(this.searchInput.nativeElement, 'keyup');
    nativeSource$.pipe(
      map((event) => (event as any).target.value as string),
      tap((searchTerm) => console.log('antes:', searchTerm)),
      debounceTime(500),
      tap((searchTerm) => console.log('después: ', searchTerm)),
      filter((searchText) => searchText.length > 1),
      tap((searchTerm) => console.log('filtrado: ', searchTerm)),
      distinctUntilChanged(),
      tap((searchTerm) => console.log('para buscar: ', searchTerm))
    ).subscribe((searchTerm) => this.search.emit(searchTerm));
  }
}
