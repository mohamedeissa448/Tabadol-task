import { Component, Input, OnInit } from '@angular/core';
import { RequestStatus } from 'src/app/core/enums/request-status.enum';
import { Operation } from 'src/app/core/models/operation.model';

@Component({
  selector: 'app-history-item',
  templateUrl: './history-item.component.html',
  styleUrls: ['./history-item.component.css'],
})
export class HistoryItemComponent implements OnInit {
  @Input() item!: Operation;
  RequestStatus = RequestStatus;

  constructor() {}

  ngOnInit(): void {}
}
