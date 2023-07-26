import { Component, OnInit } from '@angular/core';
import { OperationsHistoryService } from '../../../../core/services/operations-history.service';
import { Operation } from 'src/app/core/models/operation.model';

@Component({
  selector: 'app-history-container',
  templateUrl: './history-container.component.html',
  styleUrls: ['./history-container.component.css']
})
export class HistoryContainerComponent implements OnInit {

  items: Operation[] = []
  constructor(private operationsHistoryService: OperationsHistoryService) { }

  ngOnInit(): void {
    this.operationsHistoryService.getHistoryItems().subscribe(response =>{
      this.items = response;
    })
  }

}
