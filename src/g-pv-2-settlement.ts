import { BigInt } from "@graphprotocol/graph-ts"
import {
  GPv2Settlement,
  Interaction,
  OrderInvalidated,
  PreSignature,
  SettleCall,
  Settlement,
  Trade
} from "../generated/GPv2Settlement/GPv2Settlement"
import { SettleCallsCounter } from "../generated/schema"

export function handleInteraction(event: Interaction): void {} 

export function handleOrderInvalidated(event: OrderInvalidated): void {}

export function handlePreSignature(event: PreSignature): void {}

export function handleSettlement(event: Settlement): void {}

export function handleTrade(event: Trade): void {}

export function handleSettle(call: SettleCall): void {
  let cntr = SettleCallsCounter.load("1")

  if(!cntr) {
    cntr = new SettleCallsCounter("1")
    cntr.count = BigInt.zero()
  }

  cntr.count = cntr.count.plus(BigInt.fromI32(1))
  cntr.save()
}
