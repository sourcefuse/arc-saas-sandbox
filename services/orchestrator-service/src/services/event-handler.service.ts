import {extensionPoint, extensions, Getter} from '@loopback/core';
import {AnyObject} from '@loopback/repository';
import { EventHandlerExtensionPoint, IConsumer, QueueType } from 'loopback4-message-bus-connector';

@extensionPoint(EventHandlerExtensionPoint.key)
export class EventHandlerService<Stream extends AnyObject = AnyObject> {
  constructor(
    @extensions()
    private readonly getConsumers: Getter<IConsumer<AnyObject, string>[]>,
  ) {}

  async handle<Event extends keyof Stream>(
    event: Event,
    data: Stream[Event],
    queue: QueueType,
  ) {
    console.log('inside EventHandleService');
    
      const buffer: Buffer = data as unknown as Buffer;

    // Convert buffer -> string
    const jsonString = buffer.toString('utf8');

    // Parse string -> JSON object
    const parsed = JSON.parse(jsonString);
    console.info('Parsed Event after decoding:', parsed);

    const consumers = await this.getConsumers();
    await Promise.all(
      consumers
        .filter(
          consumer => consumer.event === event && consumer.queue === queue,
        )
        .map(consumer => consumer.handle(parsed.detail)),
    );
  }
}
