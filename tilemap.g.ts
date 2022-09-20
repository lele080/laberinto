// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000101010101010101010101010101010102020203020202020202090101010105010101050101010101010501010101050101010501010101010105010101010502020306020202020302050202020207010105010101010105010101010101010101050101010101050101010101010105010501010101010402030209020202080207010101010101010501050101010403010a020202020202070105010101030701050101010101010101050101010501010a02020203020202020701010105010105010501040901010101010101050101050105010105010101010101010406020202070101040202020202020201010105010101010101010101010101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . 2 2 2 2 . 
2 2 2 . 2 2 2 2 2 2 . 2 2 2 2 . 
2 2 2 . 2 2 2 2 2 2 . 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
2 2 . 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 . 2 2 2 2 2 . 2 2 2 2 2 2 2 
. 2 . 2 2 2 2 2 . . . . . . . . 
. . . 2 2 2 2 2 2 2 . 2 . 2 2 2 
. . 2 . . . . . . . . 2 . 2 2 2 
. . 2 . 2 2 2 2 2 2 2 2 . 2 2 2 
. 2 2 . . . . . . . . . . 2 2 2 
. 2 2 . 2 . 2 . . 2 2 2 2 2 2 2 
. 2 2 . 2 . 2 2 . 2 2 2 2 2 2 2 
. . . . . . 2 2 . . . . . . . . 
2 2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.vehicle.roadHorizontal,sprites.vehicle.roadIntersection3,sprites.vehicle.roadTurn3,sprites.vehicle.roadVertical,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn4,sprites.vehicle.roadIntersection2,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
