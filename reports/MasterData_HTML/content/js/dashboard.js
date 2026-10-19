/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 100.0, "KoPercent": 0.0};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.9709285714285715, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.99475, 500, 1500, "Districts (stateId=1)"], "isController": false}, {"data": [0.9925, 500, 1500, "Lead Source"], "isController": false}, {"data": [0.9925, 500, 1500, "Brands (tractor)"], "isController": false}, {"data": [0.9935, 500, 1500, "Models (brandId=2, tractor)"], "isController": false}, {"data": [0.9985, 500, 1500, "Years"], "isController": false}, {"data": [0.98475, 500, 1500, "Tehsils (districtId=5)"], "isController": false}, {"data": [0.99225, 500, 1500, "Punch-in Sub-reasons (reasonId=43)"], "isController": false}, {"data": [0.9945, 500, 1500, "Lenders"], "isController": false}, {"data": [0.989, 500, 1500, "Mitigants"], "isController": false}, {"data": [0.6865, 500, 1500, "Vehicles"], "isController": false}, {"data": [0.99225, 500, 1500, "States"], "isController": false}, {"data": [0.99225, 500, 1500, "Punch-in Reasons"], "isController": false}, {"data": [0.994, 500, 1500, "Partner Types"], "isController": false}, {"data": [0.99575, 500, 1500, "Punch-in Meeting-reasons (reasonId=43)"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 28000, 0, 0.0, 268.80535714286185, 32, 1049, 265.0, 375.0, 517.9500000000007, 737.0, 602.3448424222868, 1124.9935084906422, 148.1492685812628], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Districts (stateId=1)", 2000, 0, 0.0, 261.46750000000003, 45, 767, 270.0, 352.0, 379.0, 516.9200000000001, 45.02780466938334, 37.31727681687192, 8.00298872053493], "isController": false}, {"data": ["Lead Source", 2000, 0, 0.0, 257.06949999999983, 37, 722, 259.0, 362.0, 393.0, 562.0, 45.522829699094096, 40.61076522454136, 7.735324577775755], "isController": false}, {"data": ["Brands (tractor)", 2000, 0, 0.0, 267.9340000000009, 42, 745, 269.0, 375.0, 404.9499999999998, 584.99, 44.597065513089234, 113.5688880070129, 7.926431565802971], "isController": false}, {"data": ["Models (brandId=2, tractor)", 2000, 0, 0.0, 265.2210000000002, 42, 1049, 265.0, 361.0, 390.0, 611.7000000000003, 44.447407604951444, 36.796854165277686, 8.333888925928395], "isController": false}, {"data": ["Years", 2000, 0, 0.0, 105.25850000000003, 32, 537, 87.0, 178.0, 241.0, 326.99, 45.004500450045, 59.9670245344847, 7.383550855085509], "isController": false}, {"data": ["Tehsils (districtId=5)", 2000, 0, 0.0, 271.19900000000024, 44, 792, 270.0, 367.9000000000001, 404.9499999999998, 637.98, 44.93271326189032, 208.54818980841813, 8.029967311451102], "isController": false}, {"data": ["Punch-in Sub-reasons (reasonId=43)", 2000, 0, 0.0, 256.7559999999992, 39, 708, 259.5, 356.0, 389.0, 535.9300000000001, 45.563275999544366, 40.970462182480915, 8.676600410069483], "isController": false}, {"data": ["Lenders", 2000, 0, 0.0, 258.89249999999913, 36, 709, 264.0, 349.9000000000001, 383.0, 509.94000000000005, 45.676700315169235, 162.17632883512994, 7.583045950760517], "isController": false}, {"data": ["Mitigants", 2000, 0, 0.0, 261.28099999999887, 37, 752, 263.0, 354.9000000000001, 400.9499999999998, 617.0, 45.765543122583004, 242.67230637599826, 7.687181071371365], "isController": false}, {"data": ["Vehicles", 2000, 0, 0.0, 534.5450000000025, 62, 1012, 579.5, 745.0, 786.9499999999998, 853.99, 44.35474928477967, 43.21549495048901, 51.32849404537491], "isController": false}, {"data": ["States", 2000, 0, 0.0, 251.28150000000008, 36, 738, 251.0, 333.9000000000001, 371.0, 629.8600000000001, 44.98627918484862, 64.56655720005399, 7.424493342030681], "isController": false}, {"data": ["Punch-in Reasons", 2000, 0, 0.0, 255.8030000000001, 39, 709, 257.0, 351.0, 388.0, 550.97, 45.548748548133645, 44.32994143427316, 7.9621347559725795], "isController": false}, {"data": ["Partner Types", 2000, 0, 0.0, 260.57999999999964, 33, 662, 267.0, 354.0, 386.0, 524.98, 45.7184656882915, 45.831623355563934, 7.8578612901751015], "isController": false}, {"data": ["Punch-in Meeting-reasons (reasonId=43)", 2000, 0, 0.0, 255.98650000000006, 37, 657, 260.0, 342.9000000000001, 374.0, 492.7000000000003, 45.67774351947014, 42.98480858170607, 8.876827109740779], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": []}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 28000, 0, "", "", "", "", "", "", "", "", "", ""], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}, {"data": [], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
