import { Lot } from "../entities/Lot";
import { Output } from "../entities/Output";
import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from "typeorm";

@EventSubscriber()
export class OutputSubscriber implements EntitySubscriberInterface<Output> {
  listenTo() {
    return Output;
  }

  async beforeInsert(event: InsertEvent<Output>) {
    try {
      const serial = event.entity.serial;
      const lot = await Lot.findOne({
        where: {
          serial,
        },
      });
      if (!lot) new ErrorEvent("No existe el serial");
      else if (lot.serial === serial) {
        console.log("AFTER INSERT OUTPUT");
        lot.stock = 0;
        await Lot.update({ serial }, lot);
      }
    } catch (error) {}
  }
}
