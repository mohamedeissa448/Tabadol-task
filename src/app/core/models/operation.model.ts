import { RequestStatus } from "../enums/request-status.enum";

export interface Operation {
  name: string;
  date: Date;
  job: string;
  requestStatus: RequestStatus;
  imageUrl?: string ;
  description?: string ;
  file?: {
    url: string;
    name: string;
    type: string;
    size: number;
  } ;
  recommendation?: string ;
}
