

////////// Public Variables //////////////
const itemList = document.getElementById('item-list');
const ctnSelect = document.getElementById('ctn-drop');


//////////// Objects & Arrays //////////////
let boxes = {
    b6x6x2: { length: '6', width: '6', height: '2', wgt: '3.2' } ,
    b6x6x3: { length: '6', width: '6', height: '3', wgt: '3' } ,
    b9x6x2: { length: '9', width: '6', height: '2', wgt: '3.2' } ,
    b9x6x4: { length: '9', width: '6', height: '4', wgt: '3.9' } ,
    b10x6x3: { length: '10', width: '6', height: '3', wgt: '3.5' } ,
    b10x6x5: { length: '10', width: '6', height: '5', wgt: '4.2' } ,
    b10x6x6: { length: '10', width: '6', height: '6', wgt: '5' } ,
    b10x9x6: { length: '10', width: '9', height: '6', wgt: '7.1' } ,
    b11x6x4: { length: '11', width: '6', height: '4', wgt: '4.3' } ,
    b12x6x4: { length: '12', width: '6', height: '4', wgt: '4.6' } ,
    b12x6x6: { length: '12', width: '6', height: '6', wgt: '7.5' } ,
    b12x8x6: { length: '12', width: '8', height: '6', wgt: '6.9' } ,
    b12x9x6: { length: '12', width: '9', height: '6', wgt: '7.4' } ,
    b12x10x3: { length: '12', width: '10', height: '3', wgt: '6.8' } ,
    b12x12x6: { length: '12', width: '12', height: '6', wgt: '13' } ,
    b14x10x8: { length: '14', width: '10', height: '8', wgt: '10.5' } ,
    b17x14x5: { length: '17', width: '14', height: '5', wgt: '14' } ,
    b17x14x9: { length: '17', width: '14', height: '9', wgt: '16' } 
}


let items = {
    hl1038: { sku: '1038', desc: 'NAV Headlamp', wgt: '3.4' },
    hl1045: { sku: '1045', desc: 'Headlamp - Gray', wgt: '3.4' },
    hl1090: { sku: '1090', desc: 'Pro Kit', wgt: '89.6' },
    hl1205b: { sku: '1205B', desc: 'HEX-bx', wgt: '9.3' },
    hl1205: { sku: '1205', desc: 'HEX', wgt: '9' },
    hl1236: { sku: '1236', desc: 'Headlamp - Yellow', wgt: '3.4' },
    hl1243: { sku: '1243', desc: 'Headlamp - Black', wgt: '3.4' },
    hl1250: { sku: '1250', desc: 'Mammoth - Yellow', wgt: '11.2' },
    hl1304: { sku: '1304', desc: 'PUC - Black', wgt: '8' },
    hl1342: { sku: '1342', desc: 'PUC - Yellow', wgt: '8' },
    hl1342b: { sku: '1342B', desc: 'PUC - Yellow - bx', wgt: '8' },
    hl1403: { sku: '1403', desc: 'Journey #150 - Yellow', wgt: '6.4' },
    hl1441: { sku: '1441', desc: 'Journey #150 - Black', wgt: '6.4' },
    hl1564: { sku: '1564', desc: 'Journey #160 - Black', wgt: '6.3' },
    hl1564b: { sku: '1564B', desc: 'Journey #160 - Black(bx)', wgt: '6.2' },
    hl1588: { sku: '1588', desc: 'Journey #160 - Yellow', wgt: '6.3' },
    hl1588b: { sku: '1588B', desc: 'Journey #160 - Yellow(bx)', wgt: '6.2' },
    hl1595: { sku: '1595', desc: 'Journey #150 - Black', wgt: '6.6' },
    hl1755: { sku: '1755', desc: 'Journey #300 - Black', wgt: '6.6' },
    hl1762: { sku: '1762', desc: 'Journey #300 - Yellow', wgt: '6.6' },
    hl1779: { sku: '1779', desc: 'Journey #300 - Gray', wgt: '6.6' },
    hl1793: { sku: '1793', desc: 'Journey #600 - Black', wgt: '10.7' },
    hl1823: { sku: '1823', desc: 'Mammoth - TT', wgt: '11.7' },
    hl1847: { sku: '1847', desc: 'Journey #300 - TT', wgt: '6.6' },
    hl1854: { sku: '1854', desc: 'True Timber Pro Kit', wgt: '100' },
    hl1885: { sku: '1885', desc: 'Atlas', wgt: '16.9' }
}

let dimArray = [];



//////////// Public Functions ///////////////

// create array of objects from our boxes Object
function createBoxList() {
    let boxDims = Object.values(boxes);

    for (let i = 0; i < boxDims.length; i++) {
        let x = Object.values(boxDims[i]);
        let length = x[0];
        let width = x[1] ;
        let height = x[2];
        dimArray.push(length + 'x' + width + 'x' + height);
    }

    ///////create html datalist ///////////
    const boxList = document.createElement('datalist');
    boxList.id = 'boxList';
    ctnSelect.appendChild(boxList);

    //iterate dimsArray to create options for datalist
    for (let i = 0; i < dimArray.length; i++) {
        const option = document.createElement('option');
        option.value = dimArray[i];
        boxList.appendChild(option);
    }
}




//////////// Start App ////////////////
itemList.focus();
createBoxList();


///////////// Testing /////////////////
