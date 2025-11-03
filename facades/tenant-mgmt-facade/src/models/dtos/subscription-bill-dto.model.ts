import {Model, model, property} from '@loopback/repository';

@model({
  description: 'subscription bill',
})
export class SubscriptionBillDTO extends Model {
  @property({
    type: 'string',
    description: 'tenant name',
    required: true,
  })
  companyName: string;

  @property({
    type: 'string',
    description: 'plan name',
    required: true,
  })
  planName: string;

  @property({type: 'string'})
  startDate: string;

  @property({type: 'string'})
  endDate: string;

  @property({type: 'number'})
  status: number;

  @property({
    type: 'string',
    required: true,
  })
  userName: string;

  constructor(data?: Partial<SubscriptionBillDTO>) {
    super(data);
  }
}
