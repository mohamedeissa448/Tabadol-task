import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './operations-history.routes';
import { HistoryContainerComponent } from './components/history-container/history-container.component';
import { HistoryItemComponent } from './components/history-item/history-item.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [HistoryContainerComponent, HistoryItemComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class OperationsHistoryModule {}
