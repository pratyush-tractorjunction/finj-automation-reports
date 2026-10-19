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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 40.0, "minX": 0.0, "maxY": 1011.0, "series": [{"data": [[0.0, 40.0], [0.1, 48.0], [0.2, 49.0], [0.3, 49.0], [0.4, 53.0], [0.5, 54.0], [0.6, 54.0], [0.7, 55.0], [0.8, 58.0], [0.9, 62.0], [1.0, 62.0], [1.1, 63.0], [1.2, 64.0], [1.3, 64.0], [1.4, 64.0], [1.5, 66.0], [1.6, 66.0], [1.7, 67.0], [1.8, 67.0], [1.9, 69.0], [2.0, 69.0], [2.1, 69.0], [2.2, 69.0], [2.3, 70.0], [2.4, 70.0], [2.5, 70.0], [2.6, 71.0], [2.7, 71.0], [2.8, 71.0], [2.9, 71.0], [3.0, 71.0], [3.1, 72.0], [3.2, 73.0], [3.3, 74.0], [3.4, 74.0], [3.5, 75.0], [3.6, 76.0], [3.7, 77.0], [3.8, 77.0], [3.9, 77.0], [4.0, 78.0], [4.1, 78.0], [4.2, 78.0], [4.3, 79.0], [4.4, 79.0], [4.5, 79.0], [4.6, 80.0], [4.7, 81.0], [4.8, 81.0], [4.9, 81.0], [5.0, 82.0], [5.1, 82.0], [5.2, 84.0], [5.3, 84.0], [5.4, 84.0], [5.5, 85.0], [5.6, 85.0], [5.7, 86.0], [5.8, 86.0], [5.9, 87.0], [6.0, 87.0], [6.1, 87.0], [6.2, 87.0], [6.3, 88.0], [6.4, 88.0], [6.5, 88.0], [6.6, 88.0], [6.7, 88.0], [6.8, 88.0], [6.9, 89.0], [7.0, 89.0], [7.1, 89.0], [7.2, 89.0], [7.3, 89.0], [7.4, 89.0], [7.5, 90.0], [7.6, 90.0], [7.7, 91.0], [7.8, 91.0], [7.9, 91.0], [8.0, 91.0], [8.1, 91.0], [8.2, 91.0], [8.3, 91.0], [8.4, 92.0], [8.5, 92.0], [8.6, 92.0], [8.7, 93.0], [8.8, 93.0], [8.9, 95.0], [9.0, 95.0], [9.1, 95.0], [9.2, 96.0], [9.3, 96.0], [9.4, 97.0], [9.5, 97.0], [9.6, 97.0], [9.7, 98.0], [9.8, 98.0], [9.9, 98.0], [10.0, 99.0], [10.1, 99.0], [10.2, 100.0], [10.3, 100.0], [10.4, 100.0], [10.5, 100.0], [10.6, 100.0], [10.7, 100.0], [10.8, 100.0], [10.9, 100.0], [11.0, 100.0], [11.1, 100.0], [11.2, 100.0], [11.3, 101.0], [11.4, 101.0], [11.5, 101.0], [11.6, 101.0], [11.7, 102.0], [11.8, 102.0], [11.9, 102.0], [12.0, 102.0], [12.1, 102.0], [12.2, 102.0], [12.3, 102.0], [12.4, 102.0], [12.5, 103.0], [12.6, 103.0], [12.7, 103.0], [12.8, 103.0], [12.9, 104.0], [13.0, 104.0], [13.1, 104.0], [13.2, 104.0], [13.3, 104.0], [13.4, 104.0], [13.5, 105.0], [13.6, 105.0], [13.7, 105.0], [13.8, 105.0], [13.9, 105.0], [14.0, 105.0], [14.1, 106.0], [14.2, 106.0], [14.3, 106.0], [14.4, 107.0], [14.5, 107.0], [14.6, 108.0], [14.7, 108.0], [14.8, 108.0], [14.9, 109.0], [15.0, 109.0], [15.1, 109.0], [15.2, 109.0], [15.3, 109.0], [15.4, 109.0], [15.5, 109.0], [15.6, 109.0], [15.7, 110.0], [15.8, 110.0], [15.9, 110.0], [16.0, 111.0], [16.1, 111.0], [16.2, 111.0], [16.3, 112.0], [16.4, 112.0], [16.5, 112.0], [16.6, 112.0], [16.7, 113.0], [16.8, 113.0], [16.9, 113.0], [17.0, 113.0], [17.1, 113.0], [17.2, 113.0], [17.3, 113.0], [17.4, 113.0], [17.5, 113.0], [17.6, 113.0], [17.7, 114.0], [17.8, 114.0], [17.9, 114.0], [18.0, 114.0], [18.1, 114.0], [18.2, 114.0], [18.3, 114.0], [18.4, 114.0], [18.5, 114.0], [18.6, 115.0], [18.7, 115.0], [18.8, 115.0], [18.9, 115.0], [19.0, 115.0], [19.1, 116.0], [19.2, 116.0], [19.3, 116.0], [19.4, 117.0], [19.5, 117.0], [19.6, 118.0], [19.7, 118.0], [19.8, 119.0], [19.9, 119.0], [20.0, 119.0], [20.1, 120.0], [20.2, 120.0], [20.3, 121.0], [20.4, 121.0], [20.5, 121.0], [20.6, 121.0], [20.7, 122.0], [20.8, 122.0], [20.9, 123.0], [21.0, 123.0], [21.1, 123.0], [21.2, 124.0], [21.3, 124.0], [21.4, 124.0], [21.5, 125.0], [21.6, 125.0], [21.7, 125.0], [21.8, 126.0], [21.9, 126.0], [22.0, 126.0], [22.1, 126.0], [22.2, 127.0], [22.3, 127.0], [22.4, 127.0], [22.5, 127.0], [22.6, 128.0], [22.7, 128.0], [22.8, 128.0], [22.9, 128.0], [23.0, 129.0], [23.1, 129.0], [23.2, 129.0], [23.3, 130.0], [23.4, 130.0], [23.5, 130.0], [23.6, 130.0], [23.7, 130.0], [23.8, 131.0], [23.9, 131.0], [24.0, 132.0], [24.1, 132.0], [24.2, 132.0], [24.3, 133.0], [24.4, 133.0], [24.5, 133.0], [24.6, 134.0], [24.7, 134.0], [24.8, 135.0], [24.9, 135.0], [25.0, 136.0], [25.1, 137.0], [25.2, 137.0], [25.3, 137.0], [25.4, 137.0], [25.5, 137.0], [25.6, 138.0], [25.7, 138.0], [25.8, 138.0], [25.9, 138.0], [26.0, 139.0], [26.1, 139.0], [26.2, 139.0], [26.3, 139.0], [26.4, 139.0], [26.5, 140.0], [26.6, 140.0], [26.7, 140.0], [26.8, 140.0], [26.9, 140.0], [27.0, 140.0], [27.1, 140.0], [27.2, 140.0], [27.3, 140.0], [27.4, 140.0], [27.5, 140.0], [27.6, 141.0], [27.7, 141.0], [27.8, 141.0], [27.9, 141.0], [28.0, 141.0], [28.1, 141.0], [28.2, 141.0], [28.3, 141.0], [28.4, 141.0], [28.5, 141.0], [28.6, 142.0], [28.7, 142.0], [28.8, 142.0], [28.9, 142.0], [29.0, 142.0], [29.1, 142.0], [29.2, 142.0], [29.3, 142.0], [29.4, 142.0], [29.5, 142.0], [29.6, 142.0], [29.7, 143.0], [29.8, 143.0], [29.9, 143.0], [30.0, 143.0], [30.1, 143.0], [30.2, 144.0], [30.3, 144.0], [30.4, 144.0], [30.5, 145.0], [30.6, 145.0], [30.7, 146.0], [30.8, 146.0], [30.9, 146.0], [31.0, 147.0], [31.1, 147.0], [31.2, 148.0], [31.3, 148.0], [31.4, 149.0], [31.5, 149.0], [31.6, 150.0], [31.7, 150.0], [31.8, 151.0], [31.9, 152.0], [32.0, 152.0], [32.1, 153.0], [32.2, 155.0], [32.3, 155.0], [32.4, 157.0], [32.5, 158.0], [32.6, 159.0], [32.7, 159.0], [32.8, 160.0], [32.9, 161.0], [33.0, 161.0], [33.1, 162.0], [33.2, 162.0], [33.3, 162.0], [33.4, 163.0], [33.5, 163.0], [33.6, 164.0], [33.7, 164.0], [33.8, 164.0], [33.9, 164.0], [34.0, 164.0], [34.1, 165.0], [34.2, 165.0], [34.3, 165.0], [34.4, 165.0], [34.5, 166.0], [34.6, 166.0], [34.7, 166.0], [34.8, 166.0], [34.9, 167.0], [35.0, 167.0], [35.1, 167.0], [35.2, 168.0], [35.3, 168.0], [35.4, 168.0], [35.5, 168.0], [35.6, 168.0], [35.7, 169.0], [35.8, 169.0], [35.9, 170.0], [36.0, 170.0], [36.1, 170.0], [36.2, 171.0], [36.3, 171.0], [36.4, 171.0], [36.5, 172.0], [36.6, 172.0], [36.7, 172.0], [36.8, 173.0], [36.9, 173.0], [37.0, 173.0], [37.1, 174.0], [37.2, 174.0], [37.3, 175.0], [37.4, 175.0], [37.5, 175.0], [37.6, 175.0], [37.7, 175.0], [37.8, 175.0], [37.9, 175.0], [38.0, 175.0], [38.1, 176.0], [38.2, 176.0], [38.3, 176.0], [38.4, 176.0], [38.5, 176.0], [38.6, 177.0], [38.7, 177.0], [38.8, 177.0], [38.9, 177.0], [39.0, 177.0], [39.1, 178.0], [39.2, 178.0], [39.3, 178.0], [39.4, 178.0], [39.5, 178.0], [39.6, 178.0], [39.7, 179.0], [39.8, 179.0], [39.9, 179.0], [40.0, 179.0], [40.1, 179.0], [40.2, 180.0], [40.3, 180.0], [40.4, 181.0], [40.5, 181.0], [40.6, 181.0], [40.7, 182.0], [40.8, 182.0], [40.9, 182.0], [41.0, 182.0], [41.1, 182.0], [41.2, 182.0], [41.3, 183.0], [41.4, 183.0], [41.5, 183.0], [41.6, 184.0], [41.7, 184.0], [41.8, 184.0], [41.9, 185.0], [42.0, 185.0], [42.1, 185.0], [42.2, 185.0], [42.3, 185.0], [42.4, 186.0], [42.5, 186.0], [42.6, 186.0], [42.7, 186.0], [42.8, 186.0], [42.9, 186.0], [43.0, 186.0], [43.1, 187.0], [43.2, 187.0], [43.3, 187.0], [43.4, 187.0], [43.5, 187.0], [43.6, 188.0], [43.7, 188.0], [43.8, 188.0], [43.9, 189.0], [44.0, 190.0], [44.1, 190.0], [44.2, 190.0], [44.3, 190.0], [44.4, 191.0], [44.5, 191.0], [44.6, 192.0], [44.7, 192.0], [44.8, 192.0], [44.9, 192.0], [45.0, 192.0], [45.1, 192.0], [45.2, 192.0], [45.3, 193.0], [45.4, 193.0], [45.5, 193.0], [45.6, 193.0], [45.7, 193.0], [45.8, 194.0], [45.9, 194.0], [46.0, 194.0], [46.1, 194.0], [46.2, 195.0], [46.3, 195.0], [46.4, 195.0], [46.5, 196.0], [46.6, 196.0], [46.7, 196.0], [46.8, 196.0], [46.9, 196.0], [47.0, 197.0], [47.1, 197.0], [47.2, 197.0], [47.3, 197.0], [47.4, 197.0], [47.5, 198.0], [47.6, 198.0], [47.7, 198.0], [47.8, 198.0], [47.9, 198.0], [48.0, 198.0], [48.1, 198.0], [48.2, 198.0], [48.3, 199.0], [48.4, 199.0], [48.5, 199.0], [48.6, 200.0], [48.7, 200.0], [48.8, 200.0], [48.9, 200.0], [49.0, 200.0], [49.1, 201.0], [49.2, 201.0], [49.3, 201.0], [49.4, 201.0], [49.5, 201.0], [49.6, 201.0], [49.7, 202.0], [49.8, 202.0], [49.9, 202.0], [50.0, 202.0], [50.1, 202.0], [50.2, 202.0], [50.3, 202.0], [50.4, 202.0], [50.5, 203.0], [50.6, 203.0], [50.7, 203.0], [50.8, 203.0], [50.9, 203.0], [51.0, 203.0], [51.1, 204.0], [51.2, 204.0], [51.3, 204.0], [51.4, 204.0], [51.5, 204.0], [51.6, 204.0], [51.7, 204.0], [51.8, 205.0], [51.9, 205.0], [52.0, 205.0], [52.1, 205.0], [52.2, 205.0], [52.3, 205.0], [52.4, 205.0], [52.5, 206.0], [52.6, 206.0], [52.7, 206.0], [52.8, 206.0], [52.9, 206.0], [53.0, 206.0], [53.1, 206.0], [53.2, 206.0], [53.3, 206.0], [53.4, 206.0], [53.5, 206.0], [53.6, 207.0], [53.7, 207.0], [53.8, 207.0], [53.9, 207.0], [54.0, 207.0], [54.1, 207.0], [54.2, 207.0], [54.3, 207.0], [54.4, 208.0], [54.5, 208.0], [54.6, 208.0], [54.7, 208.0], [54.8, 208.0], [54.9, 209.0], [55.0, 209.0], [55.1, 209.0], [55.2, 209.0], [55.3, 210.0], [55.4, 210.0], [55.5, 210.0], [55.6, 210.0], [55.7, 210.0], [55.8, 211.0], [55.9, 211.0], [56.0, 211.0], [56.1, 211.0], [56.2, 211.0], [56.3, 212.0], [56.4, 212.0], [56.5, 212.0], [56.6, 213.0], [56.7, 214.0], [56.8, 215.0], [56.9, 215.0], [57.0, 215.0], [57.1, 215.0], [57.2, 216.0], [57.3, 216.0], [57.4, 216.0], [57.5, 216.0], [57.6, 216.0], [57.7, 217.0], [57.8, 217.0], [57.9, 217.0], [58.0, 217.0], [58.1, 217.0], [58.2, 218.0], [58.3, 218.0], [58.4, 218.0], [58.5, 218.0], [58.6, 219.0], [58.7, 219.0], [58.8, 219.0], [58.9, 219.0], [59.0, 220.0], [59.1, 220.0], [59.2, 221.0], [59.3, 221.0], [59.4, 221.0], [59.5, 222.0], [59.6, 222.0], [59.7, 222.0], [59.8, 222.0], [59.9, 223.0], [60.0, 223.0], [60.1, 223.0], [60.2, 223.0], [60.3, 223.0], [60.4, 223.0], [60.5, 224.0], [60.6, 224.0], [60.7, 224.0], [60.8, 224.0], [60.9, 225.0], [61.0, 225.0], [61.1, 226.0], [61.2, 226.0], [61.3, 226.0], [61.4, 226.0], [61.5, 226.0], [61.6, 227.0], [61.7, 227.0], [61.8, 228.0], [61.9, 228.0], [62.0, 228.0], [62.1, 228.0], [62.2, 229.0], [62.3, 229.0], [62.4, 230.0], [62.5, 230.0], [62.6, 231.0], [62.7, 232.0], [62.8, 232.0], [62.9, 233.0], [63.0, 233.0], [63.1, 234.0], [63.2, 234.0], [63.3, 234.0], [63.4, 235.0], [63.5, 235.0], [63.6, 235.0], [63.7, 235.0], [63.8, 237.0], [63.9, 237.0], [64.0, 238.0], [64.1, 238.0], [64.2, 238.0], [64.3, 238.0], [64.4, 238.0], [64.5, 238.0], [64.6, 238.0], [64.7, 238.0], [64.8, 238.0], [64.9, 238.0], [65.0, 239.0], [65.1, 239.0], [65.2, 239.0], [65.3, 239.0], [65.4, 239.0], [65.5, 239.0], [65.6, 239.0], [65.7, 239.0], [65.8, 240.0], [65.9, 240.0], [66.0, 240.0], [66.1, 240.0], [66.2, 241.0], [66.3, 241.0], [66.4, 241.0], [66.5, 241.0], [66.6, 242.0], [66.7, 242.0], [66.8, 242.0], [66.9, 242.0], [67.0, 242.0], [67.1, 242.0], [67.2, 243.0], [67.3, 243.0], [67.4, 243.0], [67.5, 244.0], [67.6, 244.0], [67.7, 244.0], [67.8, 244.0], [67.9, 244.0], [68.0, 244.0], [68.1, 244.0], [68.2, 244.0], [68.3, 245.0], [68.4, 245.0], [68.5, 245.0], [68.6, 246.0], [68.7, 247.0], [68.8, 248.0], [68.9, 248.0], [69.0, 248.0], [69.1, 249.0], [69.2, 249.0], [69.3, 250.0], [69.4, 250.0], [69.5, 250.0], [69.6, 251.0], [69.7, 251.0], [69.8, 252.0], [69.9, 253.0], [70.0, 253.0], [70.1, 253.0], [70.2, 253.0], [70.3, 254.0], [70.4, 254.0], [70.5, 255.0], [70.6, 255.0], [70.7, 256.0], [70.8, 256.0], [70.9, 256.0], [71.0, 256.0], [71.1, 256.0], [71.2, 257.0], [71.3, 257.0], [71.4, 257.0], [71.5, 257.0], [71.6, 257.0], [71.7, 257.0], [71.8, 258.0], [71.9, 258.0], [72.0, 258.0], [72.1, 259.0], [72.2, 259.0], [72.3, 259.0], [72.4, 259.0], [72.5, 260.0], [72.6, 260.0], [72.7, 261.0], [72.8, 261.0], [72.9, 261.0], [73.0, 261.0], [73.1, 262.0], [73.2, 262.0], [73.3, 262.0], [73.4, 262.0], [73.5, 262.0], [73.6, 262.0], [73.7, 262.0], [73.8, 263.0], [73.9, 263.0], [74.0, 263.0], [74.1, 263.0], [74.2, 263.0], [74.3, 263.0], [74.4, 263.0], [74.5, 263.0], [74.6, 264.0], [74.7, 264.0], [74.8, 265.0], [74.9, 266.0], [75.0, 267.0], [75.1, 267.0], [75.2, 267.0], [75.3, 268.0], [75.4, 268.0], [75.5, 269.0], [75.6, 271.0], [75.7, 272.0], [75.8, 273.0], [75.9, 274.0], [76.0, 275.0], [76.1, 275.0], [76.2, 276.0], [76.3, 276.0], [76.4, 276.0], [76.5, 277.0], [76.6, 277.0], [76.7, 279.0], [76.8, 280.0], [76.9, 280.0], [77.0, 280.0], [77.1, 280.0], [77.2, 281.0], [77.3, 281.0], [77.4, 281.0], [77.5, 281.0], [77.6, 282.0], [77.7, 282.0], [77.8, 282.0], [77.9, 283.0], [78.0, 283.0], [78.1, 284.0], [78.2, 284.0], [78.3, 284.0], [78.4, 285.0], [78.5, 286.0], [78.6, 286.0], [78.7, 286.0], [78.8, 286.0], [78.9, 286.0], [79.0, 286.0], [79.1, 287.0], [79.2, 287.0], [79.3, 287.0], [79.4, 287.0], [79.5, 287.0], [79.6, 288.0], [79.7, 288.0], [79.8, 288.0], [79.9, 288.0], [80.0, 288.0], [80.1, 288.0], [80.2, 288.0], [80.3, 289.0], [80.4, 289.0], [80.5, 289.0], [80.6, 289.0], [80.7, 289.0], [80.8, 290.0], [80.9, 290.0], [81.0, 290.0], [81.1, 290.0], [81.2, 290.0], [81.3, 291.0], [81.4, 291.0], [81.5, 291.0], [81.6, 291.0], [81.7, 292.0], [81.8, 292.0], [81.9, 292.0], [82.0, 292.0], [82.1, 293.0], [82.2, 293.0], [82.3, 293.0], [82.4, 294.0], [82.5, 294.0], [82.6, 295.0], [82.7, 296.0], [82.8, 298.0], [82.9, 300.0], [83.0, 300.0], [83.1, 300.0], [83.2, 300.0], [83.3, 301.0], [83.4, 302.0], [83.5, 302.0], [83.6, 302.0], [83.7, 303.0], [83.8, 304.0], [83.9, 304.0], [84.0, 305.0], [84.1, 306.0], [84.2, 307.0], [84.3, 308.0], [84.4, 308.0], [84.5, 310.0], [84.6, 312.0], [84.7, 313.0], [84.8, 315.0], [84.9, 316.0], [85.0, 316.0], [85.1, 316.0], [85.2, 317.0], [85.3, 317.0], [85.4, 317.0], [85.5, 318.0], [85.6, 318.0], [85.7, 320.0], [85.8, 320.0], [85.9, 321.0], [86.0, 322.0], [86.1, 323.0], [86.2, 323.0], [86.3, 324.0], [86.4, 324.0], [86.5, 325.0], [86.6, 327.0], [86.7, 328.0], [86.8, 328.0], [86.9, 329.0], [87.0, 330.0], [87.1, 330.0], [87.2, 331.0], [87.3, 331.0], [87.4, 331.0], [87.5, 332.0], [87.6, 332.0], [87.7, 334.0], [87.8, 334.0], [87.9, 334.0], [88.0, 335.0], [88.1, 339.0], [88.2, 339.0], [88.3, 339.0], [88.4, 340.0], [88.5, 341.0], [88.6, 343.0], [88.7, 344.0], [88.8, 347.0], [88.9, 349.0], [89.0, 351.0], [89.1, 353.0], [89.2, 354.0], [89.3, 354.0], [89.4, 354.0], [89.5, 355.0], [89.6, 355.0], [89.7, 356.0], [89.8, 357.0], [89.9, 358.0], [90.0, 359.0], [90.1, 360.0], [90.2, 361.0], [90.3, 361.0], [90.4, 361.0], [90.5, 361.0], [90.6, 362.0], [90.7, 362.0], [90.8, 363.0], [90.9, 363.0], [91.0, 363.0], [91.1, 364.0], [91.2, 364.0], [91.3, 364.0], [91.4, 364.0], [91.5, 365.0], [91.6, 365.0], [91.7, 366.0], [91.8, 367.0], [91.9, 368.0], [92.0, 368.0], [92.1, 369.0], [92.2, 372.0], [92.3, 374.0], [92.4, 374.0], [92.5, 375.0], [92.6, 376.0], [92.7, 380.0], [92.8, 381.0], [92.9, 382.0], [93.0, 382.0], [93.1, 384.0], [93.2, 387.0], [93.3, 389.0], [93.4, 397.0], [93.5, 402.0], [93.6, 405.0], [93.7, 406.0], [93.8, 407.0], [93.9, 408.0], [94.0, 409.0], [94.1, 411.0], [94.2, 413.0], [94.3, 416.0], [94.4, 418.0], [94.5, 418.0], [94.6, 419.0], [94.7, 423.0], [94.8, 424.0], [94.9, 425.0], [95.0, 426.0], [95.1, 427.0], [95.2, 428.0], [95.3, 429.0], [95.4, 429.0], [95.5, 433.0], [95.6, 434.0], [95.7, 438.0], [95.8, 440.0], [95.9, 441.0], [96.0, 441.0], [96.1, 442.0], [96.2, 442.0], [96.3, 442.0], [96.4, 443.0], [96.5, 443.0], [96.6, 443.0], [96.7, 444.0], [96.8, 444.0], [96.9, 445.0], [97.0, 446.0], [97.1, 447.0], [97.2, 454.0], [97.3, 456.0], [97.4, 458.0], [97.5, 461.0], [97.6, 472.0], [97.7, 478.0], [97.8, 479.0], [97.9, 480.0], [98.0, 483.0], [98.1, 494.0], [98.2, 497.0], [98.3, 510.0], [98.4, 512.0], [98.5, 523.0], [98.6, 526.0], [98.7, 540.0], [98.8, 559.0], [98.9, 566.0], [99.0, 577.0], [99.1, 579.0], [99.2, 582.0], [99.3, 594.0], [99.4, 613.0], [99.5, 626.0], [99.6, 648.0], [99.7, 679.0], [99.8, 702.0], [99.9, 968.0]], "isOverall": false, "label": "Fetch Lead Details", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 769.0, "series": [{"data": [[0.0, 203.0], [300.0, 213.0], [600.0, 9.0], [700.0, 1.0], [100.0, 769.0], [200.0, 685.0], [400.0, 95.0], [900.0, 2.0], [500.0, 22.0], [1000.0, 1.0]], "isOverall": false, "label": "Fetch Lead Details", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 35.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 1965.0, "series": [{"data": [[0.0, 1965.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 35.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 39.07350000000007, "minX": 1.79239032E12, "maxY": 39.07350000000007, "series": [{"data": [[1.79239032E12, 39.07350000000007]], "isOverall": false, "label": "Lead Details", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79239032E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 63.0, "minX": 7.0, "maxY": 386.4347826086957, "series": [{"data": [[7.0, 186.0], [8.0, 153.0], [10.0, 63.0], [11.0, 100.0], [14.0, 106.66666666666667], [15.0, 151.0], [16.0, 75.22222222222223], [18.0, 76.0], [20.0, 70.10000000000001], [21.0, 138.5], [25.0, 145.1], [26.0, 136.5], [27.0, 108.91666666666667], [28.0, 87.5], [29.0, 86.5], [30.0, 153.16666666666666], [31.0, 101.57142857142856], [32.0, 89.23529411764703], [33.0, 97.5], [34.0, 90.26086956521738], [37.0, 110.89285714285714], [36.0, 103.2], [38.0, 99.00000000000001], [39.0, 94.6], [41.0, 159.16666666666666], [40.0, 169.2], [42.0, 159.68749999999997], [43.0, 135.5], [45.0, 114.99999999999999], [44.0, 125.88461538461536], [46.0, 110.31034482758619], [47.0, 103.4], [48.0, 111.78947368421052], [49.0, 125.5], [51.0, 205.42857142857144], [50.0, 181.5], [52.0, 219.5], [55.0, 204.8421052631579], [54.0, 180.5], [57.0, 262.00000000000006], [56.0, 242.2], [59.0, 199.74074074074073], [58.0, 82.0], [60.0, 125.47058823529412], [61.0, 131.00000000000003], [62.0, 129.74], [63.0, 127.41666666666667], [64.0, 144.95000000000002], [66.0, 190.15384615384616], [67.0, 210.75], [65.0, 200.3], [68.0, 151.35714285714286], [69.0, 116.55555555555557], [71.0, 319.6], [73.0, 211.52173913043475], [72.0, 257.0], [74.0, 212.71428571428572], [75.0, 246.35714285714283], [78.0, 227.99999999999997], [77.0, 178.94444444444443], [76.0, 185.27272727272728], [79.0, 303.2857142857142], [82.0, 219.6153846153846], [81.0, 291.9767441860465], [80.0, 254.7], [83.0, 223.30232558139534], [84.0, 192.57142857142856], [85.0, 253.0], [86.0, 248.57894736842107], [87.0, 204.52941176470586], [88.0, 234.2692307692308], [89.0, 235.9375], [91.0, 222.78787878787875], [90.0, 347.25], [92.0, 215.38095238095235], [93.0, 300.4], [94.0, 249.50980392156873], [95.0, 266.4444444444444], [96.0, 223.8], [97.0, 223.62857142857143], [98.0, 232.225806451613], [99.0, 212.9342105263158], [100.0, 264.97499999999997], [103.0, 272.17543859649123], [102.0, 268.6779661016949], [101.0, 227.0898876404494], [104.0, 296.43636363636375], [107.0, 386.4347826086957], [106.0, 306.5111111111111], [105.0, 348.70000000000005], [108.0, 365.77777777777766]], "isOverall": false, "label": "Fetch Lead Details", "isController": false}, {"data": [[78.34950000000013, 215.69699999999992]], "isOverall": false, "label": "Fetch Lead Details-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 108.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 37966.666666666664, "minX": 1.79239032E12, "maxY": 57107.433333333334, "series": [{"data": [[1.79239032E12, 57107.433333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.79239032E12, 37966.666666666664]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79239032E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 215.69699999999992, "minX": 1.79239032E12, "maxY": 215.69699999999992, "series": [{"data": [[1.79239032E12, 215.69699999999992]], "isOverall": false, "label": "Fetch Lead Details", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79239032E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 215.44100000000034, "minX": 1.79239032E12, "maxY": 215.44100000000034, "series": [{"data": [[1.79239032E12, 215.44100000000034]], "isOverall": false, "label": "Fetch Lead Details", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79239032E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 14.997000000000016, "minX": 1.79239032E12, "maxY": 14.997000000000016, "series": [{"data": [[1.79239032E12, 14.997000000000016]], "isOverall": false, "label": "Fetch Lead Details", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79239032E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 40.0, "minX": 1.79239032E12, "maxY": 1011.0, "series": [{"data": [[1.79239032E12, 1011.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.79239032E12, 40.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.79239032E12, 359.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.79239032E12, 576.96]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.79239032E12, 202.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.79239032E12, 426.0]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79239032E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 93.0, "minX": 1.0, "maxY": 288.0, "series": [{"data": [[1.0, 186.0], [129.0, 93.0], [143.0, 216.0], [163.0, 124.0], [160.0, 175.0], [174.0, 288.0], [183.0, 113.0], [182.0, 263.0], [181.0, 234.0], [89.0, 140.0], [205.0, 202.0], [216.0, 208.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 216.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 93.0, "minX": 1.0, "maxY": 288.0, "series": [{"data": [[1.0, 185.0], [129.0, 93.0], [143.0, 216.0], [163.0, 124.0], [160.0, 175.0], [174.0, 288.0], [183.0, 113.0], [182.0, 262.0], [181.0, 234.0], [89.0, 140.0], [205.0, 201.0], [216.0, 208.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 216.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 33.333333333333336, "minX": 1.79239032E12, "maxY": 33.333333333333336, "series": [{"data": [[1.79239032E12, 33.333333333333336]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79239032E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 33.333333333333336, "minX": 1.79239032E12, "maxY": 33.333333333333336, "series": [{"data": [[1.79239032E12, 33.333333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.79239032E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 33.333333333333336, "minX": 1.79239032E12, "maxY": 33.333333333333336, "series": [{"data": [[1.79239032E12, 33.333333333333336]], "isOverall": false, "label": "Fetch Lead Details-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79239032E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 33.333333333333336, "minX": 1.79239032E12, "maxY": 33.333333333333336, "series": [{"data": [[1.79239032E12, 33.333333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.79239032E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 19800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

