import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AccordionComponent } from "./components/accordion/accordion.component";
import { HistoryItemComponent } from "../features/operations-history/components/history-item/history-item.component";

@NgModule({
  declarations: [
    AccordionComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AccordionComponent
  ],
  providers: [],
})
export class SharedModule {}
