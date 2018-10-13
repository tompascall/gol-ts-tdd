import Being from './being';
import Beings from './beings';
import { status } from './status';

export interface RulesI {
  getNextStatus(being: Being, beings: Beings): status;
}