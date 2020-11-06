const fs = require('fs');
const { argv } = require('process');
var i
var final = new Array()

const FilterArray = fs
                        .readFileSync(argv[3], 'utf-8')
                        .split(',')
const UnfilteredList = fs
                        .readFileSync(argv[2], 'utf-8')
                        .split('\n');
                        const unfilteredLength = UnfilteredList.length
                        for (i = 0; i < UnfilteredList.length; i++){
                            console.log('working ' + i + '/' + unfilteredLength)
                            var result = FilterArray.some(s => UnfilteredList[i].includes(s))
                              if (result == true){}
                              else{
                                  final.push(UnfilteredList[i])
                              }
                        }
                        console.log('finished loop')
                        fs.writeFile('filtered.txt', final, (err) => { 
      
                            // In case of a error throw err. 
                            if (err) throw err; 
                        })
                        console.log('done')
                        total = unfilteredLength - final.length
                        console.log("Removed" + total + "items")
                        return