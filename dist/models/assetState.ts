export enum AssetActionDefinition {
    checkin = 'checkin',
    checkout = 'checkout'
}

export enum AssetState {
    inventory = 'Inventory',
    leased = 'Leased',
    missing = 'Missing',
    nonreturn = 'Nonreturn',
    damaged = 'Damaged'
}