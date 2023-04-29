export class ItemDTO {
    name: string;
    price: number;

    constructor(item: ItemDTO) {
        this.name = item.name;
        this.price = item.price;
    }
}