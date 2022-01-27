import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should not be sulphuras', function() {

    const inputItems = [
        new Item("Aged Brie", 12, 3),
        new Item("Aged Brie", 8, 9),
        new Item("Aged Brie", 5, 6),
        new Item("Backstage passes to a TAFKAL80ETC concert", 20, 10),
        new Item("Backstage passes to a TAFKAL80ETC concert", 8, 45),
        new Item("Backstage passes to a TAFKAL80ETC concert", 4, 48),
        new Item("Item1", 5, 2),
        ]
        const expectedOutputItems = [
            new Item('Aged Brie', 8, 7 ),
            new Item('Aged Brie', 4, 13 ),
            new Item('Aged Brie', 1, 10 ),
            new Item('Backstage passes to a TAFKAL80ETC concert', 16, 14),
            new Item('Backstage passes to a TAFKAL80ETC concert', 4, 50),
            new Item('Backstage passes to a TAFKAL80ETC concert', 0, 50),
            new Item('Item1', 1, 0),
        ]
       const gildedRose = new GildedRose(inputItems);

       gildedRose.updateQuality();
       gildedRose.updateQuality();
       gildedRose.updateQuality();
       gildedRose.updateQuality();
       
        expect(gildedRose.items).to.deep.equal(expectedOutputItems);
    });

});
