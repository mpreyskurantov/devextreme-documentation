For a minor customization of Autocomplete items, you can define [specific fields](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/items '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/items/') in item data objects. For example, the following code generates three items: the first is not customized, the second is disabled and the third is hidden.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#autocompleteContainer").dxAutocomplete({
            valueExpr: "text",
            dataSource: [
                { text: "James" },
                { text: "John", disabled: true },
                { text: "Joseph", visible: false }
            ],
            placeholder: "Type first name..."
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxAutocompleteModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        autocompleteData = [
            { text: "James" },
            { text: "John", disabled: true },
            { text: "Joseph", visible: false }
        ]
    }
    @NgModule({
        imports: [
            // ...
            DxAutocompleteModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-autocomplete
        [dataSource]="autocompleteData"
        valueExpr="text"
        placeholder="Type first name...">
    </dx-autocomplete>

##### Vue

    <template>
        <DxAutocomplete
            :data-source="dataSource"
            value-expr="text"
            placeholder="Type first name..."
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxAutocomplete } from 'devextreme-vue/autocomplete';

    export default {
        components: {
            DxAutocomplete
        },
        data() {
            return {
                dataSource: [
                    { text: 'James' },
                    { text: 'John', disabled: true },
                    { text: 'Joseph', visible: false }
                ]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Autocomplete } from 'devextreme-react/autocomplete';

    const dataSource = [
        { text: 'James' },
        { text: 'John', disabled: true },
        { text: 'Joseph', visible: false }
    ];

    class App extends React.Component {
        render() {
            return (
                <Autocomplete
                    dataSource={dataSource}
                    valueExpr="text"
                    placeholder="Type first name..."
                />
            );
        }
    }

    export default App;

---

If you need a more flexible solution, define an [itemTemplate](/api-reference/10%20UI%20Components/DataExpressionMixin/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/#itemTemplate').

---
##### jQuery

    <!--JavaScript-->
    const autocompleteData = [
        { country: "Afghanistan", capital: "Kabul" },
        { country: "Albania", capital: "Tirana" },
        // ...
    ];

    $(function() {
        $("#autocompleteContainer").dxAutocomplete({
            dataSource: autocompleteData,
            valueExpr: 'country',
            placeholder: 'Type country name...',
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<p>Country: <b>" + itemData.country + "</b></p>");
                itemElement.append("<p style='color:grey;'>Capital: <b>" + itemData.capital + "</b></p>");
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-autocomplete
        [dataSource]="autocompleteData"
        valueExpr="country"
        placeholder="Type country name..."
        itemTemplate="full">
        <div *dxTemplate="let itemObj of 'full'">
            <p>Country: <b>{{itemObj.country}}</b></p>
            <p style="color:grey;">Capital: <b>{{itemObj.capital}}</b></p>
        </div>
    </dx-autocomplete>

    <!--TypeScript-->
    import { DxAutocompleteModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        autocompleteData = [
            { country: "Afghanistan", capital: "Kabul" },
            { country: "Albania", capital: "Tirana" },
            // ...
        ]
    }
    @NgModule({
        imports: [
            // ...
            DxAutocompleteModule
        ],
        // ...
    })
    
##### Vue

    <template>
        <DxAutocomplete
            :data-source="autocompleteData"
            value-expr="country"
            placeholder="Type country name..."
            item-template="full">
            <template #full="{ data }">
                <div>
                    <p>Country: <b>{{data.country}}</b></p>
                    <p style="color:grey;">Capital: <b>{{data.capital}}</b></p>
                </div>
            </template>
        </DxAutocomplete>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxAutocomplete } from 'devextreme-vue/autocomplete';

    export default {
        components: {
            DxAutocomplete
        },
        data() {
            return {
                autocompleteData: [
                    { country: "Afghanistan", capital: "Kabul" },
                    { country: "Albania", capital: "Tirana" },
                    // ...
                ]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import { Autocomplete } from 'devextreme-react/autocomplete';

    const autocompleteData = [
        { country: "Afghanistan", capital: "Kabul" },
        { country: "Albania", capital: "Tirana" },
        // ...
    ];

    const renderAutocompleteItem = (itemData) => {
        return (
            <div>
                <p>Country: <b>{itemData.country}</b></p>
                <p style={{color: "grey"}}>Capital: <b>{itemData.capital}</b></p>
            </div>
        );
    };

    class App extends React.Component {
        render() {
            return (
                <Autocomplete
                    dataSource={autocompleteData}
                    valueExpr="country"
                    placeholder="Type country name..."
                    itemRender={renderAutocompleteItem}
                />
            );
        }
    }

    export default App;

---

---
##### jQuery

You can also customize an individual Autocomplete item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/_hidden/CollectionWidgetItem/template.md '/Documentation/ApiReference/UI_Components/dxAutocomplete/Configuration/items/#template') field. 

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    const autocompleteData = [
        { text: "James"},
        { text: "Joseph", template: $("#individualTemplate") },
        // ...
    ];

---

#####See Also#####
- [Autocomplete - Configure Search Parameters](/concepts/05%20UI%20Components/Autocomplete/10%20Configure%20Search%20Parameters.md '/Documentation/Guide/UI_Components/Autocomplete/Configure_Search_Parameters')
- [Autocomplete Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Autocomplete/Overview)
- [Autocomplete API Reference](/api-reference/10%20UI%20Components/dxAutocomplete '/Documentation/ApiReference/UI_Components/dxAutocomplete/')

[tags]autocomplete, item appearance, customize, templates, template
