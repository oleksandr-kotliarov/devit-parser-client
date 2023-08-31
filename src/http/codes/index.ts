import { ICode } from '@/types/codes';
import $api from '..';
import { ENDPOINTS } from '@/utils/endpoints';

export class CodesController {
  static createCode() {
    return $api.post<ICode>(ENDPOINTS.codes);
  }
}
