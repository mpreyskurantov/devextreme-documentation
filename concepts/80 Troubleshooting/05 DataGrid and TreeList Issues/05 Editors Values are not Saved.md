If an editor does not pass its value to the DataGrid or TreeList component and its DataSource when users enter or select a value, check if any of the following cases applies to your implementation.

### A Column's dataField is Empty

Built-in column editors automatically write their values to the data row field specified in the column.[dataField](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataField') property. Specify this property if you want to write an editor's value to a field.

If you want to implement an unbound column, specify column.[name](/api-reference/_hidden/GridBaseColumn/name.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#name') instead of column.[dataField](/api-reference/_hidden/GridBaseColumn/dataField.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#dataField') and define the column.[setCellValue](/api-reference/_hidden/GridBaseColumn/setCellValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#setCellValue') callback to write values in a custom way.

---
##### jQuery

    <!-- tab: index.js -->
    $('#gridContainer').dxDataGrid({
        // ...
        columns: [
            {   
                // ...
                setCellValue(newData, value, currentRowData) {
                    newData.anyField = value;
                }
            }
        ]
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column ...
            [setCellValue]="setCellValue"
        >
        </dxi-column>
     </dx-data-grid>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        export class AppComponent {
            setCellValue(newData, value, currentRowData) {
                newData.anyField = value;
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... >
            <DxColumn ...
                :set-cell-value="setCellValue"
            />
        </DxDataGrid>
    </template>

    <script>
        import { DxDataGrid, DxColumn } from 'devextreme-vue/data-grid';
        
        export default {
            components: {
                DxDataGrid,
                DxColumn
            },
            // ...
            methods: {
                setCellValue(newData, value, currentRowData) {
                    newData.anyField = value;
                }
            }
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid, { Column } from 'devextreme-react/data-grid';

    const setCellValue = (newData, value, currentRowData) => {
        newData.anyField = value;
    }

    function App() {
        render (
            <React.Fragment>
                <DataGrid ... >
                    <Column ...
                        setCellValue={setCellValue}
                    />
                </DataGrid>
            </React.Fragment>
        );
    }

    export default App;

---

### You Use a Form Item's Template to Declare an Editor

[Form](/concepts/05%20UI%20Components/DataGrid/20%20Editing/10%20User%20Interaction/40%20Form%20Mode.md '/Documentation/Guide/UI_Components/DataGrid/Editing/#User_Interaction/Form_Mode') and [popup](/concepts/05%20UI%20Components/DataGrid/20%20Editing/10%20User%20Interaction/50%20Popup%20Mode.md '/Documentation/Guide/UI_Components/DataGrid/Editing/#User_Interaction/Popup_Mode') edit modes use the built-in Form component. Do not use simpleItem.[template](/api-reference/10%20UI%20Components/dxForm/5%20Item%20Types/SimpleItem/template.md '/Documentation/ApiReference/UI_Components/dxForm/Item_Types/SimpleItem/#template') to replace default editors in DataGrid or TreeList, use column.[editCellTemplate](/api-reference/_hidden/dxDataGridColumn/editCellTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editCellTemplate') instead.

### You Implement an Editor in the editCellTemplate Body

Call the **e.setValue** method available in the [template's argument](/api-reference/_hidden/dxDataGridColumn/editCellTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editCellTemplate'). This method notifies the DataGrid or TreeList component that the value of a custom editor has changed. If you use a DevExtreme editor in this template, call **e.setValue** inside the [onValueChanged](/api-reference/10%20UI%20Components/dxTextEditor/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/#onValueChanged') event handler of this editor.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomEditors/",
    name: "Customize Editors in DataGrid"
}

### You Implement an Editor in the cellTemplate Body

DataGrid or TreeList uses column.[cellTemplate](/api-reference/_hidden/dxDataGridColumn/cellTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#cellTemplate') only to display a cell value. To place your custom editor into cells to allow users to edit them, use column.[editCellTemplate](/api-reference/_hidden/dxDataGridColumn/editCellTemplate.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#editCellTemplate'). Refer to the previous topic section for more information.

If you want to always display editors in a column, enable the column.[showEditorAlways](/api-reference/_hidden/GridBaseColumn/showEditorAlways.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#showEditorAlways') option. DataGrid displays an editor (or **editCellTemplate** if it exists) and ignores **cellTemplate**.

### You Handle the editorPreparing Event and Override onValueChanged

Call the built-in **onValueChanged** event handler for an editor or call the `e.setValue` method available in the event's argument.

---
##### jQuery

    <!-- tab: index.js -->
    $('#gridContainer').dxDataGrid({
        // ...
        onEditorPreparing(e) {
            if (e.dataField === 'requiredDataField' && e.parentType === 'dataRow') {
                const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                e.editorOptions.onValueChanged = function (args) {
                    e.setValue(args.value);
                    // or
                    defaultValueChangeHandler(args);
                }
            }
        }
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-data-grid ... 
        (onEditorPreparing)="onEditorPreparing($event)"
    >
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        export class AppComponent {
            onEditorPreparing(e) {
                if (e.dataField === 'requiredDataField' && e.parentType === 'dataRow') {
                    const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                    e.editorOptions.onValueChanged = function (args) {
                        e.setValue(args.value);
                        // or
                        defaultValueChangeHandler(args);
                    }
                }
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDataGrid ... 
            @editor-preparing="onEditorPreparing"
        />
    </template>

    <script>
        import { DxDataGrid } from 'devextreme-vue/data-grid';
        
        export default {
            components: {
                DxDataGrid
            },
            // ...
            methods: {
                onEditorPreparing(e) {
                    if (e.dataField === 'requiredDataField' && e.parentType === 'dataRow') {
                        const defaultValueChangeHandler = e.editorOptions.onValueChanged;
                        e.editorOptions.onValueChanged = function (args) {
                            e.setValue(args.value);
                            // or
                            defaultValueChangeHandler(args);
                        }
                    }
                }
            }
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import DataGrid from 'devextreme-react/data-grid';

    onEditorPreparing = (e) => {
        if (e.dataField === 'requiredDataField' && e.parentType === 'dataRow') {
            const defaultValueChangeHandler = e.editorOptions.onValueChanged;
            e.editorOptions.onValueChanged = function (args) {
                e.setValue(args.value);
                // or
                defaultValueChangeHandler(args);
            }
        }
    }

    function App() {
        render (
            <React.Fragment>
                <DataGrid ... 
                    onEditorPreparing={onEditorPreparing}
                />
            </React.Fragment>
        );
    }

    export default App;

---

#####See Also#####
- [Customize Editors](/concepts/05%20UI%20Components/DataGrid/20%20Editing/40%20Customize%20Editors.md '/Documentation/Guide/UI_Components/DataGrid/Editing/#Customize_Editors')
- [onEditorPreparing - API](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onEditorPreparing.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onEditorPreparing')
- [Troubleshooting: A Drop-Down Editor Does Not Show Data](/concepts/80%20Troubleshooting/50%20A%20Drop-Down%20Editor%20Does%20Not%20Show%20Data/00%20A%20Drop-Down%20Editor%20Does%20Not%20Show%20Data.md '/Documentation/Guide/Troubleshooting/A_Drop-Down_Editor_Does_Not_Show_Data/')
