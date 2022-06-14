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
    this.searchInput$ = fromEvent(this.searchInput.nativeElement, 'keyup').pipe(
      map((event) => (event as any).target.value),
      tap((searchTerm) => console.log(searchTerm)),
      debounceTime(1000),
      filter((searchText) => searchText.length > 2),
      distinctUntilChanged(),
      tap((searchTerm) => this.search.emit(searchTerm)),
    );
  }
}
