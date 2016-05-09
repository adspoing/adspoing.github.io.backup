
(function(){
    window.createTable=function(id,data){
        var isUp=[];
        var table={
            id:id,
            data:data,
            method: {
                init:function(){
                  for(x in data.gridColumns)
                  {
                      isUp.push(false);
                  }
                },
                render: function () {
                    var tb = document.getElementById(id);
                    tb.innerHTML = "";
                    var thead = document.createElement('thead');
                    tb.appendChild(thead);
                    var tr = document.createElement("tr");
                    thead.appendChild(tr);
                    for (x in data.gridColumns) {
                        var th = document.createElement("th");
                        th.innerHTML = data.gridColumns[x].name;
                        if (data.gridColumns[x].sortActive == 'yes') {
                            var span = document.createElement("span");
                            if (isUp[x] == false) {
                                span.className = "arrow dsc active";
                            }
                            else
                                span.className = "arrow asc active";
                            th.id="sort"+x;
                            th.appendChild(span);
                        }
                        tr.appendChild(th);
                    }

                    var tbody = document.createElement("tbody");
                    tb.appendChild(tbody);
                    for (x in data.gridData) {
                        var tr2 = document.createElement("tr");
                        for (y in data.gridData[x]) {
                            td = document.createElement("td");
                            td.innerHTML = data.gridData[x][y];
                            tr2.appendChild(td);
                        }
                        tbody.appendChild(tr2);
                    }
                    for(x in data.gridColumns) {
                        if (data.gridColumns[x].sortActive == 'yes') {

                            (function (x) {
                                document.getElementById("sort" + x).addEventListener('click', function () {
                                    table.method.sort(data.gridColumns[x].name, isUp[x]);
                                    isUp[x] = !isUp[x];
                                })
                            })(x);
                        }
                    }

                },
                sort: function (key, direction, callback) {
                    if (callback) {
                        data.gridData.sort(callback);
                    }
                    else {
                        data.gridData.sort(function (a, b) {
                            if (direction == false) {
                                return b[key] - a[key] ;
                            }
                            else {
                                return a[key] - b[key] ;
                            }
                        })
                    }
                    table.method.render();
                }
            }
        };
        table.method.init();
        table.method.render();
        return table;
    }
})();