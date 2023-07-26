import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { RequestStatus } from 'src/app/core/enums/request-status.enum';
import { Operation } from 'src/app/core/models/operation.model';

@Injectable({
  providedIn: 'root',
})
export class OperationsHistoryService {
  constructor() {}

  getHistoryItems(): Observable<Operation[]> {
    return of([
      {
        name: 'سالم حسن',
        date: new Date(),
        job: 'مسئول الرقابة',
        requestStatus: RequestStatus.RequestPrepared,
        imageUrl: undefined,
        description: 'يوجد تفاصيل اضافية في بعض الحقول',
        file: {
          url: 'https://freeiconshop.com/wp-content/uploads/edd/document-download-outline.png',
          name: 'ملف الرفع المساحي',
          type: 'PDF',
          size: 12,
        },
        recommendation: undefined,
      },
      {
        name: 'صالح عبد الله',
        date: new Date(),
        job: 'المهندس',
        requestStatus: RequestStatus.RequestPrepared,
        imageUrl: undefined,
        description: 'يوجد تفاصيل اضافية في بعض الحقول',
        file: undefined,
        recommendation:
          'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايديديونتيوت لابوري ات دولار ماجنا أليكيوا',
      },
      {
        name: 'محمد أحمد',
        date: new Date(),
        job: 'رئيس القسم',
        requestStatus: RequestStatus.RequestAssigned,
        imageUrl: undefined,
        description: undefined,
        file: undefined,
        recommendation: undefined,
      },
      {
        name: 'خالد الخالدي',
        date: new Date(),
        job: 'المستفيد',
        requestStatus: RequestStatus.RequestSubmitted,
        imageUrl: undefined,
        description: undefined,
        file: undefined,
        recommendation: undefined,
      },
    ]);
  }
}
