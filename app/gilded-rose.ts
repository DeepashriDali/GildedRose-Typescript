export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;
    

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() {
        let item1:string = 'Aged Brie';
        let item2:string = 'Backstage passes to a TAFKAL80ETC concert';
        let item3:string = 'Sulfuras, Hand of Ragnaros';
        const maxQ:number = 50;
        const minQ:number = 0;
        const incQuality = quality => quality> minQ ?quality +1 : quality;
        const decQuality = quality => quality< maxQ ?quality -1 : quality;
   
            for (let item of this.items) 
            // for (let i = 0; i < this.items.length; i++) 
            {
                if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
                    if (item.quality > 0) {
                        if (item.name != 'Sulfuras, Hand of Ragnaros') {
                            item.quality = item.quality - 1
                        }
                    }
                } else {
                    if (item.quality < 50) {
                        item.quality = item.quality + 1
                        if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
                            if (item.sellIn < 11) {
                                if (item.quality < 50) {
                                    item.quality = item.quality + 1
                                }
                            }
                            if (item.sellIn < 6) {
                                if (item.quality < 50) {
                                    item.quality = item.quality + 1
                                }
                            }
                        }
                    }
                }
                if (item.name != 'Sulfuras, Hand of Ragnaros') {
                    item.sellIn = item.sellIn - 1;
                }
                if (item.sellIn < 0) {
                    if (item.name != 'Aged Brie') {
                        if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
                            if (item.quality > 0) {
                                if (item.name != 'Sulfuras, Hand of Ragnaros') {
                                    item.quality = item.quality - 1
                                }
                            }
                        } else {
                            item.quality = item.quality - item.quality
                        }
                    } else {
                        if (item.quality < 50) {
                            item.quality = item.quality + 1
                        }
                    }
                }
            }

        return this.items;
    }
}
