Assign a function to the [onSelectionChanged](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/#onSelectionChanged/') property. 

    <!-- tab: index.js -->
    $(function() {
        $("#gantt").dxGantt({
            // ...
            onSelectionChanged: function (e) {
                if (e.selectedRowKey === 2)
                    console.log(`This task is overdue`); 
            }
        });
    }); 

[tags] jquery