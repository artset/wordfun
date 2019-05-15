

// var colors = ['#9b9b9b', '#b7b7b7', '#404040', '#ffffff', '#121212', '#181818', '#898989', '#9e9e9e', '#c2c2c2', '#757575', '#838383', '#ffffff', '#bababa', '#bebebe', '#a3a3a3', '#d9d9d9', '#727272', '#5d5d5d', '#9c9c9c', '#a1a1a1', '#d2d2d2', '#b0b0b0', '#ffffff', '#858585', '#898989', '#b2b2b2', '#828282', '#ffffff', '#ffffff', '#ffffff', '#ffffff', '#808080', '#ffffff', '#ffffff', '#b0b0b0', '#c6c6c6', '#ffffff', '#737373', '#c2c2c2', '#ffffff', '#ffffff', '#747474', '#ffffff', '#ffffff', '#ffffff', '#939393', '#737373', '#939393', '#6d6d6d', '#4d4d4d', '#161616', '#ffffff', '#ffffff', '#000000', '#969696', '#6a6a6a', '#444444', '#adadad', '#7e7e7e', '#acacac', '#616161', '#ffffff']

var colors = [
    "#000000",
    "#9f9f9f",
    "#c2c2c2",
    "#c5c5c5",
    "#dedede",
    "#ffffff"
]





function gridData() {
    var data = new Array();
    var xpos = 1; //starting xpos and ypos at 1 so the stroke will show when we make the grid below
    var ypos = 1;
    var width = 50;
    var height = 50;

    var counter = 0

    // iterate for rows 
    for (var row = 0; row < 10; row++) {
        data.push(new Array());

        // iterate for cells/columns inside rows
        for (var column = 0; column < 10; column++) {
            data[row].push({
                x: xpos,
                y: ypos,
                width: width,
                height: height,
                fill: colors[column + counter]
            })
            // increment the x position. I.e. move it over by 50 (width variable)
            xpos += width;
        }
        // reset the x position after a row is complete
        xpos = 1;
        // increment the y position for the next row. Move it down 50 (height variable)
        ypos += height;
        counter += 10;
    }
    return data;
}

var gridData = gridData();
console.log(gridData)

var grid = d3.select("#grid")
    .append("svg")
    .attr("width", "510px")
    .attr("height", "510px");

var row = grid.selectAll(".row")
    .data(gridData)
    .enter().append("g")
    .attr("class", "row");

var column = row.selectAll(".square")
    .data(function (d) { return d; })
    .enter().append("rect")
    .attr("class", "square")
    .attr("x", function (d) { return d.x; })
    .attr("y", function (d) { return d.y; })
    .attr("width", function (d) { return d.width; })
    .attr("height", function (d) { return d.height; })
    .style("fill", function (d) {
        console.log(d.fill);
        if (typeof d.fill === 'undefined') {
            return "#ffffff";
        }
        return d.fill;
    })
    .style("stroke", "#fff");

