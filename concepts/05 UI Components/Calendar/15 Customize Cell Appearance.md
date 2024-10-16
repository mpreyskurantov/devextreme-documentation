For Angular, AngularJS, and Knockout apps, DevExtreme provides the [dxTemplate](/api-reference/10%20UI%20Components/Markup%20Components/dxTemplate '/Documentation/ApiReference/UI_Components/Markup_Components/dxTemplate/') markup component. The following code shows how to use dxTemplate to define templates for cells.

---
##### Angular

    <!--HTML-->
    <dx-calendar
        [(value)]="currentDate">
        <span *dxTemplate="let cellData of 'cell'; let i = index"
             [style.font-style]="i == 0 || i == 6 ? 'italic' : 'normal'">
             {{cellData.text}}
        </span>
    </dx-calendar>

    <!--TypeScript-->
    import { DxCalendarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        currentDate: Date = new Date();
    }
    @NgModule({
        imports: [
            // ...
            DxCalendarModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCalendar
            :value="date"
            cell-template="cell"
        >
            <template #cell="{ data: cell, index }">
                <span :style="{ fontStyle: index === 0 || index === 6 ? 'italic' : 'normal' }">
                    {{ cell.text }}
                </span>
            </template>
        </DxCalendar>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxCalendar from 'devextreme-vue/calendar';

    export default {
        components: {
            DxCalendar
        },
        data() {
            return {
                date: new Date()
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import Calendar from 'devextreme-react/calendar';

    const date = new Date();
    function CustomCell(cellInfo, index) {
        return (
            <span style={{ fontStyle: index === 0 || index === 6 ? 'italic' : 'normal' }}>
                { cellInfo.text }
            </span>
        );
    }

    class App extends React.Component {
        render() {
            return (
                <Calendar
                    defaultValue={date}
                    cellRender={CustomCell} />
            );
        }
    }
    export default App;

---

If you use jQuery alone, use <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a> to combine the HTML markup for cells. To apply this markup, use the [cellTemplate](/api-reference/10%20UI%20Components/dxCalendar/1%20Configuration/cellTemplate.md '/Documentation/ApiReference/UI_Components/dxCalendar/Configuration/#cellTemplate') callback function as shown in the following code.

    <!--JavaScript-->
    $(function () {
        $("#calendarContainer").dxCalendar({
            value: new Date(),
            cellTemplate: function (cellData, cellIndex, cellElement) {
                const italic = $("<span>").css('font-style', 'italic')
                                        .text(cellData.text);
                const normal = $("<span>").text(cellData.text);
                return (cellIndex == 0 || cellIndex == 6) ? italic : normal;
            }
        });
    });



#####See Also#####
- [Calendar Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Calendar/Overview)
- [Calendar API Reference](/api-reference/10%20UI%20Components/dxCalendar '/Documentation/ApiReference/UI_Components/dxCalendar/')

[tags]calendar, cell appearance, customize, templates